# UI Training Assignment – Playwright

##  Overview

This repository contains automated test cases for different UI components using **Playwright with TypeScript**.
The assignment includes:

* Ajax Submit Form
* Bootstrap List Box
* Checkbox Demo
* Drag and Drop Sliders
* JavaScript Alerts
* jQuery Dropdown

The goal of this project is to apply **Page Object Model (POM)** for test automation, keep a clean folder structure, and practice debugging & R\&D skills.

---

##  Project Structure

```
📦 UITrainingAssignment
 ┣ 📂 node_modules
 ┣ 📂 pages                # Page Object Model classes
 │  ┣ 📂 AjaxSubmitForm
 │  │  ┣ ajaxSubmitForm.actions.ts
 │  │  ┗ ajaxSubmitForm.locators.ts
 │  ┣ 📂 BootstrapListBox
 │  │  ┣ bootstrapListBox.actions.ts
 │  │  ┗ bootstrapListBox.locators.ts
 │  ┣ 📂 CheckboxDemo
 │  ┣ 📂 DragDropSliders
 │  ┣ 📂 HomePage
 │  ┣ 📂 JavaScriptAlerts
 │  ┗ 📂 jQueryDropdown
 ┣ 📂 tests                # Test specs for each module
 │  ┣ ajaxSubmitForm.spec.ts
 │  ┣ bootstrapListBox.spec.ts
 │  ┣ checkboxDemo.spec.ts
 │  ┣ dragDropSliders.spec.ts
 │  ┣ javaScriptAlerts.spec.ts
 │  ┗ jQueryDropdown.spec.ts
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┗ 📜 playwright.config.ts
```

 **pages/** → Contains Page Object Model (Actions + Locators) for each component
 
 ---

 **tests/** → Contains test specs (`.spec.ts`) mapped to each module

---

##  Assignment Components

### 1. Ajax Submit Form

* Automates form submission with Ajax.
* Verifies success/error messages.

### 2. Bootstrap List Box

* Tests list box selection and deselection.

### 3. Checkbox Demo

* Validates checkbox selection, "Select All" functionality.

### 4. Drag and Drop Sliders

* Automates slider interactions and verifies updated values.

### 5. JavaScript Alerts

* Handles **alert**, **confirm**, and **prompt** dialogs.
* Verifies responses.

### 6. jQuery Dropdown

* Automates single and multiple dropdown selection.
* Handles disabled options.

---

##  Tech Stack

* [Playwright](https://playwright.dev/) – Test runner & browser automation
* **TypeScript** – Strongly typed scripting
* **Node.js** – Runtime environment
* **Page Object Model (POM)** – Clean test architecture

---

##  Setup & Execution

### 1. Clone the Repository

```bash
git clone https://github.com/ZeeaanNawazHarall/UiAutomationExercise.git
cd UiAutomationExercise
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

Run all tests:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/jQueryDropdown.spec.ts
```

Run in headed mode (see browser):

```bash
npx playwright test --project=chromium --headed
```

### 4. View Reports

After execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

---

##  Acknowledgements

I would like to sincerely thank Ayesha Babar for her guidance and training sessions on UI automation with Playwright, TypeScript, and OOP concepts. Her support and mentorship greatly contributed to my learning.

I would also like to acknowledge the use of ChatGPT as a helpful resource during problem-solving and debugging.
