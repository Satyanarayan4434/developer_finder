let inputBox = document.getElementById("inputBox");

function fetchUserInfo(){
    let userId = inputBox.value;
    const url = "https://api.github.com/users/";
    if (userId != "") {
        getUserInfo(url + userId);
    };
};

let profileImg = document.getElementById("profileImg");
let name = document.getElementById("name");
let user = document.getElementById("user");
let JoinedDate = document.getElementById("JoinedDate");
let bio = document.getElementById("bio");
let repo = document.getElementById("repo");
let Follwers = document.getElementById("Follwers");
let Following = document.getElementById("Following");
let location = document.getElementById("location");
let blog = document.getElementById("blog");
let twitterId = document.getElementById("twitterId");
let company = document.getElementById("company");

async function getUserInfo(gitUrl){
    let response = await fetch(gitUrl).then((response)=>response.json());
    profileImg.src = `${response?.avatar_url}`;
}