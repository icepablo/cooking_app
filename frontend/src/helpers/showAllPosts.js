import { toDoItemsApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
  api.get(toDoItemsApiUrl())

export const singleApi = (id) =>
  api.get(toDoItemsApiUrl(id))
