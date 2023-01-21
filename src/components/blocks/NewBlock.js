import Block from "./Block.js";
import NewButton from "../buttons/NewButton.js";
import { useState } from "react";

function NewBlock({func}){

    const [obj, setObject] = useState({
        "content": ""
    });

    const handleChange = evt => {
        setObject({
            "content": evt.target.value
        })
    }

    const submit = evt => {
        func(obj);
        setObject({"content": ""})
    }
    return (
        <form id="form-new-node">
            <label htmlFor="new-textarea">New Node</label>
            <Block type="new">
                <>
                    <textarea id="new-textarea" value={obj.content} onChange={handleChange}/>
                    <NewButton func={submit}/>
                </>
            </Block>
        </form>
    )
}

export default NewBlock;