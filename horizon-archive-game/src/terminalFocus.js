export function shouldRestoreTerminalFocus(activeElement, bodyElement) {
  return !activeElement || activeElement === bodyElement || activeElement.isConnected !== true;
}
