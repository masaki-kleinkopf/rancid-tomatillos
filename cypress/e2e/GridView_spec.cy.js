describe('Grid View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 201,
      fixture: "GridViewData.json"
    })
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/42", {
      statusCode: 404,
      body: {
        error: "No movie found with id:42"
      }
    });
  });

  it('Should show a header', () => {
    cy.contains('header', 'Rancid Tomatillos')
  });

  it('Should show a collection of movies', () => {
    cy.contains('.GridMovie', 'Money Plane')
    cy.contains('.GridMovie', 'Mulan')
    cy.contains('.GridMovie', 'Rogue')
    cy.contains('.GridMovie', 'Ava')
    cy.contains('.GridMovie', 'Peninsula')
  });

  it('Should have movie images', () => {
    cy.get('img').should('have.class', 'grid-movie-image')
  });
  
  it('Should have movie images with alt tags', () => {
    cy.get('img').first().should('have.attr', 'alt').should("include", "Poster for Money Plane")
  });

  it('Should not contain an error message at localhost:3000', () => {
    cy.contains('Uh oh! Something went wrong').should('not.exist')
  });

  it('Should contain an error message when user goes to a url that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/42').contains('Oh no, looks like this movie doesn\'t exist!')
  });

  it('Should contain an error image when user goes to a url that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/42')
    cy.get('img')
    .should('have.attr', 'src')
    .should('include', 'https://i.imgur.com/LPrBf4g.png')
  });

  it('Should have a back button to take the user back to grid view when they go to a page that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/42').contains('Back to all movies');
  });

  it('Back button takes the user back to the landing page', () => {
    cy.visit('http://localhost:3000/42')
    cy.get('.toggle-button').click()
    cy.contains('Money Plane')
  });
  
})