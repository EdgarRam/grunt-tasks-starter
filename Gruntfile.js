


( () => {



    module.exports = ( grunt ) => {



        grunt.conf = grunt.file.readJSON( 'app-config.json' )



        // grunt.registerTask( 'default', () => {
        //     console.log( grunt.conf )
        // } )
    }
} )()
