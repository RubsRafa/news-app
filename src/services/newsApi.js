import baseURL from './api';

export async function getNewsForCategories(type) {
    const response = await fetch(`${baseURL}&q=${type}&pageSize=1`);
    const data = await response.json();
    return data;
}