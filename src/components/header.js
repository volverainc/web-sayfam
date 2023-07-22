import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Toggle } from '../Toggle';

const Header = () => {
  const [language, setLanguage] = useState(localStorage.getItem('translated') || 'en');
  const { i18n } = useTranslation();


  useEffect(() => {
    const systemLanguage = navigator.language.split('-')[0];

    if (systemLanguage !== i18n.language) {
      i18n.changeLanguage(systemLanguage);
      setLanguage(systemLanguage);
      localStorage.setItem('translated', systemLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem('translated', selectedLanguage);
  };

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(localStorage.getItem('dark mode') || (systemDark ? 'dark' : 'light'));

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('dark mode', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark mode');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    darkModeMediaQuery.addListener(handleDarkModeChange);
    return () => darkModeMediaQuery.removeListener(handleDarkModeChange);
  }, []);

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
            toggled={theme === 'dark'}
            onClick={toggleTheme}
          />
          <span className='dark-span'>{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
