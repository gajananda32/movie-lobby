import { Request, Response } from 'express';
import { IMovie } from '../models/movieModel';
const Movie = require('../models/movieModel');


export const getAllMovies = async (req, res): Promise<void> => {
    try {
        const movies: IMovie[] = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const searchMovies = async (req, res): Promise<void> => {
    const query = req.query.q;
    try {
        const movies: IMovie[] = await Movie.find({ $or: [{ title: query }, { genre: query }] });
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMovie = async (req, res): Promise<void> => {
    const { title, genre, rating, streamingLink } = req.body;
    const newMovie = new Movie({ title, genre, rating, streamingLink });
    try {
        const savedMovie: IMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateMovie = async (req, res): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedMovie: IMovie | null = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMovie) {
            res.status(404).json({ message: 'Movie not found' });
            return;
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedMovie: IMovie | null = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
            res.status(404).json({ message: 'Movie not found' });
            return;
        }
        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
