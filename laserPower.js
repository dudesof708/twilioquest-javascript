function calculatePower(array){
    sum = 0;
    for (i = 0; i < array.length; i++){
        array[i] *= 2
        sum += array[i]
    }
    return sum
}