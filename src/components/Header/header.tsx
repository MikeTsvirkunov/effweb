import Logo from "../Logo/logo";
import Navigation from "./Navigation/navigation";
import css from "./header.module.scss";

export default function Header() {

    return (
        <header className={css.header_block}>
            <div className={css.container}>
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}