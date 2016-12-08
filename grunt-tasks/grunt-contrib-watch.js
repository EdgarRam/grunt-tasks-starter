


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'watch',
            config: {}
        }



        api.config.options = {
            livereload: true
        }



        _grunt.appconf.apps.forEach( ( _app ) => {



            // scripts
            api.config[ _app + '-scripts' ] = {
                files: [ _grunt.appconf.dirs.apps + '/' + _app + '/scripts/**/*.js' ],
                tasks: [ 'babel:' + _app + '-scripts' ]
            }



            // styles
            api.config[ _app + '-styles' ] = {
                files: [ _grunt.appconf.dirs.apps + '/' + _app + '/styles/**/*.styl' ],
                tasks: [ 'stylus:' + _app + '-styles', 'postcss:' + _app + '-styles' ]
            }



            // views
            api.config[ _app + '-views' ] = {
                files: [ _grunt.appconf.dirs.apps + '/' + _app + '/views/**/*.pug' ],
                tasks: [ 'pug:' + _app + '-views' ]
            }



            // index
            api.config[ _app + '-index' ] = {
                files: [ _grunt.appconf.dirs.apps + '/' + _app + '/index.pug' ],
                tasks: [ 'pug:' + _app + '-index' ]
            }
        } )



        return api
    }
} )()
