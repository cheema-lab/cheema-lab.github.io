@echo off
cd /d "%~dp0"

echo.
echo ========================================
echo  Cheema Lab - Push to GitHub
echo ========================================
echo.

set /p MSG="Commit message: "

if "%MSG%"=="" (
    echo No message entered. Aborting.
    pause
    exit /b 1
)

git add .
git commit -m "%MSG%"

if %errorlevel% neq 0 (
    echo Nothing to commit or commit failed.
    pause
    exit /b 1
)

git push origin refresh

if %errorlevel% neq 0 (
    echo Push failed.
    pause
    exit /b 1
)

echo.
echo Done! GitHub Actions will deploy the site in ~1-2 minutes.
echo https://cheema-lab.github.io
echo.
pause
