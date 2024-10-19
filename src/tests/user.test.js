const app = require('../app')
const request = require('supertest')

const BASE_URL = '/api/v1/users'

const user = {
    firstName: "Indira",
    lastName: "Pagannoto",
    email: "indira@gmail.com",
    password: "12345",
    gender: "female"
  }

  let token

  // Test of POST 
  test("POST -> 'BASE_UR', should return status code 201 and res.body.email === user.email", async () => {
    const res = await request(app)
        .post(BASE_URL)
        .send(user)
  
    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.id).toBeDefined()
  })

  // Test of Login
  test("POST 'BASE_URL/login', should return status code 200, res.body.user and res.body.token to be denifed", async () => {
    const res = await request(app)
        .post(`${BASE_URL}/login`)
        .send({
            email: "indira@gmail.com",
            password: "12345"
        })

  token = res.body.token

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.user).toBeDefined()
  expect(res.body.token).toBeDefined()
 
  })