function OnTriggerEnter(collider : Collider)
{
	if(collider.name == 'ball')
	{
		collider.rigidbody.drag = 1.2;
	}
}