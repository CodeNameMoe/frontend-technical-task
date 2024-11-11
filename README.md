# Seneca frontend technical task

An interactive quiz component built with Next.js and TypeScript that tests users' knowledge through animated toggle switches.

![Quiz Screenshot](/public/Quiz_Screenshot.png)

[Live Demo →](https://seneca-quiz.vercel.app/)

## Features

- **Animated Toggles**: Smooth transitions with spring physics.
- **Dynamic Background**: Changes based on quiz progress.
- **Responsive Design**: Optimized for screens 320px and wider.
- **Flexible Options**: Supports both dual and triple toggle options.

## Tech Stack

- **Next.js 14**
- **TypeScript**
- **Framer Motion**
- **Tailwind CSS**
- **Cypress**

## Assumptions & Limitations

- **Design Interpretation:** The implementation balances the video and Figma designs, incorporating elements from both to ensure an optimal representation.
- **Question Data:** Hardcoded questions simulate API access with a 500ms delay.
- **Toggle Options:** Each question must have either 2 or 3 toggle options per group.
- **Responsiveness:** The component is designed to be responsive down to 320px, with vertical layouts for long labels.
- **State Management:** No data persistence between sessions; state resets on page reload.

## Quick Start

To get started with the project, follow these steps:

```bash
pnpm install
pnpm run dev
```

## Testing

![Test Screenshot](/public/e2e_test.png)

```bash
pnpm run cypress:run
```
