import '../../app/globals.css';
import { getSpecifiedArticle } from "@/services/newsApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from './layout.module.css';

export default function Article() {
    const router = useRouter();
    const { title } = router.query;
    const handleGoBack = () => {
        router.back()
    }
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const dataInfo = await getSpecifiedArticle(title);
            setData(dataInfo.articles[0]);
            console.log(dataInfo.articles[0])
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
                <h1 onClick={handleGoBack}>Go back</h1>
                <a href='/'><h1>Back to home</h1></a>
            </div>


            <div className={style.article_main_content}>
                <div className={style.article_info}>
                    <div className={style.article_title}>titulo</div>
                    {/* <h1>Written by: {data.author ? data.author : 'Anonymous'}</h1> */}
                </div>
            </div>
        </main>
    )
}