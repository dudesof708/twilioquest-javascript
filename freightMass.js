function calculateMass(array){
    return array.reduce((sum, current, index) => sum += array[index].length, 0)
}