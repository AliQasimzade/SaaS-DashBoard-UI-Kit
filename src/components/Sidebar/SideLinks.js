import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import allList from "./AllList";
const SideLinks = () => {
    const dispatch = useDispatch();
    const listKey = useSelector((state) => state.changeListReducer);
    const handleClickList = (key) => {
        dispatch(changeList(key));
        document.querySelector(".hamburger-button").classList.remove("active");
        document.querySelector(".side-bar").classList.remove("show");
      };
    return (
        <ul className="side-lists">
        {allList.map((item, key) => (
          <li
            key={key}
            className={key === 6 ? "settings" : ""}
            onClick={() => handleClickList(key)}
          >
            <NavLink
              to={key === 0 ? "/dashboard" : "/contacts"}
              style={key === listKey.key ? { color: "#109CF1" } : {}}
              className="nav-link"
            >
              <div className="list-images">
                <img
                  src={item.image}
                  alt=""
                  className="able-image"
                  style={key === listKey.key ? { opacity: "0" } : {}}
                />
                <img
                  src={item.img}
                  alt=""
                  className="disable-image"
                  style={key === listKey.key ? { opacity: "1" } : {}}
                />
              </div>
              <p>{item.list}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    )
}

export default SideLinks
