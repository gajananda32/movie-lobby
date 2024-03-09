import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../api'

chai.use(chaiHttp);
const expect = chai.expect;

describe('Movie Routes', () => {
    let movieId: string;

    it('should list all movies in the lobby', (done) => {
        chai.request(app)
            .get('/api/movies')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should search for a movie by title or genre', (done) => {
        chai.request(app)
            .get('/api/search?q=action')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should add a new movie to the lobby', (done) => {
        chai.request(app)
            .post('/api/movies')
            .send({
                title: 'Test Movie',
                genre: 'Test Genre',
                rating: 7.5,
                streamingLink: 'http://example.com/testmovie'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('_id');
                movieId = res.body._id;
                done();
            });
    });

    it('should update an existing movie information', (done) => {
        chai.request(app)
            .put(`/api/movies/${movieId}`)
            .send({
                title: 'Updated Test Movie'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('title', 'Updated Test Movie');
                done();
            });
    });

    it('should delete a movie from the lobby', (done) => {
        chai.request(app)
            .delete(`/api/movies/${movieId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('_id', movieId);
                done();
            });
    });
});
