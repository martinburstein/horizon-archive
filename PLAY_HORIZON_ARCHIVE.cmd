@echo off
setlocal
title Horizon Archive
cd /d "%~dp0horizon-archive-game"

where npm >nul 2>&1
if errorlevel 1 (
  echo Horizon Archive needs Node.js and npm to launch.
  echo Install the current Node.js LTS release, then run PLAY_HORIZON_ARCHIVE.cmd again.
  exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
  echo Preparing Horizon Archive for local play...
  call npm install --prefer-offline --no-audit --no-fund
  if errorlevel 1 (
    echo Horizon Archive could not prepare its local dependencies.
    exit /b 1
  )
)

echo Building and opening Horizon Archive...
echo Keep this window open while playing. Press Ctrl+C here to stop.
call npm --silent run demo
set "horizon_launch_exit=%errorlevel%"

if not "%horizon_launch_exit%"=="0" echo Horizon Archive stopped with an error. See the message above.
exit /b %horizon_launch_exit%
