import KeepHeader from "./KeepHeader";


const KeepNote = () => {
    return (
        <>
            <KeepHeader />
            <div className="lock">
                <div className="input-container">
                    <div className="input-note">
                        <input type="text" placeholder="Enter your note here..." />
                    </div>
                </div>
            </div>
        </>
    )
}
export default KeepNote;