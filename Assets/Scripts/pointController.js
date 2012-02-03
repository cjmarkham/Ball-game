var worth : int = 1;
private var audioPlayed : boolean = false;

function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		levelSettings.totalPoints += worth;
		levelSettings.collected += 1;
		
		if(!audioPlayed)
			audio.Play();

		Destroy(gameObject.GetComponent('MeshRenderer'));
		audioPlayed = true;

		yield WaitForSeconds(2);
		Destroy(gameObject);
	}
}