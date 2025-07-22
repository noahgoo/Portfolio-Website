// Contact Page Specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Contact form enhancement
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    // Real-time form validation
    const formInputs = contactForm.querySelectorAll("input, textarea");

    formInputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        clearFieldError(this);
      });
    });

    // Enhanced form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (validateForm()) {
        submitForm();
      }
    });
  }

  // Field validation
  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;

    clearFieldError(field);

    switch (fieldName) {
      case "name":
        if (value.length < 2) {
          showFieldError(field, "Name must be at least 2 characters long");
          return false;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          showFieldError(field, "Please enter a valid email address");
          return false;
        }
        break;

      case "subject":
        if (value.length < 5) {
          showFieldError(field, "Subject must be at least 5 characters long");
          return false;
        }
        break;

      case "message":
        if (value.length < 10) {
          showFieldError(field, "Message must be at least 10 characters long");
          return false;
        }
        break;
    }

    return true;
  }

  // Show field error
  function showFieldError(field, message) {
    field.classList.add("error");

    // Remove existing error message
    const existingError = field.parentNode.querySelector(".field-error");
    if (existingError) {
      existingError.remove();
    }

    // Create error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "field-error";
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
            color: #EF4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            animation: slideIn 0.3s ease;
        `;

    field.parentNode.appendChild(errorDiv);
  }

  // Clear field error
  function clearFieldError(field) {
    field.classList.remove("error");
    const errorDiv = field.parentNode.querySelector(".field-error");
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  // Validate entire form
  function validateForm() {
    const formInputs = contactForm.querySelectorAll("input, textarea");
    let isValid = true;

    formInputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  // Submit form
  async function submitForm() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    try {
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success state
        submitBtn.textContent = "Message Sent!";
        submitBtn.style.background = "var(--gradient-green-aqua)";

        showNotification(
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
          "success"
        );

        // Reset form
        contactForm.reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showNotification(
        "Failed to send message. Please try again or email me directly.",
        "error"
      );
    } finally {
      // Reset button after delay
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.background = "var(--gradient-peach-orange)";
      }, 3000);
    }
  }

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

  // Add slide-in animation for error messages
  const slideInStyle = document.createElement("style");
  slideInStyle.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .form-group input.error,
        .form-group textarea.error {
            border-color: #EF4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
    `;
  document.head.appendChild(slideInStyle);

  // Form field focus effects
  const formFields = contactForm.querySelectorAll("input, textarea");

  formFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentNode.classList.add("focused");
    });

    field.addEventListener("blur", function () {
      this.parentNode.classList.remove("focused");
    });
  });

  // Add focus styles
  const focusStyle = document.createElement("style");
  focusStyle.textContent = `
        .form-group.focused label {
            color: #FDD6B5;
            transform: translateY(-2px);
        }
        
        .form-group.focused input,
        .form-group.focused textarea {
            border-color: #FDD6B5;
            box-shadow: 0 0 0 3px rgba(253, 214, 181, 0.1);
        }
    `;
  document.head.appendChild(focusStyle);
});
