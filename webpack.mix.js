let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/client/js/app.js', 'public/js')
   .sass('src/client/scss/app.scss', 'public/css').options({
     processCssUrls: false,
     postCss: [ tailwindcss('tailwind.js') ]
   });
