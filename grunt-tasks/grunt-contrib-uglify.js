


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'uglify',
            config: {}
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-scripts' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.dev + '/' + _app + '/scripts',
                    src: [
                        '**/*.js',
                        '!**/*.min.js'
                    ],
                    dest: _grunt.appconf.dirs.dist + '/' + _app + '/scripts',
                } ]
            }
        } )



        return api
    }
} )()
