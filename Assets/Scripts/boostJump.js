function OnTriggerEnter (other : Collider)
{
	if (other.name == "ball")
	{
		other.GetComponent('Rigidbody').AddForce(Vector3.up * 10, ForceMode.VelocityChange);
		other.GetComponent('Rigidbody').AddForce(Vector3.forward * 10, ForceMode.VelocityChange);
	}
}