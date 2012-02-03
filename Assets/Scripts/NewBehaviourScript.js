public var follow : Transform;
public var distance : int = 20;
public var height : int = 10;

function FixedUpdate()
{
	this.transform.position.z = follow.position.z - distance;
	this.transform.position.y = follow.position.y + height;
	this.transform.position.x = follow.position.x + distance;
	//this.transform.LookAt(follow);
}