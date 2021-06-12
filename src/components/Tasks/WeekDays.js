import React from "react";
import "./styles/WeekDays.scss";

const WeekDays = () => {
  return (
    <div className="week-days">
      <div className="sunday">
        <p className="short-day-name">Sun</p>
        <p className="day day-1">23</p>
      </div>
      <div className="monday">
        <p className="short-day-name">Mon</p>
        <p className="day">24</p>
      </div>
      <div className="tuesday">
        <p className="short-day-name">Tue</p>
        <p className="day">25</p>
      </div>
      <div className="wednesday">
        <p className="short-day-name">Wed</p>
        <p className="day">26</p>
      </div>
      <div className="thursday">
        <p className="short-day-name">Thu</p>
        <p className="day">27</p>
      </div>
      <div className="friday">
        <p className="short-day-name">Fri</p>
        <p className="day">28</p>
      </div>
      <div className="saturday">
        <p className="short-day-name">Sat</p>
        <p className="day">29</p>
      </div>
    </div>
  );
};

export default WeekDays;
