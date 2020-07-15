const faker = require("faker");


const userMock = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    password: "123456",
    file: faker.image.avatar(),
    type: "admin",
};

const userMockFail = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    type: "admin",
};


module.exports = {
    userMock,
    userMockFail
};