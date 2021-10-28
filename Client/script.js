['usernameInput', 'passwordInput'].forEach(element => {
    document.getElementById(element).addEventListener('keydown', event => {
        if (event.key == 'Enter') {
            authenticate();
        }
    })
})

function authenticate() {
    // alert(`Hello, ${document.getElementById('usernameInput').value}`);

    $.post('/api/login', { username: document.getElementById('usernameInput').value, password: document.getElementById('passwordInput').value }, data => {
        //document.body.innertext = JSON.stringify(data);
        if (data.success) {
            document.getElementById('submitButton').style.background = 'Green';
            document.getElementById('submitButton').innerText = 'Success!';
            window.sessionStorage.setItem('cacheAuth', JSON.stringify({ username: document.getElementById('usernameInput').value, password: document.getElementById('passwordInput').value }))
        } else {
            document.getElementById('submitButton').style.background = 'red';
            document.getElementById('submitButton').innerText = data.err;
        }

    });
}

function onLoadAuth() {
    var cachedCreds = JSON.parse(window.sessionStorage.getItem('cacheAuth'));
}