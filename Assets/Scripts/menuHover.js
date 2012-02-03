function OnMouseEnter()
{
	audio.Play();
}

function OnMouseDown()
{
	switch(name)
	{
		case 'start':
			Application.LoadLevel(2);	
			break;
			
		case 'levels':
			Application.LoadLevel(1);
			break;
			
		case 'Options':
			
			break;
		
		case 'level':
			Application.LoadLevel(tag);
			break;
	}
}