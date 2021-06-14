import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import ContactsContent from "./ContactsContent";
import "./styles/Contacts.scss";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { addData } from "../../redux/actions/actions";
import axios from "axios";
const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data.Lists)))
      .catch((err) => console.log(err));

    dispatch(changeList(3));
  }, [dispatch]);
  return (
    <div className="contacts">
      <Navigation />
      <ContactsContent />
    </div>
  );
};

export default Contacts;
