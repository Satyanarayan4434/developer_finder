let inputBox = document.getElementById("inputBox");
let inputBoxErr = document.getElementById("inputBoxErr");
let screenMode = document.getElementById("screenMode");
let screenModeBtn = document.getElementById("screenModeBtn");
let mainHeading = document.getElementById("mainHeading");

screenModeBtn.addEventListener('click',()=>{
    
    if(screenMode.innerText == "DARK"){
        drakModeEnable();
    }
    else{
        lightModeEnable();
    }
    
})

let body = document.getElementById("body");
let wrapper = document.getElementById("wrapper");
let repoBox = document.getElementById("repoBox");
function drakModeEnable(){
    screenModeBtn.src = "./assets/images/sun-icon.svg";  
    screenMode.innerText = "LIGHT"
    body.classList.add("body");
    wrapper.classList.add("wrapper");
    screenMode.classList.add("screenModeTop");
    mainHeading.classList.add("mainHeadingTop");
}
function  lightModeEnable(){
    screenModeBtn.src = "./assets/images/moon-icon.svg";
    screenMode.innerText = "DARK"
    body.classList.remove("body");
    wrapper.classList.remove("wrapper");
    screenMode.classList.remove("screenModeTop");
    mainHeading.classList.remove("mainHeadingTop");
}

let userId = inputBox.value;
function fetchUserInfo(){
    const url = "https://api.github.com/users/";
    if (userId != "") {
        getUserInfo(url + userId);
        inputBoxErr.classList.remove("active");
        console.log("hi");
    }
    else{
        inputBoxErr.classList.add("active");
        console.log("hello");
    }
};


let profileImg = document.getElementById("profileImg");
let userNname = document.getElementById("name");
let user = document.getElementById("user");
let JoinedDate = document.getElementById("JoinedDate");
let bio = document.getElementById("bio");
let repo = document.getElementById("repo");
let Follwers = document.getElementById("Follwers");
let Following = document.getElementById("Following");
let userlocation = document.getElementById("location");
let blog = document.getElementById("blog");
let twitterId = document.getElementById("twitterId");
let userCompany = document.getElementById("userCompany");

async function getUserInfo(gitUrl){
    let response = await fetch(gitUrl).then((response)=>response.json());
    profileImg.src = `${response?.avatar_url}`;
    userNname.innerText = response?.name;
    user.innerText = `@${response?.login}`;
    user.href = `${response?.html_url}`;
    JoinedDate.innerText = response?.created_at;
    bio.innerText = response?.bio == null? "This Profile has No Bio" : `${response?.bio}`;
    repo.innerText = response?.public_repos;
    Follwers.innerText = response?.followers;
    Following.innerText = response?.following;
    userlocation.innerText = response?.location == null? "Not Available" : `${response?.location}`;
    blog.innerText = response?.blog == ""? "Not Available" : `${response?.blog}`;
    blog.href = response?.blog == "" ? "#": `${response?.blog}`;
    twitterId.innerText = response?.twitter_username;
    twitterId.href = `https://twitter.com/${response.twitter_username}`;
    userCompany.innerText = response?.company == null? "Not Available" : `${response?.company}`;
}

