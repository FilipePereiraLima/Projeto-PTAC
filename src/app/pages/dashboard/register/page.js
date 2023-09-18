import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/listUsers";


export default async function Dashboard() {

    var mostraUsuario = getUsers()
 
     return (
         <div>
            <Suspense fallback={<p>Loading...</p>}>
                 <ListUsers users={mostraUsuario}/>
 
             </Suspense>
         </div>
     );
 };