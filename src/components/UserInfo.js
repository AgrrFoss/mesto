export default class UserInfo {
    /**
     * @param {*} param0 в конструктор передаем объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
     */
    constructor ({userNameSelector, UserJobSelector, userAva}) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(UserJobSelector);
        this._avatar = document.querySelector(userAva)
        this._userId
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
    setUserInfo ({userName, userJob, userAva, userId}) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._avatar.src = userAva;
        this._userId = userId
    };

}
