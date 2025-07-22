# Resend API Debugging Guide

This guide will help you debug and test your RESEND_API_KEY integration for your portfolio contact form.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Check your environment:**

   ```bash
   npm run check:env
   ```

3. **Test your Resend API:**
   ```bash
   npm run test:resend
   ```

## 📋 Prerequisites

### 1. Resend Account Setup

- [ ] Create a Resend account at [resend.com](https://resend.com)
- [ ] Verify your email address
- [ ] Generate an API key from the dashboard
- [ ] Note: API keys start with `re_`

### 2. Environment Configuration

- [ ] Create a `.env` file in your project root
- [ ] Add your API key: `RESEND_API_KEY=re_your_actual_key_here`
- [ ] Ensure no quotes around the API key
- [ ] Ensure no trailing spaces

### 3. Domain Verification (Optional)

- [ ] For production, verify your domain in Resend
- [ ] For testing, you can use `onboarding@resend.dev`

## 🔧 Troubleshooting Steps

### Step 1: Environment Check

Run the environment checker to verify your setup:

```bash
npm run check:env
```

**Common Issues:**

- ❌ `.env` file missing
- ❌ `RESEND_API_KEY` not found
- ❌ API key format incorrect
- ❌ API key contains quotes or spaces

### Step 2: API Key Validation

The test script will validate:

- ✅ API key format (starts with `re_`)
- ✅ API key length (minimum 20 characters)
- ✅ No extra characters or spaces

### Step 3: Connection Test

The test script will:

- ✅ Test basic email sending
- ✅ Simulate your contact form
- ✅ Provide detailed error messages

## 🐛 Common Error Messages & Solutions

### 401 Unauthorized

**Error:** `401 Unauthorized`
**Cause:** Invalid or expired API key
**Solution:**

1. Check your API key in the Resend dashboard
2. Generate a new API key if needed
3. Update your `.env` file

### 403 Forbidden

**Error:** `403 Forbidden`
**Cause:** Account restrictions or domain not verified
**Solution:**

1. Check your Resend account status
2. Verify your domain (for production)
3. Use `onboarding@resend.dev` for testing

### 429 Rate Limited

**Error:** `429 Too Many Requests`
**Cause:** Rate limit exceeded
**Solution:**

1. Wait a few minutes and try again
2. Check your Resend account limits
3. Upgrade your plan if needed

### 500 Server Error

**Error:** `500 Internal Server Error`
**Cause:** Resend server issue
**Solution:**

1. Wait and try again later
2. Check Resend status page
3. Contact Resend support if persistent

## 📧 Testing Your Contact Form

### Local Testing

1. Start a local server:

   ```bash
   # Option 1: Python
   python -m http.server 8000

   # Option 2: Node.js
   npx serve .

   # Option 3: Live Server (VS Code extension)
   ```

2. Open your contact form
3. Submit a test message
4. Check your email (noah.goo@byu.edu)

### Production Testing

1. Deploy your site
2. Test the contact form on the live site
3. Monitor your Resend dashboard for delivery status

## 🔍 Debugging Tools

### 1. Environment Checker

```bash
npm run check:env
```

- Validates `.env` file
- Checks API key format
- Tests environment loading

### 2. Resend API Tester

```bash
npm run test:resend
```

- Tests API connection
- Sends test emails
- Simulates contact form
- Provides detailed error reporting

### 3. Manual Testing

```javascript
// Test in Node.js REPL
require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// Test email
resend.emails
  .send({
    from: "onboarding@resend.dev",
    to: "noah.goo@byu.edu",
    subject: "Test",
    html: "<p>Test email</p>",
  })
  .then(console.log)
  .catch(console.error);
```

## 📊 Monitoring & Logs

### Resend Dashboard

- Check email delivery status
- Monitor API usage
- View error logs
- Track performance metrics

### Application Logs

Your API endpoint (`api/send-email.js`) includes error logging:

```javascript
console.error("Email send error:", error);
```

### Browser Console

Check for JavaScript errors in the browser console when submitting the form.

## 🚀 Production Checklist

Before going live:

- [ ] Verify your domain in Resend
- [ ] Update `from` email to your verified domain
- [ ] Test contact form thoroughly
- [ ] Monitor first few submissions
- [ ] Set up email notifications for form submissions
- [ ] Consider rate limiting for the contact form

## 📞 Getting Help

### Resend Support

- [Resend Documentation](https://resend.com/docs)
- [Resend Status Page](https://status.resend.com)
- [Resend Support](https://resend.com/support)

### Common Issues

1. **Emails not sending:** Check API key and account status
2. **Emails going to spam:** Verify domain and use proper headers
3. **Rate limiting:** Monitor usage and upgrade plan if needed
4. **CORS issues:** Ensure proper headers in API endpoint

## 🔐 Security Best Practices

1. **Never commit API keys to version control**
2. **Use environment variables for all secrets**
3. **Rotate API keys regularly**
4. **Monitor API usage for unusual activity**
5. **Use HTTPS in production**

## 📝 Example .env File

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Environment
NODE_ENV=development

# Optional: Custom from email (must be verified)
FROM_EMAIL=your-verified-email@yourdomain.com
```

---

**Need more help?** Check the error messages from the test scripts for specific guidance.
