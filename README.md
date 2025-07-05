![Blog Application](public/blog.png)

# Daily Journal Blog Application

A responsive blog application built with Node.js, Express, EJS, and MongoDB.

## Features

- ✅ Responsive design across mobile, tablet, and desktop
- ✅ Dark/Light mode toggle
- ✅ Social media integration with proper X.com icon
- ✅ Blog post creation and editing
- ✅ MongoDB integration with environment variables for security

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit the `.env` file and add your MongoDB connection string:
```
DATABASE_URL=mongodb+srv://username:password@cluster0.9wzmu.mongodb.net/DatabaseName
PORT=3000
NODE_ENV=production
```

### 3. Run the Application
```bash
node App.js
```

The application will be available at `http://localhost:3000`

## Hosting Options

### Option 1: Railway (Recommended)
1. Connect your GitHub repository to Railway
2. Add environment variables in Railway dashboard:
   - `DATABASE_URL`: Your MongoDB connection string
   - `PORT`: 3000
   - `NODE_ENV`: production
3. Deploy automatically

### Option 2: Render
1. Connect your GitHub repository to Render
2. Add environment variables in Render dashboard
3. Deploy with automatic builds

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Add environment variables via Vercel dashboard

### Option 4: Heroku
1. Install Heroku CLI
2. Create Heroku app: `heroku create your-app-name`
3. Add environment variables: `heroku config:set DATABASE_URL=your_mongodb_string`
4. Deploy: `git push heroku main`

## Security Notes

- Never commit your `.env` file to version control
- Always use environment variables for sensitive data
- The `.env.example` file shows the required variables without sensitive values

## Recent Updates

- ✅ Fixed X.com footer icon display
- ✅ Resolved navbar layout visibility conflicts with dark mode toggle
- ✅ Enhanced responsive design across all breakpoints
- ✅ Updated footer text to "raimonvibe"
- ✅ Added environment variable support for MongoDB security
