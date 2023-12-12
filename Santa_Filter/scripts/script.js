const Audio = require('Audio');
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the playback controller in the Assets
  const audioPlaybackController = await Audio.getAudioPlaybackController('MouthOpen');

  // Play and loop the playback controller
  audioPlaybackController.setPlaying(true);
  audioPlaybackController.setLooping(true);

  // Create a boolean to determine if the audio is playing
  var isAudioPlaying = true;

  const face = await Promise.all([
    FaceTracking.face(0)
  ]);
  const mouth = face.mouth;

  Diagnostics.log(isAudioPlaying);
  Diagnostics.log(FaceTracking.subscribemouth.openness.);

  mouth, function () {
    // Switch the boolean controlling audio playback
    isAudioPlaying = !isAudioPlaying;

    // Start or stop the audio depending on the state of the boolean
    audioPlaybackController.setPlaying(isAudioPlaying);

    Diagnostics.log('Mouth Open');
  };

})(); // Enables async/await in JS [part 2] 