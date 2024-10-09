import { FC } from "react";

import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import pagesConfig from "../../config/pages.config";
import HeaderTemplate from "../../templates/layouts/headers/Header.template";

const HomePage: FC = () => {
    return (
        <main className={styles.homepage}>
            <HeaderTemplate />
            <section>
                <h1>
                    You travel the world.
                    <br />
                    WorldWise keeps track of your adventures.
                </h1>
                <h2>
                    A world map that tracks your footsteps into every city you
                    can think of. Never forget your wonderful experiences, and
                    show your friends how you have wandered the world.
                </h2>
                <Link to={pagesConfig.appPage.to} className="cta">
                    Start tracking now
                </Link>
            </section>
        </main>
    );
};

export default HomePage;
