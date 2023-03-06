import './Buttons.css'

export function Button({ texto, manejarClick }) {
    return (
        <button className='button-'
            onClick={manejarClick} >
            {texto}
        </button>
    )
}