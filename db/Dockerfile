# Use the official Node.js image as the base
FROM mysql:latest

EXPOSE 3306

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=qr_code_service
ENV MYSQL_ROOT=sammy
ENV MYSQL_PASSWORD=heslo
ENV MYSQL_ROOT_PASSWORD=P@55word

ADD qr.sql /docker-entrypoint-initdb.d


CMD ["mysqld"]