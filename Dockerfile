FROM nodesource/node:wheezy 

COPY . /src

WORKDIR src/web

RUN npm install -g bower
RUN npm install -g grunt-cli

# Install app dependencies
RUN npm install

EXPOSE 8000

CMD npm start >> log.txt 
