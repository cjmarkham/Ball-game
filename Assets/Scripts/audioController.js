var track : AudioClip;
audio.clip = track;
var audioVolume : float = 0.0;

audio.Play();
function Update() {
    if (audioVolume <= 0.3) 
    {
        fadeIn();  
    }
}

function fadeIn() 
{
    audioVolume += 0.03 * Time.deltaTime;
    audio.volume = audioVolume;
}