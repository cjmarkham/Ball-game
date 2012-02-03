static var Waypoint : boolean = true;
var pointB : Transform;
private var pointA : Vector3;
var speed = 0.5;

function Start () {
    if(Waypoint == true) 
    {
    	pointA = transform.position;
        while(true) 
        {
            var i = Mathf.PingPong(Time.time * speed, 1.3);
            transform.position = Vector3.Lerp(pointA, pointB.position, i);
            yield;
        }
    }   
}