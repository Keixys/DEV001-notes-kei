import { async } from "@firebase/util"
import React, { useState } from "react"
import { googleRegister, registerEmailAndPassword } from "../service/firebaseService"
import { Button } from "./Buttons/Buttons"
import { useNavigate } from "react-router-dom"
import imgRegister from '../assets/register.png'




export function Register({ }) {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const goToProfile = () => {
        navigate('/wall')
    }

    const goToProfileGoogle = () => {
        googleRegister()
        goToProfile()
    }

    const Submit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        registerEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                goToProfile()
            }).catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div className="container">
            <h1>
                DailyNotes
            </h1>
            <h2>REGISTRATE</h2>

            <div className='conteiner-forms'>
                <img src={imgRegister} alt="chica escribiendo" />

                <form className="forms" id='forms-register'>
                    <div id="name-container">
                        <label htmlFor="name">Nombre</label><br />
                        <input type="text" placeholder="Ejemplo: David" id="name" name="user_name" onChange={(ev) => setName(ev.target.value)} />
                    </div>

                    <div id="mail-container">
                        <label htmlFor="mail">Correo</label> <br />
                        <input type="email" placeholder='ejemplo@ejemplo.com' id="mail" name="user_email" onChange={(ev) => setEmail(ev.target.value)} />
                    </div>

                    <div id="password-container">
                        <label htmlFor="psw">Contraseña</label><br />
                        <input type='texto' placeholder='Ejemplo: david123' id="psw" name="user_password" onChange={(ev) => setPassword(ev.target.value)} />
                    </div>

                    <Button texto={'Registrate'} manejarClick={Submit} /> <br />
                    <Button texto={'Ingresa con Google'} manejarClick={goToProfileGoogle} />
                </form>
            </div>

        </div>
    )
}
