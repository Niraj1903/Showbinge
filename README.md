# create-react-app showbinge

# configured tailwindcss

1.npm install -D tailwindcss@3
npx tailwindcss init

2.  tailwind.config.js

    /** @type {import('tailwindcss').Config} \*/
    module.exports = {
    content: [
    "./src/**/\*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

3.index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
