const {
    userMock,
    userMockFail,
    userMockFind,
    userMockFindId
} = require("../../utils/user/userMock");
const connect = require("../../../src/config/connect");
const userValidate = require("../../../src/utils/validations/users/userValidations");
const User = require("../../../src/domains/entity/users");
const createToken = require("../../../src/utils/createToken");
const {
    response
} = require("express")();


describe("Users Tests", () => {
    describe("Units test users create", () => {
        test('create user', async () => {

            const {
                error,
                value
            } = await userValidate.validate({
                name: userMock.name,
                login: userMock.login,
                email: userMock.email,
                password: userMock.password,
                type: userMock.type,
                token: createToken(userMock.name, userMock.email)
            });
            
            if (!error) {
                const create = await connect("users").returning("*").insert(value);
                expect(create[0].name).toBe(value.name);
            }
        });

        test('create user no validate', async () => {
            const {
                error
            } = userValidate.validate(userMockFail);
            if (error) {
                expect(error.message).toBe('"password" is required');
            }
        });

        test('find user create', async () => {
            const {
                error,
                value
            } = await userValidate.validate({
                name: userMockFind.name,
                login: userMockFind.login,
                email: userMockFind.email,
                password: userMockFind.password,
                type: userMockFind.type,
                token: createToken(userMockFind.name, userMockFind.email)
            });
            if (!error) {
                const create = await connect("users").returning("*").insert(User(value));
                const userCreate = await connect("users").select("*").where("id", create[0].id);
                expect(userCreate.length > 1);
                expect(userCreate[0].name).toBe(create[0].name)
            }
        });

        test('find user create id', async () => {
            const {
                error,
                value
            } = await userValidate.validate({
                name: userMockFindId.name,
                login: userMockFindId.login,
                email: userMockFindId.email,
                password: userMockFindId.password,
                type: userMockFindId.type,
                token: createToken(userMockFindId.name, userMockFindId.email)
            });
            if (!error) {
                const create = await connect("users").returning("id").insert(User(value));
                const userCreate = await connect("users").select("*").where("id", create[0]);
                expect(userCreate[0]).toBeTruthy();
                expect(userCreate[0].name).toBe(value.name);
            }
        });

    });
});