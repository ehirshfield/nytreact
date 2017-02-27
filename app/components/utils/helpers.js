// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var authKey = "e1a3e0cc403149609d0d785e7091aa2b";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(articleSearch) {

    console.log(articleSearch);
    this.saveSearch(articleSearch);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    var newQuery = queryURL + articleSearch;

    return axios.get(newQuery).then(function(response) {

      console.log("AXIOS RESPONSE: " + response.data.response.docs);
      if (response.data.response.docs) {
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return ""

    });

  },
  fetchHistory: function() {
    return axios.get('/api/saved')

  },
  saveSearch: function(articleSearch) {
    var search = {
      search: articleSearch
    }

    axios.post('/api/search', search).then(function(doc) {
      return doc
    }).catch(function(err){
      return err
    })
  },
  saveArticle: function(articleToSave){
    var article = {
      title: articleToSave.title,
      url: articleToSave.url
    }

    axios.post('/api/save', article).then(function(doc){
      console.log("Saved Article!");
    }).catch(function(error){
      return err
    })
  }


};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
