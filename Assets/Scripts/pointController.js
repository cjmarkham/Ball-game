var worth : int = 1;

private var collected : boolean = false;
private var t = 0.0;

function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		if(!collected)
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
			
			audio.Play();
	
			this.GetComponent('MeshCollider').enabled = false;
			
			this.rigidbody.AddForce(Vector2.up * 200);
			
			//Destroy(gameObject.GetComponent('MeshRenderer'));
			collected = true;
		}
		
		yield WaitForSeconds(3);
		Destroy(gameObject);
	}
}