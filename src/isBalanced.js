// import { height } from './height';



// function isBalanced(node) {
//     // calculate the height of the left subTree & the right subTree
//     // if the difference between them is at most 1
//         // Ok, check its children as well
//     // otherwise
//         // it's not ==> return false.

//     let height1 = height(node.left);
//     let height2 = height(node.right);
//     console.log("height 1 " + height1);
//     console.log("height 2 " + height2);
//     console.log("diff = " + Math.abs(height1 - height2));
//     return (Math.abs(height1 - height2) <= 1);
// }


// export { isBalanced };  

import { height } from './height';



function isBalanced(node) {
    // calculate the height of the left subTree & the right subTree
    // if the difference between them is at most 1
        // Ok, check its children as well
    // otherwise
        // it's not ==> return false.

    if(node == null || node.data == null) {
        return true;
    }

    let height1 = height(node.left);
    let height2 = height(node.right);

    if(Math.abs(height1 - height2) <= 1) {
        return (isBalanced(node.left) && isBalanced(node.right))
    } 
    return false;

    // console.log("height 1 " + height1);
    // console.log("height 2 " + height2);
    // console.log("diff = " + Math.abs(height1 - height2));
    // return (Math.abs(height1 - height2) <= 1);
}


export { isBalanced };