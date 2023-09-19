import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/listUsers";
import styles from '../../../page.module.css'


export default async function Dashboard() {

    var mostraUsuario = getUsers()

    return (
        <body className={styles.body}>

           

            <div>
                <Suspense fallback={<p className={styles.suspense}>Loading...</p>}>


                    <ListUsers users={mostraUsuario} />

                </Suspense>
            </div>
        </body>
    );
};