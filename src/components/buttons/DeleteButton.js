import Button from "./Button.js"

function DeleteButton({func, title="x", style="button__old-textarea"}){
    return <Button func={func} title={title} style={style}/>
}

export default DeleteButton;