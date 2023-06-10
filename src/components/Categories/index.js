import { useEffect, useState } from 'react';
import style from './layout.module.css';
import { getNewsForCategories } from '@/services/newsApi';

export default function Categories() {
    const [loading, setLoading] = useState(false);
    const [tesla, setTesla] = useState(null);
    const [bitcoin, setBitcoin] = useState(null);
    const [sports, setSports] = useState(null);
    const [health, setHealth] = useState(null);
    const [apple, setApple] = useState(null);
    const [business, setBusiness] = useState(null);
    const [techCrunch, setTechCrunch] = useState(null);
    const [entertainment, setEntertainment] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const teslaInfo = await getNewsForCategories('tesla');
            setTesla(teslaInfo.articles[0]);

            const bitcoinInfo = await getNewsForCategories('BitCoin');
            setBitcoin(bitcoinInfo.articles[0])

            const sportsInfo = await getNewsForCategories('sports');
            setSports(sportsInfo.articles[0])

            const healthInfo = await getNewsForCategories('health');
            setHealth(healthInfo.articles[0])

            const appleInfo = await getNewsForCategories('apple');
            setApple(appleInfo.articles[0])

            const businessInfo = await getNewsForCategories('business');
            setBusiness(businessInfo.articles[0])

            const techCrunchInfo = await getNewsForCategories('TechCrunch');
            setTechCrunch(techCrunchInfo.articles[0])

            const entertainmentInfo = await getNewsForCategories('entertainment');
            setEntertainment(entertainmentInfo.articles[0])

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={style.all_content}>

            {loading ?

                <div className={style.main_content}>Loading news... Stay tuned!</div>
                :

                <div className={style.main_content}>

                    {tesla &&
                        <div className={style.category_box}>
                            <a href={`/category/Tesla`}>
                                <h1 className={style.category_name}>Tesla</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={tesla.urlToImage} alt='news_image_tesla' />
                                    <h1 className={style.news_title}>{tesla.title}</h1>
                                    <h1 className={style.news_description}>{tesla.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {bitcoin &&
                        <div className={style.category_box}>
                            <a href={`/category/bitcoin`}>
                                <h1 className={style.category_name}>BitCoin</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={bitcoin.urlToImage} alt='news_image_bitcoin' />
                                    <h1 className={style.news_title}>{bitcoin.title}</h1>
                                    <h1 className={style.news_description}>{bitcoin.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {sports &&
                        <div className={style.category_box}>
                            <a href={`/category/sports`}>
                                <h1 className={style.category_name}>Sports</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={sports.urlToImage} alt='news_image_sports' />
                                    <h1 className={style.news_title}>{sports.title}</h1>
                                    <h1 className={style.news_description}>{sports.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {health &&
                        <div className={style.category_box}>
                            <a href={`/category/health`}>
                                <h1 className={style.category_name}>Health</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={health.urlToImage} alt='news_image_health' />
                                    <h1 className={style.news_title}>{health.title}</h1>
                                    <h1 className={style.news_description}>{health.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {apple &&
                        <div className={style.category_box}>
                            <a href={`/category/apple`}>
                                <h1 className={style.category_name}>Apple</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={apple.urlToImage} alt='news_image_apple' />
                                    <h1 className={style.news_title}>{apple.title}</h1>
                                    <h1 className={style.news_description}>{apple.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {business &&
                        <div className={style.category_box}>
                            <a href={`/category/business`}>
                                <h1 className={style.category_name}>Business</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={business.urlToImage} alt='news_image_business' />
                                    <h1 className={style.news_title}>{business.title}</h1>
                                    <h1 className={style.news_description}>{business.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {techCrunch &&
                        <div className={style.category_box}>
                            <a href={`/category/techCrunch`}>
                                <h1 className={style.category_name}>Tech Crunch</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={techCrunch.urlToImage} alt='news_image_techCrunch' />
                                    <h1 className={style.news_title}>{techCrunch.title}</h1>
                                    <h1 className={style.news_description}>{techCrunch.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                    {entertainment &&
                        <div className={style.category_box}>
                            <a href={`/category/entertainment`}>
                                <h1 className={style.category_name}>Entertainment</h1>
                                <div className={style.news_box}>
                                    <img className={style.news_image} src={entertainment.urlToImage} alt='news_image_entertainment' />
                                    <h1 className={style.news_title}>{entertainment.title}</h1>
                                    <h1 className={style.news_description}>{entertainment.news_description}</h1>
                                </div>
                            </a>
                        </div>}

                </div>}

        </div>
    )
}