pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/muhamedrashif/CI-CD-project.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose build'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
