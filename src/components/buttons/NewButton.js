import Button from "./Button.js";

function NewButton({func, title="➧", style="button__new-textarea"}){
    return <Button func={func} title={title} style={style}/>
}

export default NewButton;