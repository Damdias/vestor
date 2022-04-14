FROM node:14.17.0-alpine as build-common
RUN mkdir -p /app
WORKDIR /app
ADD ../common/package.json /app
RUN npm install
COPY common/src /app
COPY common/tsconfig.json /app
RUN npm run build 
RUN npm pack



FROM node:14.17.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY src /app
COPY tsconfig.json /app
COPY prod.env /app
COPY --from=build-common /app/vestor-common-1.0.0.tgz /app
RUN npm install vestor-common-1.0.0.tgz
RUN npm run build 
EXPOSE 5002
CMD [ "node", "build/index.js", "prod" ]
