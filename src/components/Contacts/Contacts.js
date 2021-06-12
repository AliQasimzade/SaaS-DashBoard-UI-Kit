import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import ContactsContent from "./ContactsContent";
import "./styles/Contacts.scss";
import { useSelector } from "react-redux";
const Contacts = () => {

  const data = useSelector((state) => state.productReducer.items.Lists);

  useEffect(() => {
    console.log(data)
  },[data])
  return (
    <div className="contacts">
      <Navigation />
     {data ? <ContactsContent /> : ''} 
    </div>
  );
};

export default Contacts;
