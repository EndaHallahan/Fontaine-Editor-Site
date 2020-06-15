module.exports = {
  title: 'Meet Fontaine:',
  tagline: 'A Sleek, Modern, Cross-Platform Manuscript Editor.',
  url: 'https://github.com/EndaHallahan',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'EndaHallahan', // Usually your GitHub org/user name.
  projectName: 'Fontaine-Editor-Site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fontaine',
      logo: {
        alt: 'Fontaine Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'About',
          position: 'left',
        },
        {to: 'blog', label: 'Dev Blog', position: 'left'},
        {to: 'support', label: 'Support Fontaine', position: 'right'},
        {
          href: 'https://github.com/EndaHallahan/Fontaine-Editor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} RB Underwood. Built with Docusaurus.`,
      links: [
        {
          title: 'Contact Us: contact@fontaineeditor.com',
        },
        // ... other links
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'about',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
