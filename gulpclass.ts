// tslint:disable:no-require-imports

import { Gulpclass, Task } from 'gulpclass/Decorators';
import gulp = require('gulp');
import gutil = require('gulp-util');
import ftp = require('vinyl-ftp');
import fs = require('fs');

const publishConfig = JSON.parse(fs.readFileSync('publish-config', 'utf8'));

@Gulpclass()
export class Gulpfile {

    @Task('publish')
    clean(cb: Function) {
      const conn = ftp.create({
        host: 'mywebsite.tld',
        user: 'me',
        password: 'mypass',
        parallel: 10,
        log: gutil.log
      });

      const globs = ['src/**', 'css/**', 'js/**', 'fonts/**', 'index.html'];

      // using base = '.' will transfer everything to /public_html correctly
      // turn off buffering in gulp.src for best performance

      return gulp
        .src(['**/*'], { base: '.', buffer: false })
        .pipe(conn.newer('/public_html')) // only upload newer files
        .pipe(conn.dest('/public_html'));
    }

}
