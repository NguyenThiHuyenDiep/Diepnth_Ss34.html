let form=document.getElementById('form');
let email=document.getElementById('email');
let pass=document.getElementById('pass');
let ConPass=document.getElementById('ConfirmPass');
let btn=document.getElementById('btn')
let user=[
    {
        email:'nva@gmail.com',
        pass:'123456'
    }
]
form.addEventListener('submit',()=>{
   event.preventDefault();
    console.log(email.value)
    if(checkEmailAndPass()){
        user.forEach((item)=>{
            console.log(item.email);
            console.log(item.pass);
            if(item.email==email.value){
                alert("ten tai khoan da ton tai");
            }else if(item.pass==pass.value){
                alert('mat khau da ton tai');
            }else{
                addUser();
            }
        })
    }
    localStorage.setItem('user',JSON.stringify(user));
    console.log(checkEmailAndPass())
    console.log(user);
    email.value='';
    pass.value='';
    ConPass.value='';
   
})
function addUser(){
    let newUser= {
        email: email.value,
        pass: pass.value,
    }
    user.push(newUser),
    console.log(user);
}
function checkEmailAndPass(){
    if(!email.value){
        alert('email khong duoc de trong');
        return 0;
    }else if(!pass.value){
        alert('password khong duoc de trong');
        return 0;
    }else if(!ConPass){
        alert('Ban chua xac nhan mat khau');
        return 0;
    }else if(pass.value!==ConPass.value){
        alert('xac nhan mat khau khong hop le');
        return 0;
    }else{
        return 1
    }
    
    
}