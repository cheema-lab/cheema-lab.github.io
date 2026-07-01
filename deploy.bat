@echo off
REM Script to deploy to GitHub Pages on Windows
REM Usage: deploy.bat

echo Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed!
    exit /b 1
)

echo Deploying to GitHub Pages...
call npx gh-pages -d dist

if %errorlevel% neq 0 (
    echo Deployment failed!
    exit /b 1
)

echo.
echo Deployment complete!
echo Your site will be available at: https://cheemalab.github.io
