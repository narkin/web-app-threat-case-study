function storeNewString() {
    var newString = prompt('Please enter new string to be stored');
    $.post('/api/string/store', {stringToStore: newString}, data => {
        window.location.reload();
    })
}