#FROM node:10.1.0-alpine
#FROM openjdk:8u171-jdk
#FROM ubuntu:17.10
FROM selenium/node-chrome:3.12.0-boron
USER seluser
RUN sudo apt-get update \
    && sudo apt-get install -y \
        build-essential \
        nodejs \
        npm \
        xvfb \
    && sudo ln -s /usr/bin/nodejs /usr/bin/node

RUN mkdir /tmp/.X11-unix \
    && sudo chmod 1777 /tmp/.X11-unix/ \
    && sudo chown root /tmp/.X11-unix/

WORKDIR /home/seluser

COPY ./DockerScripts/nightwatch.json /home/seluser/nightwatch.json
COPY ./.babelrc /home/seluser/.babelrc
COPY ./index.js /home/seluser/index.js
COPY ./package.json /home/seluser/package.json
COPY ./src /home/seluser/src
COPY ./docker/entry_point.sh /opt/bin/entry_point.sh

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null
EXPOSE 4444

RUN npm install

ENTRYPOINT [ "npm", "start" ]