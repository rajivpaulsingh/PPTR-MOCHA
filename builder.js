import puppeteer from 'puppeteer'

export default class Builder {

    static async build(viewport) {
        const launchOptions = {
            headless: true,
            sloMo: 0,
            args: [
                "--no-sandbox",
                "--disable-setui-sandbox",
                "--disable-web-security"
            ]
        };

        const browser = await puppeteer.launch(launchOptions);
        const page = await browser.newPage();
        const extendedPage = new Builder(page);
        await page.setDefaultTimeout(10000);

        switch(viewport) {
            case "Mobile":
                const mobileViewPort = puppeteer.devices['iPhone X'];
                await page.emulate(mobileViewPort);
                break;
            case "Tablet":
                const tabletViewPort = puppeteer.devices['iPad landscape'];
                await page.emulate(mobileViewPort);
                break;
            case "Desktop":
                await page.setViewport({ width: 800, height: 600 });
                break;       
            default:
                throw new Error('The supported devices are only Mobile | Tablet | Desktop')             
        }

        //JavaScript proxy
        return new Proxy(extendedPage, {
            get: function(_target, property) {
                return extendedPage[property] || browser[property] || page[property];
            }
        });
    }

    constructor(page) {
        this.page = page;
    }
}