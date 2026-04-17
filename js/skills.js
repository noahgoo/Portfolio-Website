// Skills Page — Terminal Code Block
//
// TO ADD A SKILL: add an object to the relevant category below.
// TO CHANGE A LEVEL: update the "level" field ("proficient" | "intermediate" | "learning").
// TO REORDER CATEGORIES: reorder the entries in `SKILL_CATEGORIES`.

const SKILL_CATEGORIES = [
  {
    key: "languages",
    skills: [
      {
        name: "Python",
        level: "proficient",
        description:
          "First language learned. Used in scripting, data processing, and building applications.",
        projects: ["Datalog Interpreter", "Religion Project"],
      },
      {
        name: "C/C++",
        level: "proficient",
        description:
          "Object-oriented programming, embedded systems, and low-level systems development. Applied in sensor integration and logic-driven automation projects.",
        projects: [
          "Mini Security System",
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
        ],
      },
      {
        name: "Java",
        level: "intermediate",
        description:
          "Used in object-oriented programming and full stack development.",
        projects: ["Chess Game"],
      },
      {
        name: "SQL",
        level: "intermediate",
        description: "Used in building databases and data analysis.",
        projects: ["Chess Game", "CFA Workflow Tracker"],
      },
      {
        name: "JavaScript",
        level: "intermediate",
        description:
          "Frontend and backend development with React and Firebase.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      {
        name: "TypeScript",
        level: "intermediate",
        description: "Used in building web applications with React/Next.js.",
        projects: [
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Aiyu Swimwear Website",
        ],
      },
      {
        name: "Swift",
        level: "learning",
        description: "Used in building macOS menu bar applications.",
        projects: ["AnkiEx (Startup)"],
      },
      {
        name: "SystemVerilog",
        level: "intermediate",
        description:
          "Used in digital design, RTL modeling, and hardware description for coursework.",
        projects: ["Digital Design Course"],
      },
      {
        name: "Assembly",
        level: "learning",
        description:
          "Low-level programming covered in computer architecture coursework.",
        projects: ["Computer Architecture Course"],
      },
    ],
  },
  {
    key: "web",
    skills: [
      {
        name: "React",
        level: "intermediate",
        description: "Building responsive and interactive user interfaces.",
        projects: ["CFA Workflow Tracker"],
      },
      {
        name: "Next.js",
        level: "intermediate",
        description: "Used in building full-stack web applications.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      {
        name: "HTML/CSS",
        level: "intermediate",
        description:
          "Used in building and styling interactive user interfaces and web applications.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      {
        name: "Tailwind CSS",
        level: "intermediate",
        description:
          "Used in building responsive and interactive user interfaces.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      {
        name: "Node.js",
        level: "intermediate",
        description:
          "Used as the runtime for Next.js backends and server-side scripting.",
        projects: [
          "Portfolio Website",
          "Aiyu Swimwear Website",
          "CFA Workflow Tracker",
        ],
      },
      {
        name: "Stripe",
        level: "learning",
        description:
          "Used in building payment systems and e-commerce platforms.",
        projects: ["Aiyu Swimwear Website"],
      },
      {
        name: "REST API",
        level: "intermediate",
        description:
          "Used in building REST APIs for websites and other applications.",
        projects: [
          "CFA Workflow Tracker",
          "Budgeting App",
          "Aiyu Swimwear Website",
          "Chess Game",
        ],
      },
    ],
  },
  {
    key: "hardware",
    skills: [
      {
        name: "Arduino",
        level: "proficient",
        description: "Microcontroller programming and IoT device development.",
        projects: [
          "Mini Security System",
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
        ],
      },
      {
        name: "Sensors & Actuators",
        level: "proficient",
        description:
          "Used ultrasonic sensors, servo motors, LCDs, and other components to build embedded projects.",
        projects: [
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
          "Mini Security System",
        ],
      },
      {
        name: "Circuit Design",
        level: "intermediate",
        description:
          "Taken Intro to Circuits course. Used in hands-on projects to build circuits and systems.",
        projects: [
          "Smart Weather Station",
          "Mini Security System",
          "Arduino Light Following Robot",
        ],
      },
      {
        name: "Breadboard & Soldering",
        level: "intermediate",
        description: "Used in building systems with Arduino.",
        projects: ["Arduino Light Following Robot"],
      },
    ],
  },
  {
    key: "tools",
    skills: [
      {
        name: "Git",
        level: "proficient",
        description:
          "Regular use across projects. Comfortable with CLI and branches for version control and collaborative workflows.",
        projects: [
          "Aiyu Swimwear Website",
          "Chess Game",
          "Portfolio Website",
          "CFA Workflow Tracker",
        ],
      },
      {
        name: "GitHub",
        level: "proficient",
        description:
          "Used to host repositories, deploy projects, integrate with Vercel, and collaborate with others.",
        projects: [
          "Aiyu Swimwear Website",
          "Chess Game",
          "Portfolio Website",
          "CFA Workflow Tracker",
        ],
      },
      {
        name: "VS Code",
        level: "proficient",
        description: "Preferred IDE for web and mobile development.",
        projects: [
          "CFA Workflow Tracker",
          "Budgeting App",
          "Aiyu Swimwear Website",
        ],
      },
      {
        name: "Claude Code",
        level: "proficient",
        description: "Used in building web applications and mobile apps.",
        projects: [
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Aiyu Swimwear Website",
        ],
      },
      {
        name: "Vercel",
        level: "intermediate",
        description:
          "Used to deploy and host web applications with CI/CD from GitHub.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      {
        name: "Terminal",
        level: "intermediate",
        description:
          "Daily use for Git, package managers, running scripts, and navigating projects.",
        projects: ["Chess Game", "Portfolio Website", "CFA Workflow Tracker"],
      },
      {
        name: "Xcode",
        level: "learning",
        description: "Used for macOS and Swift development.",
        projects: ["AnkiEx (Startup)"],
      },
      {
        name: "Vitest",
        level: "intermediate",
        description:
          "Used for unit and integration testing across web projects.",
        projects: ["Portfolio Website", "CFA Workflow Tracker"],
      },
      {
        name: "Docker",
        level: "learning",
        description: "Used in containerization and deployment automation.",
        projects: ["Flashcard Automation"],
      },
      {
        name: "Autodesk Fusion",
        level: "learning",
        description: "Used in building 3D models for printing.",
        projects: ["Arduino Light Following Robot"],
      },
      {
        name: "MATLAB",
        level: "learning",
        description: "Used in simulations and data analysis.",
        projects: ["Signals & Systems Course"],
      },
      {
        name: "KiCad",
        level: "learning",
        description: "Used in building PCB designs.",
        projects: ["Laser Tag Project"],
      },
      {
        name: "AWS",
        level: "learning",
        description: "Used in cloud computing and hosting services.",
        projects: ["Flashcard Automation"],
      },
    ],
  },
  {
    key: "databases",
    skills: [
      {
        name: "Firebase",
        level: "proficient",
        description:
          "Used for authentication, Firestore database, and hosting across multiple projects.",
        projects: ["CFA Workflow Tracker", "Budgeting App"],
      },
      {
        name: "Supabase",
        level: "learning",
        description: "Used as backend database and auth provider.",
        projects: ["AnkiEx (Startup)"],
      },
      {
        name: "MongoDB",
        level: "learning",
        description: "Used in building full-stack web applications.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
    ],
  },
];

// --- Rendering (no edits needed below this line) ---

document.addEventListener("DOMContentLoaded", function () {
  const terminalBody = document.getElementById("terminal-body");
  if (!terminalBody) return;

  const totalSkills = SKILL_CATEGORIES.reduce(
    (sum, cat) => sum + cat.skills.length,
    0,
  );

  // Group skills by level within a category for display
  function groupByLevel(skills) {
    const order = ["proficient", "intermediate", "learning"];
    const groups = {};
    skills.forEach((s) => {
      if (!groups[s.level]) groups[s.level] = [];
      groups[s.level].push(s.name);
    });
    return order
      .filter((l) => groups[l])
      .map((l) => ({ level: l, names: groups[l] }));
  }

  // Safe DOM helpers
  function tok(className, text) {
    const span = document.createElement("span");
    if (className) span.className = className;
    span.textContent = text;
    return span;
  }

  function skillTok(name) {
    const span = document.createElement("span");
    span.className = "tok-skill";
    span.dataset.skill = name;
    span.textContent = name;
    return span;
  }

  function appendSkillList(parent, names) {
    names.forEach((name, i) => {
      parent.appendChild(tok("tok-punct", "'"));
      parent.appendChild(skillTok(name));
      parent.appendChild(tok("tok-punct", i < names.length - 1 ? "', " : "'"));
    });
  }

  // Build line content nodes
  function buildLineContents() {
    const lines = [];

    function addLine(buildFn) {
      const content = document.createElement("span");
      content.className = "line-content";
      if (buildFn) {
        buildFn(content);
      } else {
        content.textContent = "\u00a0";
      }
      lines.push(content);
    }

    addLine((c) =>
      c.appendChild(tok("tok-comment", "// Noah Goo \u2014 Technical Skills")),
    );
    addLine((c) =>
      c.appendChild(
        tok("tok-comment", "// Computer Engineering Student @ BYU"),
      ),
    );
    addLine(null);
    addLine((c) => {
      c.appendChild(tok("tok-keyword", "const "));
      c.appendChild(tok("tok-varname", "skills"));
      c.appendChild(tok("tok-punct", " = {"));
    });
    addLine(null);

    SKILL_CATEGORIES.forEach((cat, ci) => {
      const levelGroups = groupByLevel(cat.skills);
      const isLast = ci === SKILL_CATEGORIES.length - 1;

      addLine((c) => {
        c.appendChild(tok("tok-punct", "  "));
        c.appendChild(tok("tok-key", cat.key));
        c.appendChild(tok("tok-punct", ": {"));
      });

      levelGroups.forEach(({ level, names }) => {
        const pad = "\u00a0".repeat(Math.max(0, 13 - level.length));
        addLine((c) => {
          c.appendChild(tok("tok-punct", "    "));
          c.appendChild(tok(`tok-level-${level}`, level));
          c.appendChild(tok("tok-punct", ":"));
          c.appendChild(tok("tok-punct", pad + "["));
          appendSkillList(c, names);
          c.appendChild(tok("tok-punct", "],"));
        });
      });

      addLine((c) => {
        c.appendChild(tok("tok-punct", "  }" + (isLast ? "" : ",")));
      });
      if (!isLast) addLine(null);
    });

    addLine(null);
    addLine((c) => c.appendChild(tok("tok-punct", "};")));
    addLine(null);
    addLine((c) =>
      c.appendChild(
        tok(
          "tok-comment",
          `// \u2713 ${totalSkills} skills compiled successfully`,
        ),
      ),
    );
    addLine((c) => {
      const cursor = document.createElement("span");
      cursor.className = "cursor-blink";
      c.appendChild(cursor);
    });

    return lines;
  }

  const lineContents = buildLineContents();
  const fragment = document.createDocumentFragment();

  lineContents.forEach((content, i) => {
    const row = document.createElement("div");
    row.className = "code-line";
    row.style.animationDelay = `${i * 0.022}s`;

    const lineNum = document.createElement("span");
    lineNum.className = "line-number";
    lineNum.textContent = String(i + 1);

    row.appendChild(lineNum);
    row.appendChild(content);
    fragment.appendChild(row);
  });

  terminalBody.appendChild(fragment);

  // Delegated click on skill tokens
  terminalBody.addEventListener("click", (e) => {
    const skill = e.target.closest(".tok-skill");
    if (skill) showSkillModal(skill.dataset.skill);
  });

  // Modal using safe DOM construction
  function showSkillModal(skillName) {
    const existing = document.querySelector(".skill-modal");
    if (existing) existing.remove();

    // Find skill data from SKILL_CATEGORIES
    let info = null;
    for (const cat of SKILL_CATEGORIES) {
      const found = cat.skills.find((s) => s.name === skillName);
      if (found) {
        info = found;
        break;
      }
    }
    if (!info)
      info = {
        level: "learning",
        description: "Currently developing skills.",
        projects: ["In Progress"],
      };

    const modal = document.createElement("div");
    modal.className = "skill-modal";

    const overlay = document.createElement("div");
    overlay.className = "skill-modal-overlay";

    const contentEl = document.createElement("div");
    contentEl.className = "skill-modal-content";

    const header = document.createElement("div");
    header.className = "skill-modal-header";

    const titleEl = document.createElement("h2");
    titleEl.textContent = skillName;

    const closeBtn = document.createElement("button");
    closeBtn.className = "skill-modal-close";
    closeBtn.textContent = "\u00d7";
    closeBtn.setAttribute("aria-label", "Close");

    header.appendChild(titleEl);
    header.appendChild(closeBtn);

    const body = document.createElement("div");
    body.className = "skill-modal-body";

    const badge = document.createElement("span");
    badge.className = `level-badge ${info.level}`;
    // Capitalize first letter for display
    badge.textContent =
      info.level.charAt(0).toUpperCase() + info.level.slice(1);

    const desc = document.createElement("p");
    desc.className = "skill-description";
    desc.textContent = info.description;

    const projectsDiv = document.createElement("div");
    projectsDiv.className = "skill-projects";

    const projectsTitle = document.createElement("h3");
    projectsTitle.textContent = "Related Projects";

    const projectsList = document.createElement("ul");
    info.projects.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      projectsList.appendChild(li);
    });

    projectsDiv.appendChild(projectsTitle);
    projectsDiv.appendChild(projectsList);
    body.appendChild(badge);
    body.appendChild(desc);
    body.appendChild(projectsDiv);
    contentEl.appendChild(header);
    contentEl.appendChild(body);
    modal.appendChild(overlay);
    modal.appendChild(contentEl);
    document.body.appendChild(modal);

    function closeModal() {
      modal.style.animation = "modalOut 0.18s ease forwards";
      setTimeout(() => modal.remove(), 180);
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    function onKey(e) {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", onKey);
      }
    }
    document.addEventListener("keydown", onKey);
  }

  // Mobile card view — CSS shows/hides based on breakpoint
  const mobileContainer = document.getElementById("skills-mobile");
  if (mobileContainer) {
    const CAT_LABELS = {
      languages: "Languages", web: "Web", hardware: "Hardware",
      tools: "Tools", databases: "Databases",
    };
    const LEVEL_LABELS = {
      proficient: "Proficient", intermediate: "Intermediate", learning: "Learning",
    };

    SKILL_CATEGORIES.forEach((cat) => {
      const block = document.createElement("div");
      block.className = "skill-cat-block";

      const heading = document.createElement("div");
      heading.className = "skill-cat-heading";
      heading.textContent = CAT_LABELS[cat.key] || cat.key;
      block.appendChild(heading);

      const groups = {};
      cat.skills.forEach((s) => {
        if (!groups[s.level]) groups[s.level] = [];
        groups[s.level].push(s);
      });

      ["proficient", "intermediate", "learning"].forEach((level) => {
        if (!groups[level]) return;
        const row = document.createElement("div");
        row.className = "skill-level-row";

        const label = document.createElement("span");
        label.className = `skill-level-label tok-level-${level}`;
        label.textContent = LEVEL_LABELS[level];
        row.appendChild(label);

        const pills = document.createElement("div");
        pills.className = "skill-pills";
        groups[level].forEach((s) => {
          const pill = document.createElement("span");
          pill.className = "skill-pill tok-skill";
          pill.dataset.skill = s.name;
          pill.textContent = s.name;
          pills.appendChild(pill);
        });
        row.appendChild(pills);
        block.appendChild(row);
      });

      mobileContainer.appendChild(block);
    });

    mobileContainer.addEventListener("click", (e) => {
      const skill = e.target.closest(".tok-skill");
      if (skill) showSkillModal(skill.dataset.skill);
    });

    const hint = document.getElementById("skills-hint");
    if (hint && window.innerWidth < 768) hint.textContent = "Tap any skill to learn more";
  }
});
