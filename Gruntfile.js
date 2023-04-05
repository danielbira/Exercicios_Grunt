module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                } 
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    })

    /*Compilando LESS*/

    grunt.loadNpmTasks('grunt-contrib-less');
    
    /*Compressão do JS*/

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['less', 'uglify']);
}


