import { useTranslation } from "react-i18next";
import profileImg from "../assets/eskiemre.jpg"

const Profile = () => {
    const { t } = useTranslation();

    return (
        <div className="profile">
        <div className="profile-title">
            <h1>
                {t('profileTitle')}
            </h1>
        </div>
            <div className="row profile-content">
                <div className="col-sm-4 profile-info">
                <div>
                    <h3>
                    {t('profileBasicInfo')}
                    </h3>
                    <table>
                        <tbody>
                        <tr>
                            <th>{t('DoB')}</th>
                            <td>07.07.1986</td>
                        </tr>
                        <tr>
                            <th>{t('city')}</th>
                            <td>Mersin</td>
                        </tr>
                        <tr>
                            <th>{t('education')}</th>
                            <td>{t('university')}</td>
                        </tr>
                        <tr>
                            <th>{t('role')}</th>
                            <td>Frontend, UI</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
                </div>
                <div className="col-sm-4 profile-img">
                <img src={profileImg}></img>
                </div>
                <div className="col-sm-4 profile-about">
                <h3>
                        {t('profileAboutTitle')}
                    </h3>
                    <p className="text-white mt-3">
                {t('profileAboutMe')}<br/><br/>
                {t('profileAboutMe2')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile