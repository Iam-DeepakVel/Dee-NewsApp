pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dee-newsapp-ui .'
            }
        }
        stage('Stop old container') {
            steps {
                sh 'docker rm dee-newsapp-ui --force'
            }
        }
        stage('Start New Container') {
            steps {
                sh 'docker run -p 3001:3000 -d --name dee-newsapp-ui dee-newsapp-ui '
            }
        }
    }
}