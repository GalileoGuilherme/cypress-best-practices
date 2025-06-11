
describe('Testes de API - JSONPlaceholder', () => {

  context('GET /posts', () => {
    it('Deve retornar lista de posts', () => {
      cy.getPosts()
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body[0]).to.have.keys(
            'userId', 'id', 'title', 'body'
          )
        })
    })

    it('Deve buscar post específico', () => {
      cy.getPostById(1)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.id).to.eq(1)
          expect(response.body.title).to.be.a('string')
        })
    })
  })

  context('POST /posts', () => {
    it('Deve criar novo post', () => {
      const newPost = {
        title: 'Título do Post',
        body: 'Conteúdo do post de teste',
        userId: 1
      }

      cy.createPost(newPost)
        .then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.include(newPost)
          expect(response.body.id).to.be.a('number')
        })
    })
  })

  context('PUT /posts', () => {
    it('Deve atualizar post existente', () => {
      const updatedPost = {
        id: 1,
        title: 'Título Atualizado',
        body: 'Conteúdo atualizado',
        userId: 1
      }

      cy.updatePost(1, updatedPost)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.title).to.eq('Título Atualizado')
        })
    })
  })

  context('DELETE /posts', () => {
    it('Deve deletar post', () => {
      cy.deletePost(1)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.empty
        })
    })
  })
})



