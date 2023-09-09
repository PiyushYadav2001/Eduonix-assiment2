const userName="piyush";
const password="1234";

const user=prompt("Enter UserName " ,userName);
const pass=prompt("Enter Password " ,password);


if(user===userName && pass===password){
    alert("Login successful.");
}else{
    alert("Login failed.");
}
