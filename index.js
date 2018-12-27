'use strict'

/* 
App will take user input of github handle then list all github repos on page
-Get value from form
-use value to make API call to users/:username/repos endpoint
-display results on page

*/

function getRepos(userName){
    const url =`https://api.github.com/users/${userName}/repos`;
    fetch(url)
    .then(response=>{
        if(response.ok){
            console.log(response)
            return response.json();
        };
        throw new Error(response.status + '-' + response.statusText);
    })
    .then(responseJson=>{displayResults(responseJson)})
    .catch(error=>{
      $('.results-list').empty();
      $('.results-list').append(`<h3>${error.name}: ${error.message}</h3>`);
      $('section').removeClass('hidden');
      })

};

function displayResults(resultList){
    $('.results-list').empty()
    var i
    console.log(resultList.length)
    for (i=0;i<resultList.length;i++){
        const repoName = resultList[i].name;
        const repoLink = resultList[i].svn_url;
        $('.results-list').append(`<ul><a href="${repoLink}">${repoName}</a></ul>`);
    }
    $('section').removeClass('hidden');
};

function watchSubmit(){
    $('.form').on('submit',event=>{
        event.preventDefault();
        const userName = $('.userName').val();
        getRepos(userName)
    })

};

$(watchSubmit);
