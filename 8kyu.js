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
        

    
