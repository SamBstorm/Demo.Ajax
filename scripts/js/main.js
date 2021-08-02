const API_URL = 'https://randomuser.me/api';

let response;

let xhr = new XMLHttpRequest();

xhr.open('GET', API_URL, true);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status <=299) afterResponse(xhr.responseText, showHtml);
        else if (xhr.status >= 400 && xhr.status <=499) console.warn(xhr.statusText);
        else if (xhr.status >= 500 && xhr.status <=599) console.error(xhr.statusText);
    }
}

xhr.send();

const afterResponse = function(responseText, callback){
    response = responseText;
    console.log(response);
    response = JSON.parse(response);
    console.log(response);
    callback(response);
}

const showHtml = function(response){
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    document.body.append(div);
    div.append(h1);
    h1.innerText = response.results[0].name.first + " " + response.results[0].name.last 
}

