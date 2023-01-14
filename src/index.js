const greetUser = function (name) {
    const message = `${new Date().toUTCString()} :: Hello, ${name}`;

    return message;
}

module.exports = greetUser;