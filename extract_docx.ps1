Add-Type -AssemblyName System.IO.Compression.FileSystem
$docx = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\20101\Downloads\sba-brand-compass\temp_extract\SBA_Global_Apparel_41_Country_Market_Study.docx')
$entry = $docx.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$docx.Dispose()

$text = $xml -replace '<[^>]+>', ' '
[System.IO.File]::WriteAllText('C:\Users\20101\Downloads\sba-brand-compass\temp_extract\docx_text.txt', $text, [System.Text.Encoding]::UTF8)
Write-Host "Extracted docx text length: $($text.Length)"
