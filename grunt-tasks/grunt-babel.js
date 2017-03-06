


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'babel',
            config: {}
        }



        api.config.options = {
            plugins: [ 'transform-react-jsx' ],
            presets: [ 'es2015' ],
            sourceMap: false,
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-scripts' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.apps + '/' + _app + '/scripts',
                    src: [
                        '**/*.js',
                        '**/*.jsx',
                        '!**/*.min.js'
                    ],
                    dest: _grunt.appconf.dirs.dev + '/' + _app + '/scripts',
                } ]
            }
        } )



        return api
    }
} )()
