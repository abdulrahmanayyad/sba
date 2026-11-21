Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\20101\.gemini\antigravity\brain\8b763695-7840-4e29-be3c-1d33e6724125\scratch\east_cairo\SBA_East_Cairo_Real_Estate_Study_AR.docx')
$entry = $zip.GetEntry('word/document.xml')
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

$xmlDoc = [xml]$xml
$ns = New-Object System.Xml.XmlNamespaceManager($xmlDoc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

$paras = $xmlDoc.SelectNodes('//w:p', $ns)
$lines = @()
foreach ($p in $paras) {
    $runs = $p.SelectNodes('.//w:t', $ns)
    $text = ''
    foreach ($r in $runs) {
        $text += $r.InnerText
    }
    if ($text.Trim().Length -gt 0) {
        $lines += $text
    }
}
$fullText = $lines -join "`r`n"
Set-Content -Path 'C:\Users\20101\.gemini\antigravity\brain\8b763695-7840-4e29-be3c-1d33e6724125\scratch\east_cairo\study_text.txt' -Value $fullText -Encoding UTF8
Write-Host "Total lines: $($lines.Count), Total chars: $($fullText.Length)"
$lines | Select-Object -First 35
