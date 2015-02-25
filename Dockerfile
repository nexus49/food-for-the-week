FROM nodesource/node:wheezy 

COPY . /src

WORKDIR src/web

# Install app dependencies
RUN npm install

EXPOSE 8000

CMD npm start >> log.txt 
