function array (f){

    let g= [];
    for (i=0;i<f.length;i++){
    g.push(parseFloat(f[i]))}
    return g;
    }
    
    console.log(array(["1.1","2.2"]))
    
function michaelPays(costs) {
  
return parseFloat((costs<5?costs:costs/3<10?costs-(costs/3):costs-10).toFixed(2))
                
}

function hhh (a){
    let el = "";
    for (let i = 1; i <= a-1; i++) {
        for (let j = 1; j <= a; j++) {
            el += "+";
         }
         el += "\n"
    }
    return el + '+'.repeat(a)
    }
    console.log(hhh(8))