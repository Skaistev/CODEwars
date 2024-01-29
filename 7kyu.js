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

function square (a){
    let el = "";
    for (let i = 1; i <= a-1; i++) {
        for (let j = 1; j <= a; j++) {
            el += "+";
         }
         el += "\n"
    }
    return el + '+'.repeat(a)
    }
    console.log(square(8));


function move_zeros(arr,isRight) {
let array = [];
let array1 =[];
for(i=0;i<arr.length;i++){
    if(isRight===true||isRight===undefined){
    const f = arr[i]>0? array.push(arr[i]):array1.push(arr[i]);
}if (isRight===false){
    const f = arr[i]>0? array1.push(arr[i]):array.push(arr[i]);
}
}
const f = array.concat(array1);
return f
 }
 

console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false), [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);

