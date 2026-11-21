const express = require("express")
const route = express()
const sql = require("../config/db.js")

route.post("/register",async(req,res)=>{

    try{
        console.log("Hello")
        const { name, username, email, phone, vehicle_name, vehicle_number, fuel_type, password, confirmPass } = req.body()

        // 1. Hassing password
        if(password === confirmPass){
            const hashed_pass = await bcrypt.hash(password, 10)
            // 2. Data into DB
            const sql_query = `INSERT INTO public.users (full_name,username,email,phone,vehicle_name,vehicle_numer,password_hash,fuel_type) VALUES (${name},${username},${email},${phone},${vehicle_name},${vehicle_number},${hashed_pass},${fuel_type} )`
            
            res.json({
                status:"Success",
                message: "User registered successfully"
            })
        }
        else{
            res.json({
                status:"Failed",
                message: "Confirm Password do not match"
            })
        }
        

    }catch{
        res.json({
            "error":error.message
        })
}
})

module.exports = route;