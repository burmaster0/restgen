import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PeopleApi, { schema } from './model'

const router = new Router()
const { name, address, age, updated, addresses, born, current_address, emails, phones, checked } = schema.tree

/**
 * @api {post} /people-api Create people api
 * @apiName CreatePeopleApi
 * @apiGroup PeopleApi
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name People api's name.
 * @apiParam address People api's address.
 * @apiParam age People api's age.
 * @apiParam updated People api's updated.
 * @apiParam addresses People api's addresses.
 * @apiParam born People api's born.
 * @apiParam current_address People api's current_address.
 * @apiParam emails People api's emails.
 * @apiParam phones People api's phones.
 * @apiParam checked People api's checked.
 * @apiSuccess {Object} peopleApi People api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 People api not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, address, age, updated, addresses, born, current_address, emails, phones, checked }),
  create)

/**
 * @api {get} /people-api Retrieve people apis
 * @apiName RetrievePeopleApis
 * @apiGroup PeopleApi
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} peopleApis List of people apis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /people-api/:id Retrieve people api
 * @apiName RetrievePeopleApi
 * @apiGroup PeopleApi
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} peopleApi People api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 People api not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /people-api/:id Update people api
 * @apiName UpdatePeopleApi
 * @apiGroup PeopleApi
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name People api's name.
 * @apiParam address People api's address.
 * @apiParam age People api's age.
 * @apiParam updated People api's updated.
 * @apiParam addresses People api's addresses.
 * @apiParam born People api's born.
 * @apiParam current_address People api's current_address.
 * @apiParam emails People api's emails.
 * @apiParam phones People api's phones.
 * @apiParam checked People api's checked.
 * @apiSuccess {Object} peopleApi People api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 People api not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, address, age, updated, addresses, born, current_address, emails, phones, checked }),
  update)

/**
 * @api {delete} /people-api/:id Delete people api
 * @apiName DeletePeopleApi
 * @apiGroup PeopleApi
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 People api not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
