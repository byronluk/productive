import React from 'react';
import Habits from '../Habits';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <h5>Habits</h5>
          <Habits />
        </div>
        <div className="col-7">
          <h4>Calendar</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
