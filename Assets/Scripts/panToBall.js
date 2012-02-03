private var cameraFollow;

public var ball : Transform;
public var cameraPosition : Transform;

public static var startPan : boolean;

private var startTime;
public var duration : float = 30.0;

function Update() 
{
	cameraFollow = GameObject.Find('camera2').GetComponent('cameraFollow');
	
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
	
	transform.rotation.x = 0;
	yield WaitForSeconds(2.5);

	GameObject.Find('camera2').GetComponent('Camera').enabled = true;
	this.GetComponent('Camera').enabled = false;
	startPan = false;
}