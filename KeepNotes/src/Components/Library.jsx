import DeleteNoteBtn from "./DeleteNoteBtn";
import '../index.css'

const Library = (props) => {
    const deleteItem = (id) => {
        props.sItem((oldValue) => {
            return oldValue.filter((curr, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="lib-block">
                <div className="l-bl">
                    {
                        props.Itm.map((value, index) => {
                            return <DeleteNoteBtn
                                noteTitle={value.title}
                                noteContent={value.content}
                                key={index}
                                id={index}
                                selectDel={deleteItem}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Library;


