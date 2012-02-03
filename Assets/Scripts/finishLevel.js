function OnTriggerEnter (other : Collider)
{
	// if collider is the ball
	if(other.name == "ball")
	{
		other.GetComponent('Rigidbody').isKinematic = true;
		other.transform.position.x = transform.position.x;
		other.transform.position.y = transform.position.y+0.4;
		other.transform.position.z = transform.position.z;
		
		// wait for 2 seconds so the explosion can finish
		yield WaitForSeconds(2);
		
		// complete this level
		levelSettings.levelComplete = true;
	}
}