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
            expect(res.ok).toBe(true);
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
        test("SingIn", async ()=>{
            const res = await request(app).post("/users")
            .send(userMock);
            const singIn = await request(app).post("/singIn")
            .send(res[0].email, res[0].password);
            console.log(singIn);
        })
    })
});