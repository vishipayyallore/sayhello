const sayHello = function (name) {
    const message = `${new Date().toUTCString()} :: Hello, ${name}`;

    // console.log(message);
    return message;
}

module.exports = sayHello;