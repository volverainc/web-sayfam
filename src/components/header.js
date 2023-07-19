import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Toggle } from '../Toggle';

const Header = () => {
    const { i18n } = useTranslation(localStorage.getItem('translated'));

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem("translated", i18n.language)
    };

    const [theme, setTheme] = useState(localStorage.getItem('dark mode') || 'default')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("dark mode", theme)
    }, [theme]);

    return (
        <header>
            <div className="logo">
                <a href="/" style={{ textDecoration: "none" }}><h1>emresert</h1></a>
            </div>
            <div className="header-items">
                <div>
                    <button className='language-button' value={i18n.language === 'en' ? 'tr' : 'en'} onClick={handleLanguageChange}>
                        {i18n.language === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
                    </button>
                </div>
                <div>
                    <Toggle
                        toggled={true}
                        onClick={toggleTheme}
                    /><span className='dark-span'>{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}</span>
                </div>
            </div>
        </header>
    )
}

export default Header