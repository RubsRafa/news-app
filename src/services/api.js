import dayjs from "dayjs";

const today = dayjs();
const date = `${today.$y}-${today.$M}-${today.$D}`
const baseURL = `${process.env.NEXT_PUBLIC_API_URL}?language=en&from=${date}&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`

export default baseURL;