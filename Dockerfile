FROM node
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
COPY src .
RUN npm run build

FROM nginx
COPY --from=0 /usr/src/app/build/ /usr/share/nginx/html/
