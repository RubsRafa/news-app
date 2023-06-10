"use client"
import { createContext } from "react";

const Context = createContext({
    category: null,
    articleTitle: null,
})

export default Context;