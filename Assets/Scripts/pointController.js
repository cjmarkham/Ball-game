var worth : int = 1;
private var audioPlayed : boolean = false;

function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		if(worth == 5)
		{
			ballMain.purpleDiamonds += 1;
			ballMain.purpleLocations.Push(transform.position);
		}
		else
		{
			ballMain.blueDiamonds += 1;
			ballMain.blueLocations.Push(transform.position);
		}
		
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