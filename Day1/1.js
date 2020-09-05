/*let pbc = document.querySelector('#parentBlockContainer');
console.log(pbc);
*/

/*
--Event => Load
--Listener => Call Back function (i.e. Arrow or Anonymus)
*/

window.addEventListener("load", () => {
    console.log("I.am.called.when.page.loaded");

    let pbc = document.querySelector('#parentBlockContainer');
    console.log(pbc);

    /* Lets create an array */ /* Lets assume this values are coming from DB server */
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

        //  newElement.children[0].innerHTML = "Vishva " + i;  // Hardcoded value::Vishva

        newElement.children[0].innerHTML = item.post;      // We access the element of an array (postlist).
        pbc.insertBefore(newElement, pbc.firstChild);
    }
});