// Include React
var React = require("react");
var Button = require('./SaveBtn.js');

// Creating the Results component
var Search = React.createClass({

  propTypes: {
    searchResults: React.PropTypes.array.isRequired
  },

  // Here we render the function
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Results</h3>
            </div>
            <div className="panel-body text-center">

              {this.props.searchResults.map(function(search, i){
                return (
                  <div key={i} className="row">
                    <h4>{search.headline.main}
                      <Button
                      artTitle={search.headline.main}
                      artURL={search.web_url}
                      artID={search._id}
                      saveBtnUpdate={this.props.saveBtnUpdate}
                      />
                    </h4>

                  </div>
                )
          }, this)}
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
