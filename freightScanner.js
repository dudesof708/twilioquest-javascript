function scan(array) {
    let contrabandNum = 0;
    for (i of array) {
        if (i == "contraband") contrabandNum++;
    }
    return contrabandNum
}

scan(["array", "contraband", "cheese"])