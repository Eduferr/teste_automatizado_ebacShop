pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/Eduferr/teste_automatizado_ebacShop.git'
                sh 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                sh 'nohup npm start > server.log 2>&1 &'
                sleep(time: 20, unit: 'SECONDS')
            }
        }

        stage('Run Tests') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }

        stage('Report') {
            steps {
                junit 'cypress/results/*.xml'
                publishHTML (target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
            sh 'pkill -f "npm start" || true'
        }
        success {
            echo '✅ Testes executados com sucesso!'
        }
        failure {
            echo '❌ Houve falhas nos testes!'
        }
    }
}
