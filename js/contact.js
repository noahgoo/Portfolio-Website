// Contact Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Contact card interactions
  const contactCards = document.querySelectorAll(".contact-card");

  contactCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });

    // Hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Quick link card interactions
  const quickLinkCards = document.querySelectorAll(".quick-link-card");

  quickLinkCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Availability card interactions
  const availabilityCards = document.querySelectorAll(".availability-card");

  availabilityCards.forEach((card) => {
    card.addEventListener("click", function () {
      const title = this.querySelector("h3").textContent;
      showNotification(
        `Status: ${title} - Available for opportunities!`,
        "info"
      );
    });
  });

  // Email link enhancement
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener("click", function (e) {
      e.preventDefault();
      const email = this.href.replace("mailto:", "");

      // Copy email to clipboard
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showNotification("Email address copied to clipboard!", "success");
        })
        .catch(() => {
          // Fallback for older browsers
          window.location.href = this.href;
        });
    });
  }

  // Social link enhancements
  const socialLinks = document.querySelectorAll(".contact-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        this.textContent.includes("GitHub") ||
        this.textContent.includes("LinkedIn")
      ) {
        // Add tracking or confirmation for external links
        showNotification(`Opening ${this.textContent}...`, "info");
      }
    });
  });

  // Notification system (if not already defined in main.js)
  if (typeof showNotification === "undefined") {
    window.showNotification = function (message, type = "info") {
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
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.transform = "translate(-50%, 0)";
      }, 100);

      function dismiss() {
        notification.style.transform = "translate(-50%, calc(100% + 32px))";
        setTimeout(() => {
          if (document.body.contains(notification)) document.body.removeChild(notification);
        }, 300);
      }

      closeBtn.addEventListener("click", dismiss);
      setTimeout(dismiss, 5000);
    };
  }
});
