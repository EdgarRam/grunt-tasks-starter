


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'copy',
            config: {}
        }



        api.config.components = {
            files: [ {
                expand: true,
                cwd: _grunt.appconf.dirs.apps + '/components',
                src: [
                    '**/*'
                ],
                dest: _grunt.appconf.dirs.dev + '/components'
            } ]
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-images' ] = {
                files: [ {
                    expand: true,
                    cwd: _grunt.appconf.dirs.apps + '/' + _app + '/images',
                    src: [
                        '**/*.{jpg,jpeg,png,gif,svg}'
                    ],
                    dest: _grunt.appconf.dirs.dest + '/' + _app + '/images'
                } ]
            }
        } )



        return api
    }
} )()
