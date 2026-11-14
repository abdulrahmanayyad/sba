Add-Type -AssemblyName System.IO.Compression.FileSystem

$baseDir = 'c:\Users\20101\Downloads\sba-brand-compass\extracted_studies'
$folders = Get-ChildItem -Directory $baseDir
$results = @()

foreach ($f in $folders) {
    $docx = Get-ChildItem "$($f.FullName)\*.docx" | Select-Object -First 1
    if ($docx) {
        try {
            $archive = [System.IO.Compression.ZipFile]::OpenRead($docx.FullName)
            $entry = $archive.GetEntry('word/document.xml')
            if ($entry) {
                $stream = $entry.Open()
                $reader = New-Object System.IO.StreamReader($stream)
                $xml = $reader.ReadToEnd()
                $reader.Close()
                $stream.Close()
                
                # strip xml tags
                $text = [System.Text.RegularExpressions.Regex]::Replace($xml, '<[^>]+>', ' ')
                $text = [System.Text.RegularExpressions.Regex]::Replace($text, '\s+', ' ').Trim()
                $snippet = if ($text.Length -gt 1500) { $text.Substring(0, 1500) } else { $text }
                
                $results += [PSCustomObject]@{
                    Folder = $f.Name
                    Docx = $docx.Name
                    HeaderSnippet = $snippet
                }
            }
            $archive.Dispose()
        } catch {
            Write-Warning "Failed reading docx in $($f.Name): $_"
        }
    }
}

$results | ConvertTo-Json -Depth 3 | Set-Content 'c:\Users\20101\Downloads\sba-brand-compass\all_docx_headers.json' -Encoding utf8
Write-Host "Processed docx count: $($results.Count)"
