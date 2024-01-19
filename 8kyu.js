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