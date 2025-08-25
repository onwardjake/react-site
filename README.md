vite React프로젝트 
-----------------------------------------------
생성
npm create vite@latest
cd  [프로젝트_폴더이름]
npm install
실행 
npm run dev: 개발 서버 실행
-----------------------------------------------
프로젝트 빌드(결과물 만들기)
npm run build
-----------------------------------------------

로컬에서 배포예측 미리보기
경우1
npm install -g serve
serve dist
경우2
npm run preview
-----------------------------------------------
깃헙 저장소는 내프로젝트로 연동하기

깃헙 gh-pages브랜치 생성하기

-----------------------------------------------

패키지설치(githhub)
npm install --save-dev gh-pages
-----------------------------------------------
GitHub Pages 배포를 위한 환경파일 수정

// vite.config.js
[사용1]
export default defineConfig({    
     base: '/저장소 이름/',            // 예: /my-react-app/    
     plugins: [react()],
})
[사용2]
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production'  ?  '/저장소 이름/'  :  '/',         //예: /my-react-app/  
  }
})


// package.json 
"scripts": {
      dev": "vite",
      "build": "vite build",
      ...,
      "deploy": "gh-pages -d dist",
      "predeploy": "npm run build"
},
//--- 만약에 mami브랜치에 배포하고 싶다면,
"scripts": {
      dev": "vite",
      "build": "vite build",
      ...,
      "deploy": "gh-pages -d dist -b mami",
      "predeploy": "npm run build"
},

-----------------------------------------------
배포준비
npm run deploy: GitHub Pages에 배포
