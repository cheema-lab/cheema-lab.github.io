@echo off
cd /d "%~dp0"

echo.
echo ========================================
echo  Cheema Lab Website - Local Development
echo ========================================
echo.

echo Installing dependencies...
call npm install --legacy-peer-deps

echo.
echo Starting development server...
echo.
echo Your site will be available at: http://localhost:5173
echo Press Ctrl+C in the terminal to stop the server
echo.

timeout /t 2

call npm run dev

pause