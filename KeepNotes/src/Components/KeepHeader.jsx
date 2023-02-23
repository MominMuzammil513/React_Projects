import logo from '../images/logo.svg'

const KeepHeader = () => {
    return (
        <>
            <div className="header-container">
                <header className="header">
                    <div className="logo-div">
                        <img src={logo} />
                        <h1 className='h1'>Momin Keeps</h1>
                    </div>
                    <div className="menu"></div>
                </header>
            </div>

        </>
    )
}
export default KeepHeader;