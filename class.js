class Student{ //class name start Capital letter
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="kolimu nessa school";
    }
}
const student1= new Student(12,"Subo");
const student2= new Student(15,"Mahi");
console.log(student1, student2);