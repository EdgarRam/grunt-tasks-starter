


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
                base: _grunt.appconf.dirs.base + _grunt.appconf.dirs.dev,
                livereload: true
            }
        }



        return api
    }
} )()
