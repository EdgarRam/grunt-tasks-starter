


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'pug',
            config: {}
        }



        api.config.options = {
            pretty: true
        }



        _grunt.appconf.apps.forEach( ( _app ) => {


            // app views
            api.config[ _app + '-views' ] = {
                files:[ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.apps + '/' + _app + '/views',
                    src: [
                        '**/*.pug',
                        '!**/layouts/**',
                        '!**/mixins/**',
                        '!**/includes/**',
                    ],
                    dest: _grunt.appconf.dirs.dev + '/' + _app + '/views',
                    ext: '.html',
                } ]
            }



            // app index
            api.config[ _app + '-index' ] = {
                files: {
                    [ `${_grunt.appconf.dirs.dev}/${_app}/index.html` ]: `${_grunt.appconf.dirs.apps}/${_app}/index.pug`
                }
            }
        } )



        return api
    }
} )()
