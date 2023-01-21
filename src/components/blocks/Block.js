function Block(props){
    return (
        <div className={`conteiner__${props.type}-textarea`}>
            {props.children}
        </div>
    )
}

export default Block;