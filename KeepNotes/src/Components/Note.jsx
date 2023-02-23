
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const Note = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    const inputEvent = (event) => {
        const { name, value } = event.target
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: "",
        })
    }

    return <>
        <div className="lock">
            <form onSubmit={handleSubmit} className="input-container">
                <div className="input-note">
                    <input type="text" placeholder="Title"
                        name='title'
                        value={note.title}
                        onChange={inputEvent}
                    />
                    <textarea placeholder="Write a note..."
                        name='content'
                        value={note.content}
                        onChange={inputEvent}
                    />
                </div>
                <div className="add-btn">
                    <button value="submit" onClick={addEvent}>
                        <AddIcon />
                    </button>
                </div>
            </form>
        </div>
    </>
}
export default Note;