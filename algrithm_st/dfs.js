// DFS

// function solution(numbers,target){
//   let answer = 0;
//   dfs(0);

// /**
//      * numbers 배열의 인덱스를 순차적으로 돌면서 +1, -1을 반복한다.
//      * 트리구조를 생각했을때, 왼쪽은 +1, 오른쪽은 -1 연산을 한다고 생각하면 된다.
//      * DFS, BFS의 개념은 아래 링크를 참조하자.
//      * https://www.youtube.com/watch?v=_hxFgg7TLZQ
//      */
//   function dfs(k){
//     if(k === numbers.length){
//       let sum = 0;
//        for(let i = 0; i< numbers.length; i++){
//          sum += numbers[i];

//          if(sum === target){
//            answer++;
//          }
//        }
//        return;
//     }else{
//       numbers[k] *= 1;
//       dfs(k+1);

//       numbers[k] *= -1;
//       dfs(k+1);
//     }
//   }
//   return answer;
// }

// console.log(
//   solution([1, 1, 1, 1, 1], 3)
// );

/**
 * DFS (Depth First Serch)
 * 깊이 우선검색 ==> 스택이나 재귀를 이용해서 구현
 * 차일드노드를 마지막 노드를 만나기 전까지 갔다가 온다고함
 */


 /**
  * BFS (Breadth First Serch)
  * 넓이 우선 검색 ==> 큐를 이용해서 구현
  * 자식을 모두 다 검색하고 그 자식의 자식을 다 검색하는 방식
  */



// function addMark(){
//   console.log(
//     [...arguments].map(item=>item)
//   );
//   return Array.from(arguments).map(item=>item+'!')
// }


// console.log(
//   addMark(1,2,3,4,5)
// );

console.clear();


// NOTE: 자르기 정렬
// function solution(array, commands) {
//   return commands.reduce((arr,item)=>{
//     return arr.concat([...array].slice(item[0]-1,item[1]).sort((x,y)=>x-y)[item[2]-1])
//   },[]);
// }

// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [[2,5,3],[4,4,1],[1, 7, 3]]
//     )
// );



// function solution(numbers) {
//   const map = new Map();
//   numbers.reduce((arr,item)=>{
//     let first = item.toString()[0];
//     if(map.has(first)){
//       map.get(first).push(item)
//     }else{
//       map.set(first,[item])
//     }
//     return arr
//   },map);
//   const sortArray = [...map.values()].sort((x,y)=>y[0]-x[0]);
//   const res = sortArray.reduce((str,item)=>{
//     if(item.length > 1){
//       // 34 3 30
//       item = [item[0]].concat(item.slice(1).sort((x,y)=>y-x)).join('')
//     }
//     str+= item;
//     return str
//   },"");
//   return res
// }

// NOTE: 비교정렬
// function solution(numbers) {
//   var answer = numbers.map(c=> c + '').sort((a,b) => (b+a) - (a+b)).join('');
//   return answer[0]==='0'? '0' : answer;
// }
// console.log(
//   solution([3, 30, 34, 5, 9])
// );
// // 9534330

// NOTE: H-Index 내림차순으로 정렬하고 인덱스보다 값이 작아지는 순간 리턴.
// function solution(citations) {
//   const arr = citations.sort((a,b)=>a-b);
//   let result = [];
//   for(let i = 0 ; i < arr.length; i++){
//     result.push(Math.min(arr[i],arr.length-i))
//   }
//   return Math.max(...result);
// }
// console.log(
//   solution(
//     [3, 0, 6, 1, 5]
//   )
// );

// function solution(heights) {
//   return heights.map((top,index)=>{
//     const list = heights.slice(0,index+1).reverse();
//     const find = list.findIndex(f=>f > top);
//     return find > 0 ? list.length-find : 0;
//   })
// }
// function solution(heights) {
//   return heights.map((v, i) => {
//     console.log(v, i);
//       while (i) {
//           i--;
//           if (heights[i] > v) {
//               return i + 1;
//           }
//       }
//       return 0;
//   });
// }

// NOTE: Top
// function solution(heights) {
//   return heights.map((t,i)=>{
//     while(i){
//       i--;
//       if(heights[i] > t){
//         return i + 1;
//       }
//     }
//     return 0
//   })
// }
// console.log(
//   solution(
//     [6,9,5,7,4]
//   )
// );

console.clear();

// function solution(heights) {
//   console.log(heights);
// }
// console.log(
//   solution(
//     [6,9,5,7,4]
//   )
// );



// function findMaxMinIndex(arr,bool){
//   return arr.indexOf(bool ? Math.min(...arr)  : Math.max(...arr)) 
// }

// function solution(prices) {
  
//   const minIdx =findMaxMinIndex(prices,true);
//   const complareArr= prices.slice(minIdx+1);

//   if(minIdx === prices.length) return 0

//   if( prices[minIdx]< Math.max(...complareArr)){
//     let max = findMaxMinIndex(complareArr,false);
//     return complareArr[max] - prices[minIdx]
//   }

