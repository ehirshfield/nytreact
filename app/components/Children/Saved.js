// Include React
var React = require("react");

// Creating the Results component
var Saved = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
        {this.props.articles.map(function(search, i) {
          return (
            <div className="well">
              <h3 key={i}>{search.title}</h3>
              <h5 key={i}>{search.date}</h5>
              <a href="{search.url}">{search.url}</a>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
