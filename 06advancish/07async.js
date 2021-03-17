const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout( () => {
        console.log("woohoo");
    }, 3000);
    console.log("I am two");
};

const tres = () => {
    console.log("I am three");
};

uno();
dos();
tres();
