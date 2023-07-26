

function height(node) {
    if(!node || !node.data)
        return 0;
    
    return Math.max(1 + height(node.right), 1 + height(node.left));
}

export { height };