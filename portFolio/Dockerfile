#FROM node:latest as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm ci
#RUN npm install -g @angular/cli
#COPY . .
#RUN npm run build --configuration=production

#FROM nginx:stable
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /app/dist/port-folio /usr/share/nginx/html
#EXPOSE 80

FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install -g @angular/cli
RUN npm install
CMD ["ng","serve","--host","0.0.0.0"]
