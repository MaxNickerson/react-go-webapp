Here's a draft of the README file for your CI/CD pipeline setup:

---

# Full Stack Web Application CI/CD Pipeline

This project sets up a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a full stack web application built with React (frontend) and Go (backend), deployed on Kubernetes clusters across multiple Amazon EC2 virtual machines. The pipeline is powered by Jenkins, Argo CD, and additional tools such as SonarQube for static code analysis and Docker for containerization.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Pipeline Overview](#pipeline-overview)
  
## Technologies Used

- **Frontend**: React.js
- **Backend**: Go (Golang)
- **CI/CD**: Jenkins, Argo CD
- **Containerization**: Docker
- **Version Control**: Git

- - **Orchestration**: Kubernetes
- **Infrastructure**: Amazon EC2 (4 VMs)
- **Code Analysis**: SonarQube
- **Version Control Hosting**: GitHub
- **Deployment Monitoring**: Argo CD UI

## Pipeline Overview

The CI/CD pipeline is designed to automate the build, testing, and deployment process for a full-stack web application. Below is an overview of the major components of the pipeline:

1. **Continuous Integration (CI)**:
   - **Jenkins** handles the CI process.
   - Automatically triggers builds on each push to the GitHub repository.
   - **SonarQube** is integrated to perform static code analysis, ensuring code quality before deployment.

2. **Continuous Deployment (CD)**:
   - **Docker** is used to containerize both the frontend (React) and backend (Go) services.
   - The pipeline uses **Jenkins** to push Docker images to a container registry.
   - **Argo CD** is responsible for continuous deployment, ensuring the updated images are deployed to Kubernetes clusters.
   - The web application is deployed on Kubernetes clusters distributed across 2 Amazon EC2 instances.

3. **Automated Workflow**:
   - The pipeline is designed to trigger remotely for seamless updates. Whenever changes are committed to the repository, Jenkins automatically triggers a new build, performs static analysis with SonarQube, and deploys the updated application using Argo CD.


Remote Pipeline: https://github.com/MaxNickerson/argocd-kubernetes-manifests

