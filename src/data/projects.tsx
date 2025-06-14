import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiFontawesome,
  SiFlutter,
  SiFigma,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  figma: {
    title: "Figma",
    bg: "black",
    fg: "white",
    icon: <SiFigma />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  Mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  fontawesome: {
    title: "Font Awesome",
    bg: "black",
    fg: "white",
    icon: <SiFontawesome />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "durent-rental-camera",
    category: "Full Stack Web App",
    title: "Durent - Camera Rental Website",
    src: "/assets/projects-screenshots/durent/Home_Page.png",
    screenshots: [
      "Home_Page.png",
      "Login.png",
      "equipment.png",
      "Admin.png",
      "Add_admin.png",
    ],
    live: "https://mediumslateblue-heron-585147.hostingersite.com/",
    github: "https://github.com/DapotZ/Durent-Rental-Camera",
    skills: {
      frontend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.Mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Durent – Camera Rental Website
          </TypographyP>

          <TypographyP className="font-mono">
            Durent is a full-stack web application designed for online camera
            and equipment rental. Built with <b>Laravel</b> and styled using{" "}
            <b>Tailwind CSS</b>, the platform offers a clean, intuitive
            experience for both customers and administrators. Users can browse
            available items, view equipment details, and make rental bookings,
            while administrators can manage all content through a secure backend
            system. The application is powered by a <b>MySQL</b>
            database for reliable data management.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Homepage</TypographyH3>
          <TypographyP className="font-mono">
            The homepage introduces users to Durent’s services with a clean
            layout, responsive navigation, and featured sections that highlight
            key categories. From here, users can easily navigate to explore the
            equipment catalog, login, or register an account.
          </TypographyP>
          <SlideShow images={[`${BASE_PATH}/durent/Home_Page.png`]} />

          <TypographyH3 className="my-4 mt-8">User Authentication</TypographyH3>
          <TypographyP className="font-mono">
            The login page ensures secure access for both users and admins.
            Built-in validation prevents invalid inputs, while user sessions
            help manage role-based redirection. Admins are redirected to the
            dashboard, and users are taken to the equipment list after login.
          </TypographyP>
          <SlideShow images={[`${BASE_PATH}/durent/Login.png`]} />

          <TypographyH3 className="my-4 mt-8">Equipment Listing</TypographyH3>
          <TypographyP className="font-mono">
            This section showcases all available rental items including camera
            bodies, lenses, and accessories. Each item includes an image, rental
            price, and detail button. Users can search and view detailed
            information before making a booking.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/durent/equipmentlisting.png`,
              `${BASE_PATH}/durent/equipment.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Admin Dashboard</TypographyH3>
          <TypographyP className="font-mono">
            Admins have access to a dedicated dashboard where they can view
            system status, manage equipment listings, and monitor rental
            requests. Each section supports full CRUD operations (Create, Read,
            Update, Delete), ensuring total control over platform content.
          </TypographyP>
          <SlideShow images={[`${BASE_PATH}/durent/Admin.png`]} />

          <TypographyH3 className="my-4 mt-8">Admin Management</TypographyH3>
          <TypographyP className="font-mono">
            In addition to equipment control, the admin can add and manage other
            administrator accounts. This feature enhances security and
            delegation by assigning responsibilities to multiple staff members.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/durent/adminequipment.png`,
              `${BASE_PATH}/durent/Add_admin.png`,
              `${BASE_PATH}/durent/adminuser.png`,
              `${BASE_PATH}/durent/adminkelolahalaman.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "master-dinamika-prakarsa",
    category: "Web Development",
    title: "CV. Master Dinamika Prakarsa – Company Profile Website",
    src: "/assets/projects-screenshots/masterdinamika/01.png",
    screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png"],
    live: "https://mdprakarsa.com/", // ganti dengan link yang sebenarnya
    github: "https://github.com/DapotZ/mdprakarsa.github.io", // ganti jika ada
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern and responsive company profile website developed for
            <b> CV. Master Dinamika Prakarsa</b>, a company specializing in
            industrial commercial parts, injection molding, extrusion, PCB
            repair, and machinery spare parts. This website showcases the
            company&apos;s services, portfolio, vision & mission, and contact
            information. Built with <b>Laravel</b> and <b>Tailwind CSS</b>, it
            delivers a professional and informative experience for potential
            clients and business partners. The site also includes a responsive
            design, service highlight sections, and an integrated contact form.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/masterdinamika/01.png`,
              `${BASE_PATH}/masterdinamika/02.png`,
              `${BASE_PATH}/masterdinamika/03.png`,
              `${BASE_PATH}/masterdinamika/04.png`,
              `${BASE_PATH}/masterdinamika/05.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "agroverse-platform",
    category: "Full Stack Web App",
    title: "Agroverse - Smart Farming Platform",
    src: "/assets/projects-screenshots/agroverse/01.png",
    screenshots: ["01.png", "04.png", "05.png", "06.png", "07.png", "08.png"],
    live: "https://agroverse.vercel.app", // Ganti dengan URL sebenarnya jika ada
    github: "https://github.com/DapotZ/Agroverse",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.fontawesome,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.Mysql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            <strong>Agroverse</strong> is a full-stack smart farming platform
            that connects agricultural communities through modern web
            technologies. This application features secure authentication and
            role-based access control for <strong>Users</strong> and{" "}
            <strong>Admins</strong>. Users can join webinars hosted by Admins,
            participate in discussion forums, like and comment on posts, shop
            for farming equipment, and leave reviews. Admins have full control
            over managing content such as webinars, forums, products, and user
            visibility on the platform.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Authentication & Roles
          </TypographyH3>
          <p className="font-mono mb-2">
            Agroverse implements a secure login system with{" "}
            <strong>JWT authentication</strong>. There are two distinct roles:
            <ul className="list-disc list-inside">
              <li>
                <strong>Users</strong>: Can register, login, join webinars, post
                in forums, like/comment on discussions, and make product
                purchases.
              </li>
              <li>
                <strong>Admins</strong>: Have access to an admin dashboard to
                manage webinars, forum moderation, product CRUD, and user
                visibility.
              </li>
            </ul>
          </p>

          <SlideShow images={[`${BASE_PATH}/agroverse/01.png`]} />

          <TypographyH3 className="my-4 mt-8">Webinar Integration</TypographyH3>
          <p className="font-mono mb-2">
            Admins can create and schedule webinars related to agriculture and
            farming innovation. Users can view, register, and join these
            webinars from their dashboards.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/agroverse/04.png`,
              `${BASE_PATH}/agroverse/05.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Community Forum</TypographyH3>
          <p className="font-mono mb-2">
            Agroverse includes a forum where users can create posts, share
            farming issues or innovations, and interact with each other. Each
            post supports <strong>likes</strong> and <strong>comments</strong>,
            enabling a healthy and collaborative environment.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/agroverse/04.png`,
              `${BASE_PATH}/agroverse/06.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">E-Commerce Features</TypographyH3>
          <p className="font-mono mb-2">
            The platform includes a store where Admins upload products such as
            tools, fertilizers, or seeds. Users can browse, add items to cart,
            purchase them, and leave <strong>ratings and reviews</strong>.
            Product detail pages feature user-generated reviews and comments.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/agroverse/07.png`,
              `${BASE_PATH}/agroverse/08.png`,
            ]}
          />

          <TypographyP className="font-mono mt-8 text-center">
            Agroverse is more than just a farming app — it&apos;s a digital
            ecosystem that bridges modern technology with agricultural growth
            and collaboration. 🌾🌐
          </TypographyP>
        </div>
      );
    },
  },

  {
    // 04. Smart Thermometer App
    id: "quicktemp",
    category: "Apps Mobile + IoT",
    title: "Quick Temp - Smart Thermometer App",
    src: "/assets/projects-screenshots/quicktemp/02.png",
    screenshots: ["02.png", "01.png", "03.png", "04.png", "05.png"],
    live: "https://github.com/DapotZ/Quick-Temp", // ganti jika ada link
    github: "https://github.com/DapotZ/Quick-Temp",
    skills: {
      frontend: [PROJECT_SKILLS.flutter],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Monitor temperature effortlessly with the Smart Thermometer App — a
            mobile + IoT system powered by Flutter, Firebase, and Arduino. The
            smart thermometer collects real-time temperature data via sensors,
            sends it to Firebase Realtime Database, and displays it on a modern,
            responsive mobile interface. Users can track, view history, and
            analyze data instantly. Seamless integration ensures data is stored,
            synced, and accessible anytime. Ideal for health, food, and
            industrial use.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/quicktemp/02.png`,
              `${BASE_PATH}/quicktemp/01.png`,
              `${BASE_PATH}/quicktemp/03.png`,
              `${BASE_PATH}/quicktemp/04.png`,
              `${BASE_PATH}/quicktemp/05.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "personal-portfolio",
    category: "Web Development",
    title: "My Portfolio Website",
    src: "/assets/projects-screenshots/myportofolio/01.png",
    screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png"],
    live: "https://dapotz.github.io/dapotz/", // ganti dengan link sebenarnya
    github: "https://github.com/DapotZ/dapotz", // ganti jika ada
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            This is a responsive and dynamic personal portfolio website built
            using <b>React</b>, <b>TypeScript</b>, and <b>Vite</b>. It serves as
            a central hub to showcase my web development projects, UI/UX
            designs, and IoT integrations. The site is styled with{" "}
            <b>Tailwind CSS</b> for a modern and clean interface, and optimized
            for performance with Vite’s fast build system. Features include
            project filtering by category, animated transitions, and reusable
            component architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/myportofolio/01.png`,
              `${BASE_PATH}/myportofolio/02.png`,
              `${BASE_PATH}/myportofolio/03.png`,
              `${BASE_PATH}/myportofolio/04.png`,
              `${BASE_PATH}/myportofolio/05.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "uiux-portfolio",
    category: "UI/UX Design",
    title: "UI/UX Design",
    src: "/assets/projects-screenshots/uiux/03.png",
    screenshots: ["03.png", "04.png", "01.png", "02.png"],
    live: "", // Kosongkan jika tidak ada link live
    github: "", // Opsional, atau arahkan ke figma/portfolio repo jika ada
    skills: {
      frontend: [PROJECT_SKILLS.figma],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            As a <b>UI/UX Designer</b>, I was responsible for designing the user
            interface and user experience of all the applications I developed or
            collaborated on. I used
            <b> Figma</b> to craft clean, user-friendly, and responsive layouts
            across web and mobile platforms. The designs were created with a
            focus on usability, consistency, and accessibility — tailored for
            various use cases such as rental platforms, smart IoT apps,
            dashboards, and mobile interfaces. Below are selected screens from
            multiple projects as part of my design showcase.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/uiux/03.png`,
              `${BASE_PATH}/uiux/04.png`,
              `${BASE_PATH}/uiux/01.png`,
              `${BASE_PATH}/uiux/02.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
