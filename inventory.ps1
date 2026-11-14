Add-Type -AssemblyName System.IO.Compression.FileSystem
$zips = Get-ChildItem 'c:\Users\20101\Downloads\Telegram Desktop\*.zip'
$results = @()

foreach ($z in $zips) {
    $archive = [System.IO.Compression.ZipFile]::OpenRead($z.FullName)
    $files = $archive.Entries | Select-Object -ExpandProperty FullName
    $archive.Dispose()
    $results += [PSCustomObject]@{
        ZipName = $z.Name
        EntryCount = $files.Count
        Entries = ($files -join '; ')
    }
}
$results | Export-Csv -Path 'c:\Users\20101\Downloads\sba-brand-compass\zip_inventory.csv' -NoTypeInformation -Encoding utf8
Write-Host "Inventory saved with count: $($results.Count)"
