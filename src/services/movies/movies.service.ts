import axios from 'axios';
import type { IMovie } from '../../utils';

export async function getMovies(): Promise<IMovie[]> {
    const baseUrl = import.meta.env.API_BASE_URL;
    const url = `${baseUrl}/movies`

    // const response = await fetch(url, {
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    // });
    // const data = await response.json();


    const options = {
        method: 'GET',
        url,
        headers: {
            accept: 'application/json',
        },
    };

    const res = await axios.request(options).catch(function (error) {
        console.error(error);
    });

    return res?.data;
}

export async function getMovieGenres(movieId: number): Promise<any> {
    const baseUrl = import.meta.env.API_BASE_URL;
    const url = `${baseUrl}/movies/${movieId}/genres`

    const options = {
        method: 'GET',
        url,
        headers: {
            accept: 'application/json',
        },
    };

    const res = await axios.request(options).catch(function (error) {
        console.error(error);
    });

    return res?.data;
}