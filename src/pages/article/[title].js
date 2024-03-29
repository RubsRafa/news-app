import '../../app/globals.css';
import { getSpecifiedArticle } from "@/services/newsApi";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import style from './layout.module.css';
import Context from '@/context/Context';

export default function Article() {
    const router = useRouter();
    const { articleTitle } = useContext(Context);
    const { title, category } = router.query;
    let newTitle = title || articleTitle;
    let newCategory = category;
    const handleGoBack = () => {
        router.back()
    }
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if(typeof window !== 'undefined') {
            newTitle = newTitle || localStorage.getItem('articleTitle');
            newCategory = newCategory || localStorage.getItem('category')
        }
        try {
            setLoading(true);
            const dataInfo = await getSpecifiedArticle(newTitle);
            setData(dataInfo.articles[0]);
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
                <h1 onClick={handleGoBack}>Back to {newCategory}</h1>
                <a href='/'><h1>Back to home</h1></a>
            </div>

            {(loading && !data) &&
                <div className={style.article_main_content}>
                    Loading this article information...Don't go anywhere!
                </div>
            }
            {data &&
                <div className={style.article_main_content}>
                    <div className={style.article_info}>
                        <div className={style.article_title}>{data?.title}</div>
                        <h1 className={style.article_author}>Author: {(data?.author) ? (data.author) : 'Anonymous'}</h1>
                        {data?.publishedAt &&
                            <h1 className={style.article_date}>Published at: {`${data?.publishedAt.slice(0, 4)}/${data?.publishedAt.slice(5, 7)}/${data?.publishedAt.slice(8, 10)} at ${data?.publishedAt.slice(11, 16)}`}</h1>
                        }
                    </div>

                    <div className={style.article_content_box}>
                        <div className={style.article_content}>
                            {(data?.urlToImage || data?.image) && <img className={style.article_image} src={data?.urlToImage || data?.image} alt='article_image' />}
                            <h2 className={style.article_source}>Source: {data?.source.name}</h2>
                        </div>
                        <div className={style.article_content}>
                            <h1 className={style.article_description}>{data?.description}</h1>
                            <h1 className={style.article_more}>For more information, <a href={data?.url}>click here</a>.</h1>
                        </div>
                    </div>

                    <div className={style.article_main_text}>
                        {data?.content}
                    </div>
                </div>}
        </main>
    )
}