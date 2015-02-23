FROM    centos:centos6

# Install Node
RUN curl -sL https://rpm.nodesource.com/setup | bash -
RUN yum install -y nodejs
RUN yum install -y gcc-c++ make

COPY . /src

WORKDIR src/web

# Install app dependencies
RUN npm install

EXPOSE 8000

CMD ["npm", "start" ] 
