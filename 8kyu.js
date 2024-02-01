const a = -2;
const b = 2;

function deepStrictEqual (a,b){
    let c = [];
    if (a<b){
    for (let i=a;i<=b;i++) {
        console.log(i);
        c.push(i);
    }
        return c;
    }}
    
    console.log(deepStrictEqual(a,b));

    
    function sumArray(array) {
        if (array===null||array===undefined){ return 0}
        if (array.length<=2){
            return 0};
        const arr = array.sort((a,b)=>a-b);
        let sum = 0
        for(i=1;i<array.length-1;i++){
        sum += arr[i]++
        }
        return sum
        }
        
        console.log(sumArray([6,2,1,8,10]));
        console.log(sumArray([-6,-20,-1,-10,-12]));
        console.log(sumArray(null));
        console.log(sumArray(undefined));
        
        function correctTail (bod, tail) {
  
            sub = bod.substr(bod.length-(tail.length));
            console.log(sub)
            
            if (sub === tail.at(tail.length-1)) {
              return true
            }
            else {
              return false}}
              console.log(correctTail("fox","x"));
              ///!!!!!!!!!!
              const correctTail1 = (x,y)=>x.startsWith(y)
              console.log(correctTail1("fox","f"));


              function sumMix(x){

                let = 0;
                let z = [];
                
                for (let i =0; i<x.length;i++){
                    
                        z.push(parseFloat(x[i]));
                    }
                   const sum = z.reduce((a,b)=>a+b)
                
        
                    return sum; 
                }
                
             
        
             console.log(sumMix([9, 3, '7', '3']))


             function repeatStr (n, s) {
                return s.repeat(n);
             }
            console.log(repeatStr(3, "*"), "***");
            console.log(repeatStr(5, "#"), "#####");
            
            function findAverage(array) {

                if (array.length===0){
                  return 0} 
                return array.reduce((t,e) => t+e)/array.length
              }
              console.log(findAverage([1,2,3]),2);
              console.log(findAverage([]),0);



const rps = (p1, p2) => {
    if (p1===p2){return "Draw!"}
    if(p1==="rock"&& p2==="scissors"||p1==="scissors"&& p2==="paper"||p1==="paper"&&p2==="rock") {
      return `Player 1 won!`}
     else{return `Player 2 won!`}
    }
  
  
  console.log(rps('rock', 'scissors'),1);
  console.log(rps('scissors', 'paper'),1);
  console.log(rps('paper', 'rock'),1);
  
  console.log(rps('scissors', 'rock'), 2);
  console.log(rps('paper', 'scissors'), 2);
  console.log(rps('rock', 'paper'), 2);
  console.log(rps('rock', 'rock'), 2);

  
  function divisibleBy(numbers, divisor){
 
    let array = [];
    if (numbers[0]===0){array.push(numbers[0])}
    numbers.reduce((t,e)=>{
      if(e%divisor===0||e===0){
        array.push(e)}})
        if(numbers.length<2&&numbers[0]%divisor===0&&numbers[0]!==0)
        {array.push(numbers[0])}
  return array
  }
  
  console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
  console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
  console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
  console.log(divisibleBy([0], 4), [0]);
  console.log(divisibleBy([1,3,5], 2), [])
  console.log(divisibleBy([1,2,0,3,4,5,6], 4), [0,4]);

  function solution(str){
    word = ""
    for (let i=str.length-1; i>=0; i--){
        word += str[i];
  }return word;
  }
  
  console.log(solution('world'), 'dlrow');
  

  function splitAndMerge(string, separator) {
    const a = string.split(' ');
    let f='';
    for(i=0;i<a.length;i++){
       f += a[i].split('').join(separator)+' ';
    }
    return f.trimEnd()
    }
        
    
    console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");