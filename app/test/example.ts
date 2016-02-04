import * as supertest from "supertest";
import * as express from "express";
import * as server from "../server";
import * as mocha from "mocha";
import {Response} from "express";
import * as chai from "chai";

var expect = chai.expect;

describe('GET /api/example', function() {
  it('respond with json', function (done) {
    supertest(server.app)
      .get('/api/example')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err: any, res: supertest.Response) => {
        expect(res.body['message']).to.be.equal('example');
        done(err);
      });
  })
});

