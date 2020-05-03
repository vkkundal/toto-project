import React, { Component } from 'react';
import Listitems from './Listitems.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            currentItem:{
                text:'',
                key:''
            }
         };
}
    handleInput= (e)=> {
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    additem= (e)=> {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:"",
                    key:""
                }
            })
        }
    }
    deleteItem =(key) =>{
        const filterItem =  this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filterItem
            })
    }
    setUpdate = (text, key) => {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }
    render() {
        return (
            <div className="App">
                <form id= "todoForm" onSubmit={this.additem}>
                    <input type="text" placeholder="Type text"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
                <Listitems items={this.state.items}
                    deleteItem={this.deleteItem}
                    setUpdate= {this.setUpdate}>
                </Listitems>
            </div>
        );
    }
}
export default Header;