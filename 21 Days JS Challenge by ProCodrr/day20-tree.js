// Print All Node Names in the Tree (Depth-First Order)
function printTreeNodeNames(node, depth = 0) {
  console.log("  ".repeat(depth) + node.name);

  for (const child of node.children) {
    printTreeNodeNames(child, depth + 1);
  }
}

printTreeNodeNames(mediaTree);