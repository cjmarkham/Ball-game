var destination : Transform;
var reciever = false;

var direction : String = 'left';

function OnTriggerEnter (other : Collider)
{
	if(!reciever)
	{
		// if collider is the ball
		if(other.name == "ball")
		{
			other.renderer.enabled = false;
			other.GetComponent('Rigidbody').isKinematic = true;
			
			other.transform.position.x = transform.position.x;
			other.transform.position.y = transform.position.y+0.4;
			other.transform.position.z = transform.position.z;
					
			
				

			yield WaitForSeconds(.5);
			
			switch(direction)
			{
				case 'left':
					other.transform.position.x = destination.position.x - 1;
					other.transform.position.y = destination.position.y;
					other.transform.position.z = destination.position.z;
					break;
					
				case 'right':
					other.transform.position.x = destination.position.x + 1;
					other.transform.position.y = destination.position.y;
					other.transform.position.z = destination.position.z;
					break;
					
				case 'forward':
					other.transform.position.x = destination.position.x;
					other.transform.position.y = destination.position.y;
					other.transform.position.z = destination.position.z + 1;
					break;
					
				case 'backward':
					other.transform.position.x = destination.position.x;
					other.transform.position.y = destination.position.y;
					other.transform.position.z = destination.position.z - 1;
					break;
			}
			
			other.renderer.enabled = true;
			other.GetComponent('Rigidbody').isKinematic = false;
			
			var ball = GameObject.Find('ball');
		}
	}
}