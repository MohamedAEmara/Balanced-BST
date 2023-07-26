

function postOrder(root) {
    if(!root || !root.data)
        return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

export { postOrder };