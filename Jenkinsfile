pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'node-14', configId: 'node-14') {
          echo 'add node'
        }

      }
    }

  }
}