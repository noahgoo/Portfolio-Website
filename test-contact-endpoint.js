const fetch = require("node-fetch");

// Test configuration
const TEST_DATA = {
  name: "Test User",
  email: "test@example.com",
  subject: "Portfolio Contact Form Test",
  message:
    "This is a test message from the automated testing script. If you receive this email, your contact form is working correctly!",
};

async function testContactEndpoint() {
  console.log("🧪 Testing Contact Form API Endpoint");
  console.log("=====================================\n");

  try {
    console.log("📤 Sending test request to /api/send-email...");
    console.log("Request data:", JSON.stringify(TEST_DATA, null, 2));

    const response = await fetch("http://localhost:3000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TEST_DATA),
    });

    console.log(
      `\n📥 Response Status: ${response.status} ${response.statusText}`
    );

    const result = await response.json();
    console.log("Response Body:", JSON.stringify(result, null, 2));

    if (response.ok && result.success) {
      console.log("\n✅ Contact form endpoint test successful!");
      console.log(
        "📧 Check your email (noah.goo@byu.edu) for the test message."
      );
    } else {
      console.log("\n❌ Contact form endpoint test failed");
      console.log("Error:", result.error || "Unknown error");
    }
  } catch (error) {
    console.log("\n❌ Failed to test contact endpoint");
    console.log("Error:", error.message);
    console.log("\n💡 Make sure your local server is running:");
    console.log("   - For Vercel: vercel dev");
    console.log("   - For Next.js: npm run dev");
    console.log("   - For static server: npx serve .");
  }
}

// Run the test
testContactEndpoint();
