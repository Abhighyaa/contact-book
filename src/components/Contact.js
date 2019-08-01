import React from 'react';

class Contact extends React.Component {
    render(){
        return (
        <div>
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.contact.name}</td> 
                <td>{this.props.contact.contact}</td> 
                <td><a href="#" id={this.props.id} onClick={()=>this.props.handleDelete(this.props.id)}>Delete</a></td>
            </tr>
        </div>
        );
    }
}

export default Contact;
