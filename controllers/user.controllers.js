import { User } from "../models/user.models.js"

const storeUser=async(req,res)=>{
    const {name,city}=req.body

    if([name,city].some(field=>field.trim() === ""))
    {
        res.status(400).json({message:"all field are required"})
    }

    const user=await User.create({
        name,
        city
    })

    res.status(200).json({message:"User created",User})
}

const getAllUser=async(req,res)=>{
    const users=await User.find({})

    res.status(200).json({message:"User retrived",users})
}

export{
    storeUser,
    getAllUser
}