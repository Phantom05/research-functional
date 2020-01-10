// console.log(`hello world`);

// function getCurrentScrollPercentage() {
//   return ((window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)) + window.innerHeight) / document.body.clientHeight * 100
// }


// function getElementScroll(elm, f, callBack = null, offset = 0) {
//   let scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
//   // elm[0] start elm, elm[1] end elm
//   let startOffset = 0,
//     endOffset = 0;
//   if (callBack === null && Array.isArray(offset.offset)) { // offset == isArray
//     startOffset = offset.offset[0];
//     endOffset = offset.offset[1];
//   } else {
//     startOffset = (offset.offset) ? offset.offset : offset;
//   }

//   /**
//    *  scroll, 
//    * window.pageYOffset + elm[0].getBoundingClientRect().top,
//    * elm[0].offsetTop,
//    * elm[1].offsetTop- (elm[1].clientHeight /2)
//    */
//   if (Array.isArray(elm)) {
//     if (elm[0].offsetTop - (elm[0].scrollHeight / 2) + startOffset < scroll &&
//       scroll < elm[1].offsetTop - (elm[1].clientHeight / 2) + endOffset) f(elm)
//   } else {

//     if (window.pageYOffset + elm.getBoundingClientRect().top + startOffset < scroll) {
//       f(elm)
//     } else if (callBack !== null) {
//       callBack(elm)
//     }
//   }
// };

const _docEl = document.documentElement;
const _body = document.body;
const _isDocument = document.body;
const _window = window;

const target = document.querySelectorAll(`.box[data-target]`);




document.addEventListener('scroll', _.throttle(function (e) {
  let scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
  let scrollTop = _window.scrollY;
  let scrollBottom = $("body").height() - $(window).height() - $(window).scrollTop() +16;
  let scrollHeightSize = $("body").height() - _window.scrollY - scrollBottom;
  let scrolltHeightSizeHalf = scrollHeightSize / 2;

  console.log('----');
  console.log(scroll, 'pageYOffset');
  console.log(scrollTop+scrolltHeightSizeHalf);
  console.log(_getOffset(target, _window));
  
  // console.log(scroll, 'scroll');

}, 100))




function _isString(value) {
  return typeof value === "string";
}

function _buildGetter(e, axis) {
  var p = "scroll" + (axis === "x" ? "Left" : "Top");

  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }
}

function _getOffset(element, container) {
  var rect = Array.from(element)[0].getBoundingClientRect(),
    isRoot = !container || container === _window || container === _body,
    cRect = isRoot ? {
      top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
      left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
    } : container.getBoundingClientRect(),
    offsets = {
      x: rect.left - cRect.left,
      y: rect.top - cRect.top
    };

  if (!isRoot && container) {
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }

  return offsets;
}




