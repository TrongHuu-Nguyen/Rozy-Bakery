// import _ from 'lodash'

export const addCart=(itemId)=>{
    // const userAccount=JSON.parse(localStorage.getItem("userAccount"));
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));
    
        // const currentIndex = _.findIndex(userAccount, ['userId', currentUser.userId]);
        // userAccount[currentIndex]=currentUser;
        // localStorage.setItem("userAccount",JSON.stringify(userAccount));
};

export const addWish=(itemId)=>{
    // const userAccount=JSON.parse(localStorage.getItem("userAccount"));
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser)return;
    if(currentUser){
        currentUser.userWish.push(itemId);
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        // const currentIndex = _.findIndex(userAccount, ['userId', currentUser.userId]);
        // userAccount[currentIndex]=currentUser; 
        // localStorage.setItem("userAccount",JSON.stringify(userAccount));
    }
};