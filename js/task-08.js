const formElem = document.querySelector('.login-form');
console.dir(formElem)
formElem.addEventListener('submit', onFormElemSubmit)

function onFormElemSubmit(event) {
event.preventDefault();
const email = event.target.elements.email.value;
const password = event.target.elements.password.value;
console.log(email, password);

const formData = {email, password};
alert(formData.email, formData.password);
event.target.reset();

}

