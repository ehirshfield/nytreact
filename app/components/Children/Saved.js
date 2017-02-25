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
          {this.props.savedArticles.map(function(article, i){
            return (
              //May have to map note array as well to include all possible notes
              <div>
                <p key={i}>{article.title}</p>
                <p>{article.url}</p>
                {article.note.map(function(note, i){
                  <p key={i}>{note.note}</p>
                })}
              </div>

            )
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
