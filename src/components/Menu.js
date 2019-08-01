import React from 'react';

class Menu extends React.Component {
    render(){
        return (
        <div>
            Name : <input type="text" id="name" value={this.props.name} onChange={(e)=>this.props.handleChange(e)}/> 
            Contact : <input type="text" id="contact" value={this.props.contact} onChange={(e)=>this.props.handleChange(e)}/>
            <button id="add" onClick={this.props.addContact}>Add </button>
            <button id="name" onClick={(e)=>this.props.sort(e)}>Sort by Name</button>
            <button id="contact" onClick={(e)=>this.props.sort(e)}>Sort by Contact</button>
        
        </div>
        );
    }
}

export default Menu;
