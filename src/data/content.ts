// All site content lives in this file. The pages only render it.
//
// - `projects` is the list on the front page, shown top to bottom in exactly this order.
//   Every project also gets its own page at /work/<slug>/.
// - `timeline` is shown on the About page, top to bottom in exactly this order.
// - An image with `src: null` shows a dashed placeholder box with `needed` written on it,
//   so missing material is easy to spot. Put the file in public/img/ and set `src: '/img/<file>'`.

export type Link = { label: string; href: string }

export type Media = {
  src: string | null
  illustration?: 'cnc-sites' | 'cnc-numbers' // drawn in code (src/components/Illustration.astro), used when there can't be a screenshot
  alt: string
  caption?: string
  needed?: string // shown on the placeholder when src is null
}

// A YouTube id (the part after watch?v=) or a video file in public/ (e.g. '/video/round.mp4').
export type Video = { title: string; youtube?: string; file?: string; needed?: string }

export type Section = {
  heading: string
  text?: string[]
  list?: string[]
  images?: Media[] // one image is shown wide, two or more side by side
  video?: Video
}

export type Project = {
  slug: string
  title: string
  year: string // free text, shown small next to the name
  kind: string // short "what it is", shown in the list
  status?: string
  live?: boolean // green dot next to the status
  summary: string // one or two sentences at the top of the project page
  cover: Media
  facts: { label: string; value: string }[]
  stack: string[]
  links: Link[]
  sections: Section[]
}

