private var cameraFollow;

public var ball : Transform;
public var cameraPosition : Transform;

public static var startPan : boolean;

private var startTime;
public var duration : float = 30.0;

function Update() 
{
	cameraFollow = GameObject.Find('camera').GetComponent('MouseOrbit');
	
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
	transform.position = Vector3.Lerp(transform.position, cameraPosition.position, (Time.time - startTime) / duration);
	
	yield WaitForSeconds(3.3);
	cameraFollow.enabled = true;
	startPan = false;
}