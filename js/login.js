var data = document.forms['data']
button = document.getElementById('button')
button.addEventListener('click', validate)

function validate(e) {
    e.preventDefault();
    var user = data.querySelector('input[type="text"]')
    var password = data.querySelector('input[type="password"]')
    window.location.href = 'dashboard.html'
    
}