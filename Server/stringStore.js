var storedString = 'Default string';

function storeNewString(stringToStore) {
    storedString = stringToStore;
    return true;
}

function retrieveString() {
    return storedString;
}

module.exports = {storeNewString, retrieveString};