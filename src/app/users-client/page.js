"use client"

import { useEffect, useState } from "react"

export default function UserClient() {
   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState('')

   useEffect(() => {
      async function fetchUser() {
         try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) throw new Error("Field to fetch users data...!")
            const data = await response.json()
            setUsers(data)
         } catch (error) {
            if (error) {
               setError(error.message)
            }
            else {
               setError("Unkown Error while fetching the data")
            }
         }
         finally {
            setLoading(false)
         }
      }
      fetchUser()
   }, [])
   if (loading) return <div>Loading...</div>
   if (error) return <div>{error}</div>

   return (

      <ul className="space-y-4 p-4">
         {users.map((user) => (
            <li key={user.id} className="p-4 bg-dark shadow-md rounded-lg text-black-100">
               <div className="font-bold">{user.name}</div>
               <div className="text-sm">
                  <div>User-Name: {user.name}</div>
                  <div>User-Email: {user.email}</div>
                  <div>User-Phone: {user.phone}</div>

               </div>

            </li>

         ))}


      </ul>
   )
}