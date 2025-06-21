# NSTF Visualizer

Welcome to the **NSTF Visualizer** – a slick, browser-based Brainf\*\*k visualizer powered by AngularJS, and Materialize.

---

## 🚀 What is NSTF?

> **NSTF** stands for **Nathan Network Secure Transmission Format** – a custom `.nstf` file format designed to represent and transport Brainf\*\*k code securely and stylishly.

---

## ✨ Features

- ✅ AngularJS-powered dynamic UI
- ✅ Materialize CSS components for clean design
- ✅ Animate.css for smooth transitions
- ✅ Custom `.nstf` file loader/saver
- ✅ Memory, input, and output visual panels
- ✅ Start / Pause / Continue / Step controls
- ✅ Delay control for animation timing
- ✅ Custom error handling for failed resources
- ✅ Favicon support & custom font via Orbitron
- ✅ `.nstf` file support (text-based format with metadata)

---

## 📁 File Structure

```plaintext
NSTF-Visualizer/
├── index.html               # The main HTML file
├── js/
│   ├── bf.js                # Brainf**k logic and Angular controller
│   ├── loadfail.js          # Error fallback screen generator
│   └── visualizer.js        # Visual updates for the UI
├── css/
│   └── sdf.css              # Custom styles (Materialize-based)
├── assets/
│   └── favicon.png          # Favicon
```

## 🧪 NSTF File Format

`.nstf` is a simple text format with metadata headers and code:

```text
# NSTF v1.0
# Project: Hello World
# Author: Natuworkguy
# Date: 2025-06-21
# Encoding: plain

+++++ [> +++++ <-] > + .  // etc...
```

---

## 🛠 How to Use

1. Open `index.html` in your browser.
2. Type or paste your Brainf\*\*k code.
3. Hit `Start`, `Pause`, `>>`, or `Reload` as needed.
4. Save your code to `.nstf` format.
5. Load `.nstf` files using the `Load` button.

> Only `.nstf` files are accepted to prevent binary or invalid inputs.

---

## 🔧 Requirements

No setup needed. Just open `index.html` in any modern browser (Chrome, Firefox, Edge, Opera).

> ⚠️ Make sure you're connected to the internet for external CDN assets (like Angular, Materialize, etc.)

---

## 🌐 Credits & Tech

*  Built with [![AngularJS](http://img.shields.io/badge/AngularJS-blue)](https://angularjs.org/)
*  Styled with [![Materialize CSS](http://img.shields.io/badge/Materialize-red)](https://materializecss.com/)
*  Animations via [![Animate.css](http://img.shields.io/badge/Animate.css-6f42c1)](https://animate.style/)
*  Fonts via [![Google Fonts - Orbitron](http://img.shields.io/badge/Orbitron-grey)](https://fonts.google.com/specimen/Orbitron)
*  Concept, code, and creativity by [![Natuworkguy](http://img.shields.io/badge/Natuworkguy-green)](https://github.com/Natuworkguy/)

---

## 📜 License
This software is under the Apache license.
