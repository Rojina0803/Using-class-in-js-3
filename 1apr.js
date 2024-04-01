
class user{
    constructor(name, email, address){
        this.name= name;
        this.email= email;
        this.address= address;

    }
    logIn(){
        console.log(`Username:${this.name}`);
    }
    createID(){
        return `$$${this.name}&&`;
    }
}
const rojina= new user("Rojii")
console.log(rojina.logIn()); 
console.log(rojina.createID());

//Private field --> prefixed with # (the hash symbol)
//Private fields in JavaScript are hard private:


class room{
    #values;
    constructor(section, level,hall){
        this.#values= [section,level,hall]
    }
    getSection(){
        return this.#values[0]
    }
    setSection(value){
        this.#values[0]=value;
    }
    getLevel(){
        return this.#values[0]
    }

    setLevel(){
        this.#values[0] = value;
        }

    }

const student= new room("B")
console.log(student.getSection())

const student1= new room(7)
console.log(student1.getLevel());

//A class method can read the private fields of other instances, 
//as long as they belong to the same class.


class Color {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    redDifference(anotherColor) {
      return this.#values[0] - anotherColor.#values[0];
    }
  }
  
  const red = new Color(255, 0, 0);
  const crimson = new Color(220, 20, 60);
console.log(  red.redDifference(crimson));

  // if anotherColor is not a Color instance

//    class Color {
//     #values;
//     constructor(r, g, b) {
//       this.#values = [r, g, b];
//     }
//     redDifference(anotherColor) {
//       if (!(#values in anotherColor)) {
//         throw new TypeError("Color instance expected");
//       }
//       return this.#values[0] - anotherColor.#values[0];
//     }
//   }
  //one class cannot contain private property of same name


  //Accesor Fields

  class admin{
    constructor(num){
        this.values=[num];

    }
    get num(){
        return this.values[0]
    }
    set num(value){
        this.values[0]= value;
    }
  }
  const usernum= new admin(245);
  usernum.num=90; // In srrict mode throws error
  console.log(usernum.num);


  // Public Fields
  class MyClass {
    luckyNumber = Math.random();
  }
  console.log(new MyClass().luckyNumber); // 0.5
  console.log(new MyClass().luckyNumber); // 0.3
  
  //Static Property

  class peer{
    constructor(name){
        this.name=name;
    }
    logMe(){
        console.log(`Peername: ${this.name}`);
    }
     static createId(){
        return 123;
    }
  }
//   const ken = new peer("Ken")
//   console.log(ken.createId());

//Extends and Inheritance

class Group extends peer{
    constructor(name,email){
        super(name)
        this.email= email;
    }
}
const kayla= new Group("Kayla","kayla45@gmail.com")
console.log(kayla.logMe());
console.log(kayla.createID());


