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



// function solution(genres, plays) {
//   var answer = [];

//   // [고유번호, 장르]가 저장 될 Map
//   let genrnMap = new Map();

//   // [고유번호, 재생 횟수]가 저장 될 Map
//   let playMap = new Map();

//   // [장르, 총 재생 횟수]가 저장 될 Map
//   let map = new Map;

//   let size = genres.length;
//   for(let i  = 0 ; i < size; i++){
//     genrnMap.set(i,genres[i]);
//     playMap.set(i,plays[i]);

//     // 장르 별 총 재생 횟수를 지정한 맵 생성
//     if(map.has(genres[i])){
//       map.set(genres[i],map.get(genres[i])+ plays[i]);
//     }else{
//       map.set(genres[i],plays[i])
//     }
//   }

//   // map을 순회하면서 가장 많이 재생된 장르를 순서대로 tempArr 배열에 저장 (ex. [pop, classic ..])
  

//   let tempArr = [];
//   while(map.size){
//     let max = 0;
//     let key;
//     for(let [k,v] of map){
//       if(max < v){
//         max = v;
//         key = k;
//       }
//     }
//     tempArr.push(key);
//     map.delete(key);
//   }
//   // 많이 재생된 장르가 순서대로 지정된 tempArr를 순회한다,

//   for(let i = 0 ; i < tempArr.length; i++){
//     // tempArr의 장르와 genreMap을 이용해서 고유번호를 구하고 
//     // 해당 고유번호를 사용해서 playMap의 재생 수를 구한 뒤 임시 배열 t에 담는다

//     let t = [];
//     for(let [key,value] of genrnMap){
//       if(value === tempArr[i]){
//         t.push(playMap.get(key))
//       }
//     }
    
//     // 해당 장르의 재생 수가 임시로 저장된 t 배열을 내림차순 정렬
//     t.sort((a,b)=> b-a);

//     // 각 장르는 최대 2곡밖에 수록되지 않기 대문에 많은 재생수의 2곡을 자른다
//     if(t.length >2) t = t.slice(0,2);
    
//     //만약 재생 수가 같은 경우 중복을 제거한다,
//     t = [...new Set(t)]; // 스프레드로 풀어주면 배열로 풀린다.
    
//     console.log(playMap);
//     // t 배열을 순회한다
//     for (let j = 0; j < t.length; j++) {      
//       console.log(j);  
//       // playMap을 순회하면서 t배열의 값과 같을 경우 고유번호를 answer에 push
//       for (let [key, value] of playMap) {
//           if (value === t[j])
//               answer.push(key);
//       }
//     }
//   }
//   return answer;
// }




function solution(genres, plays){
  let map = new Map;
  for(let i = 0 ; i < genres.length; i++){
    const key = genres[i];
    const value = plays[i];
    if(map.has(key)){
      map.get(key).list.push({seq:i,value});
      map.get(key).total += value;
    }else{
      map.set(key,{
        total:value,
        list:[{
          seq:i,
          value}]
      })
    }
  }

  const newSet = [...new Set(map)];
  newSet.sort((a,b)=>b[1].total - a[1].total);
  const answer = newSet.reduce((arr,val)=>{
    let list = val[1].list;
    list.sort((a,b)=>{
      if(a.value === b.value){
        return a.seq  - b.seq
      }else{
        return b.value - a.value
      }
    });
    if(list.length >2) list  =list.slice(0,2);
    return arr.concat(list.map(item=>item.seq));
  },[]);
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 800, 800, 2500]
  )
);


// let a = [500,500,600];

// let b = [...new Set(a)];
// console.log(
//   new Set(a)
// );
// console.log(b);