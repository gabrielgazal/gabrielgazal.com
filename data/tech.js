const categories = [
    {
        name: 'Hardware',
        items: [
            {
                title: 'MacBook Pro (14", 2023)',
                description:
                    'This is my main computer. The M2 chip is awesome, and the 1TB storage is a must-have.',
                url: 'https://www.apple.com/br/shop/buy-mac/macbook-pro?afid=p240%7Cgo~cmp-21356792550~adg-167133574710~ad-737086254714_kwd-297428055350~dev-c~ext-~prd-~mca-~nt-search&cid=aos-br-kwgo-mac-br-postbts-evergreen-031325-',
            },
            {
                title: 'MacBook Pro (13", 2020)',
                description: 'This is my backup computer, which I mostly use for small tasks and watching movies.',
                url: 'https://support.apple.com/pt-br/111981',
            },
            {
                title: 'Logitech M585 Multi-Device Mouse',
                description:
                    "Since I use two computers, the ability to switch between them with a button is a life saver. This one is also super affordable.",
                url: 'https://www.logitech.com/en-us/eol/mice-eol/m585-wireless-mouse.910-005108.html',
            },
            {
                title: 'Keychron K3 Mechanical Keyboard',
                description: 'Just your standard developer mechanical keyboard.',
                url: 'https://keychronbrasil.com.br/products/keychron-k3-qmk-teclado-mecanico-wireless-versao-3',
            },
        ],
    },
    {
        name: 'Coding',
        items: [
            {
                title: 'XCode',
                description: 'This is the default IDE for iOS and macOS development. I love it.',
                url: 'https://developer.apple.com/xcode/'
            },
            {
                title: 'VSCode',
                description:
                    'This is my favorite IDE for developing projects that are not Apple-related.',
                url: 'https://code.visualstudio.com',
            },
            {
                title: 'Oh My ZSH',
                description:
                    "A collection of ZSH plugins that you install on the terminal once and you're good to go.",
                url: 'https://ohmyz.sh',
            },
        ],
    },
    // TODO - Add this section back later
    // {
    //     name: 'Apps',
    //     items: [
    //         {
    //             title: '1Password',
    //             description: 'The first thing I install on any new device.',
    //             url: 'https://1password.com',
    //         },
    //         {
    //             title: 'Alfred',
    //             description:
    //                 'My favorite Spotlight replacement with <a href="https://github.com/zenorocha/alfred-workflows" target="_blank">tons of workflows</a>.',
    //             url: 'https://alfredapp.com',
    //         },
    //         {
    //             title: 'Bartender',
    //             description: 'Perfect way to declutter and manage the macOS menubar.',
    //             url: 'https://www.macbartender.com/Bartender4',
    //         },
    //         {
    //             title: 'CleanShot X',
    //             description:
    //                 'This is what I use whenever I need to share and/or highlight screenshots.',
    //             url: 'https://cleanshot.com',
    //         },
    //         {
    //             title: 'Divvy',
    //             description: 'Tiny app that I use to create custom window positions.',
    //             url: 'https://mizage.com/divvy',
    //         },
    //         {
    //             title: 'Figma',
    //             description:
    //                 'I never thought something would replace the Adobe suite for me. Figma did.',
    //             url: 'https://figma.com',
    //         },
    //         {
    //             title: 'Grammarly',
    //             description:
    //                 'A must-have tool for non-native English speakers like me.',
    //             url: 'https://grammarly.com/',
    //         },
    //         {
    //             title: 'iStat Menu',
    //             description: 'A little system monitoring tool that sits on my menubar.',
    //             url: 'https://bjango.com/mac/istatmenus/',
    //         },
    //         {
    //             title: 'Linear',
    //             description: 'A totally gorgeous issue tracker. Jira no more.',
    //             url: 'https://linear.app/',
    //         },
    //         {
    //             title: 'Notion',
    //             description: 'My personal OS with all the notes from all my projects.',
    //             url: 'https://www.notion.so/',
    //         },
    //         {
    //             title: 'Paw',
    //             description:
    //                 'A native macOS app that facilitates triggering HTTP requests.',
    //             url: 'https://paw.cloud',
    //         },
    //         {
    //             title: 'Things',
    //             description:
    //                 'My current choice for to-do lists and organizing personal tasks.',
    //             url: 'https://culturedcode.com/things/',
    //         },
    //         {
    //             title: 'TunnelBear',
    //             description:
    //                 'Wonderful VPN app that I use to access content from other countries.',
    //             url: 'https://www.tunnelbear.com/',
    //         },
    //         {
    //             title: 'Superhuman',
    //             description:
    //                 'I never thought I would pay to use email until I found this.',
    //             url: 'https://superhuman.com/',
    //         },
    //     ],
    // },
    // {
    //     name: 'Services',
    //     items: [
    //         {
    //             title: 'Algolia',
    //             description:
    //                 'My first choice when adding search capabilities to any project.',
    //             url: 'https://www.algolia.com',
    //         },
    //         {
    //             title: 'Cloudflare',
    //             description:
    //                 'The DNS service I use with all my domains. Amazing product.',
    //             url: 'https://www.cloudflare.com',
    //         },
    //         {
    //             title: 'Collective',
    //             description:
    //                 'This is what I used to create and maintain my <em>company of one</em>.',
    //             url: 'https://www.collective.com',
    //         },
    //         {
    //             title: 'Firebase',
    //             description:
    //                 'A no-brainer database and auth solution for side projects.',
    //             url: 'https://firebase.google.com',
    //         },
    //         {
    //             title: 'Google Domains',
    //             description: 'I buy and renew all my domains here.',
    //             url: 'https://domains.google',
    //         },
    //         {
    //             title: 'Gumroad',
    //             description: 'The platform I use as a creator to sell things online.',
    //             url: 'https://app.gumroad.com/signup?referrer=draculatheme',
    //         },
    //         {
    //             title: 'Ilo',
    //             description:
    //                 'An analytics tool to measure the impact of my tweets and stuff.',
    //             url: 'https://ilo.so',
    //         },
    //         {
    //             title: 'Infisical',
    //             description:
    //                 'An open-source secrets manager for developers.',
    //             url: 'https://infisical.com',
    //         },
    //         {
    //             title: 'Kayak',
    //             description:
    //                 'This makes it easier to find flight itineraries and share them with family.',
    //             url: 'https://kayak.com',
    //         },
    //         {
    //             title: 'Resend',
    //             description:
    //                 'The new email API for developers.',
    //             url: 'https://resend.com',
    //         },
    //         {
    //             title: 'Vercel',
    //             description:
    //                 'Here is where I host all my websites. By far the best developer experience.',
    //             url: 'https://vercel.com',
    //         },
    //     ],
    // },
    // {
    //     name: 'Miscellaneous',
    //     items: [
    //         {
    //             title: 'Blue Yeti X',
    //             description: 'Pretty flexible USB condenser microphone.',
    //             url: 'https://amzn.to/3nJlpOU',
    //         },
    //         {
    //             title: 'Blue Compass Boom Arm',
    //             description:
    //                 "If you're into cable management, you'll appreciate this thing.",
    //             url: 'https://amzn.to/3nOHPOI',
    //         },
    //         {
    //             title: 'AirPods Max (Silver)',
    //             description:
    //                 'By far the best headphones I ever had. Premium quality, solid build.',
    //             url: 'https://amzn.to/3gnkaSb',
    //         },
    //     ],
    // },
]

export default categories