import style from './layout.module.css';

export default function CategoriesBox({ type, info }) {
    return (
        <div className={style.category_box}>
                            <a href={`/category/${type}`}>
                                <h1 className={style.category_name}>{type}</h1>
                                <div className={style.main_content_box}>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[0].urlToImage} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[0].title}</h1>
                                    </div>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[1].urlToImage} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[1].title}</h1>
                                    </div>
                                </div>
                                <div className={style.main_content_box}>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[2].urlToImage} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[2].title}</h1>
                                    </div>
                                    <div className={style.news_box}>
                                        <img className={style.news_image} src={info[3].urlToImage} alt={`news_image_${type}`} />
                                        <h1 className={style.news_title}>{info[3].title}</h1>
                                    </div>
                                </div>
                            </a>
                        </div>
    )
}