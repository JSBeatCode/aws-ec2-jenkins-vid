pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                timeout(time: 5, unit: 'MINUTES', activity: 'kill') {
                    sh 'sudo npm install --save'
                }
            }
        }
        stage('Read') {
            steps {
                timeout(time: 5, unit: 'MINUTES', activity: 'kill') {
                    sh 'sudo pm2 list'
                }
            }
        }
        stage('Deploy') {
            steps {
                timeout(time: 5, unit: 'MINUTES', activity: 'kill') {
                    script {
                        try {
                            sh 'sudo pm2 reload index.js'
                        } catch(Exception e) {
                            sh 'sudo pm2 start index.js'
                        } finally {
                            echo 'Finally Deploy Executed'
                        }
                    }
                }
            }
        }
    }
}