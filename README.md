# AstroJS Cloudflare custom error pages

AstroJS Cloudflare Error is a collection of custom error pages for any website built with AstroJS or not.
These static pages use AstroJS and Github pages to make it easy to assign custom error pages in CloudFlare for your site.

It is more or less a fork of [mjwebs/cloudflare-error](https://github.com/mjwebs/cloudflare-error/) with some modifications and added to the AstroJS structure.

View the resulting error pages here https://ehlovader.github.io/astro-cloudflare-error/

## Requirements
  * CloudFlare Pro account or above
  * Github or Gitlab

## Installation
1. Fork this repository
2. Update repo as needed
   * Update the email address in `ContactSupport.astro` or Remove `<ContactSupport />` from each error file
   * Update styles to match your site
   * Pages must remain under 1.43 MB including images, fonts, and styles
3. Push changes to your fork, you will have a URL like `https://<your-username>.github.io/cloudflare-error-pages/`
4. Open CloudFlare and go to your domain
5. Click on the `Custom Pages` tab
6. Click on the `Customize` button
7. Enter the URL of the page for that error
8. Click `Preview` to test that works and `Publish` to make it live
9. Repeat for each error page

## TODO
  * Finish Gitlab pages

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
* [AstroJS](https://astro.build/)
* [mjwebs/cloudflare-error](https://github.com/mjwebs/cloudflare-error)
* [Cloudflare Error Pages](https://support.cloudflare.com/hc/en-us/articles/115003011431-Cloudflare-Error-Pages)
