# **Node.js + TypeScript Boilerplate**

A reusable template for building Node.js projects with TypeScript. This boilerplate is pre-configured with essential tools to help you get started quickly and focus on building your application.

---

## **Features**
- 🚀 **Pre-configured TypeScript** for modern JavaScript development.
- 🔄 **Nodemon** for seamless development with hot-reloading.
- ✅ **ESLint and Prettier** for linting and consistent code formatting.
- 📂 Organized and **ready-to-use directory structure** for scalable projects.
- 🌟 Includes scripts for building, development, and production.

---

## **How to Use**

### **1. Clone the Repository**
Clone the boilerplate to your local machine:
```bash
git clone https://github.com/ams-sth/typescript-node-template.git
cd typescript-node-template

NOTE: Delete the hidden .git folder after cloning to remove the original repository link, then add your own GitHub repository link as the remote.. 
```

---

### **2. Rename the Project**
Update the `name` and other metadata in `package.json`:
- Open `package.json` and edit the `name` field:
  ```json
  "name": "your-new-project-name"
  ```
- Optionally, update the `description`, `author`, and `license` fields.

---

### **3. Install Dependencies**
Install all required packages:
```bash
npm install
```

---

### **4. Start the Development Server**
Run the server in development mode with hot-reloading:
```bash
npm run dev
```

---

### **5. Build for Production**
Compile TypeScript files into JavaScript:
```bash
npm run build
```

---

### **6. Run the Production Build**
Run the production-ready application:
```bash
npm start
```

---

## **Directory Structure**
```
├── src/             # Application source code
│   ├── config/      # Configuration files
│   ├── controllers/ # Route controllers
│   ├── middlewares/ # Custom middlewares
│   ├── models/      # Data models
│   ├── routes/      # API routes
│   └── index.ts     # Entry point
├── dist/            # Compiled JavaScript (generated after build)
├── package.json     # Project metadata and scripts
├── tsconfig.json    # TypeScript configuration
└── README.md        # Project documentation
```

---

## **Scripts**
- **`npm run dev`**: Start the development server with hot-reloading.
- **`npm run build`**: Compile TypeScript files for production.
- **`npm start`**: Run the production build.

---
