import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config


export default defineConfig({
  base: '/',
  title: "엷은안개",
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
      { text: '홈', link: '/' },
      { text: '소개', link: '/about' },
      { text: '수영', link: '/swim' },
      { text: '여행', link: '/travel' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {
      '/about/': [
        {
          text: '이지원',
          items: [
            { text: '2022~', link: '/about/' },
            { text: '2019~', link: '/about/' },
            { text: '2015~', link: '/about/' },
          ]
        }
      ],
      '/swim/': [
        {
          text: 'Swim',
          items: [
            { text: '수영홈', link: '/swim/' },
            { text: '올림픽공원', link: '/swim/20250201-seoul-olympic-swimming-pool-review.md' },
            { text: '수영대회', link: '/swim/20240128-arena-swimming-competition.md' },
          ]
        }
      ],
      '/travel/': [
        {
          text: 'Travel',
          items: [
            { text: '여행홈', link: '/travel/' },
            { text: '202601 강원도 평창', link: '/travel/20260124-seoul-olympic-swimming-pool-review.md' },
            { text: '202405 일본 후쿠오카', link: '/travel/20250308-seoul-olympic-swimming-pool-review.md' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljw322' }
    ]
  },

  sitemap: {
    hostname: 'https://ljw322.github.io',
  },

  build: {
    outDir: 'dist', // 기본값 dist
  },

})
