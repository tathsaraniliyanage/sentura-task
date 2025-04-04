# Welcome Sentura Task👋

<h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=1100&height=70&duration=4000&lines=Sentura+Task+&color=078179" />
</h1>

## 🌟 Technologies Used

- **TypeScript** - Primary programming language
- **React** - Framework for building web applications 
- **Vite** - Environment for developing React applications


## 🚀 Get Started

## How to setup the Frontend Project 📍

1. create package.json:
   ```sh
   npm init
   ```
2. Create tsconfig.js:
   ```sh
   tsc --init
   ```

3. Install @types/node:
   ```sh
   npm i --save-dev @types/node
   ```

4. Create react app using vite environment:
   ```sh
   npm create vite@latest 
   ```

6. Run the project:
   ```sh
   npm run dev
   ```



# Screenshots   🖼️
![Screenshot from 2025-04-04 12-49-03](https://github.com/user-attachments/assets/3e5c4d52-991a-4dce-ab16-6e085bc2e8d9)
![Screenshot from 2025-04-04 12-49-18](https://github.com/user-attachments/assets/73422400-57d0-4a0c-a8ba-561213d3f3ed)



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


