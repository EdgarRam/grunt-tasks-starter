


( () => {



    module.exports = ( _grunt ) => {



        _grunt.registerTask( 'default', () => {
            console.log('')
            console.log('')
            console.log( '          wTF, que quieres hacer con grunt en default !!!'.bold.red )
            console.log('')
        } )



        _grunt.registerTask( 'dev', [
            'clean',
            'copy',
            'stylus',
            'postcss',
            'babel',
            'pug',
            'connect:server',
            'watch',
        ] )



        _grunt.registerTask( 'build', 'ok to build app', ( _target = null, ...a ) => {



            if ( ! _target ) {
                _grunt.task.run( [ 'dev' ] )
            }



            _grunt.task.run( [
                'clean',
                'copy:components',
                'copy:' + _target + '-images',
                'stylus:' + _target + '-styles',
                'postcss:' + _target + '-styles',
                'babel:' + _target + '-scripts',
                'pug:' + _target + '-views',
                'pug:' + _target + '-index',
                'connect:' + _target + '-server',
                'watch',
            ] )
        } )




        return null
    }
} )()
