const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/ems',()=>{
    console.log('Mongodb connection established');
})

const Employee = mongoose.model('Employee',{
    
    id:Number,
    empname:String,
    age:String,
    title:String,
    position:String,
    salary:String
      
})

module.exports={
    Employee
}