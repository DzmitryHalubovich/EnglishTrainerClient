import {AiOutlineUser} from 'react-icons/ai';
import styles from './Header.module.scss'

const Header= ()=> {
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.headerLogo}>
                    <a href='/' className={styles.headerLogoLink}>
                        <h3><span>English</span> trainer</h3>
                        <span>
                            enjoy your English!
                        </span>
                    </a>
                </div>
                <a href='/' className={styles.loginWrapper}>
                    <div className={styles.login}>
                        <AiOutlineUser/>
                        Личный кабинет
                    </div>
                </a>
                <div className={styles.line}></div>
                
            </header>

        </div>
    );
};

export default Header;