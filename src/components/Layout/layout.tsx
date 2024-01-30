import Header from "../Header/header";
import css from "./layout.module.scss";
import Footer from "../Footer/footer";


export default function Layout() {
    return (
        <div className={css.layout_block}>
            <Header/>
            <main>
            </main>
            <Footer/>
        </div>   
    )
}