


function depth(node, root) {
    // find the depth of the node ==> number of edges in path from this node to tree's root node
    
    // We will move the root node to reach the targetted node 
    if(!root || !root.data) {
        return 0;
    }
    if(root.data == node.data) {
        return 0;
    }    
    
    if(node.data > root.data) {
        root = root.right;
        return 1 + depth(node, root);
    } else {
        root = root.left;
        return 1 + depth(node, root);
    }
    
}


export { depth };