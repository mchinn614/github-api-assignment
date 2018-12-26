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
            console.log(reponse)
            return response.json();
        };
        console.log(response)
        throw new Error(response.statusText);
    })
    .then(responseJson=>{displayResults(responseJson)})
    .catch(alert('Something Went Wrong'))

};

function displayResults(resultList){
    var i
    for (i=0;i<2;i++){
        const repoName = resultList[i].name;
        const repoLink = resultList[i].svn_url;
        console.log(repoName)
        console.log(repoList)
    }
};

function watchSubmit(){
    $('form').on('submit',event=>{
        event.preventDefault();
        const userName = $('.userName').val();
        getRepos(userName)
    })

};

$(watchSubmit());
