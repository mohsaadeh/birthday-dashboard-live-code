let profiles = [
   {
        username: 'eva',
        gender : 'Female',
        age: 24,
        birthday: '04 February 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        age: 24,
        birthday: '06 May 1996',
    },
    {
        username: 'Majd',
        gender : 'Female',
        age: 24,
        birthday: '06 May 1999',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        age: 24,
        birthday: '06 May 1990',
    }
]

let profilesContainer = document.getElementById('birthday__profile-container')
let currentDate= new Date();
let  month = currentDate.toLocaleString('default', { month: 'long' });
let day = currentDate.getDay();
let year = currentDate.getFullYear();
let maleProfile=['assets/img/male.png','assets/img/male-2.png','assets/img/male-3.png']
let femaleProfile=['assets/img/female.png','assets/img/female-2.png','assets/img/female-3.png']

function getAll(){
    profilesContainer.innerHTML = ""
let count=0;
for(let profile of profiles){
 let  birthday = profile.birthday.split(' ')
    if(birthday[1] === month && birthday[0] == day ){
    //Way 1 : The easy way
         randompic=[];
        if(profile.gender == "Male"){
            randompic = maleProfile;
            
        }else{
            randompic = femaleProfile;
        }
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="${randompic[Math.floor(Math.random()*3)]}" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${year-parseInt(birthday[2],10)}</p>
        </div>
    </div>`
    count++;
    }
}
document.getElementById("count").innerHTML=count;
}


function clearAll(){
    profilesContainer.innerHTML = ""
    document.getElementById("count").innerHTML="";
}

getAll();