const student ={
    name: "vamsi",
    marks: 100,
    printMarks: (s1)=>{
        console.log(s1.name, s1.marks);
    },
};
student.printMarks(student);

class person{
    constructor(){
        console.log("Constructor from person");
    }
}
class Engineer extends person {
    constructor(branch){
        console.log("Enginner")
    }
}
let engobj = new Engineer("CSE")