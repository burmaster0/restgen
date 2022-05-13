import { success, notFound } from '../../services/response/'
import { PeopleApi } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PeopleApi.create(body)
    .then((peopleApi) => peopleApi.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  PeopleApi.find(query, select, cursor)
    .then((peopleApis) => peopleApis.map((peopleApi) => peopleApi.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PeopleApi.findById(params.id)
    .then(notFound(res))
    .then((peopleApi) => peopleApi ? peopleApi.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PeopleApi.findById(params.id)
    .then(notFound(res))
    .then((peopleApi) => peopleApi ? Object.assign(peopleApi, body).save() : null)
    .then((peopleApi) => peopleApi ? peopleApi.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PeopleApi.findById(params.id)
    .then(notFound(res))
    .then((peopleApi) => peopleApi ? peopleApi.remove() : null)
    .then(success(res, 204))
    .catch(next)
