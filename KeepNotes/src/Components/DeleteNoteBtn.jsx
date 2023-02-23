
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dropdown from './Dropdown';



const DeleteNoteBtn = (props) => {
    const deleteNote = () => {
        // alert("yur are clsjd");
        props.selectDel(props.id)
    }
    return (
        <>
            <div className='lib-container'>
                <div className="lib">
                    <h2 className="lib-title">{props.noteTitle}</h2>
                    <p className="lib-note">{props.noteContent} </p>
                </div>
                <div className="dropdawn">
                    <Dropdown />
                    <div className="delete mr" >
                        <span className="delete-btn" onClick={deleteNote}>
                            <DeleteOutlineIcon />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeleteNoteBtn