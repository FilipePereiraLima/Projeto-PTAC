import { getUsers } from "@/app/functions/handlerAcessAPI";



export default async function Dashboard() {

   var mostrarUsuario = getUsers()

    return (
        <div>
            <h1>Dashboard</h1>

            {mostrarUsuario.map((usuario) => (
                <h3>{usuario.name}</h3>
                
            ))}

        </div>
    );
};