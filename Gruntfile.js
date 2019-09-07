const grunt = require('grunt');

grunt.initConfig({
  aws: grunt.file.readJSON( './.aws/aws-keys.json' ),
  aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'us-east-2'
      },
      dist: {
          options: {
              bucket: 'fecproxystaticfiles'
          },
          files: [
            {
                expand: true,
                cwd: 'public/dist/',
                src: [ '**' ],
                dest: '/'
            }
        ]
      }
  }
});

grunt.loadNpmTasks('grunt-aws-s3');
grunt.registerTask( 'deploy', 'aws_s3:dist' );
