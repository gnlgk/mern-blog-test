# MERN BLOG

MERN 스택은 MongoDB, Express.js, React, Node.js를 사용하여 풀스택 웹 애플리케이션을 개발하는 기술 스택을 의미합니다. 여기서는 MERN 스택을 사용하여 블로그 애플리케이션을 구축하는 방법을 설명하겠습니다.

vite(https://ko.vitejs.dev/guide/)
tailwindcss(https://tailwindcss.com/docs/guide/)

````
npm create vite@latest
cd client
npm install
npm run dev
npm i react-router-dom
npm i react-icons
````

````
Project name: client
√ Select a framework: » React
√ Select a variant: » JavaScript + SWC
````

````
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
````

````
git init
git add .
git commit -m "first"
git remote add origin https://github.com/gnlgk/mern-blog-test.git
git branch -M main
git push -u origin main
````