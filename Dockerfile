# Install the app dependencies in a full Node docker image
FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the dependencies into a Slim Node docker image
FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:latest

# Install app dependencies
COPY --from=0 /opt/app-root/src/node_modules /opt/app-root/src/node_modules
COPY . /opt/app-root/src

ENV NODE_ENV production
ENV PORT 3000
ENV MYSQL_HOST = mysql.nodedemo1.svc.cluster.local
ENV MYSQL_PORT = 3306
ENV MYSQL_DATABASE = sampledb
ENV MYSQL_USER = 
ENV MYSQL_PASSWORD = 

CMD ["npm", "start"]