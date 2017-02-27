var React = require("react");

//Children
var Saved = require("./children/Saved.js");
var Search = require("./children/Search.js");
var Results = require("./children/Results.js");


var helpers = require("./utils/helpers.js");

var Main = React.createClass({
    getInitialState: function(){
      return ({
        search: "",
        results: [],
        saved: []
      })
    },
    //Do this right after the page renders
    componentDidMount: function(){
      console.log("componentDidMount");
      helpers.fetchHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("Saved", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
    },
    //Do this after component changes - Search is made
    componentDidUpdate: function(){
      if (this.state.search !== ""){
        console.log("componentDidUpdate");

        helpers.runQuery(this.state.search).then(function(data){
            if (data !== this.state.results) {
            console.log("Result: " + data);
            this.setState({ results: data });

            // After we've received the result... then post the search term to our history.
            helpers.saveSearch(this.state.search).then(function() {
              console.log("search saved!");

              // After we've done the post... then get the updated history
              helpers.fetchHistory().then(function(response) {
                console.log("Current Saved History", response);

                this.setState({ saved: response });

              }.bind(this));
            }.bind(this));
          }
        }.bind(this))

      }

    },
    //Take search from the Child Search
    setTerm: function(term) {
    return this.setState({ search: term });
    },
    saveBtnUpdate: function(){
      helpers.fetchHistory().then(function(response) {
        console.log("Current Saved History", response.data);

        this.setState({ saved: response.data });

      }.bind(this));
    },
    // clearResults: function(){
    //   return this.setState({results: []});
    // },
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
            <Search setTerm={this.setTerm} searchResults={this.state.results}/>
            <Results searchResults={this.state.results} saveBtnUpdate={this.saveBtnUpdate} />
            <Saved savedArticles={this.state.saved} />
          </div>
        </div>
      );
    }

});

module.exports = Main;
