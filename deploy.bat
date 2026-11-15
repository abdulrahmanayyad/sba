@echo off
setlocal EnableDelayedExpansion

echo Staging all changes...
git add -A

git diff --cached --quiet
if errorlevel 1 (
    set /p commitMsg="Enter commit message: "
    if "!commitMsg!"=="" set commitMsg=Update
    git commit -m "!commitMsg!"
    if errorlevel 1 (
        echo Commit failed.
        pause >nul
        exit /b 1
    )
) else (
    echo Working tree clean or changes already committed.
)

echo Pushing to GitHub...
git push origin master

echo.
echo Done. Press any key to exit...
pause >nul
