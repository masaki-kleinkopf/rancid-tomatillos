import { useTransition } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"


describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 201,
      fixture: "SingleMovieData.json"
    })
  })

  it("should start at landing page", () => {
    cy.contains("Rancid Tomatillos")
  })

  it("should take a user to a new page when movie poster is clicked", () => {
    cy.get(".GridMovie")
    .click()
    .url()
    .should("include", "694919")
  })

  it("should show a movies details", () => {
    cy.get(".GridMovie")
    .click()
    cy.get(".SingleMovie")
    cy.contains("Money Plane")
    cy.contains("Overview:")
    cy.contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist")
    cy.contains("Average User Rating: 6.88/10")
    cy.contains("Release Date: September 29, 2020")
    cy.contains("Genre: Action")
  })

  it("should have a movie poster display", () => {
    cy.get(".GridMovie")
    .click()
    cy.get("img")
    .should('have.attr', 'src')
    .should("include", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  })

  it("should have a movie poster with alt tag", () => {
    cy.get(".GridMovie")
    .click()
    cy.get("img")
    .should('have.attr', 'alt')
    .should("include", "Poster for Money Plane")
  })
  
  it("should have a corresponding background image", () => {
    cy.get(".GridMovie")
    .click()
    cy.get(".SingleMovie")
    .should("have.css", "background-image")
    .should("include", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
  })

  it('Should show a header', () => {
    cy.contains('header', 'Rancid Tomatillos')
  });

  it('Should not contain an error message', () => {
    cy.get(".GridMovie")
    .click()
    cy.contains('Oh no, looks like this movie doesn\'t exist!').should('not.exist')
  });

  it("Should have a button taking user back to main page",() => {
    cy.get(".GridMovie")
    .click()
    cy.get("button")
    .contains("button", "Return to all movies")
    .click()
    cy.contains('.GridMovie', 'Money Plane')
  });

  it('Should have a back button if the user goes directly to the movie URL', () => {
    cy.visit('http://localhost:3000/694919').contains("button", "Return to all movies")
  });
})

