@echo off
setlocal
title Horizon Archive Playable Demo
cd /d "%~dp0horizon-archive-game"

where npm >nul 2>&1
if errorlevel 1 (
  echo Horizon Archive needs Node.js and npm to launch.
  echo Install the current Node.js LTS release, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
  echo Preparing the local demo dependencies...
  call npm install --prefer-offline --no-audit --no-fund
  if errorlevel 1 (
    echo The demo dependencies could not be prepared.
    pause
    exit /b 1
  )
)

echo Building and opening Horizon Archive...
echo Keep this window open while playing. Press Ctrl+C here to stop the demo.
call npm run demo

if errorlevel 1 (
  echo The demo stopped with an error. See the message above.
  pause
  exit /b 1
)
