const baseUrl = 'https://jsonplaceholder.typicode.com'

Cypress.Commands.add('getPosts', () => {
  return cy.api(`${baseUrl}/posts`)
})

// Cypress.Commands.add('getPosts', () => {
//   return cy.api(`${baseUrl}/posts`).then((response) => {
//     console.log('aquiiiiiiiiiiii', response.body);
//     return response;
//   });
// });


Cypress.Commands.add('getPostById', (id) => {
  return cy.api(`${baseUrl}/posts/${id}`)
})

Cypress.Commands.add('createPost', (postData) => {
  return cy.api('POST', `${baseUrl}/posts`, postData)
})

Cypress.Commands.add('updatePost', (id, postData) => {
  return cy.api('PUT', `${baseUrl}/posts/${id}`, postData)
})

Cypress.Commands.add('deletePost', (id) => {
  return cy.api('DELETE', `${baseUrl}/posts/${id}`)
})
