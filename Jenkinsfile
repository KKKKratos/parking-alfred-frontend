pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'cnpm install'
        sh 'cnpm run build'
      }
    }
    stage('Deploy Local') {
      steps {
        sh '''cp -r /var/lib/jenkins/workspace/test_master/dist/* /usr/share/nginx/html
'''
      }
    }
    stage('Deploy Prod') {
      steps {
        sh '/root/downloads/build.exp'
      }
    }
  }
}