import styles from "./NavigationPanel.module.scss";

const NavigationPanel= ()=> {
    return (
        <div className={styles.navigationPanelWrapper}>
            <div className={styles.navElement}>
                <a href='/'><span style ={{fontSize: 10}}>Таблица неправильных глаголов</span></a>
            </div>
            <div className={styles.navElement}>
                <a href='/'>Словарик</a>
            </div>
            <div className={styles.navElement}>
                <a href='/'>Упражнения</a>
            </div>
            
        </div>
    )
}

export default NavigationPanel;