let callAjaxJSON = function () {

    let xhr = new XMLHttpRequest();

    const url = "https://fakerestapi.azurewebsites.net/api/Authors";
    xhr.open('GET', url);

    xhr.onload = () => {
        const refJSON = JSON.parse(xhr.responseText);
        //console.log(refJSON);
        jsondomlogic(refJSON);
    }

    xhr.send();
}

let jsondomlogic = function (refJSON) {
    //console.log(refJSON);
    let parent = document.querySelector("#parent");

    for (let i = 0; i < refJSON.length; i++) {
        const data = refJSON[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = data.FirstName + " " + data.LastName;
        parent.insertBefore(newElement, parent.firstChild);
    }
}


/*
Here we want data in XML format.
For that we have to explicitly mention it.
Using requestHeader
*/

let callAjaxXML = function () {

    let xhr = new XMLHttpRequest();

    const url = "https://fakerestapi.azurewebsites.net/api/Authors";
    xhr.open("GET", url);

    xhr.setRequestHeader("accept", "application/xml");      //Here we request explicitly for XML data.

    xhr.onload = () => {
        //console.log(xhr.responseXML);
        let xmldoc = xhr.responseXML;

        xmldomlogic(xmldoc);
    }

    xhr.send();
}

let xmldomlogic = function (xmldoc) {

    const parentElement = xmldoc.querySelector("ArrayOfAuthor");
    console.log(parentElement);

    for (let i = 0; i < parentElement.children.length; i++) {
        let authorItem = parentElement.children[i];

        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;

        // cloning:
        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
}


/*

let xmlDomHandlerV1 = (xmldoc) => {
  const parentElement = xmldoc.querySelector("ArrayOfAuthor");
  console.log(parentElement);

  for (let i = 0; i < parentElement.children.length; i++) {
    let authorItem = parentElement.children[i];

    let firstName = authorItem.children[0].innerHTML;
    let lastName = authorItem.children[3].innerHTML;

    // Cloning for new element:
    let parent = document.querySelector("#parent");
    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = firstName + " " + lastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

let xmlDomHandlerV2 = (xmldoc) => {
  const authorList = xmldoc.querySelectorAll("Author");

  for (let i = 0; i < authorList.length; i++) {
    let authorItem = authorList[i];

    let firstName = authorItem.children[0].innerHTML;
    let lastName = authorItem.children[3].innerHTML;

    // Cloning for new element:
    let parent = document.querySelector("#parent");
    let newElement = parent.children[0].cloneNode(true);

    newElement.innerHTML = firstName + " " + lastName;

    parent.insertBefore(newElement, parent.firstChild);
  }
};

*/