import '../../app/globals.css';
import { useRouter } from "next/router";
import style from './layout.module.css';
import { useEffect, useState } from 'react';
import { getAllNews } from '@/services/newsApi';

export default function Category() {
    const router = useRouter();
    const { type } = router.query;
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const dataInfo = await getAllNews(type);
            setData(dataInfo.articles);
            console.log(dataInfo.articles)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <main className={style.main}>
            <div className={style.category_title}>
                <h1>Category {type}</h1>
                <a href='/'><h1>Back to home</h1></a>
            </div>

            {loading ?
            <div className={style.big_box_news}>Loading news... Stick around!</div>
            :
                <div className={style.big_box_news}>
                        {data?.map((d) => (
                            <>
                                {(d.urlToImage !== null) ?
                                    <a href={d.url}>
                                        <div className={style.news_box}>
                                            <img className={style.news_image} src={d.urlToImage} alt='news_image' />
                                            <h1 className={style.news_title}>{d.title}</h1>
                                            <h1 className={style.news_description}>{d.description}</h1>
                                        </div>
                                    </a>
                                    :

                                    <a href={d.url}>
                                        <div className={style.news_box}>
                                            <h1 className={style.news_title}>{d.title}</h1>
                                            <h1 className={style.news_description}>{d.description}</h1>
                                        </div>
                                    </a>
                                }
                            </>
                        ))}
                    </div>}
        </main>
    )
}