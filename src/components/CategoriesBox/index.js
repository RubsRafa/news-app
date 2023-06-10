import Link from 'next/link';
import style from './layout.module.css';
import { useContext } from 'react';
import Context from '@/context/Context';

export default function CategoriesBox({ type, info }) {
    const { setCategory } = useContext(Context);
    return (
        <div className={style.category_box}>
                            <Link onClick={() => {
                                setCategory(type);
                                localStorage.setItem('category', type);
                                }} href={`/category/${type}`}>
                                <h1 className={style.category_name}>{type}</h1>
                                <div className={style.main_content_box}>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[0].urlToImage || info[0].image} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[0].title}</h1>
                                    </div>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[1].urlToImage || info[1].image} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[1].title}</h1>
                                    </div>
                                </div>
                                <div className={style.main_content_box}>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[2].urlToImage || info[2].image} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[2].title}</h1>
                                    </div>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[3].urlToImage || info[3].image} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[3].title}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
    )
}