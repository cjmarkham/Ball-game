var levelSpeed : float = 1;
var levelPaused = false;
var click : AudioClip;
var menuSkin : GUISkin;
var areaWidth : float;
var areaHeight : float;

private var ScreenX;
private var ScreenY;

static var points : int = 0;
static var levelComplete = false;
static var collected : int = 0;

var needed : int = 5;

private var startTime;
private var endTime;
private var i = 1;

private var ready;

var materials : Material[];

static var totalPoints : int = 00000;

static var start = true;

var timer;
var pointDisplay;
var collectedDisplay;

var endMessage;

function Start()
{
	pointDisplay = GameObject.Find('pointDisplay').guiText;
	timer = GameObject.Find('timerDisplay').guiText;
	collectedDisplay = GameObject.Find('collectedDisplay').guiText;

	collectedDisplay.text = "0/"+needed;
	
	Time.timeScale = levelSpeed;
	startTime = 0;
	GameObject.Find('Intro').guiText.enabled = true;
	GameObject.Find('intro-back').guiTexture.enabled = true;
	ready = GameObject.Find('Intro').guiText;
	if(ready)
	{
		start = true;
	} 
	endMessage = GameObject.Find('endMessage').guiText;
}

static var started = false;

function countDown()
{
	if(!started)
	{
		panToBall.startPan = true;
		started = true;
		GameObject.Find('intro-back').guiTexture.enabled = false;
		ready.enabled = false;
	
		GameObject.Find('READY').GetComponent('MeshRenderer').enabled = true;
		
		var t = 0.0;
		var s = 0.0;
		var e = 1.0;
		var timer = 0.3;
		var easeType = EaseType.In;
		
		while(t<1.0)
		{
			t += Time.deltaTime * (1.0/timer);
			
			GameObject.Find('READY').transform.localScale.x = Mathf.Lerp(s, e, Ease(t, easeType)) * .4;
			GameObject.Find('READY').transform.localScale.y = Mathf.Lerp(s, e, Ease(t, easeType)) * .4;
			GameObject.Find('READY').transform.localScale.z = Mathf.Lerp(s, e-0.5, Ease(t, easeType)) * .4;
			yield;
		}
		
		yield WaitForSeconds(1.2);
		GameObject.Find('READY').GetComponent('MeshRenderer').enabled = false;
		GameObject.Find('SET').GetComponent('MeshRenderer').enabled = true;
		var t2 = 0.0;
		var s2 = 0.0;
		var e2 = 1.0;
		var timer2 = 0.3;
		while(t2<1.0)
		{
			t2 += Time.deltaTime * (1.0/timer2);
			
			GameObject.Find('SET').transform.localScale.x = Mathf.Lerp(s2, e2, Ease(t2, easeType)) * .4;
			GameObject.Find('SET').transform.localScale.y = Mathf.Lerp(s2, e2, Ease(t2, easeType)) * .4;
			GameObject.Find('SET').transform.localScale.z = Mathf.Lerp(s2, e2-0.5, Ease(t2, easeType)) * .4;
			yield;
		}
		
		
		yield WaitForSeconds(1.2);
		GameObject.Find('SET').GetComponent('MeshRenderer').enabled = false;
		GameObject.Find('GO').GetComponent('MeshRenderer').enabled = true;
		var t3 = 0.0;
		var s3 = 0.0;
		var e3 = 1.0;
		var timer3 = 0.3;
		while(t3<1.0)
		{
			t3 += Time.deltaTime * (1.0/timer3);
			
			GameObject.Find('GO').transform.localScale.x = Mathf.Lerp(s3, e3, Ease(t3, easeType)) * .4;
			GameObject.Find('GO').transform.localScale.y = Mathf.Lerp(s3, e3, Ease(t3, easeType)) * .4;
			GameObject.Find('GO').transform.localScale.z = Mathf.Lerp(s3, e3-0.5, Ease(t3, easeType)) * .4;
			yield;
		}
		
		yield WaitForSeconds(0.5);
		GameObject.Find('GO').GetComponent('MeshRenderer').enabled = false;
		
		startTime = Time.time;
		start = false;
	}
}

function Update () 
{
	if(Input.GetMouseButtonDown(0))
	{
		countDown();
	}
	
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		if(levelPaused)
		{
			levelPaused = false;
			Time.timeScale = 1;
		}
		else
		{
			levelPaused = true;
			Time.timeScale = 0;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.D))
	{
		if(i == materials.length)
			i = 0;
			
		var ball = GameObject.Find('ball');
		ball.renderer.material = materials[i];
		i++; 
	}
}

