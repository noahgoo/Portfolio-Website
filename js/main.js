// Main JavaScript for Portfolio Website

document.addEventListener("DOMContentLoaded", function () {
  // Custom cursor — crosshair
  const crossH = document.createElement("div");
  crossH.className = "cursor-cross-h";
  const crossV = document.createElement("div");
  crossV.className = "cursor-cross-v";
  document.body.appendChild(crossH);
  document.body.appendChild(crossV);

  document.addEventListener("mousemove", (e) => {
    crossH.style.left = e.clientX + "px";
    crossH.style.top = e.clientY + "px";
    crossV.style.left = e.clientX + "px";
    crossV.style.top = e.clientY + "px";
  });

  // Expand crosshair on interactive elements
  const interactiveSelector =
    "a, button, .project-card, .skill-circle, .mission-card, .contact-card, .quick-link-card, .interest-item, .availability-card";

  document.querySelectorAll(interactiveSelector).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      crossH.classList.add("expanded");
      crossV.classList.add("expanded");
    });
    el.addEventListener("mouseleave", () => {
      crossH.classList.remove("expanded");
      crossV.classList.remove("expanded");
    });
  });

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(12, 12, 14, 0.98)";
        navbar.style.boxShadow = "0 1px 0 rgba(37, 37, 41, 0.8)";
      } else {
        navbar.style.background = "rgba(12, 12, 14, 0.9)";
        navbar.style.boxShadow = "none";
      }
    });
  }

  // Active navigation link highlighting
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Intersection Observer for scroll reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".project-card, .skill-circle, .mission-card, .contact-card, .availability-card, .quick-link-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;

    const content = document.createElement("div");
    content.className = "notification-content";

    const messageSpan = document.createElement("span");
    messageSpan.className = "notification-message";
    messageSpan.textContent = message;

    const closeBtn = document.createElement("button");
    closeBtn.className = "notification-close";
    closeBtn.textContent = "\u00D7";

    content.appendChild(messageSpan);
    content.appendChild(closeBtn);
    notification.appendChild(content);

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${
        type === "success"
          ? "#22c55e"
          : type === "error"
            ? "#ef4444"
            : "#3d4fd6"
      };
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 380px;
      font-family: "DM Sans", sans-serif;
      font-size: 0.875rem;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    closeBtn.addEventListener("click", () => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    });

    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }

  // Project card click handlers
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
      const href = this.getAttribute("data-href");
      if (href) {
        window.location.href = href;
      }
    });
  });

  // Skill circle interactions
  document.querySelectorAll(".skill-circle").forEach((circle) => {
    circle.addEventListener("click", function () {
      const skill = this.getAttribute("data-skill");
      showNotification(`Skill: ${skill}`, "info");
    });
  });

  // Lazy loading for images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});
