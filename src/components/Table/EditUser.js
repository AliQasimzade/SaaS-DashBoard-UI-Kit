import React, { useState, useRef, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { storage } from "../firebase";
const EditUser = ({
  edit,
  index,
  nameRef,
  surnameRef,
  emailRef,
  roleRef,
  forecastRef,
  companyNameRef,
  close,
  editEmployee,
  imageRef,
}) => {
  const indexData = useSelector((state) => state.productReducer.items[index]);
  const [name, setName] = useState(indexData.name);
  const [surname, setSurname] = useState(indexData.surname);
  const [email, setEmail] = useState(indexData.email);
  const [role, setRole] = useState(indexData.role);
  const [forecast, setForecast] = useState(indexData.forecast);
  const [companyName, setCompanyName] = useState(indexData.companyName);
  const [image, setImage] = useState(indexData.imageurl)
  const [count, setCount] = useState(0);
  const form = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      nameRef.current.value = name;
      surnameRef.current.value = surname;
      emailRef.current.value = email;
      roleRef.current.value = role;
      forecastRef.current.value = forecast;
      companyNameRef.current.value = companyName;
      imageRef.current = image
    }, 100);
  }, []);
  const NotifEmptyInputs = (e, ok) => {
    e.preventDefault();

    document.querySelectorAll(".text-field").forEach((item) => {
      if (item.firstChild.querySelector("input").value === "") {
        item.lastChild.style.opacity = "1";
        ok = "no";
      }
    });
    if (
      name === indexData.name &&
      surname === indexData.surname &&
      email === indexData.email &&
      role === indexData.role &&
      Number(forecast) === indexData.forecast &&
      companyName === indexData.companyName
    ) {
      ok = "no";
      alert("Same inputs !");
    }
    if (ok === "ok") {
      alert("Everything is Ok !");
      editEmployee();
    }
  };

  const handleHidden = () => {
    form.current.querySelectorAll(".p").forEach((item) => {
      item.style.opacity = "0";
    });
  };
  return (
    <Modal
      open={edit}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className="modal"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={edit} className="fade">
        <form ref={form}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0].name)
              storage
                .ref()
                .child(e.target.files[0].name)
                .put(e.target.files[0])
                .then((snap) =>
                  snap.ref.getDownloadURL().then((url) => imageRef.current = url)
                );
            }}
          />
          <h3>Fill following inputs</h3>
          <div className="form">
            <div className="text-field">
              <TextField
                className="input-name"
                label="Name"
                value={name}
                ref={nameRef}
                onChange={(e) => {
                  setName(e.target.value);
                  nameRef.current.value = e.target.value;
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-surname"
                label="Surname"
                value={surname}
                ref={surnameRef}
                onChange={(e) => {
                  setSurname(e.target.value);
                  surnameRef.current.value = e.target.value;
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-email"
                label="E-mail"
                value={email}
                ref={emailRef}
                onChange={(e) => {
                  setEmail(e.target.value);
                  emailRef.current.value = e.target.value;
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-company-name"
                label="Company Name"
                value={companyName}
                ref={companyNameRef}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  companyNameRef.current.value = e.target.value;
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-role"
                label="Role"
                value={role}
                ref={roleRef}
                onChange={(e) => {
                  setRole(e.target.value);
                  roleRef.current.value = e.target.value;
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-forecast"
                type="number"
                label="Forecast"
                value={forecast}
                ref={forecastRef}
                onChange={(e) => {
                  setForecast(e.target.value);
                  forecastRef.current.value = e.target.value;
                  setCount(e.target.value.length);

                  if (count === 2) {
                    setForecast("");
                    setCount(0);
                  }
                }}
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="submit-btn"
              onClick={(e) => NotifEmptyInputs(e, "ok")}
            >
              Edit
            </button>
            <button onClick={close}>Close</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default EditUser;
