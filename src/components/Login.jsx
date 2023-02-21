import React, { useState } from "react"
import { Button } from "./Buttons/Buttons"
import { useNavigate } from "react-router-dom"
import { googleRegister,loginEmailAndPassword } from "../service/firebaseService"

export function Login(){

        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
    
        const navigate = useNavigate()
    
        const goToWall = () => {
            navigate('/wall')
        }
    
        const goToWallGoogle = () => {
            console.log(googleRegister())
            googleRegister()
            goToWall()
        }
    
        const Submit = (e) => {
            e.preventDefault();
            console.log(name, email, password)
            loginEmailAndPassword(email, password)
                .then((res) => {
                    console.log(res)
                    goToWall()
                }).catch((err) => {
                    alert(err.message)
                })
        }
    
        return (
            <div>
                <h1>
                    Hello in Login 
                </h1>
                <form >
                    <h1>Inicia Sesión</h1>
                    
                    <div id="mail-container">
                        <label htmlFor="mail">Email:</label>
                        <input type="email" placeholder='ejemplo@ejemplo.com' id="mail" name="user_email" onChange={(ev) => setEmail(ev.target.value)} />
                    </div>
    
                    <div id="password-container">
                        <label htmlFor="psw">Contraseña:</label>
                        <input type='texto' placeholder='Ejemplo: david123' id="psw" name="user_password" onChange={(ev) => setPassword(ev.target.value)} />
                    </div>
    
                    <Button texto={'Inicia Sesión'} manejarClick={Submit} />
                </form>
                <Button texto={'Ingresa con Google'} manejarClick={goToWallGoogle} />
            </div>
    )
}