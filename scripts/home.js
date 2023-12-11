// Newsletter validation
const nameInput = document.getElementById('nl-name');
const mailInput = document.getElementById('nl-mail');
const nlForm = document.getElementById('nl-form');
let warnMsg = document.querySelector('.warn-msg');
let good = document.querySelector('.valid');
function newsletterIsValid(e){
    
    let letters = /^[a-zA-Z]+$/;

    if(nameInput.value.match(letters)){
        warnMsg.textContent = '';
        return true;
    } else {
        warnMsg.textContent = 'Enter your real name';
        return false
    }
}
// Stop form execution
nlForm.addEventListener('submit', function(e){
    e.preventDefault(); 
})
// Actual validation call
nameInput.addEventListener('blur', function(e){
    newsletterIsValid()
})