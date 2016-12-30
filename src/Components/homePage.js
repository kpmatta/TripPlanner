"use strict";

var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className="jumbotron">
        <h1>Trip Planer</h1>
        <p>Plan your trip, work your plan...</p>
      </div>
    );
  }
});

module.exports = Home;
