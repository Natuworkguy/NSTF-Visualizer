# NSTF Interpreter & Visualizer

Welcome to the **NSTF Interpreter & Visualizer** – a browser-based interpreter and execution visualizer for the **NSTF language**, built with AngularJS and Materialize.

---

## 🔐 What is NSTF?

> **NSTF** (N Software Secure Transmission Format) is a language and file format designed for the secure, structured representation and transmission of executable code. Built on the foundation of Brainf\*\*k, NSTF wraps logic in a metadata-rich, human-readable format — making it suitable for environments where provenance, authorship, and encoding transparency matter.

NSTF files carry not just code, but context: who wrote it, when, and how it should be interpreted. This project provides a full **interpreter and visual debugger** for `.nstf` programs.

---

## ✨ Features

- ✅ Full NSTF language interpreter
- ✅ Step-through execution with pause, continue, and reload controls
- ✅ Real-time memory, input, and output visual panels
- ✅ `.nstf` file loader and saver
- ✅ Delay control for execution animation timing
- ✅ AngularJS-powered dynamic UI
- ✅ Materialize CSS for clean, responsive design
- ✅ Animate.css for smooth transitions
- ✅ Custom error handling for failed resources
- ✅ Orbitron font & favicon support

---

## 🧪 The NSTF Language & File Format

`.nstf` is a structured, plain-text format that bundles executable code with transmission metadata. Every `.nstf` file is self-describing — a receiver always knows the version, author, date, and encoding of what they're running.

**Example `.nstf` file:**

```text
# NSTF v1.0
# Project: Hello World
# Author: Natuworkguy
# Date: 2025-06-21
# Encoding: plain

+++++ [> +++++ <-] > + .  // etc...
```

The metadata header is mandatory and ensures authenticity and traceability of transmitted programs. Only valid `.nstf` files are accepted by the interpreter — binary blobs and raw code snippets are rejected by design.

---

## 📁 Project Structure

```plaintext
NSTF-Visualizer/
├── index.html               # Main application entry point
├── js/
│   ├── bf.js                # NSTF interpreter core & Angular controller
│   ├── loadfail.js          # Error fallback screen generator
│   └── visualizer.js        # Execution state visualizer
├── css/
│   └── sdf.css              # Custom styles (Materialize-based)
├── assets/
│   └── favicon.png          # Favicon
```

---

## 🛠 How to Use

1. Open `index.html` in your browser.
2. Write NSTF code directly, or load an existing `.nstf` file via the `Load` button.
3. Use `Start`, `Pause`, `Step (>>)`, or `Reload` to control execution.
4. Watch memory, input, and output update in real time.
5. Save your program back to `.nstf` format using the `Save` button.

> Only valid `.nstf` files are accepted. This enforces the NSTF transmission contract and prevents raw or malformed inputs from being executed.

---

## 🔧 Requirements

No installation required. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Opera).

> ⚠️ An internet connection is required for CDN-hosted assets (AngularJS, Materialize, etc.)

---

## 🌐 Credits & Tech

* Built with [![AngularJS](http://img.shields.io/badge/AngularJS-blue)](https://angularjs.org/)
* Styled with [![Materialize CSS](http://img.shields.io/badge/Materialize-red)](https://materializecss.com/)
* Animations via [![Animate.css](http://img.shields.io/badge/Animate.css-6f42c1)](https://animate.style/)
* Fonts via [![Google Fonts - Orbitron](http://img.shields.io/badge/Orbitron-grey)](https://fonts.google.com/specimen/Orbitron)
* NSTF language design, interpreter, and tooling by [![Natuworkguy](http://img.shields.io/badge/Natuworkguy-green)](https://github.com/Natuworkguy/)

---

## 📜 License

This software is licensed under the Apache License.
