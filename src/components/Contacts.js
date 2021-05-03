import React from 'react'
import Navigation from './Navigation';
import ContactsContent from "./ContactsContent";
import "../styles/Contacts.scss";

const Contacts = () => {
 
    return (
			<div className="contacts">
				<Navigation />
                <ContactsContent />
			</div>
		);
}

export default Contacts
