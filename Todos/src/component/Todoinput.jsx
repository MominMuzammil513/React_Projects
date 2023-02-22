import { useState } from "react";
import TodoData from "./DodoData";

const TodoInput = () => {
    const [inputs, setInputs] = useState("")
    const [item, setItem] = useState([])

    const inputEvent = (event) => {
        setInputs(event.target.value)
    }
    const subMit = () => {
        setItem((preValue) => {
            return (
                [inputs, ...preValue]
            )
        })
        setInputs("")
    }

    const deleteItem = (id) => {
        setItem((preValue) => {
            return preValue.filter((arr, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className="div-input">
                <input type="text" placeholder="Enter Your Entry"
                    value={inputs}
                    onChange={inputEvent}

                />
                <button type="submit" className="btn-add"
                    onClick={subMit}
                >+</button>
            </div>
            <div className="data">
                {item.map((items, index) => {
                    return <TodoData
                        key={index} id={index}
                        text={items}
                        select={deleteItem}
                    />

                })
                }
            </div>
        </>
    )
}
export default TodoInput;