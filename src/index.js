import { Node } from './node';
import { toBST } from './toBST';
import { Tree } from './tree';
import { inOrder } from './inOrder';
import { preOrder } from './preOrder';
import { postOrder } from './postOrder';
import { height } from './height';
import { depth } from './depth';
import { isBalanced } from './isBalanced';
import { rebalance } from './rebalance';

function sortAndRemoveDuplicates(arr) {
    // Sort the array
    arr.sort(function (a, b) { return a - b });
    // remove duplicates
    let n = arr.length;
    let newArr = [];
    newArr.push(arr[0]);
    for(let i=1; i<n; i++) {
        if(arr[i] != arr[i-1])
            newArr.push(arr[i]);
    }

    // console.log(newArr);

    return newArr;
}


function buildTree(arr) {
    arr = sortAndRemoveDuplicates(arr);
    
    let root = toBST(arr, 0, arr.length-1);

    // prettyPrint(root);

    return root;
}


function disp(node) {
    if(node == null)
        return;

    this.disp(node.left);
    console.log(node.data);
    this.disp(node.right);

    return node;
}

let arr = [4, 5, 3, 4, 1, 23, 1, 4, 7, 8, 7];
console.log(arr);
arr = sortAndRemoveDuplicates(arr);
console.log(arr);
// buildTree(arr);
let tree = new Tree(arr);
tree.graph();
// console.log(tree.root);
tree.insert(77);
tree.insert(11);
// tree.insert(0);
tree.graph();

tree.delete(1);
tree.graph();

tree.delete(8);
tree.graph();

tree.delete(11);
tree.graph();


console.log(tree.find(77));
// console.log(tree.find(1));
// console.log(tree.find(23));


tree.levelOrder(tree.node);
console.log('====================================');
inOrder(tree.root);
console.log('====================================');
preOrder(tree.root);
console.log('====================================');
postOrder(tree.root);

console.log("The Height of the tree = " + height(tree.root));       // 3
console.log('The height of node 23 = ' + height(tree.find(23)));    // 2
console.log('The height of node 4 = ' + height(tree.find(4)));      // 1
console.log('The height of node 8 = ' + tree.find(8));              // null

tree.graph();

console.log("The Depth of the node 77 = " + depth(tree.find(77), tree.root)); 
console.log("The Depth of the node 4 = " + depth(tree.find(4), tree.root)); 
console.log("The Depth of the node 3 = " + depth(tree.find(3), tree.root)); 
console.log("The Depth of the node 5 = " + depth(tree.find(5), tree.root)); 

tree.insert(100);
// tree.insert(101);
tree.graph();

console.log(isBalanced(tree.root));

if(isBalanced(tree.root) == 1) {
    console.log("The tree is balanced :)");
} else {
    console.log("The tree is not balanced :(");
}


tree.insert(200);
// tree.insert(101);
tree.graph();

console.log(isBalanced(tree.root));

if(isBalanced(tree.root) == 1) {
    console.log("The tree is balanced :)");
} else {
    console.log("The tree is not balanced :(");
}



tree.root = rebalance(tree.root);

tree.graph();