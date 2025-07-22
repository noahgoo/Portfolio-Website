const { Resend } = require("resend");
require("dotenv").config();

// Enhanced logging with more details
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

async function debugEmailDelivery() {
  log("🔍 Email Delivery Debugging Tool", "info");
  log("=====================================", "info");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    log("❌ RESEND_API_KEY not found in environment", "error");
    return;
  }

  log(`API Key: ***${apiKey.slice(-4)}`, "info");

  try {
    const resend = new Resend(apiKey);

    // Test 1: Send with detailed logging
    log("\n📧 Test 1: Sending email with detailed response...", "info");

    const emailData = {
      from: "onboarding@resend.dev",
      to: "noahgoo@byu.edu", // Fixed: removed the dot to match Resend account
      subject: `Email Debug Test - ${new Date().toISOString()}`,
      html: `
        <h2>Email Delivery Debug Test</h2>
        <p>This email was sent at: ${new Date().toISOString()}</p>
        <p>If you receive this, your Resend integration is working.</p>
        <p>Check your Resend dashboard for delivery status.</p>
      `,
    };

    log("Sending email with data:", "info");
    log(JSON.stringify(emailData, null, 2), "info");

    const result = await resend.emails.send(emailData);

    log("✅ Email sent successfully!", "success");
    log("Full response:", "info");
    log(JSON.stringify(result, null, 2), "info");

    // Extract important details
    if (result.data) {
      log(`\n📋 Email Details:`, "info");
      log(`ID: ${result.data.id || "N/A"}`, "info");
      log(`From: ${result.data.from || "N/A"}`, "info");
      log(`To: ${result.data.to || "N/A"}`, "info");
      log(`Subject: ${result.data.subject || "N/A"}`, "info");
      log(`Created At: ${result.data.created_at || "N/A"}`, "info");
    }

    // Test 2: Check if we can get email status
    if (result.data && result.data.id) {
      log("\n📊 Test 2: Checking email status...", "info");
      try {
        // Note: Resend might not have a direct status endpoint
        // This is a placeholder for future API features
        log("Email ID available for tracking: " + result.data.id, "info");
      } catch (statusError) {
        log("Status check not available: " + statusError.message, "warning");
      }
    }

    // Test 3: Send to different email for testing
    log("\n📧 Test 3: Sending to alternative email...", "info");

    const altEmailData = {
      from: "onboarding@resend.dev",
      to: "noahgoo@byu.edu", // Fixed: removed the dot to match Resend account
      subject: `Alternative Test - ${new Date().toISOString()}`,
      html: `
        <h2>Alternative Email Test</h2>
        <p>This is a second test email.</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
    };

    const altResult = await resend.emails.send(altEmailData);
    log("✅ Alternative email sent!", "success");
    log(`Alternative Email ID: ${altResult.data?.id || "N/A"}`, "info");

    // Test 4: Check Resend account limits
    log("\n📊 Test 4: Account Information...", "info");
    log("Check your Resend dashboard for:", "info");
    log("- Email delivery status", "info");
    log("- Account usage/limits", "info");
    log("- Domain verification status", "info");
    log("- Email logs", "info");

    // Test 5: Common issues checklist
    log("\n🔍 Test 5: Common Issues Checklist", "info");
    log("=====================================", "info");

    log("1. Check your email inbox (noah.goo@byu.edu):", "info");
    log("   - Look in spam/junk folder", "warning");
    log("   - Check email filters", "warning");
    log("   - Verify email address is correct", "info");

    log("\n2. Check Resend Dashboard:", "info");
    log("   - Go to https://resend.com/emails", "info");
    log("   - Look for your test emails", "info");
    log("   - Check delivery status", "info");
    log("   - Verify account is active", "info");

    log("\n3. Check BYU Email Settings:", "info");
    log("   - BYU might have strict spam filters", "warning");
    log("   - Check if emails from resend.dev are blocked", "warning");
    log("   - Try adding resend.dev to safe senders", "info");

    log("\n4. Domain Verification:", "info");
    log("   - onboarding@resend.dev is a sandbox domain", "info");
    log("   - For production, verify your own domain", "info");
    log("   - Sandbox emails might have delivery delays", "warning");

    log("\n5. Rate Limiting:", "info");
    log("   - Check if you hit rate limits", "info");
    log("   - Free tier has limits", "info");
    log("   - Wait a few minutes between tests", "info");

    // Test 6: Try different from address
    log("\n📧 Test 6: Testing with different from address...", "info");

    try {
      const customFromData = {
        from: "noreply@resend.dev", // Try different sandbox address
        to: "noahgoo@byu.edu", // Fixed: removed the dot to match Resend account
        subject: `Custom From Test - ${new Date().toISOString()}`,
        html: `
          <h2>Custom From Address Test</h2>
          <p>Testing with noreply@resend.dev</p>
          <p>Sent at: ${new Date().toISOString()}</p>
        `,
      };

      const customResult = await resend.emails.send(customFromData);
      log("✅ Custom from address email sent!", "success");
      log(`Custom Email ID: ${customResult.data?.id || "N/A"}`, "info");
    } catch (customError) {
      log("❌ Custom from address failed: " + customError.message, "error");
    }

    log("\n🎯 Next Steps:", "info");
    log("1. Wait 5-10 minutes for emails to arrive", "warning");
    log("2. Check spam/junk folder", "warning");
    log("3. Check Resend dashboard for delivery status", "info");
    log("4. Try sending to a different email address", "info");
    log("5. Contact Resend support if issues persist", "info");
  } catch (error) {
    log("❌ Email sending failed", "error");
    log(`Error: ${error.message}`, "error");
    log(`Error Code: ${error.code || "N/A"}`, "error");
    log(`Error Status: ${error.status || "N/A"}`, "error");

    if (error.message.includes("401")) {
      log("🔑 Authentication error - check your API key", "warning");
    } else if (error.message.includes("403")) {
      log("🚫 Permission error - check account status", "warning");
    } else if (error.message.includes("429")) {
      log("⏱️ Rate limit exceeded - wait and try again", "warning");
    } else if (error.message.includes("500")) {
      log("🔧 Server error - try again later", "warning");
    }
  }
}

// Run the debug
debugEmailDelivery().catch((error) => {
  log(`Debug failed: ${error.message}`, "error");
  process.exit(1);
});
