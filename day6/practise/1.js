let callJSON = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5601/");
    xhr.onload = () => {
        let refjson = JSON.parse(xhr.responseText);
        console.log(refjson);

        domlogic(refjson);
    }
    xhr.send();
}

let domlogic = (refjson) => {
    let parent = document.querySelector("#parent");

    for (let i = 0; i < refjson.length; i++) {
        let data = refjson[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.innerHTML = "ID:" + data.id + " " + "Name:" + data.FirstName + " " + data.LastName + " " + "City:" + data.City;
        parent.append(newElement, parent.lastChild);
    }
}