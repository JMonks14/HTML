class Teacher extends person {
    constructor(name,age,gender,specialism) {
        super(name,age,gender)
        this.specialism=specialism
    }

    summarise(){
        return "And thats really really nice"
    }
    
}