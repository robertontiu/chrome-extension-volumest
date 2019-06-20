// Stores the volume control function for the video found in the current tab
let volumeControlFn

// Listen for click on the volume icon
chrome.runtime.onMessage.addListener(
    function(request) {
      if(request.message === "set_volume_level" && typeof request.value === 'number') {
        volumeControlFn = volumeControlFn || createVolumeControlFunction()
        volumeControlFn(request.value)
      }
    }
);

// Creates the volume toggle function
function createVolumeControlFunction() {
  const videoElement = document.querySelector("video")

  if (!videoElement) {
      return undefined
  }

  const audioCtx = new AudioContext()
  const source = audioCtx.createMediaElementSource(videoElement)
  const node = audioCtx.createGain()
  
  node.gain.value = 1
  source.connect(node)
  node.connect(audioCtx.destination)

  return (multiplier) => {
    node.gain.value = multiplier
  }
}