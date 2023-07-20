import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Toggle } from '../Toggle';
import en from '../assets/en.png'
const Header = () => {
    const [language, setLanguage] = useState(localStorage.getItem('translated') || 'en');
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem("translated", event.target.value);
        setLanguage(event.target.value);
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
    
        // Set the theme class for the body
        document.body.className = theme;
        localStorage.setItem('dark mode', theme);
      }, [i18n, language, theme]);

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