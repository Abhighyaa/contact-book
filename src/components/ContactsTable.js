import React from 'react';
import Contact from './Contact.js'
class ContactsTable extends React.Component {
    handleDelete=(id)=>{
        this.props.deleteContact(id-1)
        // console.log("Delete"+Object.values(this.props.contacts[id-1]))
    }
    render(){
        if(this.props.contacts.length==0){
            return (
            <div>
                No contacts to display
            </div>
            );
        }
        else{
            return (
                <div>
                    <table>
                        <thead>
                            <td>S.No</td>
                            <td>Name</td>
                            <td>Contact</td>
                            <td>Delete</td>
                        </thead>
                        {
                            this.props.contacts.map((c,index) => {
                                return <Contact id={index+1} contact={c} handleDelete={this.handleDelete}></Contact>
                            })
                        }
                    </table>
                </div>
            );
        }
    }
}

export default ContactsTable;
