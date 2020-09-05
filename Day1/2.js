/*
--Event => Load
--Listener => Call Back function (i.e. Arrow or Anonymus)
*/

window.addEventListener("load", () => {

    // Logic is given to method:processLogicHere()
    processLogicHere();

    //AJAX :: it means Programatically we are making request to url o give the data.
    // AJAX Syntax 
    // for this we atleast need a SERVER which is ready to SERVICE.
    // Step-1 :: Create an object
    let xhr = new XMLHttpRequest();     // XMLHttpRequest is an Object provided by Browser. XMLHttpRequest gives the XML or JSON data

    // Step-2 :: There are 5 parameters :: required only 2 parameters.
    const url = `https://reqres.in/api/users?page=2`;
    xhr.open("GET", url);

    //Step-3 :: Handling Handshake to the Server.
    // Asynchronous and non blocking in nature.

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {           // There are total 4 states of readyState. When the state is 4 then it will give responseText from Server. Read about the states from devdocs.io.
            console.log(xhr.responseText);   // responseText contains JSON or XML information.        
        };                                     // When we write === it checks the value as well as its data type.
    }                                         // At the time when HttpRequest is invented there is no JSON. Therefore for getting the JSON  we have to convert it into JSON by using JSON.parse(str) method.


    // Step-4
    xhr.send();
});

let processLogicHere = function () {
    let pbc = document.querySelector('#parentBlockContainer');
    console.log(pbc);

    /* Lets create an array */ /* Lets assume this values are coming from DB server */
    /* We will call this values from server By Using AJAX */
    let postlist = [
        { id: 1, post: "Hello" },
        { id: 2, post: "HTML" },
        { id: 3, post: "CSS" },
        { id: 4, post: "JavaScript" },
        { id: 5, post: "JSON" },
        { id: 6, post: "JQUERY" },
        { id: 7, post: "AJAX" },
        { id: 8, post: "XML" },
        { id: 9, post: "CallBack" },
        { id: 10, post: "Universe" },
    ]

    /* For creating new Block */
    for (let i = 1; i <= postlist.length; i++) {
        let item = postlist[i];

        let newElement = pbc.children[0].cloneNode(true);   //Here we make the clone of parentBlockContainer
        newElement.style.display = "flex";                  // To make new Block Visible.

        newElement.children[0].innerHTML = item.post;      // We access the element of an array (postlist).

        pbc.insertBefore(newElement, pbc.firstChild);
    }
}