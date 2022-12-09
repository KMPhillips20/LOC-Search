var userEl = document.querySelector('#user-form');
var searchEl = document.querySelector('#search');
var formatEl = document.querySelector('#format');
var searchBtn = document. querySelector('#searchBtn');
var backBtn = document.querySelector('#backBtn');
// var displaySearch = 


// lines 32-48 on homepage.js-----21 review 
var formSubmitHandler = function (q) {
    var apiUrl ='https://www.loc.gov/search/?q=' + q + '&fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displaySearch(data, q);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Results not found');
      });
  };

// lines 50-62 on homepage.js----- 21 review 
  var getFormatHandler = function (format) {
    var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + q + '&fo=json';
  
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayData(data.items, format);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };


  var displayResults = function (q, format) {
    if (q.length === 0) {
      searchEl.textContent = 'No Results found.';
      return;
    }
    q.textContent = searchTerm;
    for (var i = 0; i < q.length; i++) {
      var returnSearchResult = searchTerm[i].owner.login + '/' + repos[i].name;
      var repoEl = document.createElement('div');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
      repoEl.appendChild(titleEl);
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
      repoEl.appendChild(statusEl);
      repoContainerEl.appendChild(repoEl);
    }
  };


userEl.addEventListener('submit', formSubmitHandler);
formatEl.addEventListener('click', getFormatHandler);