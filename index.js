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
