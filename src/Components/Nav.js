export const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="nav-title">
                    <h2>Hootsuit</h2></div>

                <div className="nav-menu">
                    <h3>Platform </h3>
                    <h3>Plans </h3>
                    <h3>Eterprice </h3>
                    <h3>Resources </h3>
                    <h3>Education </h3>

                </div>
                <div className="nav-button">
                    <h3 style={{color:"grey"}}>Contact us </h3>
                    <h3 style={{color:"grey"}}>Login</h3>
                    <button style={{padding:"0 15px 0 15px", backgroundColor:"green", fontSize:"15px", color:"white"}}>Sign up</button>
                </div>
            </div>

        </>
    )
}