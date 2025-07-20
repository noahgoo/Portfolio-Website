// Skills Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Enhanced bouncing animation for skill circles
  const skillCircles = document.querySelectorAll(".skill-circle");

  skillCircles.forEach((circle, index) => {
    // Add random animation delays for more natural movement
    const randomDelay = Math.random() * 2;
    circle.style.animationDelay = `${randomDelay}s`;

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

  // Skill information display
  function showSkillInfo(skill) {
    const skillInfo = {
      Python: {
        level: "Expert",
        description:
          "Advanced Python development with focus on data science, automation, and web development.",
        projects: [
          "Machine Learning Models",
          "Web Scraping Tools",
          "API Development",
        ],
      },
      "C++": {
        level: "Proficient",
        description:
          "Object-oriented programming, embedded systems, and performance-critical applications.",
        projects: [
          "Embedded Systems",
          "Algorithm Implementation",
          "System Programming",
        ],
      },
      JavaScript: {
        level: "Proficient",
        description:
          "Frontend and backend development with modern frameworks and libraries.",
        projects: ["Web Applications", "React Projects", "Node.js APIs"],
      },
      React: {
        level: "Intermediate",
        description:
          "Building responsive and interactive user interfaces with React ecosystem.",
        projects: [
          "Portfolio Website",
          "E-commerce Platform",
          "Dashboard Applications",
        ],
      },
      Arduino: {
        level: "Proficient",
        description: "Microcontroller programming and IoT device development.",
        projects: [
          "Smart Home Systems",
          "Sensor Networks",
          "Automation Projects",
        ],
      },
      FPGA: {
        level: "Intermediate",
        description:
          "Digital design and hardware acceleration using Verilog and FPGA platforms.",
        projects: [
          "Digital Signal Processing",
          "Custom Processors",
          "Hardware Acceleration",
        ],
      },
      TensorFlow: {
        level: "Intermediate",
        description: "Machine learning and deep learning model development.",
        projects: ["Computer Vision", "Neural Networks", "Predictive Models"],
      },
      Git: {
        level: "Proficient",
        description: "Version control and collaborative development workflows.",
        projects: ["Project Management", "Team Collaboration", "Code Review"],
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
