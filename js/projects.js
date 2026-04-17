// Projects Page — Data + Renderer
//
// TO ADD A PROJECT:    push a new object into PROJECTS below.
// TO EDIT A PROJECT:   update any field in its object.
// TO DELETE A PROJECT: remove its object and re-number the rest.
// TO REORDER:          move objects up/down in the array.
//
// category options:  "web" | "software" | "hardware" | "ai"
// featured:          true = card spans 2 columns (use for standout projects)
// imageClass:        "contain" keeps image letterboxed (good for diagrams)
// imageStyle:        extra inline style string on the <img> element
// links:             array of { label, href, style: "primary" | "outline" }
// href:              tap-target URL on mobile (usually the primary link)

const PROJECTS = [
  {
    number: "01",
    title: "Aiyu Swimwear Website",
    category: "web",
    featured: true,
    image: "assets/images/project_aiyu_website.png",
    imageClass: "",
    imageStyle: "",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Supabase"],
    description:
      "Full stack e-commerce site for a startup swimwear brand. Stripe payments, Resend emails, Flodesk marketing, and Supabase database. Built with AI-assisted workflows.",
    features: [
      "Inventory tracking and management",
      "Email signup and marketing",
      "Instagram integration",
      "Hosted on Vercel",
    ],
    links: [
      { label: "View Site", href: "https://aiyuswim.com", style: "primary" },
      { label: "Code Unavailable", href: "#", style: "outline" },
    ],
    href: "https://aiyuswim.com",
  },
  {
    number: "02",
    title: "Chess Game",
    category: "software",
    featured: false,
    image: "assets/images/project_chess.png",
    imageClass: "",
    imageStyle: "",
    tags: ["Java", "MySQL"],
    description:
      "Full stack chess game in Java. Play against other users with a terminal GUI. Supports game observation and move previews.",
    features: [
      "Multiplayer chess",
      "User authentication",
      "Client-server architecture",
    ],
    links: [
      { label: "Demo Unavailable", href: "#", style: "primary" },
      { label: "View GitHub", href: "https://github.com/noahgoo/chess", style: "outline" },
    ],
    href: "https://github.com/noahgoo/chess",
  },
  {
    number: "03",
    title: "CFA Workflow Tracker",
    category: "web",
    featured: false,
    image: "assets/images/project_cfa_web.png",
    imageClass: "",
    imageStyle: "",
    tags: ["React", "Firebase", "AppScript"],
    description:
      "Web app for tracking hold times at a CFA franchise. Google Sheets backend with AppScript automation.",
    features: [
      "Auto timer for holds over 15 min",
      "Automatic database logging",
      "Breakfast and Lunch/Dinner toggle",
    ],
    links: [
      { label: "Demo Unavailable", href: "#", style: "primary" },
      { label: "View GitHub", href: "https://github.com/noahgoo/CFA-Hold-Logger.git", style: "outline" },
    ],
    href: "https://github.com/noahgoo/CFA-Hold-Logger.git",
  },
  {
    number: "04",
    title: "Arduino Light Following Robot",
    category: "hardware",
    featured: true,
    image: "assets/images/light_robot.png",
    imageClass: "",
    imageStyle: "object-position: center 40%;",
    tags: ["C++", "Arduino", "Embedded Systems"],
    description:
      "Arduino robot that follows a light source using sensors and a motor driver. Servo motor adjusts light sensor angle for accurate tracking.",
    features: [
      "Capacitive touch speed control",
      "Light sensor direction control",
      "Ultrasonic obstacle detection",
    ],
    links: [
      { label: "View Demo", href: "https://youtu.be/2vacC3jIk4E", style: "primary" },
      { label: "Source Code", href: "robot-code.html", style: "outline" },
    ],
    href: "https://youtu.be/2vacC3jIk4E",
  },
  {
    number: "05",
    title: "Datalog Interpreter",
    category: "software",
    featured: false,
    image: "assets/images/datalog_intepreter.png",
    imageClass: "",
    imageStyle: "",
    tags: ["Python"],
    description:
      "Parses a datalog program, evaluates rules, and processes queries using graph theory and discrete math.",
    features: [
      "Reverse graph traversal",
      "Discrete math algorithms",
      "Rule evaluation engine",
    ],
    links: [
      { label: "Demo Unavailable", href: "#", style: "primary" },
      { label: "View GitHub", href: "https://github.com/byu-cs-236-f24/project-5-noahgoo.git", style: "outline" },
    ],
    href: "https://github.com/byu-cs-236-f24/project-5-noahgoo.git",
  },
  {
    number: "06",
    title: "Mini Security System",
    category: "hardware",
    featured: false,
    image: "assets/images/mini-security.png",
    imageClass: "",
    imageStyle: "",
    tags: ["Arduino", "C++"],
    description:
      "Arduino-based security system with LCD, IR receiver, ultrasonic sensor, buzzer, and LEDs. IR remote arms and disarms the system.",
    features: [
      "Buzzer alarm on detection",
      "LED code status indicator",
      "Servo motor door lock",
    ],
    links: [
      { label: "View Demo", href: "https://youtu.be/rSQOoB-HKwE", style: "primary" },
      { label: "View GitHub", href: "https://github.com/noahgoo/Mini-Security-System.git", style: "outline" },
    ],
    href: "https://youtu.be/rSQOoB-HKwE",
  },
  {
    number: "07",
    title: "Smart Weather Station",
    category: "hardware",
    featured: false,
    image: "assets/images/smart_weather.png",
    imageClass: "contain",
    imageStyle: "",
    tags: ["Arduino", "C++"],
    description:
      "Weather station using a Raspberry Pi, DHT11 sensor, and LCD screen to display live temperature and humidity.",
    features: [
      "Humidity and temperature sensor",
      "LCD live readout",
    ],
    links: [
      { label: "View Demo", href: "https://youtube.com/shorts/LDfa5cCFOwM?feature=share", style: "primary" },
      { label: "View GitHub", href: "https://github.com/noahgoo/Smart-Weather-Station.git", style: "outline" },
    ],
    href: "https://youtube.com/shorts/LDfa5cCFOwM?feature=share",
  },
  {
    number: "08",
    title: "Smart Doorbell",
    category: "hardware",
    featured: false,
    image: "assets/images/smart_doorbell.png",
    imageClass: "",
    imageStyle: "object-position: 20%;",
    tags: ["C++", "Raspberry Pi"],
    description:
      "Smart doorbell using a Raspberry Pi and camera. Captures photos on press and uploads to a university server for remote viewing.",
    features: [
      "Photo on doorbell press",
      "Server upload",
      "Menu for browsing photos",
    ],
    links: [
      { label: "Demo Unavailable", href: "#", style: "primary" },
      { label: "View GitHub", href: "https://github.com/byu-ecen-224-classroom/doorbell-noahgoo.git", style: "outline" },
    ],
    href: "https://github.com/byu-ecen-224-classroom/doorbell-noahgoo.git",
  },
  {
    number: "09",
    title: "AnkiEx (Startup)",
    category: "ai",
    featured: true,
    image: "assets/images/anki-ex-startup.png",
    imageClass: "",
    imageStyle: "",
    tags: ["Swift", "JavaScript", "Supabase", "Claude Code"],
    description:
      "macOS extension that generates Anki flashcards from highlighted text using AI. Highlight anything, hit a shortcut, get cards instantly.",
    features: [
      "macOS menu bar app",
      "Multiple card types",
      "Direct Anki integration",
      "AI generation and custom RAG",
    ],
    links: [
      { label: "View Website", href: "https://www.anki-ex.com/", style: "primary" },
      { label: "Code Unavailable", href: "#", style: "outline" },
    ],
    href: "https://www.anki-ex.com/",
  },
];

