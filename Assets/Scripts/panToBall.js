private var cameraFollow;

public var ball : Transform;
public var cameraPosition : Vector3;

public static var startPan : boolean;

private var startTime;
public var duration : float = 30.0;

function Update() 
{
	cameraFollow = GetComponent('cameraFollow');
	
	if(startPan)
	{
		pan();
	}
}

function Start()
{
	startTime = Time.time;
	this.transform.LookAt(ball);
}

function pan()
{
	this.transform.LookAt(ball);
	transform.position = Vector3.Lerp(transform.position, cameraPosition, (Time.time - startTime) / duration);
	
	transform.rotation.x = 0;
	yield WaitForSeconds(2.5);
	
	cameraFollow.enabled = true;
	startPan = false;
}