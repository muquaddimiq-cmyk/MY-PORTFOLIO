# IQ.design: Muquaddim Omisore Portfolio

A single page portfolio built with Vite, React and Tailwind CSS. It deploys to GitHub Pages and is meant to live on the domain iq.design.

## How deployment works

Every time you push a change to the `main` branch on GitHub, a workflow in `.github/workflows/deploy.yml` builds the site and publishes it. You never build anything by hand.

## One time setup

1. Put this folder on GitHub (GitHub Desktop is the easiest way).
2. On GitHub open the repository, then Settings, then Pages. Under Source choose GitHub Actions.
3. Open the Actions tab and run "Deploy to GitHub Pages" once, if it has not run already.
4. Back in Settings, Pages, type `iq.design` under Custom domain and click Save.
5. At your domain registrar add these DNS records for `iq.design`:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | YOUR_GITHUB_USERNAME.github.io |

6. Wait for DNS to update (often minutes, sometimes up to 24 hours). Then tick Enforce HTTPS in Settings, Pages.

## Run it on your own computer (optional)

You need Node 18.18 or newer.

    npm install
    npm run dev        # development server at http://localhost:5173
    npm run build      # production build into dist
    npm run preview    # serve the production build locally

## Where to edit things

| What | File |
| --- | --- |
| Email, Behance, X, Instagram, booking and prototype links | `src/data/links.js` |
| Work cards, resume entries, side projects, case study text | `src/data/content.js` |
| Home page copy | `src/pages/Home.jsx` |
| About page copy and stickers | `src/pages/About.jsx` |
| Colours and theme tokens | `:root` and `:root.dark` in `src/index.css` |
| Images and logos | `src/assets/images` and `src/assets/logos`, registered in `src/assets/index.js` |
| Resume PDF | replace `public/Muquaddim_Omisore_Resume.pdf`, keeping the same file name |
| Page title, description and social tags | `index.html` |

## Routes

The site uses hash routes (`#about`, `#resume`, `#synapse`, `#stem`), which work on GitHub Pages with no extra setup.

## Notes

* Tailwind only ships the classes the code uses.
* The Inter font is bundled with the site, so there is no request to Google Fonts.
* The saved theme is applied before first paint. Dark is the default.
* The resume PDF is a copy of the resume content. When your roles change, regenerate it and replace the file in `public`.
