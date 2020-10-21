
function scan(arr1){
    var value =0;
    var arrOutput =[];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "contraband"){
        arrOutput.push(i);
        }
    }
    return arrOutput;
};
console.log(scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']));