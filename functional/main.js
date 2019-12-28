function elm(attr) {
  const elmList = Array.prototype.slice.call(
    document.querySelectorAll(attr),
    0
  );
  if (elmList.length === 1) {
    return elmList[0];
  } else if (elmList.length > 1) {
    return elmList;
  }
  return null;
}
function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    node.append(child);
  }
  return node;
}
