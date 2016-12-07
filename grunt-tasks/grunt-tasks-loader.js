


( () => {



    module.exports = ( _grunt ) => {



        const path = require( 'path' )
        const config_filename = __filename.substring( __filename.lastIndexOf( path.sep ) + 1 )



        const setup = () => {
            let list_filenames = null
            list_filenames = get_filenames_from_tasks_directory()
            load_grunt_tasks_config( list_filenames )
        }



        const get_filenames_from_tasks_directory = () => {
            const fs = require( 'fs' )
            let dir_files = fs.readdirSync( _grunt.appconf.dirs.grunt_tasks )
            dir_files.splice( dir_files.indexOf( config_filename.trim() ), 1 )
            return dir_files
        }



        const load_grunt_tasks_config = ( _list_filenames ) => {
            var grunt_init_config = {}
            grunt_init_config.pkg = _grunt.file.readJSON( './package.json' )
            _list_filenames.forEach( ( _file ) => {
                let task_object = require( './' + _file )
                let task_def = null
                if ( task_object && typeof task_object === 'function' ) {
                    task_def = task_object( _grunt )
                    if ( task_def && task_def.name && task_def.config ) {
                        grunt_init_config[ task_def.name ] = task_def.config
                    }
                }
            } )
            _grunt.initConfig( grunt_init_config )
        }



        setup()
    }
} )()
