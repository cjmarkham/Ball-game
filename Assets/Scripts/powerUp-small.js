function OnTriggerEnter(collider : Collider)
{
	if(collider.name == 'ball')
	{
		this.GetComponent('MeshRenderer').enabled = false;
		collider.transform.localScale = collider.transform.localScale / 2;
		Destroy(gameObject);
	}
}