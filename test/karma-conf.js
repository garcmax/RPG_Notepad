module.exports = function(config){
    config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
    basePath : '../',

    // files to include, ordered by dependencies
    files : [
      // include relevant Angular files and libs
      'public/libs/angular/angular.js',
      'public/libs/angular-route/angular-route.js',
      'test/libs/angular-resource/angular-resource.js',
      'test/libs/angular-mocks/angular-mocks.js',

      // include js files
      'public/dist/js/app.js',

      // include unit test specs
      'test/unit/*/*.js'
    ],
    // files to exclude
    exclude : [
      'public/libs/angular/*.min.js',
      'public/libs/angular-route/*min.js',
    ],

    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : false,

    // testing framework, be sure to install the karma plugin
    frameworks: ['jasmine'],

    // browsers to test against, be sure to install the correct karma browser launcher plugin
    browsers : [/*'Chrome',*/ 'PhantomJS'],

    // progress is the default reporter
    reporters: ['progress'],

    // map of preprocessors that is used mostly for plugins
    preprocessors: {

    },

    // list of karma plugins
    plugins : [
        'karma-junit-reporter',
        /*'karma-chrome-launcher',*/
        'karma-jasmine',
        'karma-phantomjs-launcher'
    ]
})}