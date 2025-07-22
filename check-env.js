const fs = require("fs");
const path = require("path");

console.log("🔍 Environment Configuration Checker");
console.log("=====================================\n");

// Check if .env file exists
const envPath = path.join(__dirname, ".env");
console.log("📁 Checking for .env file...");

if (fs.existsSync(envPath)) {
  console.log("✅ .env file found");

  // Read and check .env content
  const envContent = fs.readFileSync(envPath, "utf8");
  const lines = envContent.split("\n");

  console.log("\n📋 .env file contents:");
  console.log("----------------------");

  let hasResendKey = false;
  let resendKeyValue = "";

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("#")) {
      if (trimmedLine.startsWith("RESEND_API_KEY=")) {
        hasResendKey = true;
        resendKeyValue = trimmedLine.replace("RESEND_API_KEY=", "");
        console.log(
          `${index + 1}: RESEND_API_KEY=***${resendKeyValue.slice(-4)}`
        );
      } else {
        console.log(`${index + 1}: ${trimmedLine}`);
      }
    }
  });

  console.log("\n🔑 RESEND_API_KEY Analysis:");
  console.log("---------------------------");

  if (hasResendKey) {
    console.log("✅ RESEND_API_KEY found in .env file");

    if (resendKeyValue) {
      if (resendKeyValue.startsWith("re_")) {
        console.log('✅ API key format appears correct (starts with "re_")');
      } else {
        console.log(
          '⚠️  API key format may be incorrect (should start with "re_")'
        );
      }

      if (resendKeyValue.length >= 20) {
        console.log("✅ API key length appears reasonable");
      } else {
        console.log("⚠️  API key seems too short");
      }

      // Check for common issues
      if (resendKeyValue.includes(" ")) {
        console.log("⚠️  API key contains spaces - this may cause issues");
      }

      if (resendKeyValue.includes('"') || resendKeyValue.includes("'")) {
        console.log("⚠️  API key contains quotes - this may cause issues");
      }
    } else {
      console.log("❌ RESEND_API_KEY is empty");
    }
  } else {
    console.log("❌ RESEND_API_KEY not found in .env file");
    console.log("\n💡 To add it, add this line to your .env file:");
    console.log("RESEND_API_KEY=your_api_key_here");
  }
} else {
  console.log("❌ .env file not found");
  console.log("\n💡 Create a .env file in your project root with:");
  console.log("RESEND_API_KEY=your_api_key_here");
}

// Check if dotenv is installed
console.log("\n📦 Checking dotenv dependency...");
try {
  require("dotenv");
  console.log("✅ dotenv package is available");
} catch (error) {
  console.log("❌ dotenv package not found");
  console.log("💡 Install it with: npm install dotenv");
}

// Test environment variable loading
console.log("\n🧪 Testing environment variable loading...");
try {
  require("dotenv").config();
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    console.log("✅ RESEND_API_KEY loaded from .env file");
    console.log(`   Key preview: ***${apiKey.slice(-4)}`);
  } else {
    console.log("❌ RESEND_API_KEY not loaded from .env file");
  }
} catch (error) {
  console.log("❌ Failed to load .env file:", error.message);
}

console.log("\n=====================================");
console.log("🔍 Environment check complete!");
