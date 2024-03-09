
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

export interface IMovie extends Document {
    title: string;
    genre: string;
    rating: number;
    streamingLink: string;
}

const MovieSchema: typeof Schema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    streamingLink: { type: String, required: true }
});

const movieModel = mongoose.model('movie', MovieSchema);

module.exports = movieModel;