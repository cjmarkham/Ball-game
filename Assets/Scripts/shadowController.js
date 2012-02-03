var orientation : Vector2;
var offset : Vector3;

function Awake () {
	orientation = transform.rotation.eulerAngles;
	offset = transform.position - transform.parent.position;
}

function Update () {
	orientation.y = transform.parent.rotation.eulerAngles.y;
	transform.rotation.eulerAngles = orientation;
	transform.position = transform.parent.position + offset;
}