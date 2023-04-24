const myHeaders = new Headers();
myHeaders.append('apikey', "mGUVkFRkqi10cEw4vzESjYgo9dfQVKYw") ;
const getRequestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
let request;

class Api {

    getRequest () {
        return request = fetch('https://api.apilayer.com/exchangerates_data/2020-05-17?symbols=USD&base=EUR', getRequestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
    }

}

export default new Api();