import {useState, useEffect } from 'react';



function Record() {

    const [odometer,setOdometer] = useState;
    async function addRecord(){
        console.log("hey!!")
    }
    return (
        <>
            <div className="main">
                <form onSubmit={addRecord()}>
                    <input type="number" placeholder="Odometer"></input>
                    <input type="number" placeholder="Old Range"></input>
                    <input type="number" placeholder="New Range"></input>
                    <input type="number" placeholder="Cost"></input>
                    <button className="bg-zinc-800 px-12 py-2 text-white font-semibold">Add Record</button>
                </form>
            </div>
        </>
    );
}
export default Record;