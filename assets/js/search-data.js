// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-novel-approximate-multi-precision-bfloat16-multiplier",
          title: 'Novel Approximate Multi-precision Bfloat16 multiplier',
          description: "Improving the efficiency of Approximate Compute Units for AI on Edge via algorithmic optimizations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bf16_project/";
            },},{id: "projects-novel-ai-accelerator-with-native-differential-privacy",
          title: 'Novel AI Accelerator with Native Differential Privacy',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dp_project/";
            },},{id: "projects-efficient-approximation-in-ai-cus",
          title: 'Efficient Approximation in AI CUs',
          description: "Improving the efficiency of Approximate Compute Units for AI on Edge via algorithmic optimizations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dra_project/";
            },},{id: "projects-optimizing-llms-for-efficient-inference-on-edge",
          title: 'Optimizing LLMS for efficient inference on Edge',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm_project/";
            },},{id: "projects-approximate-computation-units",
          title: 'Approximate Computation Units',
          description: "Novel Compute Units for enabling compressed AI at Edge",
          section: "Projects",handler: () => {
              window.location.href = "/projects/po2_project/";
            },},{id: "projects-ray-traced-door-simulation-webapp",
          title: 'Ray-traced Door Simulation Webapp',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/raytrace_project/";
            },},{id: "projects-reconfigurable-ai-compute-units",
          title: 'Reconfigurable AI Compute Units',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reconf_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/rendercv/rendercv_output/Muhammad_Hamis_Haider_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6D%69%73.%68%61%69%64%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-hamis-haider-7a0565159", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6_5XFCIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
