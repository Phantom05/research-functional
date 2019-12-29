// DFS

function solution(numbers,target){
  let answer = 0;
  dfs(0);

/**
     * numbers 배열의 인덱스를 순차적으로 돌면서 +1, -1을 반복한다.
     * 트리구조를 생각했을때, 왼쪽은 +1, 오른쪽은 -1 연산을 한다고 생각하면 된다.
     * DFS, BFS의 개념은 아래 링크를 참조하자.
     * https://www.youtube.com/watch?v=_hxFgg7TLZQ
     */
  function dfs(k){
    if(k === numbers.length){
      let sum = 0;
       for(let i = 0; i< numbers.length; i++){
         sum += numbers[i];

         if(sum === target){
           answer++;
         }
       }
       return;
    }else{
      numbers[k] *= 1;
      dfs(k+1);

      numbers[k] *= -1;
      dfs(k+1);
    }
  }
  return answer;
}

console.log(
  solution([1, 1, 1, 1, 1], 3)
);

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



