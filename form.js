const scriptURL = 'https://script.google.com/macros/s/AKfycbxwdqQrfgo14cvs8Sp2EY13GbNZM8NCu07F-Co5fvyFnAga8Ge6LPOS8kUYtbMAbhw/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData (form)})
.then(response => alert("Thank you! your message is submitted successfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})