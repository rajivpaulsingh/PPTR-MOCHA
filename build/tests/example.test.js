'use strict';

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import puppeteer from 'puppeteer';
describe('Mocha Steps Demo', function () {

    // let browser;
    var page = void 0;

    before(async function () {
        // browser = await puppeteer.launch( {
        //     headless: true,
        //     slowMo: 0
        // });
        // page = await browser.newPage();
        // await page.setDefaultTimeout(7000);
        page = await _builder2.default.build("Desktop");
    });

    after(async function () {
        // await browser.close();
        await page.close();
    });

    (0, _mochaSteps.step)("Should load google homepage", async function () {
        await page.goto("https://google.com");
    });

    (0, _mochaSteps.step)("Step 2 should fail", async function () {
        await page.waitForSelector('#FAIL');
    });

    (0, _mochaSteps.step)("Step 3", async function () {
        console.log('From step 3');
    });

    (0, _mochaSteps.step)("Step 4", async function () {
        console.log('From step 4');
    });
});