pipeline {
    agent any
 stages {
  stage('Docker Build and Tag') {
           steps {
              
                sh 'docker build -t new:latest .' 
                  sh 'docker tag  new madhavikdm/myrepo-agora:latest'
                sh 'docker tag new madhavikdm/myrepo-agora:$BUILD_NUMBER'
               
          }
        }
     
  stage('Publish image to Docker Hub') {
          
            steps {
        withDockerRegistry([ credentialsId: "docker", url: "" ]) {
          sh  'docker push madhavikdm/myrepo-agora:latest'
          sh  'docker push madhavikdm/myrepo-agora:$BUILD_NUMBER' 
        }
                  
          }
        }
     
      stage('Run Docker container on Jenkins Agent') {
             
            steps {
                sh "docker run -d -p 5000:3000  madhavikdm/myrepo-agora"
 
            }
        }
 stage('Run Docker container on remote hosts') {
             
            steps {
                sh "docker -H ssh://localhost run -d -p 5000:3000  madhavikdm/myrepo-agora"
 
            }
        }
    }
}
