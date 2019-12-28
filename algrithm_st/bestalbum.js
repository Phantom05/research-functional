// function solution(genres, plays) {
//   const map = new Map();
//   let res=[];
//   let tmp = [];
//   genres.reduce((obj,item,idx) => {
//     if(map.has(item)){
//       map.get(item).list.push({
//         index:idx,
//         play:plays[idx]});
//       map.get(item).total += plays[idx];
//     }else{
//       map.set(item,{
//         list:[{
//           index:idx,
//           play:plays[idx]}
//         ],
//         total:plays[idx]
//       })
//     }
//     return obj
//   },map);

// for(let val of map.values()){
//   tmp.push(val)
// }
// tmp.sort((a,b)=>a.total > b.total? -1 : a.total < b.total ? 1 : 0);
// tmp.map(item=>{
//   item.list.sort((a,b)=>a.play> b.play? -1 : a.play< b.play? 1 : 0);

//   res.push(
//     item.list[0].index,
//     item.list[1].index
//   )
// });

// return res
// }

// new Set()
// let map = new Map();
// map.set('hello','world');
// console.log(map.size);
// console.log(map);
// console.log(
//   map.get('hello')
// );
// console.log(
//   map.has('hello')
// );



function solution(genres, plays) {
  const map = new Map();
  genres.reduce((obj, item, idx) => {
    if (map.has(item)) {
      map.get(item).list.push({
        index: idx,
        play: plays[idx]
      });
      map.get(item).total += plays[idx];
    } else {
      map.set(item, {
        list: [{
          index: idx,
          play: plays[idx]
        }],
        total: plays[idx]
      })
    }
    return obj
  }, map);



  console.log(map);



}
console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);