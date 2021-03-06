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

  // handleClear: function(){
  //
  //   console.log("Clear!");
  //   this.props.searchResults();
  // },

  // Here we render the function
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Search</h3>
            </div>
            <div className="panel-body text-center">
              <form onSubmit={this.handleSubmit}>


              <div className="form-group">
                <label htmlFor="term">Search Term:</label>
                <input type="text" value={this.state.term} className="form-control" id="term" onChange={this.handleChange} required />
              </div>

              <button type="submit" className="btn btn-default"><i className="fa fa-search"></i> Search</button>


             </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
