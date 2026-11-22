import { useState, useEffect } from "react";

function Signup() {

    const [name,setName] = useState();
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [v_name,setV_name] = useState();
    const [v_number,setV_number] = useState();
    const [password,setPassword] = useState();
    const [confirm_pass,setConfirm_pass] = useState();

    async function registerUser() {
        event.preventDefault()
        console.log(`Hey ${name}`)
        return 1;
    }

    return (
        <>
            <div className="main">
                <h1>Sign up</h1>
                <br/>
                <div className="inputs">
                    <form onSubmit={registerUser}>
                        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" />
                        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" />
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
                        <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Phone" />
                        <input onChange={(e)=>setV_name(e.target.value)} type="text" placeholder="Vehicle Name" />
                        <input onChange={(e)=>setV_number(e.target.value)} type="text" placeholder="Vehicle Number" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm Password" />
                        <select name="Fuel_Type" id="Fuel_Type">
                            <option  value="" disabled selected>Select Fuel Type</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="EV">Electric Vehicle</option>
                        </select>
                        <button type="submit"> Signup </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;