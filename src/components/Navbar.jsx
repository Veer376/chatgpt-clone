import { useState } from "react";
import Sidebar from "./Sidebar";



export default function Navbar(){
    const [isOpen,setisOpen]= useState(false);
    return(
        <>
            <nav className=" shadow-md px-4 py-1 flex justify-between items-center bg-secondary">
                <div className="flex items-center space-x-3">
                <button onClick={() => setisOpen(true)}>☰</button>
                <div className="px-1 py-1 font-bold ">ChatGPT</div>
                </div>
                <div className="flex justify-content-start font-monospace">Free offers 🎁</div>
            </nav>
            <Sidebar open={isOpen} setOpen={setisOpen}/>
        </>
    );
}