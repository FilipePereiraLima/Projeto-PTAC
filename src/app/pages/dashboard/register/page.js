'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const handlerChange = async (e) => {
        e.preventDefault();

        toast.success("Usuario Cadastrado!");
    }
    return (
        <div>
            <h1>Cadastrar Usuario</h1>
            <form onSubmit={handlerChange}>
                <input placeholder='Name' type="text" required></input>
                <input placeholder='E-mail' type="email" required></input>
                <input placeholder='Senha' type='password' required></input>

                <button>Cadastrar</button>
                <ToastContainer />
            </form>
        </div>
    )
}
