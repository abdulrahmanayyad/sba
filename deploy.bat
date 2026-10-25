@echo off
setlocal

echo Staging all changes...
git add -A

set /p commitMsg="Enter commit message: "

if "%commitMsg%"=="" (
    echo No commit message entered. Aborting.
    pause >nul
    exit /b 1
)

git commit -m "%commitMsg%"
if errorlevel 1 (
    echo Commit failed or nothing to commit.
    pause >nul
    exit /b 1
)

echo Pushing to GitHub...
git push

echo.
echo Done. Press any key to exit...
pause >nul
