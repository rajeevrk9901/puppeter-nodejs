// const path = require("path");
const puppeteer = require("puppeteer")

async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://www.lnmipat.ac.in/")

    const randomNum = Math.floor( Math.random()*1000)
    console.log(randomNum)
    
    await page.screenshot({path:`${randomNum}example.png`, fullPage:true});
    await browser.close()
}

run()