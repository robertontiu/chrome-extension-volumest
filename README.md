# Volumest
This is a chrome extension I wrote in order to fix a problem I've been long dealing with: low max volume on my personal laptop.

## Why another volume boost extension
All the solutions I found on the chrome web store currently have issues when it comes to fullscreen and usualy lead to low performance of the tab being boosted.

## How it works
The extension icon works as a toggle:
- click to boost the volume
- an indicator will show the multiplier that is applied to your volume
- click again to increase it

The current implementation limits the multiplier to 3. You can further increase it from `background.js` if you know a tiny bit of javascript. (Make sure you reload the extension and refresh the tabs if you do so)

## How to install

### From source code
- Clone or download the repository
- Go to *chrome://extensions*
- Make sure you have "Developer mode" on (top right corner)
- Click *Load unpacked* and select the project directory

### From web store
**To (maybe) be added.**