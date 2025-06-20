pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                script {
                    // Clean up all previous containers/networks/volumes
                    sh 'docker-compose down --volumes --remove-orphans || true'
                    
                    // Clean up frontend port
sh 'docker ps -q --filter "publish=3001" | xargs -r docker stop || true'
sh 'docker ps -a -q --filter "publish=3001" | xargs -r docker rm || true'

                    // Force stop and remove container using port 3002 if still running
                    sh 'docker ps -q --filter "publish=3002" | xargs -r docker stop || true'
                    sh 'docker ps -a -q --filter "publish=3002" | xargs -r docker rm || true'

                    // Build and start containers
                    sh 'docker-compose build'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}

