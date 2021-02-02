module.exports = function(grunt){
    //Congiguration
    grunt.initConfig({
        //options for plugins
        concat:{
            js:{
                
            }
        }

    });

    //Load Plugins
    //grunt.loadNpmTasks('')


    //Register the tasks
    grunt.registerTask('run', function(){
        console.log('Task is running')
    });

    grunt.registerTask('eat', function(){
        console.log('Task is eating')
    });

    grunt.registerTask('all',['run', 'eat']);
}