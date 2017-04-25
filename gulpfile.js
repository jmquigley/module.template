'use strict';
const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
gulp.task('site', (cb) => {
    let config = {
        tags: {
            allowUnknownTags: true
        },
        opts: {
            destination: './docs'
        },
        plugins: [
            'plugins/markdown'
        ],
        templates: {
            cleverLinks: false,
            monospaceLinks: false,
            default: {
                outputSourceFiles: true
            },
            path: 'ink-docstrap',
            theme: 'cerulean',
            navType: 'vertical',
            linenums: true,
            dateFormat: 'MMMM Do YYYY, h:mm:ss a'
        }
    };
    gulp.src(['README.md', './lib/*.js'], { read: false })
        .pipe(jsdoc(config, cb));
});
gulp.task('markdown', (cb) => {
    return gulp.src('lib/*.js')
        .pipe(gulpJsdoc2md(cb))
        .on('error', (err) => {
        gutil.log(gutil.colors.red('jsdoc2md failed'), err.message);
    })
        .pipe(rename((path) => {
        path.extname = '.md';
    }))
        .pipe(gulp.dest('docs'));
});
gulp.task('docs', ['site', 'markdown'], () => { });
gulp.task('default', ['docs'], () => { });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJndWxwZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFZO0lBQzlCLElBQUksTUFBTSxHQUFHO1FBQ1osSUFBSSxFQUFFO1lBQ0wsZ0JBQWdCLEVBQUUsSUFBSTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNMLFdBQVcsRUFBRSxRQUFRO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Isa0JBQWtCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsT0FBTyxFQUFFO2dCQUNSLGlCQUFpQixFQUFFLElBQUk7YUFDdkI7WUFDRCxJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsVUFBVTtZQUNuQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSx5QkFBeUI7U0FDckM7S0FDRCxDQUFDO0lBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztTQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFZO0lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztTQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFVO1FBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUQsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsUUFBTyxDQUFDLENBQUMsQ0FBQztBQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQU8sQ0FBQyxDQUFDLENBQUMifQ==