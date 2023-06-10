import { useEffect, useState } from 'react';
import style from './layout.module.css';
import { getNewsForCategories } from '@/services/newsApi';
import CategoriesBox from '../CategoriesBox';

export default function Categories() {
    const [loading, setLoading] = useState(true);
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
            setTesla(teslaInfo.articles);

            const bitcoinInfo = await getNewsForCategories('BitCoin');
            setBitcoin(bitcoinInfo.articles)

            const sportsInfo = await getNewsForCategories('sports');
            setSports(sportsInfo.articles)

            const healthInfo = await getNewsForCategories('health');
            setHealth(healthInfo.articles)

            const appleInfo = await getNewsForCategories('apple');
            setApple(appleInfo.articles)

            const businessInfo = await getNewsForCategories('business');
            setBusiness(businessInfo.articles)

            const techCrunchInfo = await getNewsForCategories('TechCrunch');
            setTechCrunch(techCrunchInfo.articles)

            const entertainmentInfo = await getNewsForCategories('entertainment');
            setEntertainment(entertainmentInfo.articles)

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

                    {tesla && <CategoriesBox type={'Tesla'} info={tesla} />}

                    {bitcoin && <CategoriesBox type={'BitCoin'} info={bitcoin} />}

                    {sports && <CategoriesBox type={'Sports'} info={sports} />}

                    {health && <CategoriesBox type={'Health'} info={health} />}

                    {apple && <CategoriesBox type={'Apple'} info={apple} />}

                    {business && <CategoriesBox type={'Business'} info={business} />}

                    {techCrunch && <CategoriesBox type={'TechCrunch'} info={techCrunch} />}

                    {entertainment && <CategoriesBox type={'Entertainment'} info={entertainment} />}

                </div>}

        </div>
    )
}