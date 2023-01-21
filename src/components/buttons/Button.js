function Button({func, title="x", style=""}){
    const handleClick = () => {
        func();
    }
    return (
        <button className={"button "+style} type="button" onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button;