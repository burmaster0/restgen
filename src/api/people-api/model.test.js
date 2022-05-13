import { PeopleApi } from '.'

let peopleApi

beforeEach(async () => {
  peopleApi = await PeopleApi.create({ name: 'test', address: 'test', age: 'test', updated: 'test', addresses: 'test', born: 'test', current_address: 'test', emails: 'test', phones: 'test', checked: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = peopleApi.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(peopleApi.id)
    expect(view.name).toBe(peopleApi.name)
    expect(view.address).toBe(peopleApi.address)
    expect(view.age).toBe(peopleApi.age)
    expect(view.updated).toBe(peopleApi.updated)
    expect(view.addresses).toBe(peopleApi.addresses)
    expect(view.born).toBe(peopleApi.born)
    expect(view.current_address).toBe(peopleApi.current_address)
    expect(view.emails).toBe(peopleApi.emails)
    expect(view.phones).toBe(peopleApi.phones)
    expect(view.checked).toBe(peopleApi.checked)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = peopleApi.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(peopleApi.id)
    expect(view.name).toBe(peopleApi.name)
    expect(view.address).toBe(peopleApi.address)
    expect(view.age).toBe(peopleApi.age)
    expect(view.updated).toBe(peopleApi.updated)
    expect(view.addresses).toBe(peopleApi.addresses)
    expect(view.born).toBe(peopleApi.born)
    expect(view.current_address).toBe(peopleApi.current_address)
    expect(view.emails).toBe(peopleApi.emails)
    expect(view.phones).toBe(peopleApi.phones)
    expect(view.checked).toBe(peopleApi.checked)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
