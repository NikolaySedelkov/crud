import Block from "./Block.js";
import DeleteButton from "../buttons/DeleteButton.js";

function OldBlock({func, item={id:-1, content: ""}}){
    return (
        <Block type="old">
            <>
                {item.content}
                <DeleteButton func={func}/>
            </>
        </Block>
    )
}

export default OldBlock;