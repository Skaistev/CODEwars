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

    
