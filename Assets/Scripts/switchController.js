var target : GameObject;
private var triggered = false;
var type = 'rotation';
var xRotation : int = 0;
var yRotation : int = 0;
var zRotation : int = 0;

function OnTriggerEnter (other : Collider)
{
	if(other.name == "ball")
	{
		if(!triggered)
		{
			switch(type)
			{
				case 'rotation':
					target.transform.Rotate(xRotation, yRotation, zRotation);
					triggered = true;
				break;	
				
				case 'animRotationY':
					target.GetComponent("rotationPanel").speed = 30;
					triggered = true;
				break;	
			}
			
			transform.Translate(0,-0.1,0);
		}
	}
}