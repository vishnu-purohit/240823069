const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://purohitvishnu125_db_user:vishnu111@vishnu.celttxp.mongodb.net/?retryWrites=true&w=majority&appName=vishnu"),({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema=new mongoose.Schema({
    name: String,
    department: String,
    year: Number,
    enrollment: Number,
    address: String,
});

const Student=mongoose.model("Student",studentSchema);
console.log("MongoDB connected successfully");

// const student= new Student({
//     name: "hitesh rudakiya",
//     department: "Computer",
//     year: 2025,
//     enrollment: 240823082,
//     address: "rajkot",
// });

// student.save().then(()=>{
//     console.log("saved data")
// })
// .catch((error)=>{
//     console.log("error fetch",error)
// })

// select or fetch data
Student.find({name:"parth solanki"}).then((result)=>{
    console.log("all record : ",result)
})

.catch((error)=>{
    console.log("error fetch",error)
})