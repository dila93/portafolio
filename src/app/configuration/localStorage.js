class LocalStorage {

    constructor(props) {}


    setValue(key, value) {
        window.localStorage.setItem(key, value);
    }

    getValue(key) {
        window.localStorage.getItem(key);
    }

    saveUser(object) {
        for (var i in object) {
            window.localStorage.setItem(i, object[i]);
        }
    }

    getUser(object) {
        for (var i in object) {
            window.localStorage.setItem(i, object[i]);
        }
    }

}

module.exports = new LocalStorage();