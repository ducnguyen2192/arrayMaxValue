
let A = [-3, 5, 1, 3, 2, 10];
let max = A[0];
function findMaxValue(){
    for (let i =0; i<A.length;i++){
        if(max < A[i]){
            max = A[i];
        }
    }
    document.getElementById("result").innerHTML = max
}