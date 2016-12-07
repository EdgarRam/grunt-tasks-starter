


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'babel',
            config: {}
        }



        api.config.options = {
            sourceMap: false,
            presets: [ 'es2015' ]
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-scripts' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.apps + '/' + _app + '/scripts',
                    src: [
                        '**/*.js',
                        '!**/*.min.js'
                    ],
                    dest: _grunt.appconf.dirs.dev + '/' + _app + '/scripts',
                } ]
            }
        } )



        return api
    }
} )()
