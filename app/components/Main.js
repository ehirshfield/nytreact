var React = require("react");

//Children
var Saved = require("./children/Saved.js");
var Search = require("./children/Search.js");


// var helper = require("./utils/helper.js");

var Main = React.createClass({
    getInitialState: function(){
      return ({
        search: "",
        results: "",
        saved: []
      })
    },
    //Do this right after the page renders
    componentDidMount: function(){
      console.log("componentDidMount");
      //Load Saved Articles
    },
    //Do this after component changes
    componentDidUpdate: function(){
      console.log("componentDidUpdate")
    },
    render: function(){
      return(
        <div>
          <div className="container">
            <div className="row">
              <div className="jumbotron">
                <h2 className="text-center">New York Times React App</h2>
              </div>
            </div>
          </div>
          <div>
            <Search  />
            <Saved savedArticles={this.state.saved}/>
          </div>
        </div>
      );
    }

});

module.exports = Main;
