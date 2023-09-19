'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../../../page.module.css'

export default function Login() {

    const handlerChange = async (e) => {
        e.preventDefault();

        toast.success("Usuario Cadastrado!");
    }
    return (
        <body className={styles.body}>
            

      <section className={styles.section}>
        <div className={styles.divform}>
            <h1 className={styles.h1registrar}>Registrar</h1>
            <form onSubmit={handlerChange}>
                <input className={styles.iptnome} placeholder='Name' type="text" required></input>
                <input className={styles.iptemail} placeholder='E-mail' type="email" required></input>
                <input className={styles.iptsenha} placeholder='Senha' type='password' required></input>

                <button className={styles.button}>Cadastrar</button>
                <ToastContainer />
            </form>
        </div>
        </section>
        </body>
    )
}
