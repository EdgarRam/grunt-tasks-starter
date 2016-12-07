


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
        } )



        return api
    }
} )()
