# MyPortfolio-website

A react js + Django project to showcase my cv.

Here, other than backend and frontend, a python environment folder named "bkend" was also supposed to be there, but I haven't uploaded it because its size is huge. Morever it only consists of django setup files, which otherwise could be installed by pip command in terminal.

It is advised to first create a virutal environment and then only use this code.

To run this code:
1) Create Python virtual environment, name it as you wish.
2) Create Django project named 'backend'
3) Create Django app inside 'backend', named 'base'
4) Replace/Add files in Django 'backend' and 'base' folders with the files that are provided here.

5) Run while keeping terminal in backend folder, run following commands : 
   $ python manage.py makemigrations
   $ python manage.py migrate
 
6) To run django server, run command : $ python manage.py runserver
7) From a different terminal, use mpx command to create a react project named "frontend", at the same location where 'backend' folder was created.
8) Replace/Add files in 'frontend folder' with the files provided here.
9) To run react.js frontend, while keeping terminal inside 'frontend' folder run the command : $ npm start
