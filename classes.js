class Materializer {

    activated = false;
    
    constructor(name){
        this.target = name
    }
    
    activate(){
        this.activated = true;
    }

    materialize(){
        return this.activated ? this.target : undefined
    }
}