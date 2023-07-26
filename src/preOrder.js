

function preOrder(root) {
	// base case
	if(root == null || root.data == null)
		return;

	// First, print the data in the current node
	console.log(root.data);
	// Then, Traverse the left SubTree
	preOrder(root.left);
	// Then, Traverse the right SubTree
	preOrder(root.right);
}


export { preOrder };