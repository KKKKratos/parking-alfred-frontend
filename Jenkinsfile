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
        sh '''cp -r /var/lib/jenkins/workspace/parking-alfred-frontend_master/dist/* /usr/share/nginx/html
'''
        input(message: 'Deploy to production?', ok: 'ok')
      }
    }
    stage('Deploy Prod') {
      steps {
        sh '/root/downloads/deploy.sh'
      }
    }
  }
}