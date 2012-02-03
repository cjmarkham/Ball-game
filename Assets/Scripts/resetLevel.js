function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		Application.LoadLevel(Application.loadedLevel);
		ballMain.go = false;
		levelSettings.points = 0;
		levelSettings.start = true;
		levelSettings.started = false;
	}
}