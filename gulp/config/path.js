import * as nodePath from 'path';
const rootPath = nodePath.basename(nodePath.resolve());

const distPath = './dist';
const srcPath = './src';

export const path = {
  build: {
    html: `${distPath}/`,
    css: `${distPath}/css/`,
    js: `${distPath}/js/`,
    images: `${distPath}/img/`,
    fonts: `${distPath}/fonts/`,
    files: `${distPath}/files/`,
  },
  src: {
    html: `${srcPath}/*.html`,
    scss: `${srcPath}/scss/style.scss`,
    js: `${srcPath}/js/app.js`,
    images: `${srcPath}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    svg: `${srcPath}/img/**/*.svg`,
    svgicons: `${srcPath}/img/icons/*.svg`,
    files: `${srcPath}/files/**/*.*`,
  },
  watch: {
    html: `${srcPath}/**/*.html`,
    scss: `${srcPath}/scss/**/*.scss`,
    js: `${srcPath}/js/**/*.js`,
    images: `${srcPath}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcPath}/files/**/*.*`,
  },
  clean: distPath,
  distPath,
  srcPath,
  rootPath,
  ftp: '',
};
