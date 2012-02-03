var boost : int = 20;

function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		other.GetComponent('Rigidbody').AddForce(Vector3.forward * boost, ForceMode.VelocityChange);
	}
}