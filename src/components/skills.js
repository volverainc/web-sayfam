import "../styles/desktop.css"
import { skillImages } from "../datasets/datas"
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="skills">
            <div className="skills-content">
                <div className="skills-title">
                    <h1>
                        {t('skillsTitle')}
                    </h1>
                </div>
                <div className="skills-icons">
                    <div className="skills-map">
                        {skillImages.map((img) => (
                            <div className="skills-thumbnails">
                                <img alt="skills" src={img.img} />
                                <span>{img.title}</span>
                            </div>
                        ))}</div>
                </div>
            </div>
        </div>
    )
}

export default Skills