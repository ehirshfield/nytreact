// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
