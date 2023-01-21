import { Component } from "react";
import NewBlock from "./blocks/NewBlock.js";
import OldBlock from "./blocks/OldBlock.js";
import UpdateButton from "./buttons/UpdateButton.js";

class AppCRUD extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            isUplade: true,
            error: false
        }
        this.isUplade = true;
        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.updData = this.updData.bind(this);
    }


    componentDidUpdate(oldProps, oldState){
        //
    }

    async getData(){
        this.setState({
            ...this.state, isUplade: true
        })
        fetch("http://localhost:7777/notes")
            .then((res) => res.json())
            .then(
            (data) => {
                console.log(data);
                this.setState({
                    ...this.state, list: data
                });
            },
            (error) => {
                this.setState({
                    ...this.state, error: true
                })
            }
        );
        this.setState({
            ...this.state, isUplade: false
        })
    }

    async setData(obj){
        let tmp = {...obj};
        AppCRUD.publisher++;
        fetch("http://localhost:7777/notes", {
            method: 'POST',
            body: JSON.stringify(tmp)
        }).then((res) => {
            if (res.status === 204){
                this.getData();
            }
        })
    }

    async updData(index){
        fetch(`http://localhost:7777/notes/${index}`, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status === 204){
                this.getData();
            }
        })
    }

    componentDidMount(){
        this.getData();
    }

    componentWillUnmount(){

    }
    renderMainContent(){
        if(this.state.isUplade){
            return (
                <div> Loads...</div>
            )
        }
        if(this.state.error){
            return (
                <div className="red-text"> Error loads...</div>
            )
        }
        return (
            <div>
                <div id="conteiner__olds-textarea">
                {
                    this.state.list.map(el => 
                        <OldBlock
                            key={el.id} 
                            item={el}
                            func={()=>this.updData(el.id)}/>
                    )
                }
                </div>
                <NewBlock func={this.setData}/>
            </div>
        )
       
    }

    render(){
        return (
            <div>
                <h2>Notes<UpdateButton func={this.getData} style={this.state.isUplade?"rotate-block":null}/></h2>
                {
                    this.renderMainContent()
                }
            </div>
        )
    }
}

export default AppCRUD;