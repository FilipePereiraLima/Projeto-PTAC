import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/listUsers";
import styles from '../../../page.module.css'


export default async function Dashboard() {

    const listar = await fetch("https://aula-17-10-gamma-nine.vercel.app/users", {
    cache: "no-cache"
  });
    const mostraUsuario = await listar.json();

    return (
        <body className={styles.body}>

            <div className={styles.centernav} >
                <nav className={styles.nav}>
                    <div className={styles.navdiv}>
                        <a className={styles.alogin} href="/">
                            Login
                        </a>
                        <a className={styles.alista} href="/pages/dashboard">
                            Lista
                        </a>
                        <a className={styles.aalterar} href="/pages/dashboard/alter">
                            Alterar
                        </a>
                        <a className={styles.aregister} href="/pages/dashboard/register">
                            Registrar
                        </a>
                    </div>
                </nav>
            </div>

            <div>
                <Suspense fallback={<p className={styles.suspense}>Loading...</p>}>


                    <ListUsers users={mostraUsuario} />

                </Suspense>
            </div>
        </body>
    );
};