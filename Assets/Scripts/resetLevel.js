public var x : int = -600;
private var i : int = 0;

function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		Camera.main.GetComponent('MouseOrbit').enabled = false;
		
		Camera.main.transform.LookAt(GameObject.Find('ball').transform);
		
		GameObject.Find('ballOutDisplay').guiText.enabled = true;
	
		animateBallOut();
		
		ballMain.go = false;
		levelSettings.points = 0;
		levelSettings.start = true;
		levelSettings.started = false;
		
		yield WaitForSeconds(2);
		
		Application.LoadLevel(Application.loadedLevel);
	}
}

function animateBallOut()
{
	Fade.use.Alpha(GameObject.Find('ballOutDisplay').guiText.material, 0.0, 1.0, 2.0, EaseType.In);
}