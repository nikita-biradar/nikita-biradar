function showAlert(){
    showAlter('Hello! the button is clicked,this JS class');
}
function chandetext(){
    document.getElementById('text').innerHTML= "Text Changed!";
}
function handleclick(){
    document.getElementById('clickMessage').innerHTML= "Button clicked!" ;
}
function validateForm(){
    let name = document.getElementById('name').ariaValueMax;
if(name == ''){
    showAlert('Please enter your name.');
    return false;
   }
   return true;
}
function checkNuber(){
    let num=parseInt(document.getElementById('number Input').Value);
    let result=num > 10? 'Greater than 10':'10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge(){
    let age=parseInt(document.getElementById('number Input').Value);
    if(age>=18){
        document.getElementById('numberResult').innerHTML = 'You are an adult'; 
    } else {
        document.getElementById('numberResult').innerHTML = 'You are an minor'; 
    }
}
function displayArray(){
    Let items= ['Apple','Banana',Cherry','Date','Berry'];
        let index=parseInt(document.getElementById('array Index').Value);
        let result= item[Index] || 'Invalid index';
        document.getElementById('arrayResult').innerHTML = result;
}