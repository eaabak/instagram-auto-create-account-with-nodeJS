const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const getInstCode = async function (domain, mailName, browser) {

    const INST_CODE = 'https://email-fake.com/' + domain + '/' + mailName;
    let code = "";
    try {
        await browser.executeScript('window.open("newURL");');
        let tab = await browser.getAllWindowHandles();
        await browser.switchTo().window(tab[1]);
        await browser.get(INST_CODE);
        await sleep(10000);
        code = await browser.findElement(By.xpath("//*[@id='email-table']/div[2]/div[1]/div/h1")).getText();
        console.log(code)
        code = code.replace("is your Instagram code", "");
        await browser.switchTo().window(tab[0]);
    } catch (error) {

    } finally {
        return code;
    }
};

module.exports = { getInstCode };
