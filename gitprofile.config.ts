// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'emirhanbarlas', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['emirhanbarlas/gitprofile', 'emirhanbarlas/meme-creator'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SPLENDID NETWORK',
          description:
            'Active since 2020! We are here for exciting adventures, friendships and creativity! 🎮🌟 Come and join in! #Minecraft #Network #Friendship',
          imageUrl:
            'https://cdn.discordapp.com/attachments/1098675631790772375/1212148086999097374/dclogo.png?ex=65f0c7e0&is=65de52e0&hm=fd721d768641aa0d65f307dd99dea4c00ea0813f7ebf317a550803b96831838d&',
          link: 'https://splendidnw.com',
        },
      ],
    },
  },
  seo: {
    title: 'Emirhan Barlas',
    description: 'Hello, I am Emirhan. I am interested in Front-End and Back-End parts. I generally use Java, JavaScript, Python, C# and HTML CSS.',
    imageURL: 'https://cdn.discordapp.com/attachments/1178720464655364268/1212153703180796025/pp_2.jpg?ex=65f0cd1b&is=65de581b&hm=c1fa3524c5170ba3562f756487189db67fadfbf0f5869da113e141ca2b9bc8a2&',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: 'emirhanbarlas', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'barlas',
    dev: 'emirhanbarlas',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.emirhanbarlas.com',
    phone: '',
    email: 'info@emirhanbarlas.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Vue.js',
    'MySQL',
    'MongoDB',
    'Git',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'HTML',
    'SASS',
    'Java',
    'Python',
    'C#',
  ],
  experiences: [
    {
      company: 'SPLENDID NETWORK',
      position: 'Founder',
      from: 'April 2021',
      to: '2024',
      companyLink: 'https://splendidnw.com',
    },
  ],
  educations: [
    {
      institution: 'Karaman - Sınav Koleji | middle school',
      degree: 'Degree',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Hürriyet Anadolu Lisesi | high school',
      degree: 'Degree',
      from: '2020',
      to: '2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'emirhanbarlas', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: false,
};

export default CONFIG;
