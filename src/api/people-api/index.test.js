import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { PeopleApi } from '.'

const app = () => express(apiRoot, routes)

let peopleApi

beforeEach(async () => {
  peopleApi = await PeopleApi.create({})
})

test('POST /people-api 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', address: 'test', age: 'test', updated: 'test', addresses: 'test', born: 'test', current_address: 'test', emails: 'test', phones: 'test', checked: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.updated).toEqual('test')
  expect(body.addresses).toEqual('test')
  expect(body.born).toEqual('test')
  expect(body.current_address).toEqual('test')
  expect(body.emails).toEqual('test')
  expect(body.phones).toEqual('test')
  expect(body.checked).toEqual('test')
})

test('POST /people-api 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /people-api 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /people-api 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /people-api/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${peopleApi.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(peopleApi.id)
})

test('GET /people-api/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${peopleApi.id}`)
  expect(status).toBe(401)
})

test('GET /people-api/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /people-api/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${peopleApi.id}`)
    .send({ access_token: masterKey, name: 'test', address: 'test', age: 'test', updated: 'test', addresses: 'test', born: 'test', current_address: 'test', emails: 'test', phones: 'test', checked: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(peopleApi.id)
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.updated).toEqual('test')
  expect(body.addresses).toEqual('test')
  expect(body.born).toEqual('test')
  expect(body.current_address).toEqual('test')
  expect(body.emails).toEqual('test')
  expect(body.phones).toEqual('test')
  expect(body.checked).toEqual('test')
})

test('PUT /people-api/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${peopleApi.id}`)
  expect(status).toBe(401)
})

test('PUT /people-api/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', address: 'test', age: 'test', updated: 'test', addresses: 'test', born: 'test', current_address: 'test', emails: 'test', phones: 'test', checked: 'test' })
  expect(status).toBe(404)
})

test('DELETE /people-api/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${peopleApi.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /people-api/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${peopleApi.id}`)
  expect(status).toBe(401)
})

test('DELETE /people-api/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
