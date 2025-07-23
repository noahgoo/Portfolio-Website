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
      const email = this.textContent;

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
      notification.innerHTML = `
                <div class="notification-content">
                    <span class="notification-message">${message}</span>
                    <button class="notification-close">&times;</button>
                </div>
            `;

      // Add styles
      notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${
                  type === "success"
                    ? "#10B981"
                    : type === "error"
                      ? "#EF4444"
                      : "#3B82F6"
                };
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
            `;

      document.body.appendChild(notification);

      // Animate in
      setTimeout(() => {
        notification.style.transform = "translateX(0)";
      }, 100);

      // Close button functionality
      const closeBtn = notification.querySelector(".notification-close");
      closeBtn.addEventListener("click", () => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      });

      // Auto remove after 5 seconds
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
    };
  }
});
