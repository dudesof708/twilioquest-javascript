const argValue = process.argv[2];

if (argValue == 0) {
    console.log("alive")
}
else if (argValue == 1){
    console.log("flowering")
}
else if (argValue == 2){
    console.log("shedding")
}
else {
    console.log("other")
}