var rotation = 1;
var speed = 20;
function Update () {

	currentRotation = this.transform.rotation;
	
	if(rotation)
		transform.Rotate(Vector3.right * Time.deltaTime * speed);
	else
		transform.Rotate(Vector3.left * Time.deltaTime * speed);
}