import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config


export default defineConfig({
  title: "My SWIM BLOG Project",
  description: "수영장 자유수영 후기, 수영대회 리뷰, 여행일지를 기록하는 블로그입니다.",

  head: [
    ['meta', { name: 'author', content: 'Jiwon Lee' }],
    ['meta', { name: 'keywords', content: '수영장, 자유수영 후기, 수영대회 리뷰, swimming pool, Korea masters swimming' }],

    // Open Graph (카톡, 페북, SNS 공유용)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Jiwon Swim & Dev Blog' }],
    ['meta', { property: 'og:description', content: 'Swimming reviews, travel diaries, and development notes.' }],
    ['meta', { property: 'og:url', content: 'https://ljw322.github.io/' }],

    // 트위터 카드
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'NaverBlog', link: '/naver-blog' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Naver Blog', link: '/naver-blog' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljw322' }
    ]
  },

  sitemap: {
    hostname: 'https://ljw322.github.io',
  },

})
