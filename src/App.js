import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/hero';
import Skills from './components/skills';
import Profile from './components/profile';
import "./styles/dark.css"
import Projects from './components/projects';
import Footer from './components/footer';
import "./styles/responsive.css"
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App(props) {
  const { theme } = props
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('translated') || 'en');
  useEffect(() => {
    i18n.changeLanguage(language)
    const storedLanguage = localStorage.getItem('translated');
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
      setLanguage(storedLanguage);
    }
  }, [i18n, language])

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
