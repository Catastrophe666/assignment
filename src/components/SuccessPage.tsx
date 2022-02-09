
export const SuccessPage = () => {
    return(
        <div style={{textAlign:"center"}}>
            <h1>Welcome {localStorage.getItem("name")}</h1>
            <h1>Your Account is successfully created</h1>
        </div>
    )
}
