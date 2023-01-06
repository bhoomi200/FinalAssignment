import React,{useEffect, useState} from 'react'

export default function Clock() {
    const [clockState,setClockstate] = useState();
    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();
            setClockstate(date.toLocaleTimeString());
        },1000)

    },[]);
  return (
    <div style={{fontSize:"30px",right:"0px",position:'absolute',background:"white"}}>{clockState}</div>
  )
}
