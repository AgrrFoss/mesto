import { profile} from '../utils/constants.js'

export default class UserInfo {
    /**
     * @param {*} param0 в конструктор передаем объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
     */
    constructor ({userNameSelector, UserJobSelector}) {
        this._userName = profile.querySelector(userNameSelector);
        this._userJob = profile.querySelector(UserJobSelector);
    }
    /**публичный метод getUserInfo, который возвращает объект с данными пользователя.
     * Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
     */
    getUserInfo () {
        const userInfoNow = {userName: this._userName.textContent, userJob: this._userJob.textContent};
        return userInfoNow
    };
    /**публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
     * @param {*} data Новые данные пользователя объект с новыми данными пользователя в котором есть св-ва userName, userJob
     */
    setUserInfo ({userName, userJob}) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
    };

}
