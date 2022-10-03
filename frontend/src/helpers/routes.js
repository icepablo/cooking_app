const serverUrl = 'http://localhost:8000'

export const toDoItemsApiUrl = id =>
  id ? `${serverUrl}/${id}` : `${serverUrl}`
 