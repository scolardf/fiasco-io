import React from 'react';
import styles from "./stylesheets/home.module.css";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.pageNav = this.pageNav.bind(this);
    }

    pageNav(page) {
        this.props.navHandler(page);
    }

    render() {
        return (
            <div className={styles.homeContainer}>
                <h1 className={styles.nameH1}>my name is <span className={styles.highlight} >Fiach Scolard</span></h1>
                <p>i'm a new developer</p>
                <div className={styles.navContainer}>
                    <button className={styles.navButton} onClick={() => this.pageNav("Projects")}>see my work</button>
                    <button className={styles.navButton} onClick={() => this.pageNav("About")}>who am i</button>
                </div>
            </div>
        );
        }
}

export default Home;