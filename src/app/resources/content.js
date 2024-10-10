import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Joshua',
    lastName:  'Farhi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpeg',
    location:  'EST',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/joshfarhi',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/joshua-farhi/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:joshfarhi12@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Joshua Farhi | Software Engineer</>,
    subline: <>Crafting high-performance, scalable web applications with a focus on intuitive user experiences and seamless functionality. Leveraging technologies like React, Next.js, and Docker to solve complex problems and drive business growth.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
        Joshua Farhi is a Next.js front-end developer and web engineer driven by a passion for simplifying complex challenges into clean, intuitive design solutions. 
        He excels in creating seamless user experiences through the interfaces he both builds and designs using Next.js and modern JavaScript frameworks.
         His work also includes comprehensive SEO analysis, and he has extensive experience in Digital Design with the Adobe Creative Suite. Joshua is dedicated to blending performance optimization and responsive design to ensure fast, interactive, and visually appealing web applications.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Web Developer',
                timeframe: '2019 - Present',
                role: 'Freelance Full-stack Web Developer & SEO Expert',
                achievements: [
                    <>Developed an inventory tracker using Next.js, Prisma ORM, and TypeScript, deployed on Vercel with a PostgreSQL database, leveraging ShadCN for a dynamic and responsive UI.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Kush Dept. Tracker',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Grandcom',
                timeframe: 'January 2024 - May 2024',
                role: 'Website Designer & SEO Analyst',
                achievements: [
                    <>Performed in-depth SEO analysis for automotive industry websites, leveraging Google Search Console and tools like Ahrefs to conduct keyword research, backlink audits, and on-page optimization. This resulted in an average 60% increase in organic traffic each month and successfully ranked sites on the front page of search results.</>,
                    <>Developed a custom WordPress template using Elementor for multiple auto retailers across Canada, integrating seamlessly with their CRM software to streamline content management. The template was designed for easy scalability, enabling consistent branding and efficient website deployment across various dealerships.</>
                ],
                images: [ ]
            },
            {
                company: 'Pagehub',
                timeframe: 'February 2023 - August 2023',
                role: 'Website Designer',
                achievements: [
                    <>Designed responsive websites for small businesses, providing ongoing support and revisions to ensure optimal performance and user satisfaction. Focused on creating custom, scalable solutions tailored to each company's unique needs and branding.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of North Carolina at Charlotte',
                description: <>Studied fullstack web development and obtained a certification of completion.</>,
            },
            {
                name: 'Central Piedmont Community College',
                description: <>Associates in Arts</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js Framework',
                description: <>Deep understanding of Next.js, including server-side rendering (SSR), static site generation (SSG), dynamic routing, API routes, and middleware.</>,
                images: [
                    {
                        src: '/images/projects/project-01/Nextjs.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Git Workflow',
                description: <>Efficient collaboration in team environments, utilizing version control tools such as GitHub or GitLab for repository management, code reviews, and issue tracking.</>,
                images: [
                    {
                        src: '/images/projects/project-01/github-dark.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'WordPress Expertise',
                description: <>Skiled in developing custom WordPress themes using HTML, CSS, and JavaScript, ensuring that the front-end design is highly customized, fast, and SEO-optimized. I ensure that these themes are mobile-first and responsive across all devices.</>,
                images: [
                    {
                        src: '/images/projects/project-01/Wordpress-Logo.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };