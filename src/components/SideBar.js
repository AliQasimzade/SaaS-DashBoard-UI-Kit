import React, { useRef } from "react";
import "../styles/SideBar.scss";
import Profile from "../images/profile.png";
const SideBar = () => {
  const myRef = useRef(null);

  const allList = [
    {
      image: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9.3C0.834315 9.3 0.7 9.16568 0.7 9V1C0.7 0.834315 0.834315 0.7 1 0.7H7C7.16569 0.7 7.3 0.834315 7.3 1V9C7.3 9.16569 7.16569 9.3 7 9.3H1ZM1 17.3C0.834314 17.3 0.7 17.1657 0.7 17V13C0.7 12.8343 0.834315 12.7 1 12.7H7C7.16568 12.7 7.3 12.8343 7.3 13V17C7.3 17.1657 7.16569 17.3 7 17.3H1ZM11 17.3C10.8343 17.3 10.7 17.1657 10.7 17V9C10.7 8.83431 10.8343 8.7 11 8.7H17C17.1657 8.7 17.3 8.83431 17.3 9V17C17.3 17.1657 17.1657 17.3 17 17.3H11ZM10.7 1C10.7 0.834314 10.8343 0.7 11 0.7H17C17.1657 0.7 17.3 0.834314 17.3 1V5C17.3 5.16569 17.1657 5.3 17 5.3H11C10.8343 5.3 10.7 5.16569 10.7 5V1Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
        </svg>
      ),
      list: "Dashboard",
    },
    {
      image: (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.7H18C18.1634 0.7 18.3 0.8366 18.3 1V7C18.3 7.1634 18.1634 7.3 18 7.3H1C0.836599 7.3 0.7 7.1634 0.7 7V1C0.7 0.836599 0.836599 0.7 1 0.7ZM1 10.7H18C18.1634 10.7 18.3 10.8366 18.3 11V17C18.3 17.1634 18.1634 17.3 18 17.3H1C0.8366 17.3 0.7 17.1634 0.7 17V11C0.7 10.8366 0.836599 10.7 1 10.7Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
        </svg>
      ),
      list: "Tasks",
    },
    {
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.71 6.00058V6C2.71 5.28202 3.29116 4.7 4 4.7H20C20.7134 4.7 21.3 5.2866 21.3 6V18C21.3 18.7134 20.7134 19.3 20 19.3H4C3.28669 19.3 2.70015 18.7135 2.7 18.0003C2.7 18.0002 2.7 18.0001 2.7 18L2.71 6.00058Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
          <path d="M3 6L12 12L21 6" stroke="#C2CFE0" strokeWidth="1.4" />
        </svg>
      ),
      list: "Email",
    },
    {
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.03329 7.33317C8.03329 5.14144 9.80822 3.3665 12 3.3665C14.1917 3.3665 15.9666 5.14144 15.9666 7.33317C15.9666 9.52491 14.1917 11.2998 12 11.2998C9.80822 11.2998 8.03329 9.52491 8.03329 7.33317ZM3.36663 17.8332C3.36663 17.3144 3.62092 16.8083 4.16167 16.3092C4.70718 15.8057 5.49622 15.3581 6.42548 14.9859C8.28512 14.2409 10.53 13.8665 12 13.8665C13.47 13.8665 15.7148 14.2409 17.5744 14.9859C18.5037 15.3581 19.2927 15.8057 19.8382 16.3092C20.379 16.8083 20.6333 17.3144 20.6333 17.8332V20.6332H3.36663V17.8332Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
        </svg>
      ),
      list: "Contacts",
    },
    {
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 17.3H5.71005L5.50503 17.505L2.7 20.3101V4C2.7 3.2866 3.2866 2.7 4 2.7H20C20.7134 2.7 21.3 3.2866 21.3 4V16C21.3 16.7134 20.7134 17.3 20 17.3H6Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
        </svg>
      ),
      list: "Chat",
    },
    {
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.7H21C21.1634 4.7 21.3 4.8366 21.3 5V19C21.3 19.1634 21.1634 19.3 21 19.3H3C2.8366 19.3 2.7 19.1634 2.7 19V5C2.7 4.8366 2.8366 4.7 3 4.7Z"
            stroke="#C2CFE0"
            strokeWidth="1.4"
          />
          <rect x="7.80005" y="4" width="1.4" height="16" fill="#C2CFE0" />
          <rect x="14.8" y="4" width="1.4" height="16" fill="#C2CFE0" />
        </svg>
      ),
      list: "Deals",
    },
    {
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
            fill="#C2CFE0"
          />
        </svg>
      ),
      list: "Settings",
    },
  ];

  const handleToggleSideBar = () => {
    console.log("...");
    myRef.current.classList.toggle("active");
  };
  return (
    <div className="side-bar" ref={myRef}>
      <div className="heading">
        <p>
          SaaS <span className="kit">Kit</span>
        </p>
      </div>
      <div className="profile">
        <div className="profile-image">
          <img src={Profile} alt="" />
        </div>
        <div className="profile-info">
          <p className="name">Sierra Ferguson</p>
          <p className="gmail">s.ferguson@gmail.com</p>
        </div>
      </div>
      <ul className="side-lists">
        {allList.map((item, key) => (
          <li key={key} className={key === 6 ? 'settings':''}>
            {item.image}
			<p>{item.list}</p>
          </li>
		))}
      </ul>
      <div className="toggle-side-bar" onClick={handleToggleSideBar}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
            fill="#C2CFE0"
          />
        </svg>
        <p>Toggle sidebar</p>
      </div>
    </div>
  );
};

export default SideBar;
