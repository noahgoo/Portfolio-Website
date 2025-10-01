// Skills Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Enhanced bouncing animation for skill circles
  const skillCircles = document.querySelectorAll(".skill-circle");

  skillCircles.forEach((circle, index) => {
    // Add random animation delays for more natural movement
    const randomDelay = Math.random() * 2;
    circle.style.animationDelay = `${randomDelay}s`;

    // Set skill level background based on the skill
    const skill = circle.getAttribute("data-skill");
    setSkillLevelBackground(circle, skill);

    // Add hover effects
    circle.addEventListener("mouseenter", function () {
      this.style.animationPlayState = "paused";
      this.style.transform = "scale(1.15) rotate(5deg)";
    });

    circle.addEventListener("mouseleave", function () {
      this.style.animationPlayState = "running";
      this.style.transform = "scale(1) rotate(0deg)";
    });

    // Add click effects
    circle.addEventListener("click", function () {
      const skill = this.getAttribute("data-skill");

      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(185, 255, 227, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

      // Add ripple animation
      const style = document.createElement("style");
      style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
      document.head.appendChild(style);

      this.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);

      // Show skill info
      showSkillInfo(skill);
    });
  });

  // Function to set skill level background
  function setSkillLevelBackground(circle, skill) {
    const skillInfo = {
      Python: { level: "Proficient" },
      "C/C++": { level: "Proficient" },
      JavaScript: { level: "Learning" },
      Java: { level: "Intermediate" },
      TypeScript: { level: "Learning" },
      SQL: { level: "Intermediate" },
      // Verilog: { level: "Intermediate" },
      // MATLAB: { level: "Proficient" },
      React: { level: "Learning" },
      // "Node.js": { level: "Intermediate" },
      "HTML/CSS": { level: "Learning" },
      "Next.js": { level: "Learning" },
      "Tailwind CSS": { level: "Learning" },
      Stripe: { level: "Learning" },
      "REST API": { level: "Learning" },
      //MongoDB: { level: "Learning" },
      //"Express.js": { level: "Learning" },
      Firebase: { level: "Proficient" },
      Arduino: { level: "Proficient" },
      "Sensors & Actuators": { level: "Proficient" },
      "Circuit Design": { level: "Intermediate" },
      "Breadboard & Soldering": { level: "Intermediate" },
      // ESP32: { level: "Intermediate" },
      // FPGA: { level: "Intermediate" },
      // "Raspberry Pi": { level: "Intermediate" },
      // "PCB Design": { level: "Learning" },
      // IoT: { level: "Intermediate" },
      // TensorFlow: { level: "Intermediate" },
      // PyTorch: { level: "Learning" },
      // OpenCV: { level: "Intermediate" },
      // "Scikit-learn": { level: "Intermediate" },
      // "Computer Vision": { level: "Intermediate" },
      // "Neural Networks": { level: "Learning" },
      Git: { level: "Proficient" },
      GitHub: { level: "Proficient" },
      Docker: { level: "Learning" },
      "VS Code": { level: "Proficient" },
      // Linux: { level: "Intermediate" },
      "Autodesk Fusion": { level: "Learning" },
      Firestore: { level: "Intermediate" },
      "Google Apps Script": { level: "Intermediate" },
      "Claude Code": { level: "Proficient" },
      MATLAB: { level: "Learning" },
      KiCad: { level: "Learning" },
    };

    const info = skillInfo[skill] || { level: "Learning" };
    console.log(`Skill: "${skill}", Found info:`, info);

    // Remove any existing level classes
    circle.classList.remove(
      "skill-expert",
      "skill-proficient",
      "skill-intermediate",
      "skill-learning"
    );

    // Add the appropriate level class
    circle.classList.add(`skill-${info.level.toLowerCase()}`);
  }

  // Skill information display
  function showSkillInfo(skill) {
    const skillInfo = {
      Python: {
        level: "Proficient",
        description:
          "First language learned. Used in scripting, data processing, and building applications.",
        projects: ["Datalog interpreter", "Religion Project"],
      },
      "C/C++": {
        level: "Proficient",
        description:
          "Object-oriented programming, embedded systems, and low-level systems development. Applied C++ in embedded systems, sensor integration, and logic-driven automation projects.",
        projects: [
          "Mini Security System (Arduino-Based)",
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
        ],
      },
      Java: {
        level: "Intermediate",
        description:
          "Used in object-oriented programming, and full stack development.",
        projects: ["Chess Game"],
      },
      JavaScript: {
        level: "Learning",
        description:
          "Frontend and backend development with React and Firebase.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      TypeScript: {
        level: "Learning",
        description:
          "Used in building web applications and mobile apps with React/Next.js.",
        projects: [
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Aiyu Swimwear Website",
        ],
      },
      SQL: {
        level: "Intermediate",
        description: "Used in building databases and data analysis.",
        projects: ["Chess Game", "CFA Workflow Tracker"],
      },
      Arduino: {
        level: "Proficient",
        description: "Microcontroller programming and IoT device development.",
        projects: [
          "Mini Security System (Arduino-Based)",
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
        ],
      },
      React: {
        level: "Learning",
        description:
          "Building responsive and interactive user interfaces with React.",
        projects: ["CFA Workflow Tracker"],
      },
      "HTML/CSS": {
        level: "Learning",
        description:
          "Used in building interactive user interfaces and to style, layout, and design web applications.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      "Next.js": {
        level: "Learning",
        description: "Used in building web applications.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      "Tailwind CSS": {
        level: "Learning",
        description:
          "Used in building responsive and interactive user interfaces.",
        projects: ["Portfolio Website", "Aiyu Swimwear Website"],
      },
      Stripe: {
        level: "Learning",
        description:
          "Used in building payment systems and e-commerce platforms.",
        projects: ["Aiyu Swimwear Website"],
      },
      "REST API": {
        level: "Learning",
        description:
          "Used in building REST APIs for websites and other applications.",
        projects: [
          "CFA Workflow Tracker",
          "Budgeting App",
          "Aiyu Swimwear Website",
          "Chess Game",
        ],
      },
      "Sensors & Actuators": {
        level: "Proficient",
        description:
          "Used in building IoT devices and embedded systems. Used ultrasonic sensors, servo motors, LCDs, and other sensors and actuators to build projects.",
        projects: [
          "Smart Weather Station",
          "Smart Doorbell",
          "Arduino Light Following Robot",
          "Mini Security System (Arduino-Based)",
        ],
      },
      "Circuit Design": {
        level: "Intermediate",
        description:
          "Taken Intro to Circuits course. Used in hands-on projects to build circuits and systems.",
        projects: [
          "Smart Weather Station",
          "Mini Security System (Arduino-Based)",
          "Arduino Light Following Robot",
        ],
      },
      "Breadboard & Soldering": {
        level: "Intermediate",
        description: "Used lightly in building systems with Arduino.",
        projects: ["Arduino Light Following Robot"],
      },
      Firebase: {
        level: "Proficient",
        description: "Used in deploying projects and hosting.",
        projects: ["CFA Workflow Tracker", "Budgeting App"],
      },
      Firestore: {
        level: "Intermediate",
        description:
          "Used in building databases, authentication, and data analysis.",
        projects: ["CFA Workflow Tracker", "Budgeting App"],
      },
      "Google Apps Script": {
        level: "Intermediate",
        description:
          "Used in building automation and data retrieval from Firebase.",
        projects: ["CFA Workflow Tracker"],
      },
      Git: {
        level: "Proficient",
        description:
          "Regular use with GitHub across projects. Comfortable with CLI and branches. Used to manage version control and collaborative development workflows.",
        projects: [
          "Aiyu Swimwear Website",
          "Chess Game",
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Budgeting App",
        ],
      },
      GitHub: {
        level: "Proficient",
        description:
          "Used to host repositories, deploy projects, integrate with Vercel, and collaborate with others.",
        projects: [
          "Aiyu Swimwear Website",
          "Chess Game",
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Budgeting App",
          "Datalog Interpreter",
        ],
      },
      "VS Code": {
        level: "Proficient",
        description:
          "Preferred IDE for building web applications and mobile apps. Often integrated with Cursor for AI-assisted coding.",
        projects: [
          "CFA Workflow Tracker",
          "Budgeting App",
          "Aiyu Swimwear Website",
        ],
      },
      Docker: {
        level: "Learning",
        description: "Used in building automation and deployment.",
        projects: ["Flashcard Automation"],
      },
      "Autodesk Fusion": {
        level: "Learning",
        description: "Used in building 3D models for printing.",
        projects: ["Arduino Light Following Robot"],
      },
      "Claude Code": {
        level: "Proficient",
        description: "Used in building web applications and mobile apps.",
        projects: [
          "Portfolio Website",
          "CFA Workflow Tracker",
          "Aiyu Swimwear Website",
        ],
      },
      MATLAB: {
        level: "Learning",
        description: "Used in building simulations and data analysis.",
        projects: ["Signals & Systems Course"],
      },
      KiCad: {
        level: "Learning",
        description: "Used in building PCB designs.",
        projects: ["Laser Tag Project"],
      },
    };

    const info = skillInfo[skill] || {
      level: "Learning",
      description: "Currently developing skills in this technology.",
      projects: ["In Progress"],
    };

    // Create and show skill modal
    showSkillModal(skill, info);
  }

  // Skill modal display
  function showSkillModal(skill, info) {
    // Remove existing modal
    const existingModal = document.querySelector(".skill-modal");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "skill-modal";
    modal.innerHTML = `
            <div class="skill-modal-overlay"></div>
            <div class="skill-modal-content">
                <div class="skill-modal-header">
                    <h2>${skill}</h2>
                    <button class="skill-modal-close">&times;</button>
                </div>
                <div class="skill-modal-body">
                    <div class="skill-level">
                        <span class="level-badge ${info.level.toLowerCase()}">${
      info.level
    }</span>
                    </div>
                    <p class="skill-description">${info.description}</p>
                    <div class="skill-projects">
                        <h3>Related Projects:</h3>
                        <ul>
                            ${info.projects
                              .map((project) => `<li>${project}</li>`)
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;

    // Add modal styles
    const modalStyles = document.createElement("style");
    modalStyles.textContent = `
            .skill-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: modalFadeIn 0.3s ease;
            }
            
            .skill-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
            }
            
            .skill-modal-content {
                background: white;
                border-radius: 20px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                z-index: 1;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            }
            
            .skill-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #F2F0F5;
            }
            
            .skill-modal-header h2 {
                margin: 0;
                background: var(--gradient-mint-lavender);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 1.8rem;
            }
            
            .skill-modal-close {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #718096;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .skill-modal-close:hover {
                background: #F2F0F5;
                color: #2D3748;
            }
            
            .skill-level {
                margin-bottom: 1rem;
            }
            
            .level-badge {
                display: inline-block;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .level-badge.expert {
                background: var(--gradient-purple-blue);
                color: white;
            }
            
            .level-badge.proficient {
                background: var(--gradient-mint-lavender);
                color: var(--text-primary);
            }
            
            .level-badge.intermediate {
                background: var(--gradient-green-aqua);
                color: var(--text-primary);
            }
            
            .level-badge.learning {
                background: var(--gradient-peach-orange);
                color: var(--text-primary);
            }
            
            .skill-description {
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: 1.5rem;
            }
            
            .skill-projects h3 {
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
                color: var(--text-primary);
            }
            
            .skill-projects ul {
                list-style: none;
                padding: 0;
            }
            
            .skill-projects li {
                padding: 0.5rem 0;
                color: var(--text-light);
                position: relative;
                padding-left: 1.5rem;
            }
            
            .skill-projects li::before {
                content: '▸';
                position: absolute;
                left: 0;
                color: #B9FFE3;
                font-weight: bold;
            }
            
            @keyframes modalFadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            @media (max-width: 768px) {
                .skill-modal-content {
                    padding: 1.5rem;
                    margin: 1rem;
                }
                
                .skill-modal-header h2 {
                    font-size: 1.5rem;
                }
            }
        `;

    document.head.appendChild(modalStyles);
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector(".skill-modal-close");
    const overlay = modal.querySelector(".skill-modal-overlay");

    function closeModal() {
      modal.style.animation = "modalFadeOut 0.3s ease";
      setTimeout(() => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      }, 300);
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // Close on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    // Add fade out animation
    const fadeOutStyle = document.createElement("style");
    fadeOutStyle.textContent = `
            @keyframes modalFadeOut {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9);
                }
            }
        `;
    document.head.appendChild(fadeOutStyle);
  }

  // Parallax effect for background shapes (if any)
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".shape");

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add floating animation to skill categories
  const skillCategories = document.querySelectorAll(".skills-category");
  skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.2}s`;
    category.style.opacity = "0";
    category.style.transform = "translateY(30px)";
    category.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    // Trigger animation when category comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(category);
  });
});
