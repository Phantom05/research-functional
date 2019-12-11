function _filter(list, predi) {
  var new_list = [];
  _each(list, function (val) {
    if (predi(val)) new_list.push(val);
  })
  return new_list;
}

function _map(list, mapper) {
  var new_list = [];
  _each(list, function (val) {
    new_list.push(mapper(val))
  });
  return new_list;
}

function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list
}

// 커링
function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2 ? fn(a, b) : function (b) { return fn(a, b) };
  }
}

function _curryr(fn){
  return function(a, b){
    return arguments.length === 2 ? fn(a, b) : function (b) { return fn(b, a) };
  }
}

// get
var _get = _curryr(function(obj,key){
  return obj == null ? undefined : obj[key];
});
var slice = Array.prototype.slice;

// rest
function _rest(list,num){
  return slice.call(list,num || 1);
}

// reduce
function _reduce(list,iter,memo){
  if(arguments.length ==2){
    memo = list[0];
    list = _rest(list,1);
  }
  _each(list,function(val){
    memo = iter(memo,val);
  });
  return memo
}

//  pipe
function _pipe(){
  var fns = arguments;
  return function(arg){
    return _reduce(fns,function(arg,fn){
      return fn(arg);
    },arg)
  }
}

// go
function _go(arg){
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}



var _map = _curryr(_map),_filter = _curryr(_filter);