// import { useEffect, useState } from "react"

export default async function UserServer() {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   let users = []
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   users = await response.json();
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