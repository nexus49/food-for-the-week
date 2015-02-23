FROM    centos:centos6

# Install Node
curl -sL https://rpm.nodesource.com/setup | bash -
yum install -y nodejs

COPY . /src

WORKDIR src/web

# Install app dependencies
RUN npm install

EXPOSE 8000

CMD ["npm", "start" ] 
