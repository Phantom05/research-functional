const log = console.log;

const map = (f,iter) =>{
  const new_list =[];
  for(const p of iter){
      new_list.push(f(p));
    }
  return new_list;
}


const filter = (f,iter) =>{
  let res = [];
  for(const a of iter){
    if(f(a)) res.push(a);
  }
  return res;
}