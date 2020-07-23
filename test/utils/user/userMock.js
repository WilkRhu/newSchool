const faker = require("faker");


const userMock = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    password: "123456",
    type: "admin",
};

const userMockFail = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    type: "admin",
};

const userMockFind = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    password: "123456",
    type: "admin",
};

const userMockFindId = {
    name: faker.name.findName(),
    login: faker.name.firstName(),
    email: faker.internet.email(),
    password: "123456",
    type: "admin",
};


module.exports = {
    userMock,
    userMockFail,
    userMockFind,
    userMockFindId
};