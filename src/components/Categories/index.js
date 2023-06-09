import style from './layout.module.css';

export default function Categories() {
    return (
        <div className={style.all_content}>

            <div className={style.category_title}>
                <h1>CATEGORIES</h1>
            </div>

            <div className={style.main_content}>
                <div className={style.category_box}>
                    <h1 className={style.category_name}>Tesla</h1>
                    <a href=''>
                        <div className={style.news_box}>
                            <img className={style.news_image} src='' alt='news_image' />
                            <h1 className={style.news_title}>Título</h1>
                            <h1 className={style.news_description}>Descrição</h1>
                        </div>
                    </a>
                </div>

                <div className={style.category_box}>
                    <h1 className={style.category_name}>Tesla</h1>
                    <a href=''>
                        <div className={style.news_box}>
                            <img className={style.news_image} src='' alt='news_image' />
                            <h1 className={style.news_title}>Título</h1>
                            <h1 className={style.news_description}>Descrição</h1>
                        </div>
                    </a>
                </div>

                <div className={style.category_box}>
                    <h1 className={style.category_name}>Tesla</h1>
                    <a href=''>
                        <div className={style.news_box}>
                            <img className={style.news_image} src='' alt='news_image' />
                            <h1 className={style.news_title}>Título</h1>
                            <h1 className={style.news_description}>Descrição</h1>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}