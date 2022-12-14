# Common build stage
FROM nginx

COPY ./configs/nginx ./etc/nginx

COPY ./dist ./usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80

EXPOSE 443