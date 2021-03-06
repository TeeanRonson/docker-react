#docker file for production environment

#Layer 1
FROM node:alpine as builder

WORKDIR '/app'
 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Layer 2
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
#We dont have to start the nginx because the default setting is to start it up








