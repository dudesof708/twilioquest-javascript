class Ducktypium {
    
    constructor(color) {
        if (color != "red" && color != "blue" && color != "yellow"){
            throw new Error("Wrong color")
        }
        this.color = color;
        
    }

    calibrationSequence = []

    refract(arg){
        if (arg != "red" && arg != "blue" && arg != "yellow"){
            throw new Error("Wrong color")
        }
        if (arg == this.color){
            return this.color
        }
        else {
            if (arg == "red" | this.color == "red"){
                if (arg == "yellow" | this.color == "yellow") {
                    return "orange"
                }
                else {
                    return "purple"
                }
            }
            else if (arg == "blue" | this.color == "blue"){
                return "green"
            }
        }
    }

    calibrate(array){
        array.sort()
        
        for (var i in array) {
            array[i] *= 3
        }
        this.calibrationSequence = array
    }
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]