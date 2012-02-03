// The target we are following
var target : Transform;

var damp: float = 1.01;
var distance: float = 50;

function Update(){

	var position : Vector3 = Vector3(target.position.x, target.position.y, target.position.x);
    this.transform.position = position;
    
    transform.LookAt(target);
}