const TodoData = (props) => {
    return (
        <>

            <div className="List-data">
                <button className="btn-remove" onClick={() => {
                    props.select(props.id)
                }}
                >-</button>
                <li className="list">{props.text}</li>
            </div>
        </>
    )
}
export default TodoData;