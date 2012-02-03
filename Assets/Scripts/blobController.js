var objectToFollow : Transform;
var offset : Vector3;

function Update () 
{
    transform.position = objectToFollow.position + offset;
}