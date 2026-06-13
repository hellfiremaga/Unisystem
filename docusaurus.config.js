// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unisystem',
  tagline: 'Site web regroupant les règles du jeu de rôle Unisystem',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hellfiremaga.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Unisystem/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hellfiremaga', // Usually your GitHub org/user name.
  projectName: 'Unisystem', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Unisystem VF',
        logo: {
          alt: 'Logo Unisystem',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebarUnivers',
            position: 'left',
            label: 'Univers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarRole',
            position: 'left',
            label: 'Rôle',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarRegles',
            position: 'left',
            label: 'Règles',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarCongregations',
            position: 'left',
            label: 'Congrégations',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'docSidebar',
            label: 'MJ',
            sidebarId: 'sidebarMJ',
            position: 'right',
          }
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Unisystem',
            items: [
              {
                label: 'Eden Studios',
                to: 'https://www.edenstudios.net/',
              },
              {
                label: 'C.J. Carella',
                to: 'https://www.cjcarella.com/',
              },
            ],
          },  
          {
            title: 'Retrouvez moi sur les réseaux',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/k9bh7rvxNy',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/hellfiremaga',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@LesrediffusionsdelivedeMaga',
              },
              {
                label: 'Odysée',
                href: 'https://odysee.com/@Hellfiremaga:8',
              },
            ],
          },
          {
            title: 'Docusaurus',
            items: [
              {
                label: 'Site officiel',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hellfiremaga, tous droits réservés. Construit avec Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
