import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import axios from "axios"
const SideLinks = (props) => {
    const dispatch = useDispatch();
    const [lists, setLists] = useState([]);
    const listKey = useSelector((state) => state.changeListReducer);
    const handleClickList = (key) => {
        dispatch(changeList(key));
        props.hamburgerBtn.current.classList.remove("active")
        props.sideBar.current.classList.remove("show")
      };

      useEffect(() => {
        axios
        .get("https://herokuhosting2.herokuapp.com/getData")
        .then((res) =>setLists(res.data.Sidebar))
        .catch((err) => console.log(err));
      },[])
    return (
        <ul className="side-lists">
        {lists.map((item, key) => (
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
