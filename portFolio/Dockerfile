FROM node:18.17.1 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=6144
RUN npm run build --configuration=production

FROM nginx:stable
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/port-folio usr/share/nginx/html
EXPOSE 80