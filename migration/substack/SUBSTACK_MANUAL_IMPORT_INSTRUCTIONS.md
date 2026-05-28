# Substack Manual Import Fallback

Substack accepted the CSV upload but did not create visible posts. This folder gives you a safer manual fallback.

Use `manual-posting-index.csv` as your checklist. Each row points to one cleaned HTML file in `manual-html-posts/`.

For each post:

1. Open the HTML file in a browser.
2. Copy the title into a new Substack post title.
3. Copy the excerpt into the subtitle field if you want one.
4. Copy the body below the horizontal rule into the Substack editor.
5. Click Continue.
6. Set the post to publish to web only.
7. Uncheck email/Substack app delivery.
8. In post settings, set the displayed publication date to the original date from the HTML file.
9. Publish/update.

Do 2-3 test posts first before doing the whole archive, because Substack's editor can occasionally alter imported rich text.
