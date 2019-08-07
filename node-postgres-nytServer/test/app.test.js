const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return "hello world"', () => {
    return request(app)
      .get('/')
      .expect(200, 'hello world')
  })
})

describe('GET /books', () => {
  it('should return an array of books', () => {
    return request(app)
      .get('/books')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf.at.least(1);
      })
  })

  it('should return 400 code if sort value is incorrect', () => {
    return request(app)
      .get('/books')
      .query({sort: 'DATE'})
      .expect(400, 'Sort must be one of title or rank')
  })

  it('should sort by title', () => {
    return request(app)
    .get('/books')
    .query({sort: 'title'})
    .expect(200)
    .then((res) => {
      let i = 0;
      let sorted = true;  //false
      while (sorted && i < res.body.length - 1) { // sorted = false i = 1  //19
        // if (res.body[i].title < res.body[i+1].title) {
        //   i++
        // } else {
        //   sorted = false;
        // }
        sorted = sorted && res.body[i].title < res.body[i+1];
                  //true && false
        i++
      }
    })
    expect(sorted).to.be.true
  })
})

/*
  let sorted = true; 
  [BRIGHT SHINY MORNING, CARELESS IN RED, BANANAS, EXECUTIVE PRIVILEGE]
   
                              ^
    sorted = false
   
*/