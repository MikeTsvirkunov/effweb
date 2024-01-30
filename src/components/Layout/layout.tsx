import Header from "../Header/header";
import css from "./layout.module.scss";
import Footer from "../Footer/footer";
import Comments from "../Comments/comments";


export default function Layout() {
    return (
        <div className={css.layout_block}>
            <Header/>
            <main>
            <Comments />
            </main>
            <Footer/>
        </div>   
    )
}