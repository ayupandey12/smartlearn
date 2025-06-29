import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function Authpage(){
    const [activetab, setactivetab] = useState('signin')
    function handlechange(value){
        setactivetab(value)
    }
  return (
    <div >
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef3] px-10 py-3">
        <Link to='/'> 
          <div className="flex items-center gap-4 text-[#0d161b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d161b] text-lg font-bold leading-tight tracking-[-0.015em]">SmartLearn</h2>
          </div></Link>
      </header>
      <div className='flex items-center justify-center min-h-screen'>
      <Tabs className="w-full max-w-md "  defaultValue="signin"  value={activetab} onValueChange={handlechange} >
    <TabsList className='grid w-full grid-cols-2 colo'>
    <TabsTrigger value='signin'  >signin</TabsTrigger>  
    <TabsTrigger value='signup' >signup</TabsTrigger>
    </TabsList>
  <TabsContent value="signin">signin</TabsContent>
  <TabsContent value="signup">signup</TabsContent>
</Tabs>
      </div>
    </div>
  )
}

 
