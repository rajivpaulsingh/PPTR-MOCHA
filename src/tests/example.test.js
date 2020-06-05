// import puppeteer from 'puppeteer';
import { step } from 'mocha-steps';
import { expect } from 'chai';

import Page from "../builder";
import LoginPage from "../pages/LoginPage";

describe('Mocha Steps Demo', () => {

    // let browser;
    let page;
    let loginPage;

    before(async () => {
        // browser = await puppeteer.launch( {
        //     headless: true,
        //     slowMo: 0
        // });
        // page = await browser.newPage();
        // await page.setDefaultTimeout(7000);
        page = await Page.build("Desktop");
        loginPage = await new LoginPage(page);
    });

    after(async () => {
        // await browser.close();
        await page.close();
    })

    // step("Should load google homepage", async () => {
    //     await page.goto("https://google.com");
    // });

    // step("Step 2 should fail", async () => {
    //     await page.waitForSelector('#FAIL');
    // });

    // step("Step 3", async () => {
    //     console.log('From step 3');
    // });

    // step("Step 4", async () => {
    //     console.log('From step 4');
    // });

    step("Should click link and type into text", async () => {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitAndClick("#onlineBankingMenu");

        // const signInButton = await page.isElementVisible('#signin_button');
        // expect(signInButton).to.be.true;
        expect(await page.isElementVisible('#signin_button')).to.be.true;
    });

    step('Should display login form', async () => {
        await page.waitAndClick('#signin_button');
        // const loginForm = await page.isElementVisible('#login_form');
        // expect(loginForm).to.be.true;
        // const signInButton = await page.isElementVisible('#signin_button');
        // expect(signInButton).to.be.false;
        expect(await page.isElementVisible('#login_form')).to.be.true;
        expect(await page.isElementVisible('#signin_button')).to.be.false;
    });

    step('Should login to the application', async () => {
        // await page.waitAndType('#user_login', "username");
        // await page.waitAndType('#user_password', "password");
        // await page.waitAndClick('.btn-primary');
        await loginPage.login("username", "password");
        // const navbar = await page.isElementVisible('.nav-tabs');
        // expect(navbar).to.be.true;
        expect(await page.isElementVisible('.nav-tabs')).to.be.true;

    });

    step('Should have 6 navbar links', async () => {
        // const navbarLinksCount = await page.getCount('.nav-tabs li');
        // expect(navbarLinksCount).to.equal(6);
        expect(await page.getCount('.nav-tabs li')).to.equal(6);
    });
})