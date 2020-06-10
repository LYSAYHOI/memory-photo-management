# stage 1
FROM node:12.18.0-alpine3.9 as react-app
WORKDIR /web-app
COPY package.json .
RUN yarn --silent
COPY . .
RUN yarn run build

#stage 2
FROM nginx:1.19.0-alpine
COPY --from=react-app /web-app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]