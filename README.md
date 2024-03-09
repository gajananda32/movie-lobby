//POST method to add movie
// http://localhost:3000/api/movies
//this is reqBody
{
    "title": "New Movie",
    "genre": "Drama",
    "rating": 6.8,
    "streamingLink": "http://example.com/newmovie"
}

and got response as 
{
    "_id": "60a2080d64177b19c8f6d6eb",
    "title": "New Movie",
    "genre": "Drama",
    "rating": 6.8,
    "streamingLink": "http://example.com/newmovie"
}

//GET method to get the movieList
//http://localhost:3000/api/movies
{
    "_id": "60a2080d64177b19c8f6d6eb",
    "title": "New Movie",
    "genre": "Drama",
    "rating": 6.8,
    "streamingLink": "http://example.com/newmovie"
}

//get method
//http://localhost:3000/api/search
// search movie using title and genere
reqBody is "title": "New Movie",
{
    "_id": "60a2080d64177b19c8f6d6eb",
    "title": "New Movie",
    "genre": "Drama",
    "rating": 6.8,
    "streamingLink": "http://example.com/newmovie"
}

//Put method to update the movie
//http://localhost:3000/api/movies/60a2080d64177b19c8f6d6eb
{
    "_id": "60a2080d64177b19c8f6d6eb",
    "title": "New Movie",
    "genre": "Drama",
    "rating": 6.8,
    "streamingLink": "http://example.com/newmovie"
}

//delete method to delete 
//http://localhost:3000/api/movies/60a2080d64177b19c8f6d6eb





