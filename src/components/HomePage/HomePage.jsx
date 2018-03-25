import React from 'react';
import Habits from '../Habits';
// add tabs to toggle between habits or todos
const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <h4 className="font-weight-normal">Habits</h4>
          <Habits />
        </div>
        <div className="col-7">
          <h4 className="font-weight-normal">Calendar</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
