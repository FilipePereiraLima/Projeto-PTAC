'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../../../page.module.css'


export default function Login() {

  const handlerChange = async (e) => {
    e.preventDefault();

    toast.success("Usuario Alterado!");

  }
  return (

   <div >
<div>

<nav className={styles.nav}>
     <div className="-mb-px flex justify-center">
         <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Home
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Products
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Discounts
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3" href="#">
             Customers
         </a>
     </div>
</nav>

</div>
    

      <h1>Alterar</h1>
      <form onSubmit={handlerChange}>
        <input  placeholder='Name' type="text" required></input>
        <input placeholder='E-mail' type="email" required></input>
        <input placeholder='Senha' type='password' required></input>

        <button>Alterar</button>
        <ToastContainer />
      </form>
    </div>
  )
}
