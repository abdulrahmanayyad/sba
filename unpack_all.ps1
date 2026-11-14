$baseDir = 'c:\Users\20101\Downloads\Telegram Desktop'
$targetDir = 'c:\Users\20101\Downloads\sba-brand-compass\extracted_studies'

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
}

$zips = Get-ChildItem "$baseDir\*.zip"
Write-Host "Unpacking $($zips.Count) zip files..."

foreach ($z in $zips) {
    $folderName = [System.IO.Path]::GetFileNameWithoutExtension($z.Name)
    $dest = Join-Path $targetDir $folderName
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest | Out-Null
    }
    try {
        Expand-Archive -Path $z.FullName -DestinationPath $dest -Force
        Write-Host "Unpacked: $($z.Name)"
    } catch {
        Write-Warning "Failed on $($z.Name): $_"
    }
}

Write-Host "All done!"
