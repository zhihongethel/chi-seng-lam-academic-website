# Chi-Seng Lam — Academic Website

A modern, restrained academic website for Professor Chi-Seng Lam at the University of Macau. Built with Astro and designed for static deployment on GitHub Pages.

## Pages

- Home
- Research
- People
- Publications
- Teaching
- Awards & Service
- Openings / Contact

## Run locally

Requirements: Node.js 20 or newer.

```bash
pnpm install
pnpm dev
```

Open the local address shown in the terminal. To verify a production build:

```bash
pnpm build
pnpm preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or open **Actions → Deploy Astro site to GitHub Pages → Run workflow**.

The included workflow handles both a user site such as `username.github.io` and a project site such as `username.github.io/repository-name/`.

## Use a custom domain

Add the domain in **Settings → Pages → Custom domain**, then configure the DNS records GitHub provides. The Astro build reads the final Pages address automatically. For a custom domain, you may also set `SITE_URL` in the workflow to the final `https://your-domain.example` address.

## Updating content

Most shared profile data, research areas, publications, awards, and editorial roles are in `src/data/site.ts`. Page-specific copy is under `src/pages/`.

Before public launch, confirm:

- the current research group roster;
- publication links, DOI links, and the complete bibliography;
- current contact hours and room number;
- whether Google Scholar, ORCID, IEEE, and CV links should be added;
- permission and preferred credit for the University of Macau portrait.

## Information sources

The initial content is based on public University of Macau sources:

- [Official IME profile](https://ime.um.edu.mo/people/cslam/)
- [University of Macau faculty news](https://www.um.edu.mo/news-and-press-releases/campus-news/detail/62525/)
- [Google Scholar profile](https://scholar.google.com/citations?user=DMeEBMIAAAAJ&hl=en)
- [IEEE Xplore author profile](https://ieeexplore.ieee.org/author/37415720700)
- [ORCID record](https://orcid.org/0000-0003-3669-6743)

The profile portrait is from the official IME page. Google Scholar and IEEE Xplore metrics are dated in the interface because citation counts change over time. Academic roles and publication records should still be verified with Professor Lam before launch.
