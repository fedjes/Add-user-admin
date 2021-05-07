const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('last-name');
const checkBoxInput = document.getElementById('status');
const btnAddUser = document.getElementById('add-user');
const btnShowAdmins = document.getElementById('show-admins');
const tableUserInfo = document.querySelector('#table');
let elementsTable = [];
let statusElement = document.getElementsByClassName('flex');
const btnShowAll = document.getElementById('show-all');



function checkBox(){
   if(checkBoxInput.checked){
     return  checkBoxInput.value = 'admin' ;
   } else {
     return checkBoxInput.value = 'user';
   } 
   
   
};



function addDiv(valueCheckBox) {
  let element = document.createElement('div');
  

   if (valueCheckBox === 'admin') {
    element.classList.add('flex');
    element.classList.add('admin');
    
    element.innerHTML = `<div class ='center'>${nameInput.value}</div>
    <div class ='center'>${lastNameInput.value}</div>
    <div class ='center'>${valueCheckBox}</div>`;
  }
  else {
    element.classList.add('flex');
    element.classList.add('user');
    element.innerHTML = `<div class ='center'>${nameInput.value}</div>
    <div class ='center'>${lastNameInput.value}</div>
    <div class ='center'>${valueCheckBox}</div>`;
   }
   tableUserInfo.append(element);
   console.log(element);
}






btnAddUser.addEventListener('click',()=>{

  if(nameInput.value === '' || lastNameInput.value === '') {
    alert('Заполните поле ввода имени и фамилии');
    return ;
  }
  const valueCheckBox = checkBox();
  addDiv(valueCheckBox);
  checkBox();
  elementsTable.push({Name: nameInput.value, LastName: lastNameInput.value, Status: checkBoxInput.value});
   nameInput.value = '';
   lastNameInput.value = '';
   checkBoxInput.checked = false;

})

btnShowAdmins.addEventListener('click', ()=>{
let elementUsers = document.getElementsByClassName('user');
for (let index = 0; index < elementUsers.length; index++) {
  elementUsers[index].classList.add('hide');
}
// document.querySelectorAll('.flex').forEach(e => e.remove());   удалит все поля flex

})
   


btnShowAll.addEventListener('click', ()=>{
  let elementAllUsers = document.getElementsByClassName('user');
  for (let index = 0; index < elementAllUsers.length; index++) {
    elementAllUsers[index].classList.remove('hide');
    
  }
})
