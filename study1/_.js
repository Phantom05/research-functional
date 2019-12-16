

// function _length(list) { return list == null ? void 0 : list.length; };

// get
var _get = _curryr(function(obj,key){
  return obj == null ? undefined : obj[key];
});
var _length = _get('length');

function _keys(obj){
  return _is_object(obj)? Object.keys(obj) : [];
}
function _is_object(obj){
  return typeof obj == 'object' && !!obj;
}


function _each(list, iter) {
  var keys = _keys(list); // length 없어도 keys로 뽑아서 동작하게함.
  for (var i = 0, len = keys.length; i < len ; i++) {
    iter(list[keys[i]]);
  }
  return list;
}

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

var _map = _curryr(_map);
var _filter = _curryr(_filter);

function _identity(val){
  return val;
}

function _pluck(data,key){
  return _map(data,_get(key));
};

function _negate(fn){
  return function(val){
    return !fn(val)
  }
}

function _reject(data,predi){
  return _filter(data,_negate(predi))
}

function _compact(data){
  return _filter(data,_identity)
}

var _find = _curryr(function (list, predi) {
  var keys = _keys(list); 
  for (var i = 0, len = keys.length; i < len ; i++) {
    const val = list[keys[i]];
    if(predi(val)) return val;
  }
})

var _find_index = _curryr(function (list, predi) {
  var keys = _keys(list); 
  for (var i = 0, len = keys.length; i < len ; i++) {
    if(predi(list[keys[i]])) return i;
  }
  return -1;
});

function _some(data,predi){
  return _find_index(data,predi || _identity) != -1;
}

function _every(data,predi){
  return _find_index(data,_negate(predi || _identity)) == -1;
}