// --- Rendering (no edits needed below this line) ---

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("filter-bar");
  if (!grid || !filterBar) return;

  const CATEGORY_LABELS = { web: "Web", software: "Software", hardware: "Hardware", ai: "AI" };

  // Build filter bar
  const counts = { all: PROJECTS.length };
  PROJECTS.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });

  const filters = ["all", ...Object.keys(CATEGORY_LABELS)];
  filters.forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (key === "all" ? " active" : "");
    btn.dataset.filter = key;

    const label = key === "all" ? "All" : CATEGORY_LABELS[key];
    btn.textContent = label + " ";

    const countSpan = document.createElement("span");
    countSpan.className = "count";
    countSpan.textContent = counts[key] || 0;
    btn.appendChild(countSpan);

    filterBar.appendChild(btn);
  });

  // Optionally prepend a label
  const label = document.createElement("span");
  label.className = "filter-bar-label";
  label.textContent = "Filter";
  filterBar.prepend(label);

  // Build project cards
  function buildCard(project) {
    const card = document.createElement("div");
    card.className = "project-card" + (project.featured ? " featured" : "");
    card.dataset.category = project.category;
    if (project.href) card.dataset.href = project.href;

    // Image
    const cardImage = document.createElement("div");
    cardImage.className = "card-image";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    img.className = "project-img" + (project.imageClass ? " " + project.imageClass : "");
    if (project.imageStyle) img.style.cssText = project.imageStyle;
    cardImage.appendChild(img);

    // Overlay
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";

    const header = document.createElement("div");
    header.className = "card-header";

    const num = document.createElement("span");
    num.className = "card-number";
    num.textContent = project.number;

    const pill = document.createElement("span");
    pill.className = "card-category-pill";
    pill.textContent = CATEGORY_LABELS[project.category] || project.category;

    header.appendChild(num);
    header.appendChild(pill);

    const bottom = document.createElement("div");
    bottom.className = "card-bottom";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    const tags = document.createElement("div");
    tags.className = "project-tags";
    project.tags.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });

    bottom.appendChild(title);
    bottom.appendChild(tags);
    overlay.appendChild(header);
    overlay.appendChild(bottom);

    // Hover content
    const hoverContent = document.createElement("div");
    hoverContent.className = "card-hover-content";

    const desc = document.createElement("p");
    desc.className = "project-description";
    desc.textContent = project.description;

    const featureList = document.createElement("ul");
    featureList.className = "project-features-list";
    project.features.forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      featureList.appendChild(li);
    });

    const links = document.createElement("div");
    links.className = "project-links";
    project.links.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.href;
      a.className = "btn btn-" + l.style;
      a.textContent = l.label;
      if (l.href !== "#") a.target = "_blank";
      links.appendChild(a);
    });

    hoverContent.appendChild(desc);
    hoverContent.appendChild(featureList);
    hoverContent.appendChild(links);

    card.appendChild(cardImage);
    card.appendChild(overlay);
    card.appendChild(hoverContent);

    return card;
  }

  const fragment = document.createDocumentFragment();
  PROJECTS.forEach((p) => fragment.appendChild(buildCard(p)));
  grid.appendChild(fragment);

  // Filter logic
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.dataset.filter;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    grid.querySelectorAll(".project-card").forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });

  // Cursor ring grows on cards (mirrors main.js behavior)
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");
  if (cursorDot && cursorRing) {
    grid.addEventListener("mouseover", (e) => {
      if (e.target.closest(".project-card")) {
        cursorDot.style.opacity = "0";
        cursorRing.style.width = "48px";
        cursorRing.style.height = "48px";
        cursorRing.style.borderColor = "rgba(61, 79, 214, 0.7)";
      }
    });
    grid.addEventListener("mouseout", (e) => {
      if (e.target.closest(".project-card")) {
        cursorDot.style.opacity = "1";
        cursorRing.style.width = "32px";
        cursorRing.style.height = "32px";
        cursorRing.style.borderColor = "rgba(61, 79, 214, 0.45)";
      }
    });
  }
});
