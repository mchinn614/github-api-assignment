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
    .then(repsonse=>{
        if(response.ok){
            return response.json();
        };
        throw new Error(response.statusText);
    })
    .then(responseJson=>{console.log(responseJson)})
    .catch(error=>)


};

function displayResults(resultList){
    var i
    for (i=0;i<responseJson.length)
    const repoName = responseJson.name;
    const repoLink = response.Json.svn_url;
};

function watchSubmit(){
    $('form').on('submit',event=>{
        event.preventDefault();
        const userName = $('.userName').val();
        getRepos(userName)
    })

};
