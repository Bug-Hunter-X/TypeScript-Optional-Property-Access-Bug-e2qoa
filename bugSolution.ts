function printCoord(pt: { x?: number; y?: number }) {
  console.log("The coordinate's x value is " + (pt.x ?? 0));
  console.log("The coordinate's y value is " + (pt.y ?? 0));
}

printCoord({ x: 3, y: 7 });
printCoord({}); // handles missing properties gracefully

//Alternative solution using optional chaining
function printCoord2(pt: { x?: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 3, y: 7 });
printCoord2({}); // will print 'undefined' for missing properties 