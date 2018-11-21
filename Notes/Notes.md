# Notes on designing Electron Applications

## electron-reload
* electron-preload: Make sure you add electron.cmd to the path for the project to auto load on script changes.

```autorequire('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd'),
  hardResetMethod: 'quit'
});
```

## Linux
* Note: for linux do not add `electron.cmd`, `electron` is all you will need in the path


