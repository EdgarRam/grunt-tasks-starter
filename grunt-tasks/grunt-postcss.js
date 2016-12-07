


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'postcss',
            config: {}
        }



        api.config.options = {
            processors: [
                require( 'autoprefixer' )( { browsers: 'last 200 versions' } )
            ]
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-styles' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.dev + '/' + _app + '/styles',
                    src: [
                        '**/*.css',
                        '!**/*.min.css'
                    ],
                    dest: _grunt.appconf.dirs.dev + '/' + _app + '/styles',
                } ]
            }
        } )



        return api
    }
} )()
