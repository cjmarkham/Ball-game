static var go : boolean = false;
private var groundHitCount : int = 0;

private var mph : int = 0;
	
function Awake()
{
	
}

function Update () 
{
	if(go)
	{
		if(Input.GetKey(KeyCode.UpArrow))
		{
			rigidbody.AddForce(Camera.main.transform.forward * 15);
		}
		if(Input.GetKey(KeyCode.DownArrow))
		{
			rigidbody.AddForce (-Camera.main.transform.forward * 15);
		}
		if(Input.GetKey(KeyCode.LeftArrow))
		{
			rigidbody.AddForce (-Camera.main.transform.right * 15);
		}
		if(Input.GetKey(KeyCode.RightArrow))
		{
			rigidbody.AddForce (Camera.main.transform.right * 15);
		}
		if(Input.GetKeyDown(KeyCode.Space))
		{
			if(groundHitCount > 0)
				rigidbody.AddForce(Vector2.up * 300);
		}
		
		mph = rigidbody.velocity.magnitude * 2.237;
		
		var speedDisplay = GameObject.Find('speedDisplay').guiText;
		speedDisplay.text = mph.ToString();
	}
}

function OnCollisionEnter (collision : Collision) 
{
	if(collision.gameObject.tag == 'floor')
   		++groundHitCount;
}

function OnCollisionExit (collision : Collision) 
{
    if(collision.gameObject.tag == 'floor')
    	--groundHitCount;
}