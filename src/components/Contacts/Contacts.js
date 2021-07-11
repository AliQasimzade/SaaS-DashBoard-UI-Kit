import React, { useLayoutEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import ContactsContent from "./ContactsContent";
import "./styles/Contacts.scss";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { addData } from "../../redux/actions/actions";
import axios from "axios";
const Contacts = (props) => {
  const dispatch = useDispatch();
  let [count, setCount] = useState("");

  useLayoutEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => {
        dispatch(addData(res.data));
        setCount(res.data.length);
      })
      .catch((err) => console.log(err));
    dispatch(changeList(3));
  }, [dispatch]);

  const newSize = () => {
    setCount(count + 1);
  };

  const delSize = () => {
    setCount(count - 1);
  };

  return (
    <div className="contacts">
      <Navigation hamburgerBtn={props.hamburgerBtn} sidebar={props.sidebar} />
      <ContactsContent count={count} newSize={newSize} delSize={delSize} />
    </div>
  );
};

export default Contacts;
