const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
    const url = 'https://musclewiki.com/es-es/';

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Navegar al sitio web
        await page.goto(url, { waitUntil: 'load', timeout: 0 });

        // Extraer datos de imágenes y videos
        const mediaData = await page.evaluate(() => {
            const media = [];
            document.querySelectorAll('img, video').forEach(el => {
                if (el.tagName === 'IMG') {
                    media.push({ type: 'image', src: el.src });
                } else if (el.tagName === 'VIDEO') {
                    media.push({ type: 'video', src: el.src });
                }
            });
            return media;
        });

        await browser.close();

        res.json({ success: true, data: mediaData });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ success: false, message: 'Scraping failed', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
