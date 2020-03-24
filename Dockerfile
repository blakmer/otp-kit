FROM nginx:alpine
COPY ./styleguide /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]