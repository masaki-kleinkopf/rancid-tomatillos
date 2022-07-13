describe('Grid View', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 201,
      body: {
        "movies": [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.875,
        "release_date": "2020-09-29"
        },
        {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 5.1,
        "release_date": "2020-09-04"
        },
        {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 7.333333333333333,
        "release_date": "2020-08-20"
        },
        {
        "id": 539885,
        "poster_path": "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
        "title": "Ava",
        "average_rating": 5.875,
        "release_date": "2020-07-02"
        },
        {
        "id": 581392,
        "poster_path": "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
        "title": "Peninsula",
        "average_rating": 7.166666666666667,
        "release_date": "2020-07-15"
        }]

      }
    })
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

  it('Should not contain an error message', () => {
    cy.contains('Oops! Something went wrong!').should('not.exist')
  });
})