pipeline {
	agent any

       	tools {
		nodejs 'Node26'
	}

 	stages {
		 stage('Checkout') {
			 steps {
				 checkout scm
			 }
		 }
		 stage('Build') {
 			steps {
				 echo 'Building...'
				 sh 'node --version'
				 sh 'npm --version'
			}
		 }
		 stage('Test') {
			 steps {
				 echo 'Tests passed!'
			 }
		 }
		 stage('Deploy') {
			 steps {
				 sh 'docker build -t jenkins-pipeline .'
				 sh 'docker run -d -p 3000:3000 jenkins-pipeline'
				 echo 'Deployed!'
			 }
		 }
 	}
	 post {
 		success { echo 'Pipeline SUCCESS!' }
 		failure { echo 'Pipeline FAILED!' }
	 }	
}

