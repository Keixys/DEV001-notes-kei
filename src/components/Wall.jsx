import { auth } from "../Firebase/configFirebase";
import { Button } from "./Buttons/Buttons";
import { logOut, newNoteCollection, getNotes } from "../service/firebaseService";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"
import './Wall.css'

export function Wall() {
    const [title, setTitle] = useState()
    const [note, setNote] = useState()
    const [option, setOption] = useState()
    const [dataBase, setdata] = useState([]);

    const navigate = useNavigate()

    const goToHome = () => {
        logOut()
        navigate('/')

    }

    const Submit = (e) => {
        e.preventDefault();
        console.log(title, note, option)
        newNoteCollection(title, note, option, auth.currentUser.uid)
        setdata([{title, note, option},...dataBase])
    }

 


    const notes = async() => {
        await getNotes
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setdata(newData);
                // console.log(database);
                // console.log(newData)
            });
    }


    useEffect(() => {
    notes()
  }, [])
 



    return (
        <div>
            <h1>
                DailyNote
            </h1>

            <form >
                <h1>Crea tu nota</h1>
                <div id="title-container">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" placeholder="Orden de trabajo" id="title" name="input_title" onChange={(ev) => setTitle(ev.target.value)} />
                </div>

                <div id="optios-container">
                    <label htmlFor="selectOption">Seleciona la opción</label>
                    <select name="selectOption" onChange={(ev) => setOption(ev.target.value)}>
                        <option value="importante">Importante</option>
                        <option value="recordatorio">Recordadorios</option>
                        <option value="tareas">Tareas</option>
                    </select>
                </div>

                <div id="textarea-container">
                    <label htmlFor="textarea">Contenido</label>
                    <textarea name="user_textarea" id="textarea" cols="30" rows="10" onChange={(ev) => setNote(ev.target.value)}></textarea>
                </div>

                <Button texto={'Crear nota'} manejarClick={Submit} />
            </form>

            <div id="seeAllNotes">
                {dataBase.map((doc) => (
                    <div className="container-notes" key={doc.id}>
                        <div className="notes-option">
                            {doc.note} <br />
                            {doc.option}<br />
                        </div>
                       <h3> {doc.title} </h3><br />
                    </div> 
                ))}
            </div>

            <Button texto='Cerrar Sesión' manejarClick={goToHome} />
        </div>
    )
}