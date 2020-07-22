class Teacher extends person {
    constructor(name,age,gender,specialism) {
        super(name,age,gender)
        this.specialism=specialism
    }

    summarise(){
        return "And thats really really nice"
    }
    
}

class Student extends person {
    constructor(name,age,gender,hobby) {
        super(name,age,gender)
        this.hobby=hobby
    }

    talkHobby() {
        return "My hobby is " + this.hobby
    }
}