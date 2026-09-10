export const portfolioData = {
  personalInfo: {
    name: "Subavishnu V",
    title: "Computer Technology Graduate | Software Developer | Data & ML Enthusiast",
    location: "Theni, India",
    email: "subavishnu9080@gmail.com",
    github: "https://github.com/subavishnu9080",
    linkedin: "https://www.linkedin.com/in/subavishnu-v/",
    bio: "Passionate Computer Science & Technology graduate specializing in full-stack software development, data analytics, and machine learning. Experienced in building clean, scalable applications with Python, JavaScript, and modern web frameworks, and applying ML algorithms to solve complex real-world problems.",
    motto: "Build things. Break things. Learn everything.",
    funFact: "I taught a machine to detect DDoS attacks 🛡️",
    currently_learning: ["React.js", "REST API Design", "Advanced Machine Learning"]
  },

  education: [
    {
      degree: "M.Sc. Computer Technology",
      institution: "Sri Krishna Arts and Science College",
      duration: "2024 - 2026",
      details: "Postgraduate studies focusing on data analytics, software development methodologies, and advanced computing paradigms."
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "The American College",
      duration: "2021 - 2024",
      details: "Undergraduate core basics in software construction, algorithms, data structures, and database engines."
    }
  ],

  skills: {
    programming: ["Python", "JavaScript", "SQL"],
    frontend: ["HTML5", "CSS3", "React.js", "Flask", "Django (Basic)"],
    databases: ["MySQL, NoSQL"],
    dataAndML: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Cleaning", "Data Visualization", "EDA"],
    testing: ["Manual Testing", "Functional Testing", "SDLC", "STLC", "Defect Tracking"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "REST APIs", "Debugging"],
    softSkills: ["Communication", "Problem Solving", "Analytical Thinking", "Teamwork"]
  },

  projects: [
    {
      id: "ddos-attack",
      name: "DDoS Attack Detection System",
      category: "machine-learning",
      description: "A machine learning system designed to detect and classify network traffic patterns as normal or Distributed Denial of Service (DDoS) attacks in real time.",
      longDescription: "This network security solution leverages machine learning to safeguard online services from devastating DDoS floods. By training classifiers on network flow characteristics (packet sizes, arrival times, headers), the system learns to spot anomalies and block malicious packets before services are overwhelmed.",
      problemSolved: "Denial of Service attacks can cripple organizations. Hand-crafted firewall rules are slow and fail against dynamic botnets. This project introduces automated anomaly detection to secure systems intelligently.",
      approach: "Used Pandas/NumPy for cleaning network telemetry datasets, extracted traffic rate features, trained Random Forest and Gradient Boosting models, and achieved high precision classification of benign vs. attack vectors.",
      technologies: ["Jupyter Notebook", "Python", "Scikit-learn", "Pandas", "NumPy", "Network Security"],
      githubUrl: "https://github.com/subavishnu9080/DDoS-Attack",
      imageUrl: "/assets/project3.png", // reusing abstract technological asset
      keyFeatures: [
        "Network traffic data preprocessing and feature scaling",
        "Multiple ML classifiers comparison (Random Forest, XGBoost)",
        "Real-time evaluation metrics calculation (F1-score, Recall, Confusion Matrix)",
        "Early warning anomaly detection logic"
      ]
    },
    {
      id: "house-price-prediction",
      name: "House Price Prediction System",
      category: "machine-learning",
      description: "An end-to-end data analytics and regression system that estimates residential property values based on structural, geographical, and market features.",
      longDescription: "A machine learning model engineered to analyze historical property sales and output valuation predictions. The project covers data gathering, exploratory data analysis (EDA), handling missing values, correlation analysis, and regression modeling.",
      problemSolved: "Property valuation is subject to human bias and delay. This tool provides instant, data-driven property evaluations to assist home buyers, sellers, and real estate analysts.",
      approach: "Conducted feature engineering (encoding categorical columns, handling outliers), implemented multiple regression algorithms (Linear Regression, Ridge, Decision Trees), and optimized model hyper-parameters using cross-validation.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/subavishnu9080/House-Price-Prediction",
      imageUrl: "/assets/project1.png", // reusing premium dashboard asset
      keyFeatures: [
        "Interactive Correlation Heatmaps and scatter analyses",
        "Outlier detection using IQR (Interquartile Range)",
        "Feature scaling and one-hot encoding pipelines",
        "Model performance testing (RMSE, R-squared evaluation)"
      ]
    },
    {
      id: "billing-software",
      name: "Retail Shop Billing Software",
      category: "web-dev",
      description: "A desktop and web-friendly retail shop billing system built to automate inventory sales, client invoice generation, and transaction history.",
      longDescription: "A custom utility developed to support real-world, daily retail billing and operations in a family-owned business. It provides a simple checkout register, computes taxes, manages product lookups, and outputs clean printable invoices.",
      problemSolved: "Manual bookkeeping is tedious and error-prone. This software speeds up checkout times, keeps transaction logs secure, and automates mathematical calculations for small business owners.",
      approach: "Engineered a lightweight frontend with HTML, CSS, and modern JavaScript. Implemented invoice calculation arithmetic, client data persistence, and printable page styles.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Invoice Generator"],
      githubUrl: "https://github.com/subavishnu9080/Billing-Softwate",
      imageUrl: "/assets/project2.png", // reusing dashboard task manager visual
      keyFeatures: [
        "Dynamic item cart with real-time total adjustments",
        "Print-friendly invoices styled for receipt printers",
        "Offline search functionality for items",
        "Persistent sales logs using browser storage"
      ]
    },
    {
      id: "bison-fitness-club",
      name: "Bison Fitness Club Web Platform",
      category: "web-dev",
      description: "A premium, fully responsive gym and fitness club website featuring class schedules, trainer highlights, and interactive booking modal overlays.",
      longDescription: "A high-performance promotional and booking portal for fitness clubs. Designed with a dark athletic theme, it prioritizes slick animations, visual hierarchy, mobile layout adaptivity, and quick-access contact flows.",
      problemSolved: "Fitness clubs need a compelling digital presence to convert site visitors into members. This site provides clear call-to-actions, visual previews, and direct connection pipelines.",
      approach: "Built with a mobile-first responsive layout, fine-tuned micro-interactions using CSS keyframes, and dynamic class information toggles with JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel Deploy"],
      githubUrl: "https://github.com/subavishnu9080/Bison-Fitness-Club",
      liveUrl: "https://bison-fitness-club.vercel.app",
      imageUrl: "/assets/project2.png",
      keyFeatures: [
        "Interactive schedule popups for fitness training classes",
        "Smooth scroll transitions and visual header changes",
        "Clean responsive forms with input validation",
        "Polished layout with glassmorphic cards and hover animations"
      ]
    },
    {
      id: "ticketing-system",
      name: "Ticketing System Web Application",
      category: "web-dev",
      description: "A full-stack support ticket management application that allows users and admin agents to create, review, track, and resolve helpdesk requests.",
      longDescription: "A customer service helpdesk system built to organize support requests. Users register, authenticate, and submit issues, while support personnel view, update ticket status, and reply to inquiries.",
      problemSolved: "Customer feedback and technical complaints can easily get lost in emails. This centralized web database categorizes support items by priority, assignees, and resolution states.",
      approach: "Developed client views and connected them with backend routing and database models to store user credentials and ticket information securely.",
      technologies: ["JavaScript", "React.js", "Node.js", "REST APIs", "SQL / Database"],
      githubUrl: "https://github.com/subavishnu9080/Ticketing-System-Web-Application",
      imageUrl: "/assets/project1.png",
      keyFeatures: [
        "Secure User Registration and Login authentication",
        "Dynamic ticket status pipeline (Open, Pending, Resolved)",
        "Priority-level sorting and issue search filters",
        "Responsive administrative dashboard and client log views"
      ]
    },
    {
      id: "bmi-calculator",
      name: "Interactive BMI Calculator",
      category: "web-dev",
      description: "A health utility that calculates Body Mass Index (BMI) and provides personalized classification alerts for body weight management.",
      longDescription: "A simple, user-friendly frontend widget designed to help users compute their BMI instantly. It takes height and weight inputs, executes calculations, and prints visual color indicators corresponding to health brackets.",
      problemSolved: "Quick weight checks should be fast and simple. This tool provides an immediate visual readout of healthy ranges, removing the need for manual math or reading tables.",
      approach: "Programmed calculations in JavaScript and designed responsive CSS cards highlighting different weight status indicators.",
      technologies: ["HTML5", "CSS3", "JavaScript", "BMI Calculations", "Responsive Layout"],
      githubUrl: "https://github.com/subavishnu9080/BMI-Calculator",
      imageUrl: "/assets/project3.png",
      keyFeatures: [
        "Instant calculation feedback with zero page refreshes",
        "Color-coded diagnostic results (Underweight, Normal, Overweight, Obese)",
        "Support for metric systems",
        "Lightweight, single-page responsive design"
      ]
    }
  ],

  certifications: [
    {
      name: "IBM Python Certification",
      issuer: "IBM",
      year: "2024",
      link: "#"
    },
    {
      name: "IBM JavaScript Certification",
      issuer: "IBM",
      year: "2024",
      link: "#"
    },
    {
      name: "Google UI/UX Design Certification",
      issuer: "Google",
      year: "2024",
      link: "#"
    },
    {
      name: "Introduction to NoSQL",
      issuer: "Infosys",
      year: "2026",
      link: "#"
    }
  ]
};
