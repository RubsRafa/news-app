"use client"
const { useState } = require("react");
const { default: Context } = require("./Context");

const Provider = ({ children }) => {
    const [category, setCategory] = useState('');
    const [articleTitle, setArticleTitle] = useState('');

    return (
        <Context.Provider value={{
            category,
            setCategory,
            articleTitle,
            setArticleTitle
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;