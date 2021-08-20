FROM ubuntu


RUN sudo apt-get update

RUN sudo apt-get -y install nginx

RUN sudo apt-get -y install nodejs

RUN sudo apt-get -y install npm

RUN sudo git clone https://github.com/imshubhamcodex/h-care.git

RUN cd h-care

RUN sudo npm install

RUN sudo npm cache clear --force

RUN sudo npm run build

RUN cd dist

RUN sudo cp -r . /var/www/html

RUN cd /etc/nginx/sites-available

RUN sudo rm -f default

RUN cd /home/ubuntu/h-care/

RUN sudo cp -r default /etc/nginx/sites-available
 
RUN sudo service nginx restart

