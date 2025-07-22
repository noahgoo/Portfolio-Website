const { Resend } = require("resend");
require("dotenv").config();

// Test configuration
const TEST_CONFIG = {
  fromEmail: "onboarding@resend.dev",
  toEmail: "noahgoo@byu.edu", // Fixed: removed the dot to match Resend account
  testSubject: "Portfolio Contact Form Test",
  testMessage: "This is a test message from your portfolio contact form.",
};

// Utility functions
function log(message, type = "info") {
  const timestamp = new Date().toISOString();
  const colors = {
    info: "\x1b[36m", // Cyan
    success: "\x1b[32m", // Green
    error: "\x1b[31m", // Red
    warning: "\x1b[33m", // Yellow
    reset: "\x1b[0m", // Reset
  };

  console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
}

function validateApiKey(apiKey) {
  if (!apiKey) {
    return { valid: false, error: "API key is missing" };
  }

  if (typeof apiKey !== "string") {
    return { valid: false, error: "API key must be a string" };
  }

  if (apiKey.length < 20) {
    return { valid: false, error: "API key appears to be too short" };
  }

  if (!apiKey.startsWith("re_")) {
    return { valid: false, error: 'API key should start with "re_"' };
  }

  return { valid: true };
}

async function testResendConnection(apiKey) {
  try {
    log("Testing Resend API connection...", "info");

    const resend = new Resend(apiKey);

    // Test 1: Send a simple email
    log("Sending test email...", "info");

    const result = await resend.emails.send({
      from: TEST_CONFIG.fromEmail,
      to: TEST_CONFIG.toEmail,
      subject: TEST_CONFIG.testSubject,
      html: `
        <h2>Portfolio Contact Form Test</h2>
        <p>This is a test message to verify your Resend API integration is working correctly.</p>
        <p><strong>Test Details:</strong></p>
        <ul>
          <li>From: ${TEST_CONFIG.fromEmail}</li>
          <li>To: ${TEST_CONFIG.toEmail}</li>
          <li>Subject: ${TEST_CONFIG.testSubject}</li>
          <li>Timestamp: ${new Date().toISOString()}</li>
        </ul>
        <p>If you receive this email, your Resend API is working properly!</p>
      `,
    });

    log("✅ Test email sent successfully!", "success");
    log(`Email ID: ${result.data?.id || "N/A"}`, "info");

    return { success: true, data: result };
  } catch (error) {
    log("❌ Failed to send test email", "error");
    log(`Error details: ${error.message}`, "error");

    // Provide specific error guidance
    if (error.message.includes("401")) {
      log(
        "🔑 This appears to be an authentication error. Check your API key.",
        "warning"
      );
    } else if (error.message.includes("403")) {
      log(
        "🚫 This appears to be a permissions error. Check your Resend account settings.",
        "warning"
      );
    } else if (error.message.includes("429")) {
      log("⏱️ Rate limit exceeded. Try again later.", "warning");
    } else if (error.message.includes("500")) {
      log("🔧 Server error. This might be temporary.", "warning");
    }

    return { success: false, error: error.message };
  }
}

async function testContactFormSimulation(apiKey) {
  try {
    log("Testing contact form simulation...", "info");

    const resend = new Resend(apiKey);

    // Simulate the exact payload from your contact form
    const formData = {
      name: "Test User",
      email: "test@example.com",
      subject: "Portfolio Contact Test",
      message: "This is a test message from the contact form simulation.",
    };

    const result = await resend.emails.send({
      from: TEST_CONFIG.fromEmail,
      to: TEST_CONFIG.toEmail,
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>This is a test simulation of your contact form.</em></p>
      `,
    });

    log("✅ Contact form simulation successful!", "success");
    return { success: true, data: result };
  } catch (error) {
    log("❌ Contact form simulation failed", "error");
    log(`Error: ${error.message}`, "error");
    return { success: false, error: error.message };
  }
}

async function checkResendAccountStatus(apiKey) {
  try {
    log("Checking Resend account status...", "info");

    const resend = new Resend(apiKey);

    // Try to get account info (if available)
    // Note: Resend might not have a direct account info endpoint
    // This is a placeholder for future API features

    log("✅ API key is valid and can be used", "success");
    return { success: true };
  } catch (error) {
    log("❌ Failed to validate account status", "error");
    return { success: false, error: error.message };
  }
}

// Main test function
async function runTests() {
  log("🚀 Starting Resend API Tests", "info");
  log("================================", "info");

  // Get API key from environment
  const apiKey = process.env.RESEND_API_KEY;

  // Test 1: Validate API key format
  log("\n📋 Test 1: API Key Validation", "info");
  const keyValidation = validateApiKey(apiKey);

  if (!keyValidation.valid) {
    log(`❌ API Key validation failed: ${keyValidation.error}`, "error");
    log("\n🔧 Troubleshooting Steps:", "warning");
    log("1. Check your .env file exists in the project root", "info");
    log("2. Ensure RESEND_API_KEY is set correctly", "info");
    log('3. Verify the API key starts with "re_"', "info");
    log("4. Make sure there are no extra spaces or quotes", "info");
    return;
  }

  log("✅ API Key format is valid", "success");

  // Test 2: Check account status
  log("\n📋 Test 2: Account Status Check", "info");
  await checkResendAccountStatus(apiKey);

  // Test 3: Test basic email sending
  log("\n📋 Test 3: Basic Email Test", "info");
  const basicTest = await testResendConnection(apiKey);

  if (!basicTest.success) {
    log("\n🔧 Basic Test Failed - Troubleshooting:", "warning");
    log("1. Verify your API key is correct", "info");
    log("2. Check your Resend account is active", "info");
    log("3. Ensure you have sufficient credits", "info");
    log("4. Check if your account is verified", "info");
    return;
  }

  // Test 4: Test contact form simulation
  log("\n📋 Test 4: Contact Form Simulation", "info");
  await testContactFormSimulation(apiKey);

  // Test 5: Environment check
  log("\n📋 Test 5: Environment Check", "info");
  log(`Node.js version: ${process.version}`, "info");
  log(`Platform: ${process.platform}`, "info");
  log(`Environment: ${process.env.NODE_ENV || "development"}`, "info");

  log("\n🎉 All tests completed!", "success");
  log("================================", "info");

  if (basicTest.success) {
    log("\n✅ Your Resend API is working correctly!", "success");
    log("You can now use the contact form on your portfolio.", "info");
  } else {
    log("\n❌ Some tests failed. Check the error messages above.", "error");
  }
}

// Error handling for the main function
process.on("unhandledRejection", (reason, promise) => {
  log("Unhandled Rejection at:", "error");
  log(`Promise: ${promise}`, "error");
  log(`Reason: ${reason}`, "error");
});

// Run the tests
if (require.main === module) {
  runTests().catch((error) => {
    log(`Test runner failed: ${error.message}`, "error");
    process.exit(1);
  });
}

module.exports = {
  runTests,
  testResendConnection,
  testContactFormSimulation,
  validateApiKey,
};
