


( () => {



    module.exports = ( _grunt ) => {



        var api = {
            name: 'clean',
            config: {}
        }



        api.config.build = [
            _grunt.appconf.dirs.dev,
        ]



        api.config.dist = [
            _grunt.appconf.dirs.dist,
        ]



        return api
    }
} )()
