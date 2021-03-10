const courses = [
    {
        name: "Complete ReactJs course",
        price: "2.3"
    },
    {
        name: "Complete AngularJs course",
        price: "2.1"
    },
    {
        name: "Complete MERN course",
        price: "2.7"
    },
    {
        name: "Complete C++ course",
        price: "2.8"
    },
    {
        name: "Complete Django course",
        price: "7.4"
    },
];

//we are creating list item element, and then injecting it in ul class
//<li class="list-group-item"> Complete C++ course <span class="float-right">$2.8 </span></li>

function generateList() {
    const unorderedList = document.querySelector(".list-group");
    unorderedList.innerHTML = "";
    courses.forEach( (course) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        listItem.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        listItem.appendChild(span);
        //till now we have created the list element

        unorderedList.appendChild(listItem);
        //injected the li in ul
    })
}

//generateList();

window.addEventListener("load", generateList);

// now scripting for sort button 

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price);
    generateList();
});


const button2 = document.querySelector(".btn-primary");

button2.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price);
    generateList();
});