// console.log(`hello world`);

// let data = ['crong','honux','js','jinny'];
// let [jisu,,,jung] = data;

// let obj = {
//   name:"crong",
//   address:"koreqa",
//   age:10
// }

// let {name:myName,age:myAge} = obj;
// console.log(myAge);

// document.querySelector('div').addEventListener('click',function({target}){
//   console.log(target.tagName);
// });


// let mySet = new Set();
// console.log(mySet);


//set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용.

// mySet.add("crong");
// mySet.add('hary');
// mySet.add({'crong':2});
// console.log(mySet);

// console.log(
//   mySet.has('crong')
// );

// mySet.forEach(function(v){
//   console.log(v);
// });

// let myMap = new Map();
// myMap.set({'aaa':1});

// myMap.forEach(function(v){
//   console.log(v);
// })

console.clear();
// weakset은 참조를 가지고있는 객체만 저장 가능함.
// 객체타입만 중복하지않고 보관하겠다..하면 WeakSet
// 객체 형태를 중복없이 저장하려고 할때 유용하다.

// let arr = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let ws = new WeakSet();
// let obj = {arr,arr2};
// ws.add(arr);
// ws.add(arr2);
// ws.add(obj);
// arr = null;
// arr2 = null;
// console.log(ws);
// console.log(ws.has(arr),ws.has(arr2)); //false, true 가비지 컬렉션 대상이 해제되어서 false가 나옴.

// 업글버전
// Array -> Set, WeakSet
// Object -> map, WeakMap

// Map은 key/value
// Set은 key/value

// let wm = new WeakMap();
// let myfun = function(){};
// wm.set(myfun,0)

// console.log(wm);
// let count = 0;
// for(let i = 0 ; i < 10; i++){
//   count = wm.get(myfun); // get value
//   count++;
//   wm.set(myfun,count);
// }

// myfun = null;
// console.log(wm);

// console.clear();
// let obj1 = {val:1};

// function newObj(obj,n){
//   return {val:obj.val + n}
// }

// let wSet = new WeakSet();
// wSet.add(obj1);
// obj1 = newObj(obj1,4);
// console.log(wSet);


// function Area(height,width){
//   this.height = height;
//   this.width = width;
// }

// Area.prototype.getArea = function(){
//   return this.height * this.width
// }

// let area = new Area(50,20);
// console.log(area.height);

const wm = new WeakMap();

const obj = {};
function Area(height,width){
  obj.height = height;
  obj.width = width;
}

Area.prototype.getArea = function(){
  return obj.height * obj.width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());
// console.log(myarea);
myarea = null;
// console.log(myarea.getArea());
console.log(obj);


const data =[
  {
    name:"coffee-bean",
    order:true,
    items:['americano','milk','green-tea']
  },
  {
    name:"starbucks",
    order:true,
  },
  {
    name:"coffee-king",
    order:true,
    items:['americano','lattee']
  },
];

function fn(tags,name,items){
  console.log(tags);
  if(typeof items === "undefined"){
    items = `<span style="color:red">주문 가능한 상품이 없습니다.</span>`
  }
  return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v)=>{
  let template = fn`<div>welcome ${v.name} !!</div>
  <h2>주문가능항목</h2> <div>${v.items}</div>`;
  document.body.innerHTML += template
});

console.clear()
const helthObj = {
  showHealth:function(){
    return `오늘 운동시간 : ${this.healthTime}`;
  }
};

const myHealth = Object.assign(Object.create(helthObj),{
  healthTime:"11:20",
  name:"crong"
});

console.log(
  myHealth.showHealth()
);
console.log(
  myHealth.name
);
console.log(myHealth);

console.log(
  `Hello world`
);


let testObj = {};
const testProto = {
  hello:function(){
    return 'world'
  }
}
Object.setPrototypeOf(testObj,testProto);
console.log(testObj.hello());

function hello(){
  return `hello world!`
}

function world(){
  `return hell oworld!`
}
console.log('hello world!');
function test(){
  return `test`
}

function hello(){
  function wow(){
    return '`wow'
  }

  function wow1(){
    return 'wow!!!'
  }

  function wow2(){
    return 'wow2'
  }

  function wow3(){
    return 'wow4'
  }
  
}

console.clear()