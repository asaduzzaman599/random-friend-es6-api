let userInfo;
const loadUser = async () => {

    document.getElementById('spinner').classList.remove('d-none');
    const url = `https://randomuser.me/api/1.3/`;
    try {

        const res = await fetch(url);
        const data = await res.json();
        displayUserInfo(data.results[0]);

    } catch (e) {

        console.log(e);
    }
}
loadUser();

const displayUserInfo = (user)=>{
    
    document.getElementById('spinner').classList.add('d-none');
    userInfo=user;
    const userInfoContainer = document.getElementById('user-info');
    const {title,first,last} = user.name
    document.getElementById('user-img').src = `${user.picture.large}`;
    userInfoContainer.innerHTML=` <h2 class="text-center text-primary">Hi! I am <span class="text-light">${title} ${first} ${last}</span></h2>`;
    console.log(userInfoContainer.innerHTML);
    console.log(user);
}

const displayInfo = input =>{
    const userPersonalinfo = document.getElementById("personal-info");
    const li =document.querySelectorAll('li');
    console.log(li[0])
    if(input ==="email"){
        li[0].classList.add('active');
        li[1].classList.remove('active');
        li[2].classList.remove('active');
        userPersonalinfo.innerHTML =`
        
        <h3 class="text-center pb-3 text-color">Email Me: ${userInfo.email}</h3>
        `
        console.log('email')
    }else if(input ==="phone"){
        li[0].classList.remove('active');
        li[1].classList.add('active');
        li[2].classList.remove('active');
        userPersonalinfo.innerHTML =`
        
        <h3 class="text-center pb-3 text-color">Phone Number: ${userInfo.phone}</h3>
        `
    }else{
        li[0].classList.remove('active');
        li[1].classList.remove('active');
        li[2].classList.add('active');
        console.log(userInfo.location.street.number)
        userPersonalinfo.innerHTML =`
        
        <h3 class="text-center pb-3 text-color">Location: ${userInfo.location.street.number}, ${userInfo.location.street.name}, ${userInfo.location.city}, ${userInfo.location.country}</h3>
        `
    }
    
}

const anotherUser = () =>{
    document.getElementById("personal-info").textContent='';
    const li =document.querySelectorAll('li');
    li[0].classList.remove('active');
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    loadUser();
}