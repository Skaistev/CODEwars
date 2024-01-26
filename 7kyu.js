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