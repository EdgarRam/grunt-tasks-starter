


( () => {



    module.exports = ( grunt ) => {



        grunt.conf = grunt.file.readJSON( './apps-config.json' )



        grunt.registerTask( 'default', () => {
            console.log( JSON.stringify(grunt.conf, null, 4) )
        } )
    }
} )()
