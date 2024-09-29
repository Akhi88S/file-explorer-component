# File Explorer Application

## Overview
This is a simple React-based file explorer application that allows users to navigate through a hierarchical structure of files and folders. Users can right-click on files to perform actions such as copying, deleting, or renaming files through a popup interface.

## Features
- **Hierarchical Display:** Navigate through a structured layout of folders and files.
- **Context Menu:** Right-click on files to access actions like copy, delete, and rename.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Visual Representation:** Files and folders are displayed with SVG icons for enhanced UX.

## Assumptions
- The application is designed to be desktop-friendly, allowing users to utilize both right-click and left-click functionalities effectively.

## Technologies Used
- **React:** Frontend library for building the user interface.
- **TypeScript:** For type safety and improved developer experience.
- **CSS:** For styling the application.

## Icons
Icons are included in the project to visually differentiate files and folders. You can customize the icons used by modifying the SVGs in the `FileExplorer.tsx` component. Here are some suggestions for icons you can use:

### Example Icons
#### Folder Icon
```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 16 16">
    <path d="M10.5 0h-9A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13A1.5 1.5 0 0 0 16 14.5v-9a1.5 1.5 0 0 0-1.5-1.5H10.5L9 0z"/>
</svg>
