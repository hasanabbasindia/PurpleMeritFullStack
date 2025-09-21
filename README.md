# Purple Merit Full Stack Assessment

A modern data visualization dashboard built with Next.js, TypeScript, and Tailwind CSS for processing and visualizing CSV data.

## 🚀 Live Demo

**Deployed Application**: https://purple-merit-full-stack-ctueg7iok-hasan-abbas-projects-5ae74473.vercel.app/

**GitHub Repository**: https://github.com/hasanabbasindia/PurpleMeritFullStack.git

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts for data visualization
- **Data Processing**: CSV Parser
- **Deployment**: Vercel

## ✨ Features

- CSV file upload and processing (drag & drop + click to upload)
- Interactive data visualization with charts
- Responsive dashboard design
- Real-time chart updates
- Data table display
- RESTful API endpoints

## 📋 API Endpoints

- `GET /api/data` - Fetch CSV data from dataset directory
- `POST /api/data` - Upload and process CSV files

## 🚀 Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
PurpleMeritFullStack/
├── src/
│   ├── app/
│   │   ├── api/data/
│   │   │   └── route.ts          # API endpoints
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main dashboard
├── dataset/                      # CSV files directory
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Assessment Requirements Fulfilled

✅ Full-stack application with frontend and backend
✅ Data visualization dashboard
✅ CSV file processing capabilities
✅ Interactive charts and graphs
✅ Responsive design
✅ RESTful API implementation
✅ Modern tech stack (Next.js, TypeScript, Tailwind)
✅ Deployed on Vercel
✅ GitHub repository with clean code

## 💡 Usage

1. **View Sample Data**: The dashboard loads with sample data visualization
2. **Upload CSV Files**: Click or drag & drop CSV files to upload new data
3. **Interactive Charts**: Hover over charts to see detailed information
4. **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🔧 Technical Implementation

- **Server-Side Rendering**: Built with Next.js App Router
- **Type Safety**: Full TypeScript implementation
- **Modern Styling**: Tailwind CSS for responsive design
- **Data Processing**: Efficient CSV parsing and processing
- **Error Handling**: Comprehensive error handling for file uploads
- **Performance**: Optimized build for production deployment

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🌐 Deployment

Deployed on Vercel with automatic builds from the GitHub repository. The application is optimized for production with:
- Static site generation where possible
- Serverless functions for API routes
- Optimized bundle sizes
- Fast global CDN delivery