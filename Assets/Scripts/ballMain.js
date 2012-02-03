static var go : boolean = false;
private var groundHitCount : int = 0;

private var mph : int = 0;

public var speed : int = 10;

public static var blueDiamonds : int = 0;
public static var purpleDiamonds : int = 0;

public static var blueLocations = new Array();
public static var purpleLocations = new Array();

function Awake()
{
	
}

function Update () 
{
	if(go)
	{
		if(Input.GetKey(KeyCode.UpArrow))
		{
			rigidbody.AddForce(Vector3.forward * speed);
		}
		if(Input.GetKey(KeyCode.DownArrow))
		{
			rigidbody.AddForce (Vector3.back * speed);
		}
		if(Input.GetKey(KeyCode.LeftArrow))
		{
			rigidbody.AddForce (Vector3.left * speed);
		}
		if(Input.GetKey(KeyCode.RightArrow))
		{
			rigidbody.AddForce (Vector3.right * speed);
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