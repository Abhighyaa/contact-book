import React from "react";
import { connect } from "react-redux";
import { fetchWithDeletedContact, fetchWithEditedContact } from "../actions";


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:this.props.contact.name,
      contact:this.props.contact.contact
    }
    this.idName=this.idName.bind(this);
    this.idContact=this.idContact.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
    this.editContact=this.editContact.bind(this)
  }
   style = {
    visibility: "hidden"
  };
 editContact(id){
    var c = {
      name: this.state.name,
      contact: this.state.contact
    };
    this.props.dispatch(fetchWithEditedContact(this.props.contact.contact, c));
    document.getElementsByName(this.props.contact.contact).forEach(e=>e.style.visibility="hidden");
  };
  handleEdit(id){
    // document.getElementsByName("toEdit")
    document.getElementsByName(id).forEach(e=>e.style.visibility="visible");
  };
  
  idName (id)  {
    return "name" + id;
  };
  idContact(id ) {
    return "contact" + id;
  };
 
  render(){
    return(
      <tr>
      <td>{this.props.id}</td>
      <td>{this.props.contact.name}</td>
      <td>{this.props.contact.contact}</td>
      <td>
        <a
          href="#"
          id={this.props.contact.contact}
          onClick={e => {
            this.props.dispatch(fetchWithDeletedContact(this.props.contact.contact));
          }}
        >
          Delete
        </a>
      </td>
      <td>
        <a href="#" id={this.props.contact.contact} onClick={e=>this.handleEdit(e.target.id)}>
          Edit
        </a>
      </td>

      <td name="toEdit">
        <input style={this.style}  name={this.props.contact.contact} value={this.state.name} onChange={e=>this.setState({name:e.target.value})} id={this.idName(this.props.contact.contact)}></input>
      </td>
      <td name="toEdit">
        <input style={this.style} name={this.props.contact.contact} value={this.state.contact} onChange={e=>this.setState({contact:e.target.value})} id={this.idContact(this.props.contact.contact)}></input>
      </td>
      <td><button style={this.style} name={this.props.contact.contact} onClick={e=>this.editContact(e.target.name)}>Edit</button></td>
    </tr>
    );
  }
}
// mapStateToProps, mapDispatchToProps
export default connect()(Contact);
