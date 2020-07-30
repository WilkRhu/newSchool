const request = require("supertest");
const app = require("../../../src/web/app");
const {
    userMock,
    userMockFail
} = require("../../utils/user/userMock");


describe("Test Users on router", () => {
    describe("Users", () => {
        test("create user router", async () => {
            const res = await request(app).post("/users")
                .send(userMock);
            expect(res.body.name).toBe(userMock.name);
        });

        test("error validation", async () => {
            const res = await request(app).post("/users")
                .send(userMockFail);
            expect(res.status).toBe(400);
            expect(res.body).toBe("Error Validation");
        });
    });

    describe("Find users", () => {
        test("Users Find", async () => {
            const res = await request(app).get("/users");
            expect(res.body).toBeTruthy();
        });

        test("Users Find Id", async () => {
            const user = await request(app).post("/users")
            .send(userMock);
            const res = await request(app).get(`/users/${user.body}`);
            expect(res.body).toBeTruthy();
        });
    });

    describe("SingIn user", () => {
        test("SingIn Sucess", async ()=>{
            const res = await request(app).post("/users")
            .send(userMock);
            const singIn = await request(app).post("/singIn")
            .send({
                email: userMock.email, 
                password: userMock.password
            });
            expect(singIn.status).toBe(200);
        });

        test("SingIn Erro", async () => {
            const singIn = await request(app).post("/singIn")
            .send({
                email: userMock.email
            });
            expect(singIn.body).toBe("Dados Insuficientes!");
        });

        test("SingIn Erro User/Password", async () => {
            const singIn = await request(app).post("/singIn")
            .send({
                email: userMockFail.email,
                password: userMock.password
            });
            expect(singIn.body).toBe("Usuário e/ou senha inválidos!");
        });

        test("SingIn Erro Password", async () => {
            const res = await request(app).post("/users")
            .send(userMock);
            const singIn = await request(app).post("/singIn")
            .send({
                email: res.body.email,
                password: "1234"
            });
            expect(singIn.body).toBe("Usuário e/ou senha inválidos");
        });
    })
});