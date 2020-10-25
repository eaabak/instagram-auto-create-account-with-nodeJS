const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const getInstCode = async function (domain, mailName, browser) {

    const INST_CODE = 'https://email-fake.com/' + domain + '/' + mailName;
    let code = "";
    try {
        await browser.get(INST_CODE);
        await browser.executeScript('window.open("newURL");');
        await sleep(50000);
        code = await browser.findElement(By.xpath("//*[@id='email-table']/div[2]/div[1]/div/h1")).getText();
        console.log(code)
        code = code.replace("is your Instagram code", "");
    } catch (error) {

    } finally {
    return code;
    }
};

module.exports = { getInstCode };
