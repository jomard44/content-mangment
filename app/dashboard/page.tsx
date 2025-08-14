"use client"
import { useAuth } from "@/context/AuthContext"
import{useEffect} from "react"
import { useRouter } from "next/navigation"
import {supabase} from "@/lib/supabase"


export default function dashboard(){

    const {session} = useAuth()
    const router = useRouter()

   useEffect(()=>{
    if(!session){
        router.push("/signin")
    }
   },[session,router])

   const handleSignOut = async()=>{
    await supabase.auth.signOut()
    router.push("/signin")
   }

   return(
    <div className="max-w-md mx-auto mt-10">
        <h1  className="text-2xl font-bold">dashboard</h1>
        <p>welcome <strong>{session?.user.email}</strong></p>
        <button className="mt-4 p-2 bg-red-500 text-white rounded" onClick={handleSignOut} >sign out</button>
    </div>
   )

}