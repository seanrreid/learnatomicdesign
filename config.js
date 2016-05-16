var config = {
  production: {
    baseUrl: process.env.BASE_URL || '', // '' for relative links
    site: {
      url: process.env.SITE_URL || 'http://learnatomicdesign.com', // full site url
      title: 'Learn Atomic Design',
      comments: false,
      googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-49865023-4'
    }
  },
  development: {
    baseUrl: process.env.DEV_BASE_URL || '', // '' for relative links
    site: {
      url: process.env.DEV_SITE_URL || 'http://localhost:8000', // full site url
      title: 'Learn Atomic Design - Development',
      comments: false,
      googleAnalytics: process.env.DEV_GOOGLE_ANALYTICS || '123456'
    }
  },
  social: {
    github_username: '',
    twitter_username: '',
    email: 'sean@torchcodelab.com'
  }
};

module.exports = config;
