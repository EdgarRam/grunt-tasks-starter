


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'stylus',
            config: {}
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-styles' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.apps + '/' + _app + '/styles',
                    src: [
                        '**/*.styl',
                        '!**/_*.styl'
                    ],
                    dest: _grunt.appconf.dirs.dev + '/' + _app + '/styles',
                    ext: '.css'
                } ]
            }
        } )



        return api
    }
} )()
