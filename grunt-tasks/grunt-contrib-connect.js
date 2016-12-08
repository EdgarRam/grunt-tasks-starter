


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'connect',
            config: {}
        }



        api.config.server = {
            options: {
                port: _grunt.appconf.server.port,
                protocol: _grunt.appconf.server.protocol,
                hostname: _grunt.appconf.server.hostname,
                open: {
                    target: _grunt.appconf.server.protocol + '://' + _grunt.appconf.server.hostname + ':' + _grunt.appconf.server.port,
                    appName: 'starter-kit',
                },
                base: _grunt.appconf.dirs.dev,
                livereload: true
            }
        }



        _grunt.appconf.apps.forEach( ( _app ) => {
            api.config[ _app + '-server' ] = {
                options: {
                    port: _grunt.appconf.server.port,
                    protocol: _grunt.appconf.server.protocol,
                    hostname: _grunt.appconf.server.hostname,
                    open: {
                        target: _grunt.appconf.server.protocol + '://' + _grunt.appconf.server.hostname + ':' + _grunt.appconf.server.port + '/' + _app,
                        appName: 'starter-kit-' + _app,
                    },
                    base: _grunt.appconf.dirs.dev,
                    livereload: true
                }
            }
        } )



        return api
    }
} )()
