


( () => {



    module.exports = ( grunt ) => {



        grunt.appconf = grunt.file.readJSON( './apps-config.json' )

        var colors = require( 'colors' )

        require( 'load-grunt-tasks' )( grunt )

        require( './grunt-tasks/grunt-tasks-loader' )( grunt )


        // pkg: grunt.file.readJSON('package.json'),
        grunt.registerTask( 'default', () => {
            console.log( 'WELCOME'.red )
        } )
    }
} )()
