const loadUser = async () => {
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
    const userInfoContainer = document.getElementById('user-info');
    const {title,first,last} = user.name
    document.getElementById('user-img').src = `${user.picture.large}`;
    userInfoContainer.innerHTML=` <h2 class="text-center">Hi! I am ${title} ${first} ${last}</h2>`;
    console.log(userInfoContainer.innerHTML);
    console.log(user);
}

const displayInfo = input =>{
    if(input ==="email"){
        console.log('email')
    }else if(input ==="phone"){
        console.log('email')
    }else{
        console.log('location')
    }
}