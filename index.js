//object created with braces

const obj={
  Id:90039,
  Name:'Murali',
  Age:21,
  College:'SriEshwar',
  Town:'tirupur',
  Pincode:641602,
  getName:function()
  {
    return this.Name;
  },
  setName:function(name)
  {
    this.Name=name;
  },
  getId:function()
  {
    return this.Id;
  },
  setId:function(name)
  {
    this.Id=name;
  },
  getAge:function()
  {
    return this.Age;
  },
  setAge:function(name)
  {
    this.Age=name;
  },
  getCollege:function()
  {
    return this.College;
  },
  setCollege:function(name)
  {
    this.College=name;
  },
   getTown:function()
  {
    return this.Town;
  },
  setTown:function(name)
  {
    this.Town=name;
  },
   getPincode:function()
  {
    return this.Pincode;
  },
  setPincode:function(name)
  {
    this.Pincode=name;
  }
}
let name=obj.getName();
console.log('Name:',name);
obj.setName('Mass');
let ID=obj.getId();
console.log('ID:',ID);
obj.setId(1090039);
let age=obj.getAge();
console.log('Age:',age);
obj.setAge(22);
let college=obj.getCollege();
console.log('College:',college);
obj.setCollege('Sri Eshwar');
let town=obj.getTown();
console.log('Town:',town);
obj.setTown('Coimbatore');
let Pin=obj.getPincode();
console.log('Pincode:',Pin);
obj.setPincode(600002);


let name=obj.getName();
console.log('Name:',name);


//-------------------------------------------

//Object creation with function


var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

var x=person;
var y=x;
console.log(person);
console.log(x);
y.age=21;
console.log(person);
console.log(y);
//obj2=object.assign({},obj);----shallow copy(shallow keys only gets new reference)


//obj3=JSON.stringify
//obj4=JSON.parse----deep copy(shallow keys and deep keys also gets new reference)

const obj={
  Id:90039,
  Name:'Murali',
  Age:21,
  College:'SriEshwar',
  Town:'tirupur',
  Pincode:641602,
  a:{a1:1,a2:'hi'}
}

obj1=obj;//normal copy
console.log(obj);


// function Person()
// {
//   this.id='1';
//   this.name='hi';
//   this.setname=function(name)
//   {
//     this.name=name;
//   }
//   this.setid=function(id)
//   {
//     this.id=id;
//   }
// }
// const person=new Person();
// console.log(person.setname('hello'));
// console.log(person.setid('3'));
// console.log(Person.name);
// console.log(person.name);
// console.log(Person.id);
// console.log(person.id);


//  let person = prompt("please Enter your name");
//         let M1 = prompt("Enter mark1");
//         while (isNaN(M1) === true) {
//             alert("Enter valid value");
//             M1 = prompt("Enter mark1");
//         }
//         let M2 = prompt("Enter mark2");
//         while (isNaN(M2) === true) {
//             alert("Enter valid value");
//              M2 = prompt("Enter mark2");
//         }
//         let M3 = prompt("Enter mark3");
//         while (isNaN(M3) === true) {
//             alert("Enter valid value");
//              M3 = prompt("Enter mark3");
//         }
//         let m1 = parseInt(M1);
//         let m2 = parseInt(M2);
//         let m3 = parseInt(M3);
//         const obj =
//             {
//                 name: person,
//                 mark1: m1,
//                 mark2: m2,
//                 mark3: m3
//             }
//         console.log(obj);
//         const obj2 =
//             {
//                 name: person,
//                 Total: (m1 + m2 + m3),
//             }
//         console.log(obj2);
//         const obj3 =
//             {
//                 avg: (m1 + m2 + m3) / 3
//             }
//         console.log(obj3);
//         const obj4 =
//             {
//                 name: obj.name,
//                 total: obj2.Total,
//                 Avg: obj3.avg
//             }
//         console.log(obj4);