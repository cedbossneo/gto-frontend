FROM node as builder
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
COPY public public
COPY src src
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/
