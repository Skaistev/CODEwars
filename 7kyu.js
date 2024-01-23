function array (f){

    let g= [];
    for (i=0;i<f.length;i++){
    g.push(parseFloat(f[i]))}
    return g;
    }
    
    console.log(array(["1.1","2.2"]))
    