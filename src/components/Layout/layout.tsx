import Header from "../Header/header";
import css from "./layout.module.scss";
import Footer from "../Footer/footer";
import Comments from "../Comments/comments";
import Lastest from "../Lastest/lastest";


export default function Layout() {
    return (
        <div className={css.layout_block}>
            <Header/>
            <main>
                <Comments />
                <Lastest />
            </main>
            <Footer/>
        </div>   
    )
}