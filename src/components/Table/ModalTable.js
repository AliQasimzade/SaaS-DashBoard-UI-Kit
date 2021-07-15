import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { storage } from "../firebase";

const ModalTable = ({
  open,
  onHandleClose,
  onAddUser,
  nameRef,
  surnameRef,
  emailRef,
  roleRef,
  forecastRef,
  companyNameRef,
  imageRef
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      companyName: "",
      role: "",
      forecast: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .max(23, "Must be 23 characters or less")
        .required("Required"),
      companyName: Yup.string()
        .max(23, "Must be 23 characters or less")
        .required("Required"),
      role: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      forecast: Yup.string()
        .max(2, "Must be 2 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (
        /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)(\@gmail.com|@mail.ru|@list.ru|@yahoo.com|@box.az)/g.test(
          values.email
        ) === true
      ) {
        onAddUser();
      }
    },
  });

  const handleChangeImage = (e) => {
    storage
      .ref()
      .child(e.target.files[0].name)
      .put(e.target.files[0])
      .then((snap) =>
        snap.ref.getDownloadURL().then((url) => imageRef.current = url)
      );
  };
  return (
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className="modal"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} className="fade">
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChangeImage(e)}
            />
            <div className="text-field">
              <TextField
                className="input-name"
                ref={nameRef}
                onKeyUp={(e) => (nameRef.current.value = e.target.value)}
                label="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                name="name"
                id="name"
              />
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="text-field">
              <TextField
                className="input-surname"
                ref={surnameRef}
                onKeyUp={(e) => (surnameRef.current.value = e.target.value)}
                label="Surname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.surname}
                type="text"
                name="surname"
                id="surname"
              />
              {formik.touched.surname && formik.errors.surname ? (
                <p>{formik.errors.surname}</p>
              ) : null}
            </div>
            <div className="text-field">
              <TextField
                className="input-email"
                ref={emailRef}
                onKeyUp={(e) => (emailRef.current.value = e.target.value)}
                label="E-mail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="text-field">
              <TextField
                className="input-company-name"
                label="Company Name"
                ref={companyNameRef}
                onKeyUp={(e) => (companyNameRef.current.value = e.target.value)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.companyName}
                name="companyName"
                id="companyName"
              />

              {formik.touched.companyName && formik.errors.companyName ? (
                <p>{formik.errors.companyName}</p>
              ) : null}
            </div>
            <div className="text-field">
              <TextField
                className="input-role"
                ref={roleRef}
                onKeyUp={(e) => (roleRef.current.value = e.target.value)}
                label="Role"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.role}
                name="role"
                id="role"
              />
              {formik.touched.role && formik.errors.role ? (
                <p>{formik.errors.role}</p>
              ) : null}
            </div>
            <div className="text-field">
              <TextField
                className="input-forecast"
                ref={forecastRef}
                onKeyUp={(e) => (forecastRef.current.value = e.target.value)}
                type="number"
                label="Forecast"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.forecast}
                name="forecast"
                id="forecast"
              />
              {formik.touched.forecast && formik.errors.forecast ? (
                <p>{formik.errors.forecast}</p>
              ) : null}
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="submit-btn">
              Add
            </button>
            <button onClick={onHandleClose}>Close</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default ModalTable;
