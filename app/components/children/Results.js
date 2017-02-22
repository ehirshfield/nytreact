// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({
  renderResults: function(props){
    <p>{props.}</p>
  },
  noResults: function(props) {
    <p>No results</p>
  },
  checkResults: function(props) {
    var searchResults = props.searchResults;
    if (searchResults){
      return <renderResults />
    }
    else{
      return <noResults />
    }
  },
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <checkResults searchResults={this.props.searchResults}/>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
