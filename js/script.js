'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const getFutsell = document.querySelector('[data-futsell');
    let xhr = new XMLHttpRequest();
    let today = Math.round((new Date()).getTime() / 1000);
    const id = 51167;
    const secretKey = '756691067fe1209adc1ed42d355a2191';
    let passhash = CryptoJS.MD5(id + secretKey + today).toString();
    let body = null;

    const url = `https://www.futsell.ru/ffa19/api/pop/id/${id}/ts/${today}/sign/${passhash}/sku/FFA19XBO/`;

    function getResponse() {
        xhr.responseType = 'json';
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        if (xhr.status >= 400) {
            console.error(xhr.response);
        } else {
            console.log(xhr.response);
        }
        xhr.send(null);
    }   

    getResponse();
    
});