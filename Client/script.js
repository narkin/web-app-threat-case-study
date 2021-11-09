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
            setTimeout(function() {
                window.location.href = '/admin';
            }, 500)
        } else {
            document.getElementById('submitButton').style.background = 'red';
            document.getElementById('submitButton').innerText = data.err;
        }

    });
}

function onLoadAuth() {
    var cachedCreds = JSON.parse(window.sessionStorage.getItem('cacheAuth'));
    $.post('/api/admin/getClients', cachedCreds, data => {
        if (data.success) {
            document.getElementById('header').innerHTML = `Company Client Information - Welcome, ${cachedCreds.username}! <a href='javascript:logout()'>Logout</a>`;
            // document.getElementById('clientTable').innerText = JSON.stringify(data.clientData);
            var trHeader = document.createElement('tr');
            ['First Name', 'Last Name', 'Gender', 'Age', 'Email', 'Phone', 'Education', 'Occupation', 'Experience (Years)', 'Salary', 'Marital Status', 'Number of Children', 'Annual Income', 'Payments Due', 'Paid'].forEach(columnTitle => {
                var td = document.createElement('td');
                td.innerText = columnTitle;
                trHeader.appendChild(td)
            })
            document.getElementById('clientTable').appendChild(trHeader);
            data.clientData.forEach(client => {
                var trRow = document.createElement('tr');
                Object.values(client).forEach(value => {
                    var td = document.createElement('td');
                    td.innerText = value;
                    trRow.appendChild(td);
                })
                document.getElementById('clientTable').appendChild(trRow);
            })
        } else {
            document.getElementById('clientTable').innerText = 'User failed to authenticate.';
        }
    })
}

function logout() {
    window.sessionStorage.clear();
    window.location.href = '/login';
}