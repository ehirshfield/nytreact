// Include React
var React = require("react");



// Creating the Results component
var Saved = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Saved Articles</h3>
            </div>
            <div className="panel-body text-center">
              {this.props.savedArticles.map(function(article, i){
                return (
                  //May have to map note array as well to include all possible notes
                  <div key={i} className="row">

                    <div className="col-md-12">
                      <a href={article.url} className="hyper">
                          <div  className="jumbotron savedStyle">
                          <p >{article.title}</p>
                          <p >{article.url}</p>
                          {article.note.map(function(note, j){
                            <p key={j}>{note.note}</p>
                          })}
                        </div>
                      </a>
                    </div>
                    
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      <div className="col-md-2"></div>
    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