//   return 0;

// }


// function solution(prices) {
//   let i = 0;
//   let res = true;
//   let tmp = [...prices];
//   console.log(
//     prices.map(c=> c + '').sort((a,b) => (b+a) - (a+b))
//   );
 
//   while(res){
//     i++;
//     const newArray = tmp;
//     const minIdx = newArray.indexOf(Math.min(...newArray));
//     const maxIdx = newArray.indexOf(Math.max(...newArray))

//     if(minIdx === prices.length || newArray.length ===0) return 0;

//     console.log(maxIdx,'maxIdx');
//     console.log(minIdx,'minIdx');
//      break
//     if(maxIdx < minIdx){
//       newArray.splice(maxIdx,1)
//     }
    
//     if(minIdx < maxIdx){
//       return newArray[maxIdx] - newArray[minIdx];
//     }

//     if(minIdx === maxIdx){
//       return 0
//     }

    
//     if(i ===20){
//       console.log('무한루프');
//       break;
//     }
//   }

//   // return 0;

// }

// function solution(prices){
//   let res = [];
//   const map = new Map();
//   for(let i = 0 ; i < prices.length; i++){
//     if(i === prices.length-1) break;
//     const maxN = Math.max(...prices.slice(i+1));
//     const cha = maxN - prices[i];
//     if(!map.has('list')){
//       map.get('list').push(cha)
//     }
//     res.push(cha);
//   }
//   console.log(res);
//   return Math.max(...res);
// }

// function solution(prices){
//   const min = Math.min(...prices);
//   const max = Math.max(...prices);
//   const minIdx = prices.indexOf(min);
//   const maxIdx = prices.indexOf(max);
//   const set = new Set();
//   const res = new Set;
  

//   if(minIdx === maxIdx) return 0;

//   for(let i = 0 ; i < prices.length;i++){
//     set.add(prices[i]);
//   }
//   const newset =  Array.from(set);
 
//   for(let i = 0 ; i < set.size; i++){
//     const item = newset[i];
//     const lastArray = newset.slice(newset.indexOf(item)+1);
//     if(lastArray.length){
//       res.add(Math.max(...lastArray) - item)
//     }
//   }
//   return res.size ?Math.max(...res) : 0 
// }



// 우선적으로 두번쨰와 첫번째를 비교하고 반복문을 돌면서


// function solution(prices){
//   const arr_size = prices.length;
//    let max_diff = prices[1] - prices[0]; 
//   for (let i = 0; i < arr_size; i++) 
//   { 
//     for (let j = i+1; j < arr_size; j++) 
//     {      
//       if (prices[j] - prices[i] > max_diff)  
//         max_diff = prices[j] - prices[i]; 
//     }  
//   }          
//   return max_diff
// }
// function solution(prices){
//   let min_element=prices[0];
//   let diff=prices[1]-prices[0];
//   for(i=1;i<prices.length;i++)
//   {
//       if(prices[i]-min_element>diff)
//           diff=prices[i]-min_element;
//       if(prices[i]<min_element)
//           min_element=prices[i];
//   }
//   return isNaN(diff)? 0 : diff;

// }

// console.log(
//   solution(
//     // [0]
//     // [0, 1, 4,0,0 ]
//     // [3, 4, 1, 5, 4]
//     [0]
//   )
// );



// // NOTE: Top
// function solution(heights) {
//   return heights.map((t,i)=>{
//     while(i){
//       i--;
//       if(heights[i] > t){
//         return i + 1;
//       }
//     }
//     return 0
//   })
// }
// console.log(
//   solution(
//     [6,9,5,7,4]
//   )
// );



// function solution(serialization){
//   let stack = new Map();
//   let arr = serialization;

//   for(let i=0; i<arr.length; i++){
//       stack.add(arr[i]);
//       while(stack.length>=3 
//           && stack.get(stack.size()-1).equals("#")
//           && stack.get(stack.size()-2).equals("#")
//           && !stack.get(stack.size()-3).equals("#")){

//           stack.remove(stack.size()-1);
//           stack.remove(stack.size()-1);
//           stack.remove(stack.size()-1);

//           stack.add("-1");
//       }
//   }

//   if(stack.size()==1 && stack.get(0).equals("#"))
//         return true;
//     else
//         return false;

// }

function solution(prices){
  let min_element=prices[0];
  let diff=prices[1]-prices[0];
  for(i=1;i<prices.length;i++)
  {
      if(prices[i]-min_element>diff)
          diff=prices[i]-min_element;
      if(prices[i]<min_element)
          min_element=prices[i];
  }
  return isNaN(diff)? 0 : diff;

}

console.log(
  solution(
    [3, 4, 1, 5, 4]
  )
);

console.log(
  solution(
    [3, 5, 6, 8, -1, -1, -1, 1, 7, -1, -1, -1, 4, -1, 2, -1, -1]
  )
);