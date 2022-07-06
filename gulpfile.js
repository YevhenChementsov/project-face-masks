import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/config/plugins.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import ghPages from 'gulp-gh-pages';

global.app = {
  gulp,
  path,
  plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTask = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images),
);

const dev = gulp.series(clean, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTask);
const deployZip = gulp.series(clean, mainTask, zip);

gulp.task('default', dev);
gulp.task('deploy', function () {
  return app.gulp.src('./dist/**/*').pipe(ghPages({ 
        remoteUrl: "https://github.com/your_github_username_here/your_github_username_here.github.io.git",
        branch: "master"
      }))
  }));
});

export { sprite };
export { dev };
export { build };
export { deployZip };
