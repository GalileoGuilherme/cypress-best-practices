const baseUrl = 'https://jsonplaceholder.typicode.com'

Cypress.Commands.add('getPosts', () => {
  return cy.request(`${baseUrl}/posts`)
})

Cypress.Commands.add('getPostById', (id) => {
  return cy.request(`${baseUrl}/posts/${id}`)
})

Cypress.Commands.add('createPost', (postData) => {
  return cy.request('POST', `${baseUrl}/posts`, postData)
})

Cypress.Commands.add('updatePost', (id, postData) => {
  return cy.request('PUT', `${baseUrl}/posts/${id}`, postData)
})

Cypress.Commands.add('deletePost', (id) => {
  return cy.request('DELETE', `${baseUrl}/posts/${id}`)
})