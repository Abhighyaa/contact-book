import React from 'react';
import './App.css';
import Menu from './components/Menu.js'
import ContactsTable from './components/ContactsTable.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      contact : '',
      contacts : [],
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.id] : e.target.value});
  }
  validateContact=()=>{
    var check="ok";
    this.state.contacts.map(c => {
      if(this.state.name.localeCompare(c.name)==0 && this.state.contact.localeCompare(c.contact)==0)
        check="Duplicate Entry";
      else if(this.state.contact.localeCompare(c.contact)==0)
        check="No already saved by \""+c.name+" \"";
    });
    return check;  
  }
  addContact=()=>{
    var res=this.validateContact();
    if(res.localeCompare("ok")==0){
      var newContact={
        name:this.state.name,
        contact:this.state.contact
      }
      var allContacts=this.state.contacts.concat(newContact);
      this.setState({contacts: allContacts,name:'',contact:''});
    }
    else{
      alert(res)
    }
  }
  deleteContact=(id)=>{
    var allContacts=this.state.contacts.slice(0,id).concat(this.state.contacts.slice(id+1,this.state.contacts.length))
    this.setState({contacts: allContacts});
  }
  sort=(e)=>{
    var sortBy=e.target.id
    if(sortBy.localeCompare('name')==0){
      this.state.contacts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
    }
    if(sortBy.localeCompare('contact')==0){
      this.state.contacts.sort((a,b)=>{
        return a.contact - b.contact
      })
    }
    this.setState({contacts: this.state.contacts});
  }
  render(){
    return (
      <div className="App">
        <Menu name={this.state.name} contact={this.state.contact} handleChange={this.handleChange} addContact={this.addContact} sort={this.sort}></Menu>
        <ContactsTable contacts={this.state.contacts} deleteContact={this.deleteContact}></ContactsTable>
      </div>
    );
  }
}

export default App;
