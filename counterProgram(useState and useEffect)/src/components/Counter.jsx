import React, { useEffect, useRef, useState } from "react";
import "./Counter.css"
function Counter() {
    const [count, setCount] = useState(0);
    const ref = useRef(count);
    function increament(){
        setCount((prev) => prev+1);
    }
    function decreament(){
        setCount((prev) => prev-1);
    }

    useEffect(() => {
        if(ref.current != null){
            if(count > ref.current){
                console.log('value increased')
            }
            else if(count < ref.current){
                console.log('value decreased');
            }
        }
        ref.current = count
    }, [count])

    return (
        <div className=" w-full h-screen flex flex-col bg-slate-300 justify-center">
            <h1 className=" text-5xl">{count}</h1>
            <div className="flex gap-x-3">
                <button onClick={increament} className=" text-2xl p-1 border-zinc-600 border rounded-l" id="increase">Increase</button>
                <button onClick={decreament} className=" text-2xl p-1 border-zinc-600 border rounded-l" id="Decrease">Decrease</button>
            </div>
        </div>
    )
}

export default Counter;