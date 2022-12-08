var userEl = document.querySelector('#user-form');
var searchEl = document.querySelector('#search');
var formatEl = document.querySelector('#format');
var searchBtn = document. querySelector('#searchBtn');
var backBtn = document.querySelector('#backBtn');

// $(searchBtn).click(function() {
// });

// lines 32-48 on homepage.js-----21 review 
var formSubmitHandler = function (event) {
    var apiUrl ='https://www.loc.gov/search/?q=' + q + '&fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displaySearch(data, format);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };

// lines 50-62 on homepage.js----- 21 review 
//   var getFeaturedRepos = function (language) {
//     var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';
  
//     fetch(apiUrl).then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           displayRepos(data.items, language);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     });
//   };
