'use client'
import Maps from '@/components/Map';
import { UserlocationContext } from '@/components/context/Userlocaioncontext';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [userlocation,setuserlocation]=useState<any>();

  useEffect(()=>{
    getuserlocation();
  },[])
  const getuserlocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setuserlocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <main >
        <UserlocationContext.Provider value={{userlocation,setuserlocation}}>
          <Maps/>
        </UserlocationContext.Provider>
      
      

      
    </main>
  )
}
