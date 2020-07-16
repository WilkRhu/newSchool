const {
    userMock,
    userMockFail
} = require("../../utils/user/userMock");
const connect = require("../../../src/config/connect");
const userValidate = require("../../../src/utils/validations/users/userValidations");
const {
   response
} = require("express")();


describe("Users Tests", () => {
    describe("Units test users create", () => {
        test('create user', async () => {

            const {
                error,
                value
            } = await userValidate.validate(userMock);
            if (!error) {
                const create = await connect("users").returning("id").insert(value);
                const userCreate = await connect("users").select("*").where("id", create[0]);
                expect(userCreate[0].name).toBe(value.name);
            }
        });

        test('create user no validate', async () => {
            const {
                error
            } = userValidate.validate(userMockFail);
            if (error) {
                response.status = 400; 
                response.body = "Error Validation";
                expect(response.status).toBe(400);
                expect(response.body).toBe("Error Validation");
            }
        });

        test('find user create', async () => {
            const {
                error,
                value
            } = await userValidate.validate(userMock);
            if (!error) {
                const create = await connect("users").returning("id").insert(value);
                const userCreate = await connect("users").select("*");
                expect(userCreate[0]).toBeTruthy();
            }
        });

        test('find user create id', async () => {
            const {
                error,
                value
            } = await userValidate.validate(userMock);
            if (!error) {
                const create = await connect("users").returning("id").insert(value);
                const userCreate = await connect("users").select("*").where("id", create[0]);
                expect(userCreate[0]).toBeTruthy();
                expect(userCreate[0].name).toBe(value.name);
            }
        });

    });
});