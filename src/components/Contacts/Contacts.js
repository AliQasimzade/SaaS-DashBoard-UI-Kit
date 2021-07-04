import React, { useEffect,useState } from "react";
import Navigation from "../Navigation/Navigation";
import ContactsContent from "./ContactsContent";
import "./styles/Contacts.scss";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { addData } from "../../redux/actions/actions";
import axios from "axios";
const Contacts = (props) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState();

  useEffect(() => {
    axios
      .get(
        "https://dashboard-database-af1ec-default-rtdb.firebaseio.com/Table.json"
      )
      .then((res) => {
        setSize(res.data.length)
        dispatch(addData(res.data)); 
      })
      .catch((err) => console.log(err));  
    dispatch(changeList(3));
  }, [dispatch]);



  return (
    <div className="contacts">
      <Navigation hamburgerBtn={props.hamburgerBtn} sidebar={props.sidebar} />
      {typeof size === "number"? <ContactsContent size={size}/>:""}
    </div>
  );
};

export default Contacts;