export const profile = {
  name: 'Mikkel Ryborg Blom',
  short: 'Mikkel Blom',
  role: 'Software engineering student at SDU in Odense',
  intro:
    "I study software engineering at SDU in Odense and run Wireframe Studios, where I build software for businesses. On the side I make tools and games, and I chair Coding Pirates Odense.",
  email: 'mikkelblom@live.dk',
  workEmail: 'mikkel@wireframestudios.dk',
  links: [
    { label: 'GitHub', href: 'https://github.com/MikkelBlom' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mikkel-blom-a88667248/' },
    { label: 'Wireframe Studios', href: 'https://wireframestudios.dk/en' }
  ] as Link[],
  cv: '/cv.pdf', // put an English CV at public/cv.pdf; the CV links only show up once the file exists
  photo: { src: '/img/mikkel.jpg', alt: 'Mikkel Ryborg Blom' } as Media
}

export const about = {
  text: [
    'I live in Odense, where I study software engineering at SDU. I started in September 2025, and my average so far is 11.75.',
    'In June 2025 I started Wireframe Studios. I build custom software for businesses, and I handle everything myself, from the first meeting to support after launch. Darkroom and Buzzboard are products I have made under the same name.',
    'My interest in programming started in primary school, and I went on to an HTX focused on programming and game development. The games and school projects further down are from that time.',
    'Outside of code I chair Coding Pirates Odense, a volunteer club where children build games, robots and websites. In 2024-25 I was a youth leader delegate for the Danish Red Cross in Nepal.'
  ]
}

export const projects: Project[] = [
  // Newest first. The front page carousel starts on the first one, and the list below follows this order.
  {
    slug: 'sennep-v2',
    title: 'S.E.N.N.E.P. V2',
    year: '2026',
    kind: 'Rebuilding my robot, fully 3D printed',
    status: 'Just started',
    summary: 'A rebuild of the robot from my HTX project, this time for fun and to learn. It drives on my own 3D printed mecanum wheels and should end up navigating on its own with a 360° LiDAR.',
    cover: { src: '/img/sennep-v2.jpg', alt: 'A wheel module with a mecanum wheel, motor and bearing, shown half transparent' },
    facts: [
      { label: 'Size', value: 'About 650 × 400 mm' },
      { label: 'Made from', value: '100% 3D printed PETG' },
      { label: 'Status', value: 'Wheels and frame in progress' }
    ],
    stack: ['Fusion 360 (scripted)', 'Raspberry Pi', 'Arduino', 'LiDAR', 'Python'],
    links: [{ label: 'The first version', href: './sennep-robot.html' }],
    sections: [
      {
        heading: 'Why a V2',
        text: [
          'The idea has been around since the middle of 2025. Back then I got as far as a 3D design, which I ended up scrapping, and I bought components for about 6,000 kr., which have mostly been sitting in a box since. Now the plan is to actually get something driving, slowly but step by step.',
          'The first S.E.N.N.E.P. was mostly laser-cut acrylic, and an Arduino died along the way because of voltage spikes. V2 is a fresh start with the lessons from that: everything is 3D printed, the power side has a fuse, an emergency stop and protection against spikes, and the robot is designed to drive on its own instead of being a showpiece.'
        ]
      },
      {
        heading: 'The plan',
        list: [
          'Four of my own 110 mm mecanum wheels, sitting flush inside the body, so it can drive in every direction.',
          'A Raspberry Pi for the high-level part (LiDAR, camera, screen and most sensors) and an Arduino Nano for the motors and as a second layer of collision avoidance.',
          'A 360° LiDAR on a flat top, distance sensors around the bottom and edge detectors in the corners.',
          'Manual override with an RF joystick, and later a docking station.'
        ]
      },
      {
        heading: 'So far',
        text: [
          'The wheels and the frame are generated by scripts in Fusion 360, so I can change a measurement and rebuild the part instead of redrawing it. I am printing test wheels to get the rollers right, and I have a small test app (Electron and Next.js) that reads and visualises the LiDAR data.'
        ],
        images: [
          { src: '/img/sennep-v2-frame.jpg', alt: 'The frame with the four wheel modules, seen from above at an angle' },
          { src: '/img/sennep-v2-battery.jpg', alt: 'The battery pack mounted on the frame' }
        ]
      }
    ]
  },
  {
    slug: 'kennel-lethenborg',
    title: 'Kennel Lethenborg',
    year: '2026',
    kind: "Website for my mother's dog kennel",
    status: 'Live',
    live: true,
    summary: "A website for my mother's dog kennel, which until now only had a Facebook page. Litters, puppies and a diary from the scan to the day they move out.",
    cover: { src: '/img/kennel.jpg', alt: 'The ryborgblom.dk front page' },
    facts: [{ label: 'Built for', value: 'My mother' }],
    stack: ['Laravel', 'Tailwind CSS', 'Vite'],
    links: [{ label: 'ryborgblom.dk', href: 'https://ryborgblom.dk/' }],
    sections: [
      {
        heading: 'What it does',
        text: [
          'Each litter gets a page with the puppies, their status (available, reserved or sold) and a diary that follows the litter from the scan to the day they move out. My mother updates it herself.'
        ],
        images: [
          { src: '/img/kennel-litter.jpg', alt: 'The gallery page for the first litter' },
          { src: '/img/kennel-diary.jpg', alt: 'The litter diary' }
        ]
      }
    ]
  },
  {
    slug: 'coding-pirates-odense',
    title: 'Coding Pirates Odense',
    year: '2026',
    kind: 'Website for the club I chair',
    status: 'Live',
    live: true,
    summary:
      'The public website for the volunteer coding club I chair, where children aged 7-17 build games, robots and websites.',
    cover: { src: '/img/cp-odense.jpg', alt: 'The cp-odense.dk homepage' },
    facts: [
      { label: 'My role', value: 'Chair of the board since April 2024' },
      { label: 'Members', value: 'Children aged 7-17' },
      { label: 'Meets', value: 'Every Wednesday' }
    ],
    stack: ['Astro', 'Cloudflare Workers'],
    links: [{ label: 'cp-odense.dk', href: 'https://cp-odense.dk/' }],
    sections: [
      {
        heading: 'The club',
        text: [
          'Coding Pirates Odense is a volunteer club where children build games, robots and websites every Wednesday. We meet at the offices of Umbraco, a software company in Odense, with roughly one volunteer for every two or three children.',
          'I have been chair of the board since April 2024. In practice that means running the club day to day, finding and coordinating volunteers, running the board meetings, planning the seasons and being the contact person for our partners. Most of that has nothing to do with code, but it is also why I started building software for the club.'
        ]
      },
      {
        heading: 'The website',
        text: [
          'cp-odense.dk is mostly for parents. It explains what a club evening looks like, how the project team and the gaming nights work, and how to get on the waiting list. It replaced the old site, which was hard to update and had gone out of date.',
          'All the facts about the club, like times, addresses, teams and prices, live in one file, so updating the site for a new season means changing one place instead of hunting through pages.'
        ]
      },
      {
        heading: 'Forms without a backend to look after',
        text: [
          'The pages are plain static HTML built with Astro. The only part that runs as code is the forms, which go through a small Cloudflare Worker under /api. There are six of them: a waiting list for each team, signing up as a volunteer, partnerships and a general contact form.',
          'Every form is protected against spam with Cloudflare Turnstile. When someone submits one, the board gets an e-mail with the details and the data attached as JSON, and the sender gets a receipt, so they know it arrived.'
        ],
        list: [
          'No database and no server to keep running, so there is nothing for the next chair to maintain.',
          'The JSON from the waiting-list forms has the same shape as a waiting-list entry in the club management system, so it can be imported straight into it.'
        ]
      }
    ]
  },
  {
    slug: 'examsafe',
    title: 'ExamSafe',
    year: '2026',
    kind: 'Makes a PC exam-safe in one click',
    status: 'Early version',
    summary: 'One click to make your PC exam-safe, and one click to put everything back afterwards.',
    cover: { src: '/img/examsafe.jpg', alt: 'The ExamSafe flow: ready, closing apps, checked, exam mode and restored' },
    facts: [
      { label: 'Platform', value: 'Windows first' },
      { label: 'Works today', value: 'Closing and reopening apps' }
    ],
    stack: ['Rust', 'Slint', 'Windows'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/ExamSafe' }],
    sections: [
      {
        heading: 'Why I made it',
        text: [
          "My PC is three machines in one: study, job and AI workbench. A lot of things run by themselves, and turning off an app's startup toggle is often not enough, because its service or helper process keeps running anyway.",
          'So before every exam I would walk through all of it by hand, still worry that I had missed something, and then have to remember what to turn back on afterwards.'
        ]
      },
      {
        heading: 'The rules it is built around',
        list: [
          "Check, don't assume. It only says the PC is ready when a check after the fix passes.",
          'Never cause problems afterwards. Every change is written to a journal before it is made, so it can be undone, also after a crash or a reboot.',
          'Ask before losing work. Anything that could hold unsaved work is asked about first.',
          'Never look like cheating. It does not run during the exam and does not touch the exam software.'
        ]
      },
      {
        heading: 'How it is built',
        text: [
          'Rust with a Slint UI. The exam flow is a pure state machine with no OS calls in it, so every transition, including failures and retries, is unit tested without a UI. The Windows code lives in its own crate, which is the only place unsafe code is allowed, and that rule is checked by a script in CI.'
        ]
      }
    ]
  },
  {
    slug: 'studyflow',
    title: 'StudyFlow',
    year: '2026',
    kind: 'Course material from itslearning, made searchable',
    status: 'In development',
    summary:
      "A desktop app that turns a student's itslearning courses into a searchable knowledge base on their own computer, so an AI assistant can answer questions from the actual course material instead of guessing. Ziad and I are building it together.",
    cover: { src: null, alt: 'StudyFlow', needed: 'Screenshot of the StudyFlow app (Ziad may have one from the Mac version)' },
    facts: [
      { label: 'Team', value: 'Ziad and me' },
      { label: 'Your data', value: "Stays on the student's computer" },
      { label: 'itslearning', value: 'Read only, nothing is written back' }
    ],
    stack: ['Rust', 'MCP', 'Tesseract OCR'],
    links: [],
    sections: [
      {
        heading: 'The problem',
        text: [
          'On itslearning, the material for a course is spread over files, pages, links and assignments, and every course is organised a bit differently. Finding the slide where the teacher explained something means clicking through folder after folder. And if you ask a general AI chatbot, it does not know your course, so it answers from somewhere else and sounds just as sure.'
        ]
      },
      {
        heading: 'The idea',
        text: [
          "StudyFlow logs in once with the student's own account and copies everything down to their own machine. From there it builds a small knowledge base for each course: an overview, announcements, deadlines and resources, plus a digest across all courses. An AI assistant can then search that knowledge base and answer from the real material, with a reference to where it came from."
        ]
      },
      {
        heading: 'How it works',
        list: [
          "Login happens once, in the student's own browser, so school logins with SSO and two-factor work. After that it refreshes its own access, so the student never has to log in again.",
          'Sync mirrors every kind of course element, not just downloads: PDFs, Office documents, spreadsheets, code, zip files, itslearning pages, assignment descriptions and links.',
          'Text in images and scanned PDFs is read with OCR, including Danish.',
          'The knowledge base is plain markdown, and it is served to AI assistants over MCP, an open standard for giving an AI access to tools and data.',
          'Anything written by an AI is labelled as a summary, so it is never mistaken for the course material itself.'
        ]
      },
      {
        heading: 'Made for the average student',
        text: [
          'The first version was a tool for people who are comfortable in a terminal. The goal now is the average student, who will never open a terminal and keeps notes in Notion or OneNote. That shapes the decisions: an app instead of commands, it has to work on both Mac and Windows, and the AI has to be cheap enough per student that it can be offered at a fair price.'
        ]
      }
    ]
  },
  {
    slug: 'robot-automation-game',
    title: 'Robot Automation Game',
    year: '2026',
    kind: 'WebGL2 prototype, 26,000 robots',
    status: 'Prototype',
    summary: 'A top-down factory-automation game about robots, written in TypeScript on raw WebGL2 with no game engine. Built over a couple of days in August 2026.',
    cover: { src: '/img/robots.jpg', alt: 'About 2,000 robots in the warehouse at dusk' },
    facts: [
      { label: 'Built in', value: 'A couple of days' },
      { label: 'Holds', value: 'About 26,000 robots at 30 fps' }
    ],
    stack: ['TypeScript', 'WebGL2'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/RobotAutomationGame' }],
    sections: [
      {
        heading: 'The idea',
        text: [
          'Most incremental games grow by making a number bigger. The plan here was that every new kind of robot should bring a new verb instead: ground robots first, then flying, then water, then space.'
        ],
        images: [{ src: '/img/robots-midday.jpg', alt: 'A smaller fleet at midday' }]
      },
      {
        heading: 'How it gets to 26,000 robots',
        text: [
          'Every robot goes through one instanced sprite batch, so there is no draw call per robot. Robot state lives in typed arrays (one array per field) and not in an object per robot, which is most of the reason the count can get that high.',
          'Pathfinding is A* on an invisible nav grid with string pulling, so the robots never look like they are on a grid. The whole level is generated from one seed, and the sound is synthesised in the browser.'
        ]
      }
    ]
  },
  {
    slug: 'presentation-creator',
    title: 'Presentation Creator',
    year: '2026',
    kind: 'Slide decks with better animations',
    status: 'In development',
    summary: 'A desktop app for building slide decks, where the focus is on animations and transitions that look good without fiddling.',
    cover: { src: '/img/presentation-creator.jpg', alt: 'The editor with a chart whose bars grow into new figures on the next step' },
    facts: [{ label: 'Platform', value: 'Desktop (Electron)' }],
    stack: ['TypeScript', 'Electron', 'Vite'],
    links: [],
    sections: [
      {
        heading: 'The idea',
        text: [
          'Animations and transitions in PowerPoint either look dated or take a long time to get right. Presentation Creator is built around making them look good by default.'
        ]
      },
      {
        heading: 'Steps, not slides',
        text: [
          'In PowerPoint, showing something change means duplicating the slide and editing the copy. Here a slide is one set of objects with several steps. You move, resize or recolour an object on the next step, and the tool works out the motion between them. So a box can travel from "before" to "after", and a column chart can grow its bars into new figures, without redrawing anything.',
          'The start screen has small examples of exactly that, so you can see what it does before building your own deck.'
        ],
        video: { title: 'A transition between two slides', needed: 'Short clip of a transition in the editor' }
      }
    ]
  },
  {
    slug: 'buzzboard',
    title: 'Buzzboard',
    year: '2026',
    kind: 'Quiz game with phone buzzers',
    status: 'Live',
    live: true,
    summary:
      'Your own Jeopardy-style quiz. You write the board in the browser and put it on the TV, and everyone buzzes in from their phone.',
    cover: { src: '/img/buzzboard.jpg', alt: 'The Buzzboard homepage with a quiz board and a phone buzzer' },
    facts: [
      { label: 'Launched', value: 'October 2026' },
      { label: 'Price', value: 'Free, one-time Pro passes' },
      { label: 'Players need', value: 'A phone and a five-letter code' }
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
    links: [{ label: 'buzzboard.wireframestudios.dk', href: 'https://buzzboard.wireframestudios.dk/' }],
    sections: [
      {
        heading: 'How a game night works',
        text: [
          'The host writes the board in the browser and puts it on the TV. Players open the site on their phone, type the five-letter code from the screen and pick a team. There is no app to install and no accounts for the players.'
        ],
        images: [{ src: '/img/buzzboard-steps.jpg', alt: 'The four steps of a game night on the Buzzboard homepage' }]
      },
      {
        heading: 'Who buzzed first',
        text: [
          'When the host opens a clue, the phones light up. The server decides who was first, so it is fair even when people play over a video call. The board shows the buzz order, and the host awards or deducts points with one click.'
        ],
        video: { title: "Three rounds and the podium: the host screen next to a player's phone", file: '/video/buzzboard-round.mp4' }
      },
      {
        heading: 'Clues can be more than text',
        text: [
          'Clues can have pictures, sound clips, video or a trimmed YouTube clip. The host can put 15 seconds on the clock or hide a Daily Double behind a tile, and there are 14 themes to pick from.'
        ],
        images: [{ src: '/img/buzzboard-clues.jpg', alt: 'A sound clue on the host screen' }]
      },
      {
        heading: 'Free, with passes instead of a subscription',
        text: [
          'Making boards is free. Pro adds unlimited teams and players, all 14 themes and your boards on every computer you sign in on. It is sold as one-time passes through Stripe (a party pass, a week pass or lifetime), so nothing renews.'
        ],
        images: [{ src: '/img/buzzboard-pricing.jpg', alt: 'The Buzzboard pricing section' }]
      }
    ]
  },
  {
    slug: 'vintage-story-progression-map',
    title: 'Vintage Story Progression Map',
    year: '2026',
    kind: 'What unlocks what in a game',
    status: 'Early',
    summary: 'An interactive map of what unlocks what in the game Vintage Story, and how to actually get there. The first version was built in one evening.',
    cover: { src: '/img/vintage.jpg', alt: 'The Copper Age track' },
    facts: [{ label: 'Covers', value: 'The copper age so far' }],
    stack: ['React', 'three.js', 'Vite'],
    links: [],
    sections: [
      {
        heading: 'Why',
        text: [
          "Vintage Story deliberately doesn't tell you much about progression. The handbook is a reference and not a path, and I think a lot of people give up on the game because of that. Every step on the map opens a short guide: what to do, in what order, and which mistake everyone makes the first time."
        ]
      },
      {
        heading: 'Numbers come from the game',
        text: [
          'Every number in the app is extracted from a local install of the game, by a script that reads the same files the game reads. Knapping, clay forming and smithing patterns are shown as diagrams you can step through layer by layer.'
        ],
        images: [{ src: '/img/vintage-crucible.jpg', alt: "A guide with the crucible's clay pattern" }]
      }
    ]
  },
  {
    slug: 'korean-learning-platform',
    title: 'Korean Learning Platform',
    year: '2026',
    kind: 'For lessons with a private teacher',
    status: 'Prototype',
    summary: 'A platform for learning Korean with a private teacher. The teacher uses it during the lesson, and the student reviews and practises the same material afterwards.',
    cover: { src: '/img/korean.jpg', alt: 'The units, laid out as a journey through the book' },
    facts: [{ label: 'Built for', value: 'My own Korean lessons' }],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    links: [],
    sections: [
      {
        heading: 'Why I made it',
        text: [
          'I take one-on-one Korean lessons online, and the teacher shares a static PDF of the textbook. Nothing from the lesson carries over to when I study on my own. The idea was one place where the teacher unlocks the words and grammar we went through, and where I practise exactly those afterwards.'
        ],
        images: [
          { src: '/img/korean-home.jpg', alt: 'The student dashboard' },
          { src: '/img/korean-practice.jpg', alt: 'The practice modes' }
        ]
      },
      {
        heading: 'What is built',
        text: [
          'A Hangul course with ten lessons and interactive drills, units with flip cards, grammar cards and listening, practice modes, and notes that can be flagged as a question to the teacher. The teacher side has a lesson view and a question queue.'
        ],
        images: [{ src: '/img/korean-vocabulary.jpg', alt: 'Vocabulary flip cards with audio at normal and slow speed' }]
      }
    ]
  },
  {
    slug: 'find-frekvensen',
    title: 'Find Frekvensen',
    year: '2026',
    kind: 'micro:bit game for Ada Lovelace Day',
    summary: 'A radio-tuning game for Ada Lovelace Day at Coding Pirates. Children tilt a micro:bit to move a needle across a radio dial on a big TV and hunt for hidden signals.',
    cover: { src: '/img/frekvensen.jpg', alt: 'Six fields tuning at once' },
    facts: [
      { label: 'Players', value: '4-8 children at once (up to 10)' },
      { label: 'Ages', value: 'From 7' },
      { label: 'Internet', value: 'Not needed' }
    ],
    stack: ['Next.js', 'micro:bit', 'Web Serial', 'Electron'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/find-frekvensen' }],
    sections: [
      {
        heading: 'The idea',
        text: [
          "Ada Lovelace Day is about women in tech, so the levels spell ADA, HEDY and GRACE. The harder levels are built around Hedy Lamarr's idea of frequency hopping: the signal slides across the dial, and you have to follow it to hold on."
        ]
      },
      {
        heading: 'Made for a busy drop-in event',
        list: [
          'The micro:bits only report their own needle position. All the game content lives in the web app, so puzzles can be changed live without flashing anything.',
          'One self-contained .exe that runs offline and connects to the base station by itself.',
          'Each child climbs the levels on their own, so a fast child moves on without the others having to wait.',
          'A built-in simulator, so the whole game can be tested without any hardware.'
        ],
        images: [{ src: null, alt: 'Children playing at the event', needed: 'Photo from Ada Lovelace Day (the event is in October 2026; no faces, or with permission)' }]
      }
    ]
  },
  {
    slug: 'launchpad',
    title: 'Launchpad',
    year: '2026',
    kind: 'Command center for my projects',
    status: 'In daily use',
    summary: 'A local command center for all my projects, with a desktop window, a browser UI and a CLI that coding agents use.',
    cover: { src: '/img/launchpad.jpg', alt: 'The Launchpad project dashboard, with demo data' },
    facts: [{ label: 'Runs on', value: 'My own machine, Windows' }],
    stack: ['Node.js', 'SQLite', 'React', 'Electron'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/launchpad-v2' }],
    sections: [
      {
        heading: 'Why I made it',
        text: [
          'I have a lot of projects going at the same time, and I work on them with AI coding agents in several sessions in parallel. Notes, ideas and to-dos ended up spread over markdown files, chat histories and my head, and agents kept working from notes that were out of date.'
        ]
      },
      {
        heading: 'What it does',
        text: [
          'It finds my projects on disk and reads their real status from git, so there is nothing to keep updated by hand. It launches them in one click and keeps notes, ideas and tasks for each project in one database. Agents get a CLI, so they read and write to the same place I do.',
          'Agent writes are merge-only, agents can archive but never delete, and every write is logged with who made it.'
        ]
      },
      {
        heading: 'How it is built',
        text: [
          'One Node service owns the SQLite database and has several faces: a REST API with a web UI, a desktop window and the CLI. The Electron window is only a thin shell that points at localhost, which avoids the usual native-module problems.'
        ]
      }
    ]
  },
  {
    slug: 'club-management-system',
    title: 'Club Management System',
    year: '2026',
    kind: 'Members, waiting list, seasons and invoicing',
    status: 'In use',
    live: true,
    summary:
      'A management system for clubs and associations: members and guardians, the waiting list, seasons, volunteers, equipment and invoicing in one place. Built for Coding Pirates Odense, as a core other clubs could run with their own branding.',
    cover: { src: '/img/cms-calendar.jpg', alt: 'The calendar with season sessions and events, in a demo club', caption: 'Screenshots are from a demo club with made-up data.' },
    facts: [
      { label: 'Built for', value: 'Coding Pirates Odense' },
      { label: 'Started', value: 'June 2026' },
      { label: 'Roles', value: 'Board, team leaders, cashier, volunteers, parents, members' },
      { label: 'Languages', value: 'Danish and English' }
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Vitest', 'Playwright'],
    links: [],
    sections: [
      {
        heading: 'Why',
        text: [
          'A club like ours has children on a waiting list, guardians, seasons, volunteers, borrowed laptops and invoices, and all of it has to fit together. I wanted one place for it, built around how a volunteer club actually runs.',
          'It is built for Coding Pirates Odense, but as a white-label core. Club name, logo, currency, language and which modules are turned on are all settings, so another club could run it as their own.'
        ],
        images: [{ src: '/img/cms-overview.jpg', alt: 'The club dashboard with announcements' }]
      },
      {
        heading: 'Seasons, calendar and the waiting list',
        text: [
          'A season generates one event per meeting. If the schedule changes, the existing sessions are moved instead of recreated, so the RSVPs, volunteer signups and attendance on them are kept.',
          'When a spot opens, the waiting list invites the next child automatically, and the invitation expires if nobody answers. Parents can see where they are in the queue.'
        ],
        images: [
          { src: '/img/cms-year.jpg', alt: 'The year timeline: seasons per team as bars across the year' },
          { src: '/img/cms-join.jpg', alt: 'The public page where parents put their child on the waiting list' }
        ]
      },
      {
        heading: 'The rest of the club',
        list: [
          'Volunteers sign up on the events they help with, and the team leaders are warned when an event is short of people.',
          'Equipment loans with a signed agreement and return reminders.',
          'Invoicing with one invoice per family and a discount for children who have been in the club for several seasons. The integration with Dinero (the accounting system) is built and tested against a mock, but not live yet.',
          'A QR check-in screen at the door.'
        ],
        images: [
          { src: '/img/cms-groups.jpg', alt: 'A team with its enrolled members and their payment status' },
          { src: '/img/cms-equipment.jpg', alt: 'The equipment register' }
        ]
      },
      {
        heading: "Handling children's data",
        text: [
          'The club needs child protection certificates for its volunteers, which means collecting CPR numbers. Those are encrypted (AES-256-GCM) and deleted again on a schedule. Inactive accounts are cleaned up automatically for GDPR, and every role only sees what it needs.',
          'Sign-in has account lockout, two-factor and passkeys, and changes are written to an audit log.'
        ]
      },
      {
        heading: 'How it is tested',
        text: [
          'There are unit tests for the business logic (the waiting list, pricing, seniority, cleanup, etc.). On top of that an end-to-end suite starts from an empty database, walks through the setup wizard, signs in as every role and visits every page to check that nobody can see or do more than they should.'
        ]
      }
    ]
  },
  {
    slug: 'grace',
    title: 'Grace',
    year: '2026',
    kind: 'Voice assistant that runs locally',
    status: 'Work in progress',
    summary: 'A voice assistant that runs 100% on my own PC. Speech recognition, the language model and the voice all run on the machine, with no cloud AI involved.',
    cover: { src: '/img/grace-hud.jpg', alt: "Grace's overlay in three states: listening, thinking about what she heard, and speaking. Rendered from the real overlay with a sample conversation in Danish" },
    facts: [{ label: 'Status', value: 'The voice loop works, the full idea does not yet' }],
    stack: ['TypeScript', 'Ollama', 'Whisper', 'Kokoro', 'Electron'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/project-grace' }],
    sections: [
      {
        heading: 'The idea',
        text: [
          'Most voice assistants are a cloud service with a wake word. I wanted to see how far you can get with everything running locally on a gaming laptop. Grace has no wake word, you can interrupt her mid-sentence, and she keeps a long-term memory, so she can remember what I was working on yesterday.'
        ]
      },
      {
        heading: 'The models',
        text: [
          'Grace runs on a gaming laptop with an RTX 5090 (24 GB) and an Intel Arc iGPU. The trick is to split the work so the models do not fight over the same graphics card.'
        ],
        list: [
          'Hearing: Whisper large-v3 through OpenVINO, on the Intel iGPU. That leaves the whole NVIDIA GPU for the language model. Whisper reliably mishears some names, so a small correction dictionary fixes them afterwards, and I can teach her new corrections by voice.',
          'Thinking: gemma4 (26B) through Ollama. It is multimodal, so the same model can also read a screenshot and point at things on the screen.',
          'Speaking: Kokoro-82M, a small text-to-speech model running in its own Python server.',
          'Knowing who is talking: a tiny speaker-recognition model on the CPU, so she only acts on my voice and not on the TV or someone else in the room.',
          'Remembering: nomic-embed-text turns what was said into vectors for the memory (more on that below).'
        ]
      },
      {
        heading: 'How a turn works',
        text: [
          'The project is a TypeScript monorepo with a package for each part: core, speech to text, the language model, text to speech, tools and the overlay. The parts never call each other directly. Everything goes through one typed event bus: the speech package announces what it heard, the core decides what to do with it, the language model answers, and the voice package speaks. That makes it easy to swap a model or test one part with the others mocked.',
          'The language model works in a loop of up to eight steps. In each step it can call tools, like searching files, reading the screen, searching the web through a local SearXNG or taking notes. There are about 100 of them. After anything that changes something, like writing, moving or deleting a file, the loop has to check the result before it is allowed to say it is done. Bigger jobs can be started as a background "mission", where she plans the steps and reports back when she is finished.',
          'You can interrupt her at any time, by saying "stop" or with a hotkey. That cancels the answer and cuts the voice off mid-sentence.'
        ]
      },
      {
        heading: 'Memory',
        text: [
          'Every turn of the conversation is saved in a local SQLite database. On top of that, the important parts are stored as vectors in ChromaDB, so she can find things by meaning instead of exact words, like "what was I working on yesterday?". If the vector database is not running, she falls back to a plain keyword search, so she never loses her memory completely.',
          'The model can hold a long context, but not forever, so the conversation she sees is kept within a token budget. Older parts are folded into a running summary instead of being cut off.'
        ]
      },
      {
        heading: 'Safety',
        list: [
          'Commands that could do real damage are blocked outright.',
          'When she asks for a yes or no, the answer has to be heard clearly. If she is unsure, it counts as a no.',
          'She can draft an e-mail, but she can never send one.',
          'Her personality is a config file, not code, so it can be tuned without touching the program.'
        ]
      },
      {
        heading: 'The overlay',
        text: [
          'Grace has no window of her own. The only thing on screen is a small overlay at the edge of the screen that shows her state: idle, listening, thinking or speaking, along with what she heard and what she is saying. Clicks go straight through it, so it never gets in the way. The picture above is the real overlay, fed with a sample conversation in Danish.',
          'She also has a few modes for different situations, such as a discreet mode, a brainstorm mode, a meeting mode where she mostly listens, and a field-notes mode for dictating notes.',
          'It is far from done. The parts work and the full voice loop has worked in live tests, but an assistant that is always listening and actually useful day to day does not work yet.'
        ]
      }
    ]
  },
  {
    slug: 'darkroom',
    title: 'Darkroom',
    year: '2026',
    kind: 'File tools that run in the browser',
    status: 'Live',
    live: true,
    summary:
      'A free toolkit for images, PDFs, video, audio and text. Everything runs on your own computer, so your files are never uploaded.',
    cover: { src: '/img/darkroom.jpg', alt: 'The Darkroom tool overview' },
    facts: [
      { label: 'Tools', value: 'About 30' },
      { label: 'Uploads', value: 'None, it all runs locally' },
      { label: 'Also as', value: 'A desktop app' }
    ],
    stack: ['React', 'TypeScript', 'Vite', 'WebAssembly', 'FFmpeg', 'ONNX Runtime', 'Electron'],
    links: [{ label: 'darkroom.wireframestudios.dk', href: 'https://darkroom.wireframestudios.dk/' }],
    sections: [
      {
        heading: 'Why it exists',
        text: [
          "Most free converters online want you to upload your files to someone else's server, and often have a size limit or a login. Darkroom does the work on your own machine instead. There is no login and no size limit, and it is usually faster, since nothing has to be sent anywhere."
        ]
      },
      {
        heading: 'The tools',
        text: [
          'Converting and compressing, background removal, favicons, collages and frame walls, GIFs, colour palettes, PDF tools, video and audio, etc. About 30 tools in total.'
        ],
        images: [
          { src: '/img/darkroom-collage.jpg', alt: 'The Collage and Frame Wall tool' },
          { src: '/img/darkroom-palette.jpg', alt: 'The Color Palette tool' }
        ]
      },
      {
        heading: 'Compress to a target size',
        text: [
          'The tool I use the most myself is compressing a file to a target size, for example "this has to be under 2 MB for the upload form". Darkroom searches for the highest quality that still fits by trying the encoder at different qualities and halving the range each time. If even the lowest quality is too big, it starts scaling the image down. For video it does a two-pass encode at the bitrate that hits the target.'
        ]
      },
      {
        heading: 'Batches',
        text: [
          'Most tools take a whole folder at once. The files are spread over a pool of workers, and a slider decides how much of the machine Darkroom is allowed to use, so it can run in the background without freezing everything else. It shows an estimate of how long is left.'
        ]
      },
      {
        heading: 'One core, two apps',
        text: [
          'Darkroom started in May 2026 as a desktop app built with Electron. Later I made a web version, and to avoid writing every tool twice, the core of each tool does not know where it runs. On the desktop it uses sharp and native FFmpeg, and in the browser it uses the same libraries compiled to WebAssembly.',
          'The web version is 100% client-side. There is no backend, so it costs nothing to run, no matter how many people use it.'
        ],
        list: [
          'Images: converting, compressing, resizing, background removal, favicons, collages and frame walls, GIFs and colour palettes.',
          'Documents: merging, splitting, watermarking, locking and redacting PDFs, a document scanner that straightens a photo of a page, a CSV cleaner and a Markdown editor.',
          'Text: 19 small tools, like word counts and case conversion, which all share the same counting engine.',
          'Desktop only: a magic eraser (LaMa), subtitles from speech (Whisper) and upscaling (Real-ESRGAN). These models are too heavy to run comfortably in a browser.'
        ]
      },
      {
        heading: 'The design',
        text: [
          'The name comes from the photo darkroom, but I did not want a dark, moody tool. The design idea was "Darkroom in daylight": calm, light and plain, so the files are what you look at.'
        ]
      }
    ]
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    year: '2026',
    kind: 'Logging an expense in three seconds',
    status: 'Prototype',
    summary: 'A personal finance app for Android and iOS. Logging what you spend should take about three seconds: open the app, type the amount, tap a category.',
    cover: { src: '/img/finance.jpg', alt: 'Home, quick entry, calendar and insights, with made-up demo data' },
    facts: [{ label: 'Platform', value: 'Android and iOS' }],
    stack: ['React Native', 'Expo', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/Finance-Tracker' }],
    sections: [
      {
        heading: 'Why I made it',
        text: [
          'Most budgeting apps want you to categorise a long list of bank transactions after the fact, and I never kept up with that. This one is built around entering things as they happen, with no account and no network needed. I ended up not using it day to day, so it stopped at a working prototype.'
        ]
      },
      {
        heading: 'A few decisions',
        list: [
          'Money is stored as whole øre (integers), never as floats.',
          "Rent and salary post themselves and are kept out of the day-to-day spending figure, so one big payment doesn't make the daily average useless.",
          'Entries are append-only with a UUID and soft delete, so syncing between devices would be simple later.'
        ]
      }
    ]
  },
  {
    slug: 'arnes-elektronik',
    title: 'Arnes Elektronik',
    year: '2026',
    kind: 'Semester project, e-commerce shop',
    status: 'Graded 12',
    summary: 'The customer-facing shop for a made-up electronics store, built by six of us as one part of a larger system that four groups made together. My second semester project at SDU.',
    cover: { src: '/img/arnes-elektronik.jpg', alt: 'The front page of the Arnes Elektronik shop app' },
    facts: [
      { label: 'Grade', value: '12' },
      { label: 'Team', value: 'Christian, Elias, Martin, Yaroslav, Ziad and me' },
      { label: 'When', value: 'February - May 2026' }
    ],
    stack: ['C#', '.NET', 'Avalonia', 'MVVM', 'PostgreSQL'],
    links: [{ label: 'Report (PDF)', href: '../reports/arnes-elektronik.pdf' }],
    sections: [
      {
        heading: 'The project',
        text: [
          'The whole semester built one offline e-commerce system for "Arnes Elektronik", split across the groups in our team: product information (PIM), orders (OMS), digital assets (DAM) and our part, the shop that customers use. Our shop had to fetch products from the other groups, keep a basket, favourites and recently viewed items, and hand finished orders over to the order system.',
          'It is a desktop app in Avalonia with .NET, built around MVVM, with users stored in PostgreSQL and guests handled in memory.'
        ],
        images: [{ src: '/img/arnes-elektronik-products.jpg', alt: 'A row of product cards on the front page' }]
      },
      {
        heading: 'My part',
        list: [
          'Set up the Avalonia project, the folder structure and the page template that the other pages were built on.',
          'Built the product page with its grid and product cards, later made the cards load asynchronously, and wrote a mock data service, so we could work before the other groups had data ready.',
          'Built the landing page with Ziad, and the FAQ, contact and about pages.',
          'Drove the refactor of the whole codebase to MVVM halfway through the project.',
          'Wrote the integration test for the domain layer, fixed a search bug, and wrote the section of the report on the architecture.'
        ],
        images: [
          { src: '/img/arnes-elektronik-mvvm.jpg', alt: 'UML diagram of the MVVM structure' },
          { src: '/img/arnes-elektronik-sequence.jpg', alt: 'Sequence diagram between the shop, the order system and the product system' }
        ]
      }
    ]
  },
  {
    slug: 'skraldehelten',
    title: 'Skraldehelten',
    year: '2025',
    kind: 'Semester project, a learning game in the console',
    status: 'Graded 12',
    summary: 'A learning game about sorting waste for 10-19 year olds, played in the console. My first semester project at SDU, built on the World of Zuul framework.',
    cover: { src: '/img/skraldehelten-cover.jpg', alt: 'Three screens from the game: the menu, a piece of trash falling, and the quiz after a wrong answer' },
    facts: [
      { label: 'Grade', value: '12' },
      { label: 'Team', value: 'Aliza, Octavian, Yaser, Ziad and me' },
      { label: 'When', value: 'Autumn 2025' }
    ],
    stack: ['C#', '.NET', 'Console'],
    links: [{ label: 'Report (PDF, Danish)', href: '../reports/skraldehelten.pdf' }],
    sections: [
      {
        heading: 'The game',
        text: [
          'Trash falls from the top of the screen, and you move it into one of the five bins: residual waste, food waste, paper and cardboard, glass and metal, or plastic and cartons. A wrong answer costs a heart and opens a small quiz that explains where it should have gone. You start at home and unlock the city, the beach, the municipality, the region and the whole country, each with more kinds of trash.',
          'The project was built around UN goal 12 about responsible consumption, and the whole thing is drawn with characters in the console.'
        ],
        images: [
          { src: '/img/skraldehelten-levels.jpg', alt: 'The level selector' },
          { src: '/img/skraldehelten-quiz.jpg', alt: 'The quiz after a wrong answer' }
        ]
      },
      {
        heading: 'My part',
        text: [
          'I wrote the design section of the report and made the most commits to the code. In the second iteration the original design stopped holding as the code grew, so I restructured it into presentation, domain and data layers. I then documented the missing interfaces between the layers as the biggest weakness of the design, and we introduced exactly those interfaces in the next semester project.'
        ],
        images: [{ src: '/img/skraldehelten-uml.jpg', alt: 'UML class diagram of the game' }]
      }
    ]
  },
  {
    slug: 'cnc-program-system',
    title: 'CNC program system',
    year: '2025',
    kind: 'Client work, two factories',
    status: 'In daily use',
    live: true,
    summary:
      'A shared system for CNC programs, tools and fixtures at two factories on two continents, built for a precision manufacturer through Wireframe Studios.',
    cover: { src: null, illustration: 'cnc-sites', alt: 'Illustration: two factories, each with its own server, synced over an encrypted link', caption: 'Illustration. The real system and its data are confidential.' },
    facts: [
      { label: 'Client', value: 'Precision manufacturer (not named)' },
      { label: 'My role', value: 'Everything, from first meeting to support' },
      { label: 'Used by', value: 'Programmers and machine operators' },
      { label: 'Since', value: '2025' }
    ],
    stack: ['Python', 'Flask', 'Next.js', 'WebSockets', 'MS SQL Server'],
    links: [{ label: 'Case on wireframestudios.dk', href: 'https://wireframestudios.dk/en' }],
    sections: [
      {
        heading: 'The problem',
        text: [
          'The company kept track of its CNC programs in large spreadsheets and printed lists. Finding a free program number meant looking through thousands of rows.'
        ]
      },
      {
        heading: 'What I built',
        text: [
          'A web system that is now the single source of truth for CNC programs, tools and fixtures at both factories. You press "add", and the system finds a free program number by itself.',
          'It has role-based access, a tamper-evident audit log and automatic encrypted backups. It is used every day by both the people who write the programs and the operators on the floor.'
        ],
        images: [{ src: null, illustration: 'cnc-numbers', alt: 'Illustration: a range of program numbers where the system picks the next free one', caption: 'Illustration with made-up numbers.' }]
      },
      {
        heading: 'Two factories, one system',
        text: [
          'There is one server per site, and they sync continuously over an encrypted connection. If the link between them drops, each site just keeps running on its own.'
        ]
      },
      {
        heading: 'Working with the client',
        text: [
          "I handle everything with the client directly, from the first meeting to support after launch. I can't name the client or show real program data, so everything on this page is anonymised."
        ]
      }
    ]
  },
  {
    slug: 'territory-takeover',
    title: 'Territory Takeover',
    year: '2023',
    kind: 'Board game with RFID, exam project',
    status: 'Top grade',
    summary: 'An immersive board game for an exam project. RFID chips in the pieces detect when a player captures an area, and the board lights up in their colour and counts the points.',
    cover: { src: '/img/territory-takeover.jpg', alt: 'The finished Territory Takeover board seen from above' },
    facts: [
      { label: 'Grade', value: 'Top grade' },
      { label: 'Team', value: 'Anders, Astrid, Mikkel, Rasmus and me' },
      { label: 'Built in', value: 'Six weeks, spring 2023' }
    ],
    stack: ['Arduino', 'RFID', 'LEDs', 'Fusion 360', '3D printing'],
    links: [{ label: 'Video on YouTube', href: 'https://www.youtube.com/watch?v=2n4UBG2NMkw' }, { label: 'Report (PDF, Danish)', href: '../reports/territory-takeover.pdf' }],
    sections: [
      {
        heading: 'The game',
        text: [
          'Up to four players move around a landscape and fight over arenas. If you land on an empty arena, it is yours, and you get a point for every turn you end there. If someone is already standing there, you duel with cards. The first to 10 points wins.',
          'RFID chips in the pieces detect when a player captures an arena. The board then lights up in their colour and keeps count of the points, and music and lights are built into the table.'
        ],
        video: { title: 'Territory Takeover', youtube: '2n4UBG2NMkw' }
      },
      {
        heading: 'Building it',
        text: [
          'It was our exam project in Digital Design og Udvikling at HTX. The table is custom built in wood, the landscape is made of foam, and the arenas and pieces are 3D printed. Hundreds of LEDs had to be soldered, so we cut all the wires to the same length to save time on measuring. That left a few of them too short, but I think it saved more time than it cost.'
        ],
        images: [
          { src: '/img/territory-takeover-tree.jpg', alt: 'Close-up of the landscape with a tree and an arena' },
          { src: '/img/territory-takeover-render.jpg', alt: 'The 3D model of the table, made in Fusion 360' }
        ]
      }
    ]
  },
  {
    slug: 'project-gloop',
    title: 'Project Gloop',
    year: '2023',
    kind: 'Roguelike made in Seattle, team of 7',
    summary: 'A physics-based first-person roguelike made by a team of seven on an exchange trip to Seattle. You fight office chairs and cabinets possessed by evil gloop.',
    cover: { src: '/img/project-gloop.jpg', alt: 'Fighting a possessed office chair in Project Gloop' },
    facts: [
      { label: 'Team', value: 'Asger, Astrid, Bertram, Mikkel, Peter, Rasmus and me' },
      { label: 'Built in', value: 'About a month, early 2023' },
      { label: 'My part', value: 'Level generation, tutorial and menus' }
    ],
    stack: ['Unity', 'C#'],
    links: [
      { label: 'Play it on itch.io', href: 'https://stenix.itch.io/project-gloop' },
      { label: 'Code', href: 'https://github.com/RasmusAaRiis/UsaProjekt' }
    ],
    sections: [
      {
        heading: 'The game',
        text: [
          'Each level is a procedurally generated office, where chairs, cabinets and drawers have been taken over by evil gloop. Everything is physics based, so anything in the office can be used as a weapon. You pick up money along the way and buy upgrades between levels, and every level is a bit harder than the last.'
        ],
        video: { title: 'Project Gloop gameplay', youtube: 'txQnuf0z0zQ' }
      },
      {
        heading: 'My part',
        text: [
          'I built the level generator, which puts together offices, hallways, break rooms and elevators from room templates and bakes the navigation mesh, so the enemies can find their way around each new layout. I also made the tutorial level, the main menu and the pause menu, and fixed a lot of doors, drawers and colliders along the way. Seven of us worked in the same Unity project through Git, which was a lesson in itself.'
        ],
        images: [{ src: '/img/project-gloop-art.jpg', alt: 'Project Gloop key art' }]
      },
      {
        heading: 'The trip',
        text: [
          'We lived with host families and worked on the game at a local community college. In between we got to see a bit of Seattle and the area around it.'
        ],
        images: [
          { src: '/img/seattle-space-needle.jpg', alt: 'The Space Needle seen from below' },
          { src: '/img/seattle-downtown.jpg', alt: 'A street in downtown Seattle' },
          { src: '/img/seattle-falls.jpg', alt: 'Snoqualmie Falls' }
        ]
      }
    ]
  },
  {
    slug: 'sennep-robot',
    title: 'S.E.N.N.E.P.',
    year: '2023',
    kind: 'A robot that shows emotions',
    summary: 'A robot that simulates feelings and moods, made to find out how people react to a robot that seems to have emotions. My in-depth project at HTX, where I wrote all the code except the sound detection, and designed the wheels.',
    cover: { src: '/img/sennep.jpg', alt: 'The S.E.N.N.E.P. robot with big eyes and yellow mecanum wheels' },
    facts: [
      { label: 'Team', value: 'Anders, Astrid, Mikkel, Rasmus and me' },
      { label: 'Made', value: 'Early 2023, at HTX' },
      { label: 'Size', value: 'About 700 × 450 mm' },
      { label: 'My part', value: 'All the code except the sound detection, and the wheels' }
    ],
    stack: ['Arduino', 'C++', 'Fusion 360', '3D printing', 'Laser cutting'],
    links: [{ label: 'S.E.N.N.E.P. V2', href: './sennep-v2.html' }],
    sections: [
      {
        heading: 'Building it',
        text: [
          'It was my in-depth project at HTX. The body was modelled in Fusion 360 and is mostly laser-cut acrylic, and the mecanum wheels were 3D printed, so the robot can drive in every direction without turning. An Arduino controls the motors and the rest of the electronics, and capacitive touch sensors let it react when you touch it.',
          'Not everything survived: an Arduino died along the way because of voltage spikes. That is one of the things V2 is built to avoid.'
        ]
      },
      {
        heading: 'Early tests',
        text: ['Before the body was built, the chassis drove around on its own wheels with the electronics on a wooden plate.'],
        video: { title: 'The first test drive with the mecanum wheels', file: '/video/sennep-driving.mp4' }
      },
      {
        heading: 'The wheels work',
        video: { title: 'Testing the 3D printed mecanum wheels', file: '/video/sennep-wheels.mp4' }
      },
      {
        heading: 'What it could sense',
        list: [
          'Four microphones, one on each side, so it could tell which direction a sound came from and turn towards it. The sound detection was the part Astrid made.',
          'Four ultrasonic sensors for distance, used by an avoidance system so it did not drive into things.',
          'Three touch sensors on top, so it reacted when you petted it.',
          'An RFID reader, a small display, a speaker, an accelerometer and an SD card.'
        ]
      },
      {
        heading: 'The code',
        text: [
          'About 1,300 lines of Arduino C++, split into small files: motors, sensors, avoidance, sound, screen and an action chooser.',
          'Driving is a small state machine with eleven directions - stop, the eight compass directions and rotating left or right. Because the wheels are mecanum wheels, each direction is just a different combination of which of the four motors run forwards or backwards, so the robot can drive sideways or diagonally without turning.',
          'The avoidance system checks the four ultrasonic sensors and reacts to the most serious situation first: blocked on all four sides means turn on the spot, blocked on three means drive out the open side, and blocked on two means go diagonally away from the corner. That order matters, so a wall on one side never makes it drive into a wall on the other.'
        ]
      },
      {
        heading: 'Moods',
        text: [
          'The action chooser picks what the robot does next based on its mood: investigate the room, sing, take a nap (with snoring), spin around or ask for attention, each with its own sounds and a word on the display. It also said something on its own every couple of minutes, so it felt a bit alive even when nobody touched it.',
          'Mikkel from the group made a song for it.'
        ],
        video: { title: 'The S.E.N.N.E.P. song, made by Mikkel from the group', file: '/video/sennep-song.mp4' }
      },
      {
        heading: 'The report',
        text: [
          'We had to leave the project while we were in Seattle in February 2023 and finished the report in the spring. Unfortunately I no longer have it.',
          'The name was an accident. Someone asked what we should call the robot, someone else said "SENNEP?" (Danish for mustard), everyone laughed, and it stuck. ChatGPT had only just come out, so we asked it to come up with what the letters could stand for and picked our favourite: an acronym about a robot with feelings that drives around and interacts with people.'
        ],
        images: [
          { src: '/img/sennep-sketch.jpg', alt: 'The first sketch of the robot' },
          { src: '/img/sennep-cad.jpg', alt: 'The 3D model of the chassis and wheels' },
          { src: '/img/sennep-photo.jpg', alt: 'The finished robot' }
        ]
      }
    ]
  },
  {
    slug: 'ar-sandbox',
    title: 'AR Sandbox',
    year: '2022',
    kind: 'Kinect and projector on real sand',
    status: 'Top grade',
    summary: 'A sandbox where a Kinect measures the height of the sand and a projector paints a landscape onto it, with knobs for water level and seasons. Built with classmates for the school open house.',
    cover: { src: '/img/ar-sandbox.jpg', alt: 'The sandbox with a projected landscape of mountains, grass and water' },
    facts: [
      { label: 'Grade', value: 'Top grade' },
      { label: 'Team', value: 'Anders, Astrid, Mikkel, Rasmus and me' },
      { label: 'My part', value: 'Construction and the Arduino' }
    ],
    stack: ['Unity', 'C#', 'Kinect', 'Arduino'],
    links: [{ label: 'Report (PDF, Danish)', href: '../reports/ar-sandbox.pdf' }],
    sections: [
      {
        heading: 'How it works',
        text: [
          'An Xbox 360 Kinect above the table measures the height of the sand, and a projector paints a landscape onto it based on that height: snow on the peaks, grass lower down and water in the holes. Two knobs on the side set the water level and the temperature, and the music changes with them.',
          'The Kinect data goes through a small bridge program into Unity, which redraws the map twice a second.'
        ],
        images: [
          { src: '/img/ar-sandbox-2.jpg', alt: 'The same sandbox with a different water level' },
          { src: '/img/ar-sandbox-diagram.jpg', alt: 'Diagram of the table with the projector and IR camera above it' }
        ]
      },
      {
        heading: 'My part',
        text: [
          'I built the table with another group member and programmed the Arduino that reads the knobs. Unity cannot open a serial port by itself, so the Arduino values go through the same bridge program as the Kinect data. The table takes about 150 kg of sand, so it went through a few iterations before it could hold it.'
        ]
      }
    ]
  },
  {
    slug: 'strategalo',
    title: 'Strategalo',
    year: '2022',
    kind: 'A card game, made digital',
    summary: 'A digital version of the card game Strategalo, a mix of noughts and crosses and War, made in Unity for a programming exam at HTX.',
    cover: { src: '/img/strategalo.jpg', alt: 'A Strategalo game in progress: a grid of face-down cards and the current player hand' },
    facts: [
      { label: 'Team', value: 'Anders and me' },
      { label: 'My part', value: 'The grid algorithm' }
    ],
    stack: ['Unity', 'C#'],
    links: [],
    sections: [
      {
        heading: 'The game',
        text: [
          'Four players each get a suit and take turns laying the top card of their pile on a grid. Like in noughts and crosses you want three in a row, and like in War a higher card can take over the spot of a lower one. Each player also has one joker, which clears a whole stack on the grid.',
          'The tricky part is the board. It always ends up 4 × 4, but where its edges are depends on where the players put their cards, so the grid has to grow and shrink while the game is running.'
        ]
      },
      {
        heading: 'My part',
        text: [
          'I wrote the algorithm that builds the grid: it clears the old tiles, creates a new grid of any width and height, and works out the size and position of every card so the board always fits on the screen. In the report I also went through its running time - two nested loops, so O(n²) - and why the loop that clears the old grid does not change that.'
        ],
        images: [
          { src: '/img/strategalo-grid-model.jpg', alt: 'Model of how the cards played define the edges of the grid' },
          { src: '/img/strategalo-small-grid.jpg', alt: 'A smaller grid early in a game' }
        ]
      }
    ]
  },
  {
    slug: 'escape-room-arresten',
    title: 'Escape room at Arresten',
    year: '2022',
    kind: 'Became a public event in Grenå',
    summary: 'An escape room that ended up as a public event, including a keypad I built with an Arduino.',
    cover: { src: '/img/escape-room-playtest.jpg', alt: 'A playtest: two players with bags over their heads, chained to the interrogation table' },
    facts: [
      { label: 'Team', value: 'Anders, Astrid and me' },
      { label: 'Players', value: 'Two at a time' },
      { label: 'Puzzles', value: 'Seven, three hints each' }
    ],
    stack: ['Arduino', '3D printing'],
    links: [],
    sections: [
      {
        heading: 'The story',
        text: [
          'We started on it in the middle of August 2022, and it ended up running as a public event at Arresten in Grenå.',
          'It is 28 June 1942. You are two resistance fighters who were caught planting a bomb at a German headquarters, and you start the game chained to the table in the interrogation room. On the way in, you overheard the guards change the arming code for your bomb. Now you have to get free, find your way into the office behind the bookcase, arm the bomb and get out.'
        ]
      },
      {
        heading: 'Building the room',
        text: [
          'The room was built inside an existing space, with fabric walls to split it into the interrogation room and the office behind the bookcase, a wall of old pallets, shelves, lockboxes and props.'
        ],
        images: [
          { src: '/img/escape-room-room.jpg', alt: 'The finished office with shelves, a lockbox, a pallet wall and a bookcase' },
          { src: '/img/escape-room-building.jpg', alt: 'The fabric walls going up during the build' }
        ]
      },
      {
        heading: 'The puzzles',
        list: [
          'The two players each get half of a code and can only solve it by describing their sheet to each other.',
          'A bookcase that turns out to be a door, found by the light through a gap and the scratches on the floor.',
          'Locked boxes, a hidden key under a table and three books that point to the numbers of a padlock.',
          'The bomb beeps its last code in Morse, which has to be decoded with a poster on the wall and typed into the keypad at the exit.'
        ]
      },
      {
        heading: 'The keypad',
        text: [
          'The keypad and the bomb are an Arduino with nine buttons, a small LCD screen and a speaker, in a case I 3D printed. I first built it for an exam project at HTX in 2022 and reused it here. It has a start code and a reset code, so the room can be reset between groups without opening anything.'
        ],
        images: [
          { src: '/img/escape-room-keypad.jpg', alt: 'The 3D printed keypad with nine buttons and an LCD screen' },
          { src: '/img/escape-room-development.jpg', alt: 'Me during the development of the escape room' }
        ]
      },
      {
        heading: 'Watching the players',
        text: [
          'There were cameras in the room, so we could follow each group and give hints at the right time, and record the attempts if the players agreed. We tested a camera on a motorised gimbal, so one camera could turn and follow the players around the room.'
        ],
        video: { title: 'Testing the camera gimbal in the room', file: '/video/escape-room-camera.mp4' }
      }
    ]
  },
  {
    slug: 'garden-rush',
    title: 'Garden Rush',
    year: '2022',
    kind: 'A card game we tried to get published',
    summary: 'A social card game for 5-8 players, where you work together with your neighbours to build the nicest garden on the street, and sabotage everyone else.',
    cover: { src: '/img/garden-rush.jpg', alt: 'Five Garden Rush cards: Hundelort, Pool, Bålplads, Træhus and Stjæl' },
    facts: [
      { label: 'Players', value: '5-8' },
      { label: 'Cards', value: '102 build cards, 15 action cards' },
      { label: 'Team', value: 'Anders, Rasmus, Viktor and me' }
    ],
    stack: ['Game design', 'Playtesting'],
    links: [],
    sections: [
      {
        heading: 'The game',
        text: [
          'Everyone sits around the table with a neighbour on each side. You collect matching build cards to build things like a pool, a tree house or a fire pit, and when you build, your neighbours get half the points too, so it pays to trade cards with them. On the other hand, you can drop a "hundelort" in someone\'s garden, steal a card or put up a fence so they skip a turn.',
          'Turns are at most 30 seconds and two actions, so the game is fast and loud.'
        ]
      },
      {
        heading: 'How it started',
        text: [
          'It started on a study trip to a university in Skövde, Sweden, in March 2022. The task was to make a board game, and over two or three days we came up with Garden Rush and the broad strokes of the rules. When we came home, we decided to keep working on it, which we did for a long time.'
        ]
      },
      {
        heading: 'Trying to make it a product',
        text: [
          'We ran it a bit like a small startup. I led most of the meetings and wrote the agendas, we compared drafts from six artists and chose one, wrote the manual, playtested it at game cafés, and worked on a pitch for GameHub Danmark and a list of publishers. It never got published, but I learned a lot about working as a team on something nobody asked us to make.'
        ],
        images: [{ src: '/img/garden-rush-logo.jpg', alt: 'The Garden Rush logo, a fire pit' }]
      }
    ]
  },
  {
    slug: 'bossfight',
    title: 'BossFight',
    year: '2022',
    kind: 'Unity boss fight with three attacks',
    summary: 'A small top-down 2D boss fight made in Unity in 2022 as a school project.',
    cover: { src: '/img/bossfight.jpg', alt: 'The player and the boss in the arena' },
    facts: [{ label: 'Size', value: 'Five scripts, about 570 lines' }],
    stack: ['Unity', 'C#'],
    links: [{ label: 'GitHub', href: 'https://github.com/MikkelBlom/BossFight' }],
    sections: [
      {
        heading: 'The boss',
        text: ['The boss picks a random attack after a short random delay.'],
        list: [
          'Jump: a marker shows where it will land, and it slams down with damage in a radius.',
          'Circle attack: rings of bullets, offset a bit each time so no spot stays safe.',
          'Following bullet: a bullet that homes in on the player.'
        ]
      },
      {
        heading: 'Looking back',
        text: [
          'There are things I would do differently today. Most of the boss logic sits in one script, and attacks are picked by number in a switch instead of being separate classes. But it is a complete loop: an arena, a boss, health bars and a win and lose screen.'
        ]
      }
    ]
  },
  {
    slug: 'limbus-infantium',
    title: 'Limbus Infantium',
    year: '2021',
    kind: 'Horror game, I built the maze generation',
    summary: 'A horror game made in a team at school. You are chased through a maze and have to find four puzzle rooms to escape. I built the maze generation.',
    cover: { src: '/img/limbus-infantium.jpg', alt: 'Limbus Infantium: a masked figure, a generated maze seen from above, and a dark machine' },
    facts: [
      { label: 'Team', value: 'André, Bertram, Mikkel, one more and me' },{ label: 'Grade', value: 'Top grade' }],
    stack: ['Unity', 'C#'],
    links: [{ label: 'itch.io', href: 'https://drive-thru-graveyard.itch.io/limbus-infantium' }],
    sections: [
      {
        heading: 'The idea',
        text: [
          'Limbus Infantium was a horror game we made as a school project. The goal was to find four puzzle rooms hidden in the maze and solve the puzzle in each of them to escape, while something hunts you through the corridors.',
          'We designed the puzzles, but never got as far as building them. And honestly, it did not matter much: the maze ended up far too big, so nobody who played it ever found a puzzle room.'
        ]
      },
      {
        heading: 'The maze generation',
        text: [
          'The maze is different every time. It grows out from the start in the middle as paths that wander towards the exits, and then fills up the rest of the area, so there is always a way out, but never the same one. The clip is from October 2021, while I was building it.'
        ],
        video: { title: 'The maze being generated', file: '/video/limbus-maze.mp4' }
      },
      {
        heading: 'Trailer',
        video: { title: 'Limbus Infantium trailer', youtube: 'CtyWfcaMhBk' }
      }
    ]
  },
  {
    slug: 'dk-battletanks',
    title: 'DK Battletanks',
    year: '2021',
    kind: 'Two-player tank game in a maze',
    summary: 'A school project inspired by the browser game Tank Trouble. Two tanks fight in a maze on one keyboard, bullets bounce off the walls, and power-ups drop around the map.',
    cover: { src: '/img/dk-battletanks.jpg', alt: 'Two tanks in a green maze, with health, ammo and kills for both players at the bottom' },
    facts: [
      { label: 'Players', value: 'Two, on one keyboard' },
      { label: 'Made', value: 'April 2021' }
    ],
    stack: ['Unity', 'C#'],
    links: [],
    sections: [
      {
        heading: 'The game',
        text: [
          'We made it as a school project, inspired by Tank Trouble, a browser game we played a lot. Each player picks a tank and drives it around the maze, one with WASD and Space and the other with the arrow keys and Numpad 0. Bullets bounce off the walls, so a shot can come around a corner, and you have to reload and pick up ammo drops to keep shooting. The bar at the bottom keeps track of health, ammo and kills.'
        ],
        images: [{ src: '/img/dk-battletanks-select.jpg', alt: 'Choosing a tank before the game' }]
      },
      {
        heading: 'Power-ups',
        text: ['Power-ups drop around the maze and change how your tank shoots until they run out:'],
        list: [
          'Big Bullet: a slower, larger bullet that does more damage.',
          'Shotgun: a spread of bullets at once.',
          'Wallbreaker: a shot that destroys the wall it hits, so you can open new paths.',
          'Minigun: a fast stream of small bullets.'
        ]
      }
    ]
  },
  {
    slug: 'danebrawl',
    title: 'DaneBrawl',
    year: '2020',
    kind: 'Game jam, 3rd of 25',
    status: '3rd place',
    summary: 'Defend Denmark from invading Swedes as Holger Danske, H.C. Andersen or Mads Mikkelsen. Made for DMSPILJAM in September 2020.',
    cover: { src: '/img/danebrawl.jpg', alt: 'DaneBrawl cover art: a pixel-art viking and a brawler in a striped shirt on a Danish street' },
    facts: [
      { label: 'Team', value: 'Rasmus, me and at least one more, with art from Bertram' },{ label: 'Placed', value: '3rd of 25' }],
    stack: ['Unity', 'C#'],
    links: [{ label: 'itch.io', href: 'https://drive-thru-graveyard.itch.io/danebrawl' }],
    sections: [
      {
        heading: 'The game',
        text: [
          'The Swedes have crossed the ice and are invading Denmark. You pick Holger Danske, H.C. Andersen or Mads Mikkelsen, each with their own way of fighting, and beat them back. H.C. Andersen, for example, fights with the Little Mermaid.',
          'We made it for DMSPILJAM in September 2020 and came 3rd of 25. The judges liked that each character had a weapon tied to Denmark and that hitting the enemies felt good, and they suggested more variation in the music.'
        ]
      },
      {
        heading: 'Trailer',
        video: { title: 'DaneBrawl trailer', youtube: 'A6AaryIRUu4' }
      }
    ]
  }
]

// Shown on the About page, top to bottom in exactly this order.
// `when` is free text, so "2022?" is fine until the date is checked. `project` links to /work/<slug>/.
export type TimelineEntry = { when: string; title: string; text: string; project?: string; links?: Link[] }

export const timeline: TimelineEntry[] = [
  { when: 'Oct 2026', title: 'Building S.E.N.N.E.P. V2', text: 'The successor to my HTX robot. The idea is from 2025; now it is actually being built.', project: 'sennep-v2' },
  { when: 'Oct 2026', title: 'New website for Coding Pirates Odense', text: 'Static site with forms for the waiting lists and volunteers.', project: 'coding-pirates-odense' },
  { when: 'Oct 2026', title: 'Launched Buzzboard', text: 'A Jeopardy-style quiz with a buzzer in every pocket.', project: 'buzzboard' },
  { when: 'Oct 2026', title: 'Find Frekvensen for Ada Lovelace Day', text: 'A micro:bit radio game for the Coding Pirates event.', project: 'find-frekvensen' },
  { when: '2026', title: 'Study start mentor at SDU, Campus Vejle', text: 'Welcoming new engineering students on the new campus.' },
  { when: 'Jun 2026', title: 'Club management system for Coding Pirates', text: 'Members, volunteers and season planning for the club.', project: 'club-management-system' },
  { when: 'Jun 2026', title: 'Started Grace', text: 'A voice assistant that runs entirely on my own PC.', project: 'grace' },
  { when: 'May 2026', title: 'Darkroom', text: 'File tools that run on your own machine. Live on the web and as a desktop app.', project: 'darkroom' },
  { when: 'Feb - May 2026', title: 'Arnes Elektronik, semester project', text: 'Desktop e-commerce system in C# / .NET with Avalonia UI and PostgreSQL, built by a group of six over seven Scrum sprints. I drove the refactor to MVVM halfway through and wrote the integration test for the domain layer. Graded 12.', project: 'arnes-elektronik' },
  { when: 'Sep 2025', title: 'Started Software Engineering at SDU', text: 'BSc in Software Engineering. Average of 11.75 over the first two semesters.' },
  { when: 'Sep 2025 - Jan 2026', title: 'Skraldehelten, semester project', text: 'A learning game about waste sorting for 10-19 year olds, in C# on the World of Zuul framework. I restructured the code into presentation, domain and data layers when the first design stopped holding. Graded 12.', project: 'skraldehelten' },
  { when: 'Aug 2025', title: 'Judge at STEAM Games, H.C. Andersen Festivals', text: 'Assessed and gave feedback on school teams, including international ones.' },
  { when: 'Jun 2025', title: 'Started Wireframe Studios', text: 'My own company, building custom software for businesses. The first big job was a system for CNC programs shared between a manufacturer\'s two factories.', project: 'cnc-program-system', links: [{ label: 'wireframestudios.dk', href: 'https://wireframestudios.dk/en' }] },
  { when: 'Sep 2024 - Apr 2025', title: 'Red Cross youth leader delegate, Nepal', text: 'Trained 52 local teachers across 13 schools and supported 110+ workshops for over 300 young people. Handled about 100,000 DKK in project funds for more than 70 local initiatives.' },
  { when: 'Apr 2024', title: 'Chair of Coding Pirates Odense', text: 'Responsible for running the local club, coordinating volunteers and its development.', project: 'coding-pirates-odense' },
  { when: '2023 - 2024', title: 'Teaching programming', text: 'Hired by schools for introductory programming courses over several days.' },
  { when: 'Mar - Apr 2023', title: 'Territory Takeover', text: 'Board game with RFID for an exam project. Top grade.', project: 'territory-takeover' },
  { when: 'Feb 2023', title: 'Project Gloop, made in Seattle', text: 'Roguelike made by a team of seven on an exchange trip. I built the level generation.', project: 'project-gloop' },
  { when: 'Jan - Mar 2023', title: 'S.E.N.N.E.P.', text: 'A robot with feelings, on 3D printed mecanum wheels. I wrote all the code except the sound detection.', project: 'sennep-robot' },
  { when: 'Nov 2022', title: 'AR Sandbox', text: 'Kinect and projector on real sand, for the school open house. Top grade.', project: 'ar-sandbox' },
  { when: 'Sep 2022', title: 'Strategalo', text: 'A card game made digital in Unity. I wrote the grid algorithm.', project: 'strategalo' },
  { when: 'Aug 2022', title: 'Escape room at Arresten, Grenå', text: 'Ended up as a public event.', project: 'escape-room-arresten' },
  { when: 'Mar - Sep 2022', title: 'Garden Rush', text: 'Started as a board game on a study trip to Skövde, Sweden. I led most of the meetings afterwards.', project: 'garden-rush' },
  { when: '2022', title: 'BossFight', text: 'School project: a small boss fight in Unity.', project: 'bossfight' },
  { when: 'Oct 2021', title: 'Limbus Infantium', text: 'School horror game. I built the maze generation.', project: 'limbus-infantium' },
  { when: 'Apr 2021', title: 'DK Battletanks', text: 'School project inspired by Tank Trouble, with power-ups.', project: 'dk-battletanks' },
  { when: 'Sep 2020', title: 'DaneBrawl, 3rd of 25 in a game jam', text: 'Made for DMSPILJAM September 2020.', project: 'danebrawl' },
  { when: 'Aug 2020 - Jul 2023', title: 'HTX, Game Design', text: 'Viden Djurs in Grenå. Programming B and Communication & IT A.' },
  { when: '2019 - 2020', title: 'Game design line at Skamling efterskole', text: 'A year with game development and game design: Unity, C#, Twine, RPG Maker and Dreams, game jams and the Danish championship in game development for efterskoler. A cross-subject innovation project (a steam sensor that turns a restaurant extractor hood off when it is not needed) got a 12.' }
]


// Recommendations, shown on the About page. Translated from Danish.
export const recommendations = [
  {
    quote: 'Mikkel has a sharp combination of technical skill and the ability to explain things. He is good at organising his own work and at documenting and communicating along the way. One of his strengths is that he can work independently: he takes ownership of his projects and follows them through. Even under pressure, he delivers engagement and reliability.',
    name: 'Alexander Kirkegaard',
    role: 'Development consultant, Viden Djurs',
    year: '2023'
  },
  {
    quote: 'Mikkel has a strong passion for games. I see him as an extraordinarily talented young man, who has taken part in the teaching dutifully. He is good at working together, and has a quirky sense of humour. More than once he has put heart and soul into game jams.',
    name: 'Alexander Kirkegaard',
    role: 'Teacher, game design line at Skamling efterskole',
    year: '2020'
  }
]
