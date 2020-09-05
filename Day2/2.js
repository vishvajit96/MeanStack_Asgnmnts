let callAjax = function () {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "https://reqres.in/api/users?page=2");

    xhr.onload = () => {

        const refJSON = JSON.parse(xhr.responseText);
        console.log(refJSON);
        //const data = refJSON.data[0];
        //console.log(data);

        domlogic(refJSON);       // for DOM operation
    };

    xhr.send();
}

//Method for DOM operations:
let domlogic = function (refJSON) {
    let parent = document.querySelector('#parentblock');

    for (let i = 0; i < refJSON.data.length; i++) {
        const dataItem = refJSON.data[i];

        let newElement = parent.children[0].cloneNode(true);
        //newElement.innerHTML = "Vishva";
        newElement.innerHTML = dataItem.id + " " + dataItem.first_name + " " + dataItem.last_name + " " + dataItem.email + " " + dataItem.avtar;    //avtar is not displaying...
        parent.insertBefore(newElement, parent.firstChild);
    }
}