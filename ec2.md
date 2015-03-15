# How to create a new instance running the app

## Create Instance
'''
aws ec2 run-instances --image-id ami-146e2a7c --instance-type t2.micro --key-name default --user-data  file:///Users/nexus49/Documents/dev/food-for-the-week/fftw/user-data.sh --block-device-mappings "[{\"DeviceName\":\"/dev/xvda\",\"Ebs\":{\"DeleteOnTermination\":true,\"SnapshotId\":\"snap-6a3ad4e7\",\"VolumeSize\":20,\"VolumeType\":\"standard\"}}]" --profile bastian
'''
## Associate public IP
aws ec2 associate-address --instance-id i-6783d648 --public-ip 52.1.100.229 --profile bastian

#How to start the app

## Start mongo
'''
sudo docker run --name mongo -d -v /home/ec2-user/data:/data/db mongo
'''

## Start the fftw

'''
sudo docker run --name fftw --link mongo:mongo -d -p 3000:3000 nexus49/food-for-the-week:latest
'''

## Update frontend

'''
sudo docker pull nexus49/food-for-the-week:latest && sudo docker stop fftw && sudo docker rm fftw && sudo docker run --name fftw --link mongo:mongo -d -e MONGOHQ_URL=mongodb://mongo/mean-dev -e NODE_ENV=production -p 3000:3000 nexus49/food-for-the-week:latest
'''
