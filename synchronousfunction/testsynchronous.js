function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login successful somya agarwal');
            resolve(); 
        }, 4000);
    });
}

function getData(){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Get data from user')   
      resolve();
    },4000)
});
}
function calculateData(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('calculating data from user')   
      resolve();
    },4000)
});  
}
function sendsms(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Sending message to user.')   
      resolve();
        },4000)
});  
}
function logout(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('Logout successful.')   
      resolve();
        },4000)
});  
}

 async function f1(){
    try{
        await login();
        await getData();
        await calculateData();
        await sendsms();
       await logout();
    }
    catch(err){
        console.log('Error'+err)
    }
}
f1();




console.log('call other application')