class Session {
    constructor(props) {}
    getCookie(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    }
    findItemByProp(array, prop, value) {
        var item = {};
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i][prop] === value) {
                item = array[i];
                break;
            }
        }
        return item;
    }
    setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }
    formatDate(date) {
        date = new Date(date);
        return date.toLocaleDateString() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    }
    formatFullDate(date) {
        date = new Date(date);
        return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
    }
    displayProduct(activeProducts, products) {
        var visibility = "none";
        for (var i = products.length - 1; i >= 0; i--) {
            if (activeProducts.indexOf(products[i] + "") !== -1) {
                visibility = "block";
                break;
            }
        }
        return visibility;
    }
    convertDateAMDT(date) {
        date = new Date(date);
        return date.toISOString().slice(0, 19).replace('T', " ");
    }
}
module.exports = new Session();