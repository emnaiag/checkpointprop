const FullName = (props) => {
    function handleClick(){
        alert (props.fullName)
    }
    return (
        <div>
            <h1 onClick={handleClick}>{props.fullName}</h1>
        </div>
    )
}

export default FullName
