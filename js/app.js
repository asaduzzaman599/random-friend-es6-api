let userInfo;
const loadUser = async () => {
    //load user info from api
    document.getElementById('spinner').classList.remove('d-none');
    const url = `https://randomuser.me/api/1.3/`;
    
    //check error
    try {

        const res = await fetch(url);
        const data = await res.json();
        displayUserInfo(data.results[0]);

    } catch (e) {

        console.log(e);
    }
}
//initial call
loadUser();

    //display user info
const displayUserInfo = (user)=>{
    
    //disable snipper
    document.getElementById('spinner').classList.add('d-none');
    userInfo=user;

    //collet user info div
    const userInfoContainer = document.getElementById('user-info');
    const {title,first,last} = user.name
    document.getElementById('user-img').src = `${user.picture.large}`;
    userInfoContainer.innerHTML=` <h2 class="text-center text-primary">Hi! I am <span class="text-light">${title} ${first} ${last}</span></h2>`;
    console.log(userInfoContainer.innerHTML);
    console.log(user);
}

//display personal info
const displayInfo = input =>{
    const userPersonalinfo = document.getElementById("personal-info");
    const li =document.querySelectorAll('li');
    console.log(li[0])
    
//display personal info cheack button click
    if(input ==="email"){
        
//change class depand on click
        li[0].classList.add('active');
        li[1].classList.remove('active');
        li[2].classList.remove('active');
        //display information
        userPersonalinfo.innerHTML =`
        <h3 class="text-center pb-3 text-color">Email Me: ${userInfo.email}</h3>
        `
        console.log('email')
    }else if(input ==="phone"){
        
//change class depand on click
        li[0].classList.remove('active');
        li[1].classList.add('active');
        li[2].classList.remove('active');
        
        //display information
        userPersonalinfo.innerHTML =`
        <h3 class="text-center pb-3 text-color">Phone Number: ${userInfo.phone}</h3>
        `
    }else{
        //change class depand on click
        li[0].classList.remove('active');
        li[1].classList.remove('active');
        li[2].classList.add('active');
        console.log(userInfo.location.street.number)
        //display information
        userPersonalinfo.innerHTML =`
        <h3 class="text-center pb-3 text-color">Location: ${userInfo.location.street.number}, ${userInfo.location.street.name}, ${userInfo.location.city}, ${userInfo.location.country}</h3>
        `
    }
    
}

//reload button
const anotherUser = () =>{
    //clear previous info 
    document.getElementById("personal-info").textContent='';
    
    //reset class 
    const li =document.querySelectorAll('li');
    li[0].classList.remove('active');
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    
    //call load user for display new user
    loadUser();
}