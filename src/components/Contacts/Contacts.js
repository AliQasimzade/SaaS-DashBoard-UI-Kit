import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import ContactsContent from "./ContactsContent";
import "./styles/Contacts.scss";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { addData } from "../../redux/actions/actions";
import axios from "axios";
const Contacts = (props) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(0);
  const newSize = () => {
    setTimeout(() => {
      axios
        .get("https://herokuhosting2.herokuapp.com/getData")
        .then((res) => {
          setSize(res.data.length);
          console.log(res.data.length);
        })
        .catch((err) => console.log(err));
    }, 300);
  };
  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => {
        dispatch(addData(res.data));
        setSize(res.data.length);
        console.log(res.data.length);
      })
      .catch((err) => console.log(err));
    dispatch(changeList(3));
  }, [dispatch]);

  return (
    <div className="contacts">
      <Navigation hamburgerBtn={props.hamburgerBtn} sidebar={props.sidebar} />
      <ContactsContent size={size} newSize={newSize} />
    </div>
  );
};

export default Contacts;
