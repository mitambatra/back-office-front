function Validation (){
    return(
        <>
            <form action="http://35.91.152.177:3001/api/validate" method="post">
                <input type="submit" value="Validate"/>
            </form>
        </>
    )
}

export default Validation;