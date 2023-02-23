import { useState } from "react";
import KeepHeader from "./KeepHeader";
import Library from "./Library";
import Note from "./Note";

const KeepNote = () => {

    const [item, setItem] = useState([])

    const addNote = (note) => {
        setItem((preValues) => {
            return [...preValues, note]
        })
    }


    return (
        <>
            <KeepHeader />
            <Note passNote={addNote} />
            <Library sItem={setItem} Itm={item} />

        </>
    )
}
export default KeepNote;