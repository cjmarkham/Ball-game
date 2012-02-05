class Functions extends EditorWindow 
{
	private static var points : int = 0;
	private static var blue = new Array();
	private static var purple = new Array();
	
    @MenuItem ("Functions/Calculate Points")
    
    static function Init () 
    {
		// Get existing open window or if none, make a new one:
		var window : Functions = EditorWindow.GetWindow(Functions);
		
		blue = GameObject.FindGameObjectsWithTag('blueDiamond');
        purple = GameObject.FindGameObjectsWithTag('purpleDiamond');
        
        points = 0;
        
        for(var i : int = 0; i<blue.length; i++)
        {
        	points += 1;
        }
        
        for(var j : int = 0; j<purple.length; j++)
        {
        	points += 1;
        }
	}


    function OnGUI () 
    {
        GUILayout.Label ("Point Calculation", EditorStyles.boldLabel);
		pointDisplay = EditorGUILayout.TextField("Point Total:", points.ToString());
		
		blueAmount = EditorGUILayout.TextField("Blue Diamonds:", blue.length.ToString());
		purpleAmount = EditorGUILayout.TextField("Purple Diamonds:", purple.length.ToString());
		
    }
}