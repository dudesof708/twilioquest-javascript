var inventory = ["Ducktypium Ore", "Uranium Rod", "Ruthenium Isotopes", "Concave Lens", "Refraction Panel"]

function addFirstToLast(array){
    res = "";
    if (array[0]){
        res = res + array[0]
    }
    if (array[array.length-1]){
        res = res + array[array.length-1]
    }
    return (res)
}