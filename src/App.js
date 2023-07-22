import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/hero';
import Skills from './components/skills';
import Profile from './components/profile';
import "./styles/dark.css";
import Projects from './components/projects';
import Footer from './components/footer';
import "./styles/responsive.css";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App(props) {
  const { theme } = props;
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('translated') || 'en');

  useEffect(() => {
    const systemLanguage = navigator.language.split('-')[0];

    if (systemLanguage !== i18n.language) {
      i18n.changeLanguage(systemLanguage);
      setLanguage(systemLanguage);
      localStorage.setItem('translated', systemLanguage);
    } else {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  return (
    <div className={`App ${theme}`}>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
