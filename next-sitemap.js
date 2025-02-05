module.exports = {
  siteUrl: 'https://www.fabricalhasaraucaria.com.br/', // Substitua pelo seu URL real
  generateRobotsTxt: true, // Gera robots.txt automaticamente
  sitemapSize: 7000, // Limite de URLs por sitemap
  exclude: ['/admin/*', '/api/*'], // Rotas a serem excluídas (se houver)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.fabricalhasaraucaria.com.br/sitemap.xml',
    ],
  },
};