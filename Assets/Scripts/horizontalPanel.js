var x = 0;
var movement = 'forward';
function Update () {

	if(x < 100 && movement != 'backward')
	{
		movement = 'forward';
	}
	else if(x >= 100 && movement != 'forward')
	{
		movement = 'backward';
	}
	else if(x == -100 || x == 100)
	{
		movement = 'stationary';
	}
	
	if(movement == 'forward')
	{
		transform.Translate(Vector3.left * Time.deltaTime);
		x += 1; 
	}
	else if(movement == 'backward')
	{
		transform.Translate(Vector3.right * Time.deltaTime);
		x += -1;
	}
}