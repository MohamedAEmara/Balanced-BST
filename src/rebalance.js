import { toBST  } from "./toBST";


let arr = [];

function traverse(node) {
    console.log("arr = " + arr);
    if(node == null || node.data == null || node == undefined) {
        console.log("returned arr = " + arr);
        return arr;
    } 
    arr.push(node.data);
    if(node.left != null && node.left != undefined)
        traverse(node.left);
    if(node.right != null && node.right != undefined)
        traverse(node.right);
}

function rebalance(root) {
    // Clear the array
    arr.length = 0;

    // Fill the array with the nodes of the tree
    let newArr = traverse(root);
    console.log(arr);
    console.log(newArr);
    return toBST(arr, 0, arr.length-1);
}


export { rebalance };