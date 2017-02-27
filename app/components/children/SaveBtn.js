var React = require("react");
var helpers = require("../utils/helpers.js");

var buttonStyle = {
  margin: "10px"
}

var Button = React.createClass({
  handleClick: function(){

    var articleTitle = this.props.artTitle;
    var articleURL = this.props.artURL;
    var article = {
      title: articleTitle,
      url: articleURL
    }

    helpers.saveArticle(article);
    this.props.saveBtnUpdate();

  },

  render: function() {
    return(
      <button onClick={this.handleClick} style={buttonStyle} >Save</button>
    );
  }
});

module.exports = Button;
