const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.get('/screenshot', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send('Please provide a URL');
    }

    let browser;
    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const screenshotBuffer = await page.screenshot();

        res.set('Content-Type', 'image/png');
        res.send(screenshotBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while taking the screenshot');
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

app.listen(port, () => {
    console.log(`Screenshot API listening at http://localhost:${port}`);
});
