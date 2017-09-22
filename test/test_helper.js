const mongoose = require('mongoose');

beforeEach('Start database', (done) => {
    mongoose.connect('mongodb://localhost/shop', { useMongoClient: true });
    mongoose.connection.once('open', () => {
        mongoose.connection.db.dropDatabase().then(() => done());
    });
})

