FROM nginx:alpine
RUN echo "cache buster"
COPY www /usr/share/nginx/html
