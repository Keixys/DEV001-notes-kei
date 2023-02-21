import { useNavigate } from "react-router-dom"
import { Button } from "./Buttons/Buttons"

export function Home() {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToRegister = () => {
        navigate('/register')
    }

    return (
        <div>
            <h1>
                DailyNotes
            </h1>
           <Button texto={'Inicia Sesión'} manejarClick={goToLogin}/>
           <Button manejarClick={goToRegister} texto={'Registrate'}/>
        </div>
    )
}