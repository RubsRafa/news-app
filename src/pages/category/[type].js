import { useRouter } from "next/router";
import style from './layout.module.css';

export default function Category() {
    const router = useRouter();
    const { type } = router.query;
    return (
        <main className={style.main}>
            Category {type}
        </main>
    )
}