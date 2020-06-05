export default class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.waitAndType('#user_login', username);
        await this.page.waitAndType('#user_password', password);
        await this.page.waitAndClick('.btn-primary');
    }
}