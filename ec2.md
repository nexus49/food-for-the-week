# How to create a new instance running the app
'''
aws ec2 run-instances --image-id ami-146e2a7c --instance-type t2.micro --key-name default --user-data file:///Users/nexus49/Documents/dev/food-for-the-week/fftw/user-data.sh --profile bastian
'''
#How to start the app

## Start mongo
'''
sudo docker run --name mongo -d mongo
'''

## Start the fftw

'''
sudo docker run --name fftw --link mongo:mongo -d -e MONGOHQ_URL=mongodb://mongo/mean-dev -e NODE_ENV=production -p 3000:3000 nexus49/food-for-the-week:latest
'''



