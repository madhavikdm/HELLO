pipeline {
    agent any
 stages {
  stage('Docker Build and Tag') {
           steps {
              
                sh 'docker build -t new:latest .' 
                  sh 'docker tag  new madhavikadam/myrepo-agora:latest'
                sh 'docker tag new madhavikadam/myrepo-agora:$BUILD_NUMBER'
               
          }
        }
     
  stage('Publish image to Docker Hub') {
          
            steps {
        withDockerRegistry([ credentialsId: "docker", url: "" ]) {
          sh  'docker push madhavikadam/myrepo-agora:latest'
          sh  'docker push madhavikadam/myrepo-agora:$BUILD_NUMBER' 
        }
                  
          }
        }
     
      stage('Run Docker container on Jenkins Agent') {
             
            steps {
                sh "docker run -d -p 5000:3000  madhavikadam/myrepo-agora"
 
            }
        }
 stage('Run Docker container on remote hosts') {
             
            steps {
                sh "docker -H ssh://localhost run -d -p 5000:3000  madhavikadam/myrepo-agora"
 
            }
        }
    }
}