public static function Ease (t : float, easeType : EaseType) : float {
    if (easeType == EaseType.None)
        return t;
    else if (easeType == EaseType.In)
        return Mathf.Lerp(0.0, 1.0, 1.0 - Mathf.Cos(t * Mathf.PI * .5));
    else if (easeType == EaseType.Out)
        return Mathf.Lerp(0.0, 1.0, Mathf.Sin(t * Mathf.PI * .5));
    else
        return Mathf.SmoothStep(0.0, 1.0, t);
}

function OnGUI()
{	
	if(levelPaused)
	{
		GUI.skin = menuSkin;

        ScreenX = ((Screen.width * 0.5) - (areaWidth * 0.5));
        ScreenY = ((Screen.height * 0.5) - (areaHeight * 0.5));
        GUILayout.BeginArea(Rect(ScreenX, ScreenY+30, areaWidth, areaHeight));
        
        if(GUILayout.Button("Resume")){
            Time.timeScale = 1.0;
            levelPaused = false;
        }
        
        if(GUILayout.Button("Restart Level")){
            Application.LoadLevel(1);
            Time.timeScale = 1.0;
        }

        if(GUILayout.Button("Quit To Menu")){
            Application.LoadLevel(0);
            Time.timeScale = 1.0;
        }
        
        GUILayout.EndArea();
	}
	
	if(!levelComplete) 
	{
		if(!start)
		{ 
			var carriedOver : int = totalPoints;
			pointDisplay.text = totalPoints.ToString().PadLeft(5, "0"[0]);
			
			if(collected <= needed)
				collectedDisplay.text = collected+"/"+needed;
			
			ballMain.go = true;
			
			var guiTime = Time.time - startTime;

	   		var seconds : int = guiTime;
	   			
	   		textTime = String.Format ("{000}", seconds.ToString().PadLeft(3,"0"[0])); 
	   		timer.text = textTime;
	   		endTime = textTime;
	   	}
	} 
	else 
	{
		Time.timeScale = 0;
		
		endMessage.enabled = true;
		GameObject.Find('endMessage-back').guiTexture.enabled = true;
		
		if(collected < needed)
        {
        	endMessage.guiText.text = "YOU FAILED\nPOINTS "+collected+"/"+needed;

			GUI.skin = menuSkin;
	        ScreenX = ((Screen.width * 0.5) - (areaWidth * 0.5));
	        ScreenY = ((Screen.height * 0.5) - (areaHeight * 0.5));
	        GUILayout.BeginArea(Rect(ScreenX, ScreenY+180, areaWidth, areaHeight));
	        
	   		if(GUILayout.Button("Retry")) 
	   		{
	   			levelComplete = false;
	   			totalPoints = carriedOver;
	   			collected = 0;
	   			start = true;
	   			started = false;
	   			ballMain.go = false;
				Application.LoadLevel(Application.loadedLevel);
			}
			if(GUILayout.Button("Quit")) 
			{
				levelComplete = false;
	   			totalPoints = 0000000000;
	   			collected = 0;
	   			start = true;
	   			started = false;
	   			ballMain.go = false;
				Application.LoadLevel(0);	
			}
			GUILayout.EndArea();
        }
        else
        {
        	
	   		endMessage.text = "COMPLETE\nTIME: "+endTime;
	   		
	   		GUI.skin = menuSkin;
	        ScreenX = ((Screen.width * 0.5) - (areaWidth * 0.5));
	        ScreenY = ((Screen.height * 0.5) - (areaHeight * 0.5));
	        GUILayout.BeginArea(Rect(ScreenX, ScreenY+180, areaWidth, areaHeight));
	        
	   		if(GUILayout.Button("Retry")) 
	   		{
	   			levelComplete = false;
	   			totalPoints = carriedOver;
	   			collected = 0;
	   			start = true;
	   			started = false;
	   			ballMain.go = false;
				Application.LoadLevel(Application.loadedLevel);
			}
			if(GUILayout.Button("Next Level")) 
			{
				levelComplete = false;
	   			collected = 0;
	   			start = true;
	   			started = false;
	   			ballMain.go = false;
				Application.LoadLevel(Application.loadedLevel+1);	
			}
			
			GUILayout.EndArea();
		}
	}
}
