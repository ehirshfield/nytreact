// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({
  getInitialState: function() {
    return { term: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>


          <div class="form-group">
            <label for="search">Search Term:</label>
            <input type="text" class="form-control" id="searchTerm">
          </div>

          <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Search</button>
          <button type="button" class="btn btn-default"><i class="fa fa-trash"></i> Clear Results</button>

         </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
