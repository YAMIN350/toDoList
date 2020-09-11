import React, {useState} from 'react';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }


    onChange(e) {
        this.setState({userInput: e.target.value}, () => console.log(this.state.userInput))
    }

    addToDo(e) {
        e.preventDefault()
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state.items))
    }

    renderToDo() {
        return this.state.items.map((item, index) => {
            return (<div key={index}>{item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button></div>)
        })
    }

    deleteTodo(item) {
        const array = this.state.items
        const indexItem = array.indexOf(item)
        array.splice(indexItem, 1)
        this.setState({items: array})
    }

    render() {
        return (<div>
            <form>
                <input type="text" value={this.state.userInput} onChange={this.onChange.bind(this)}
                       placeholder="Add ToDo"/>
                <button onClick={this.addToDo.bind(this)}>Valider</button>
            </form>
            <div>{this.renderToDo()}</div>
            <br/>

        </div>)
    }
}

export default ToDoList
