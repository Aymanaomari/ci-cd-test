pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = '78ef0425-3b9c-4b5c-a282-11a38457cf72'  // Jenkins credentials ID
        IMAGE_NAME = 'aymanaomarihub/vite-react-app'
        IMAGE_TAG = 'v1.0.1'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }

        stage('Deploy New Container') {
            steps {
                script {
                    sh '''
                    docker stop vite-react-app || true
                    docker rm vite-react-app || true
                    docker rmi $IMAGE_NAME:$IMAGE_TAG || true
                    docker run -d --name vite-react-app -p 8080:80 $IMAGE_NAME:$IMAGE_TAG
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Successfully pushed $IMAGE_NAME:$IMAGE_TAG to Docker Hub."
        }
        failure {
            echo "❌ Build failed. Check the logs."
        }
    }
}
