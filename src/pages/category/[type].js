import '../../app/globals.css';
import { useRouter } from "next/router";
import style from './layout.module.css';
import { useContext, useEffect, useState } from 'react';
import { getAllNews } from '@/services/newsApi';
import Link from 'next/link';
import Context from '@/context/Context';

export default function Category() {
    const router = useRouter();
    const { category, setArticleTitle } = useContext(Context);
    const { type } = router.query;
    let newType = type || category;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if(typeof window !== 'undefined') {
            newType = newType || localStorage.getItem('category');
        }
        try {
            setLoading(true);
            const dataInfo = await getAllNews(newType);
            setData(dataInfo.articles);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 3000);
    }, [])
    
    return (
        <main className={style.main}>
            <div className={style.category_title}>
                <h1>Category {newType}</h1>
                <a href='/'><h1>Back to home</h1></a>
            </div>

            {loading ?
            <div className={style.big_box_news}>Loading news... Stick around!</div>
            :
                <div className={style.big_box_news}>
                        {data?.map((d, i) => (
                            <>
                                {(d.urlToImage !== null || d.image !== null) ?
                                    <Link onClick={() => {
                                        localStorage.setItem('articleTitle', d.title);
                                        setArticleTitle(d.title);
                                        }} key={i} href={`/article/${d.title}?category=${newType}`}>
                                        <div className={style.news_box}>
                                            <img className={style.news_image} src={d.urlToImage || d.image} alt='news_image' />
                                            <h1 className={style.news_title}>{d.title}</h1>
                                            <h1 className={style.news_description}>{d.description}</h1>
                                        </div>
                                    </Link>
                                    :

                                    <Link onClick={() => {
                                        localStorage.setItem('articleTitle', d.title);
                                        setArticleTitle(d.title);
                                        }} key={i} href={`/article/${d.title}?category=${newType}`}>
                                        <div className={style.news_box}>
                                            <h1 className={style.news_title}>{d.title}</h1>
                                            <h1 className={style.news_description}>{d.description}</h1>
                                        </div>
                                    </Link>
                                }
                            </>
                        ))}
                    </div>}
        </main>
    )
}