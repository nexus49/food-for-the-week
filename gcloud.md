# Before getting started https://cloud.google.com/container-engine/docs/before-you-begin

## Authenticate with cloud.google
auth gcloud auth login

## Set default availability zone
gcloud config set compute/zone us-central1-a

## Create a cluster
gcloud preview container clusters create fftw-cluster --num-nodes 1 --machine-type g1-small

## Open firewall
gcloud compute firewall-rules create k8s-fftw-cluster-node-8000 --allow tcp:8000 --target-tags k8s-fftw-cluster-node

## Create a pod
gcloud preview container pods create --config-file pod-config.json

## Remove a pod
gcloud preview container pods --cluster fftw-cluster delete fftw --zone us-central1-a

## Inspect pod
gcloud preview container pods describe fftw
