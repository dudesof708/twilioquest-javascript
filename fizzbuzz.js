const argValue = Number(process.argv[2]);

res = ""

if (argValue % 3 == 0){
    res = res + "Java"
}
if (argValue % 5 == 0){
    res = res + "Script"
}
if (res == ""){
    console.log(argValue)
}
else {
    console.log(res)
}
