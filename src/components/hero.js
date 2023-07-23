import "../styles/desktop.css"
import heroImg from "../assets/hero-img.jpg"
import { useTranslation } from "react-i18next"
import Header from "./header";
import { heroButtons } from "../datasets/datas";
import { v4 } from "uuid";

const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <div className="hero">
            <Header />
            <div className="row hero-content">
                <div className="col-sm-8 hero-text">
                <h1>
                        {t('heroTitle')}
                    </h1>
                    <p>{t('heroText')}</p>
                    {heroButtons.map((i) => (
                        <a key={v4()} href={i.url} target="_blank"><button className="hero-button">
                            <i className={i.icon}></i> {i.name}
                        </button></a>
                    ))}
                </div>
                <div className="col-sm-4 hero-image">
                <img src={heroImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero