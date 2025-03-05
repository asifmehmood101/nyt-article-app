# 📰 NYT Most Popular Articles App

A **React + TypeScript** application that fetches and displays **NY Times Most Popular Articles** using Redux Toolkit and React Router.

## 📂 Project Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/your-username/nyt-app.git
cd nyt-app
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the project root and add:

if you dont have key im already adding my key for demo purpose feel free to use it
please .env file public key is already there

```sh
VITE_NYT_API_KEY=your-nyt-api-key
```

Replace `your-nyt-api-key` with your actual **NY Times API Key**.

---

## 🚀 **Run the Development Server**

```sh
npm run dev
```

📌 Opens the app at `http://localhost:5173/`.

---

## 🏗️ **Build for Production**

```sh
npm run build
```

📌 **What this does:**  
✔️ Cleans the `dist/` folder.  
✔️ Generates optimized static files.

To **preview the build**, run:

```sh
npm run preview
```

Opens the **production build** in a local server.

---

## 🔍 **Run Unit Tests (Jest)**

```sh
npm run test
```

📌 **Runs all unit tests with Jest.**

### **🛠️ Run Jest in Watch Mode**

```sh
npm run test:unit:watch
```

📌 **Automatically re-runs tests when files change.**

### **📊 Generate Test Coverage**

```sh
npm run test:unit:coverage
```

📌 **Generates a coverage report in `coverage/`.**

To **view the coverage report**, open:

```
coverage/index.html
```

---

## 🌍 **Run E2E Tests (Cypress)**

**Important Note:** For E2E testing, you should run the app in a separate terminal and execute the E2E tests in another terminal.

### **Open Cypress GUI (Interactive Mode)**

```sh
npm run test:e2e:open
```

📌 **Opens Cypress GUI** for running tests manually.

### **Run Cypress in Headless Mode**

```sh
npm run test:e2e
```

📌 Runs **all tests** in **headless mode** (useful for CI/CD).
