/* eslint-disable no-unused-vars */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const Personas = require('../models/persona');
const execute = require('child_process').exec;

const should = chai.should();
chai.use(chaiHttp);

describe('Personas', () => {
  beforeEach((done) => {
    Personas.remove({}, (err) => {
      done();
    });
  });
});

describe('/GET people', () => {
  it('it should GET all personas', (done) => {
    chai.request(app)
      .get('/people')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.type.should.equal('application/json');
        res.body.length.should.be.eql(2);
        done();
      });
  });
});

describe('/GET search{username}', () => {
  it('it should GET persona matching username', (done) => {
    chai.request(app)
      .get('/search/CharlieXXX')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.type.should.equal('application/json');
        res.body.length.should.be.eql(1);
        done();
      });
  });
});

describe('/DELETE people', () => {
  it('it should DELETE a persona matching username', (done) => {
    chai.request(app)
      .delete('/people/mauriceharris')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.type.should.equal('text/html');
        done();
      });
  });
});

describe('/DELETE people', () => {
  it('it should DELETE a persona matching username', (done) => {
    chai.request(app)
      .delete('/people/CharlieXXX')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.type.should.equal('text/html');
        done();
      });
  });
});

execute('export NODE_ENV=test && sequelize db:seed:all');
