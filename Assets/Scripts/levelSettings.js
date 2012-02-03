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

static var totalPoints : int = 000000000;

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
		ready.text = "READY";
		yield WaitForSeconds(1);
		ready.text = "SET";
		yield WaitForSeconds(1);
		ready.text = "GO";
		yield WaitForSeconds(0.2);
		ready.enabled = false;
		GameObject.Find('intro-back').guiTexture.enabled = false;
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
			pointDisplay.text = totalPoints.ToString().PadLeft(9, "0"[0]);
			
			if(collected <= needed)
				collectedDisplay.text = collected+"/"+needed;
			
			ballMain.go = true;
			
			var guiTime = Time.time - startTime;

	   		var minutes : int = guiTime / 120;
	   		var seconds : int = guiTime % 60;
	   		var split : int = guiTime % 600;
	   		
	   		if(seconds == 60)
	   			seconds = 0;
	   			
	   		var fraction : int = (guiTime * 100) % 100;
	   		textTime = String.Format ("{0:00}:{1:00}", minutes, seconds); 
	   		timer.text = textTime;
	   		endTime = textTime;
	   	}
	} 
	else 
	{
		Time.timeScale = 0;
		
		if(collected < needed)
        {
        	endMessage.enabled = true;
        	GameObject.Find('endMessage-back').guiTexture.enabled = true;
        	endMessage.guiText.text = "You Failed\nPoints "+collected+"/"+needed;

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
        	endMessage.enabled = true;
        	GameObject.Find('endMessage-back').guiTexture.enabled = true;
	   		endMessage.text = "Complete\nTime: "+endTime;
	   		
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

