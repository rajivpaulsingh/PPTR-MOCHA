// import puppeteer from 'puppeteer';
import { step } from 'mocha-steps';
import { expect } from 'chai';

import Page from "../builder";

describe('Mocha Steps Demo', () => {

    // let browser;
    let page;

    before(async () => {
        // browser = await puppeteer.launch( {
        //     headless: true,
        //     slowMo: 0
        // });
        // page = await browser.newPage();
        // await page.setDefaultTimeout(7000);
        page = await Page.build("Desktop");
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

        const signInButton = await page.isElementVisible('#signin_button');
        expect(signInButton).to.be.true;
    });
})