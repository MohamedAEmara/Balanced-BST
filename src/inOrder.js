


function inOrder(root) {
    if(root == null || root.data == null) {
        return null;
    }
    inOrder(root.left);         // Traverse the Left subTree
    console.log(root.data);     // print the data of the current node
    inOrder(root.right);        // Traverse the right subTree
}


export { inOrder };