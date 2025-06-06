import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Joshua',
    lastName:  'Farhi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/gallery/IMG_3147.JPG',
    location:  'EST',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
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
        name: 'Leetcode',
        icon: 'leetcode',
        link: 'https://leetcode.com/u/joshfarhi/',
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
    headline: <>Joshua Farhi | Full-Stack Web Developer</>,
    subline: <>Building scalable, high-performance web applications focused on intuitive user experiences and seamless functionality.</>
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
        display: false
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
        I'm a full-stack developer and web engineer driven by a passion for simplifying complex challenges into clean, intuitive design solutions. 
        I excel in creating seamless user experiences through the interfaces I both build and design using Next.js and modern JavaScript frameworks.
        My work also includes comprehensive SEO analysis, and I have extensive experience in Digital Design with the Adobe Creative Suite. I am dedicated to blending performance optimization and responsive design to ensure fast, interactive, and visually appealing web applications.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Full-Stack Web Developer',
                timeframe: '2019 - Present',
                role: 'Freelance Full-stack Web Developer & SEO Specialist',
                achievements: [
                    <>Built high-converting business website for Springfield Painting using Next.js and Tailwind CSS, achieving 95+ Lighthouse performance scores and implementing advanced local SEO strategies that target 50+ location-specific keywords for maximum search visibility.</>,
                    <>Developed in-store points and kiosk system using Next.js 15, Clerk authentication, Supabase SSR, and Tailwind CSS 4. Implemented interactive UI components with Radix UI primitives, drag-and-drop functionality using DND Kit, smooth animations with Framer Motion, and particle effects for enhanced user engagement. Built with TypeScript for type safety and responsive design patterns.</>,
                    <>Created comprehensive ingredient management application for restaurant operations using Next.js, Clerk authentication, Supabase database, and Tailwind CSS. Implemented real-time inventory tracking, automated low-stock alerts, supplier management features, and responsive dashboard interface with secure user authentication and role-based access control.</>,
                    <>Developed automated inventory management system for Joyful Expression e-commerce site using Python scripting to import CSV files into WooCommerce, reducing manual inventory processing time by 80% while maintaining data accuracy and streamlining business operations.</>,
                    <>Engineered responsive e-commerce platforms for Zoots Cannabis Co. using WordPress, Elementor, and WooCommerce with industry-specific compliance features, payment gateway integrations (Stripe, PayPal), and conversion-optimized checkout flows that increased online sales.</>,
                    <>Built scalable inventory tracker application using Next.js, Prisma ORM, and TypeScript, deployed on Vercel with PostgreSQL database and ShadCN UI components, featuring real-time data synchronization and responsive dashboard interface.</>,
                    <>Delivered comprehensive SEO optimization for automotive dealerships, achieving 60% average monthly increase in organic traffic through technical audits, keyword research with Ahrefs, and strategic content architecture improvements that consistently ranked sites on Google's first page.</>
                ],
                images: [ ]
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
                name: 'UNCC',
                description: <>Studied fullstack web development and obtained a certification of completion.</>,
            },
            {
                name: 'Central Piedmont',
                description: <>Associates in Arts</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'JavaScript, React, & Next.js',
                description: <>Proficient in JavaScript and its modern frameworks, particularly React and Next.js. Experienced in building scalable web applications with server-side rendering (SSR), static site generation (SSG), dynamic routing, API routes, and middleware for seamless performance.</>,
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
                title: 'HTML5, CSS3, ES6, & Web Components',
                description: <>Skilled in creating responsive, mobile-first designs using HTML5, CSS3, and ES6. Expertise in utilizing Web Components to create reusable and efficient UI components that enhance modular development.</>,
                images: [
                    {
                        src: '/images/projects/project-01/html-css-es-icons.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'API Integration (RESTful, GraphQL)',
                description: <>Experienced in integrating RESTful and GraphQL APIs to ensure efficient communication between front-end and back-end systems, optimizing data flow and application performance.</>,
                images: [
                    {
                        src: '/images/projects/project-01/api-integration-icon.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'CI/CD, Git Workflow, & Collaboration',
                description: <>Efficient in continuous integration and deployment (CI/CD) pipelines, along with version control using Git, GitHub, and GitLab. Collaborates effectively in team environments through peer code reviews, issue tracking, and agile methodologies like pair programming.</>,
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
                title: 'UI/UX Design & Responsive Web Design',
                description: <>Adept at crafting intuitive user interfaces and experiences with a focus on responsive web design. Ensures optimal usability across all devices, from mobile to desktop.</>,
                images: [
                    {
                        src: '/images/projects/project-01/responsive-websites-icon.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Docker & AWS',
                description: <>Proficient in deploying and managing applications using Kubernetes and Docker, ensuring scalability and stability. Experienced with AWS for cloud services and infrastructure management.</>,
                images: [
                    {
                        src: '/images/projects/project-01/docker-icon.png',
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