const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done) {
    // Compilar SASS
    // pasos: 1 - Identificar archivo, 2 - Compilarla, 3 - Guardar el .css
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )
    
    done();
}

exports.css = css;