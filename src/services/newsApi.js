import baseURL from './api';

export async function getNewsForCategories(type) {
    const response = await fetch(`${baseURL}&q=${type}&pageSize=4`);
    const data = await response.json();
    return data;
}

export async function getAllNews(type) {
    const response = await fetch(`${baseURL}&q=${type}&pageSize=20`);
    const data = await response.json();
    return data;
}

export async function getSpecifiedArticle(title) {
    const response = await fetch(`${baseURL}&qInTitle=${title}&pageSize=1`);
    const data = await response.json();
    return data;
}