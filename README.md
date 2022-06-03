# MyPortfolio-website

A react js + Django project to showcase my cv.

![image](https://user-images.githubusercontent.com/44753624/171933005-429036d5-9170-4cab-92c4-c2cfe0303bad.png)

![image](https://user-images.githubusercontent.com/44753624/171933439-831cc53a-aad8-404f-92eb-36ae7dbd807b.png)

![image](https://user-images.githubusercontent.com/44753624/171933603-93a87c66-6a44-406f-9c8a-0b3cf875c2c9.png)

![image](https://user-images.githubusercontent.com/44753624/171933658-fdda14ae-594d-4629-8840-79570ab8e869.png)

![image](https://user-images.githubusercontent.com/44753624/171933760-0a9b10da-6473-441e-9548-edd0fe5a490d.png)

![image](https://user-images.githubusercontent.com/44753624/171933216-7ab5593f-4a31-4db4-9c57-9cfacaa4e962.png)

![image](https://user-images.githubusercontent.com/44753624/171933341-366b6493-6c99-4c61-8461-f19082a7cc95.png)

![image](https://user-images.githubusercontent.com/44753624/171933383-0e00c51e-8f86-4e3e-b4fa-f689618f3c83.png)

![image](https://user-images.githubusercontent.com/44753624/171933511-9b6f481c-1868-4940-a705-eb51110e6afa.png)


Here, other than backend and frontend, a python environment folder named "bkend" was also supposed to be there, but I haven't uploaded it because its size is huge. Morever it only consists of django setup files, which otherwise could be installed by pip command in terminal.

It is advised to first create a virutal environment and then only use this code.

To run this code:
1) Create Python virtual environment, name it as you wish.
2) Create Django project named 'backend' in the same place where your virtual environment directory exists.
3) Create Django app inside 'backend', named 'base'
4) Replace/Add files in Django 'backend' and 'base' folders with the files that are provided here.

5) Run while keeping terminal in backend folder, run following 2 commands separately : 
   $ python manage.py makemigrations
   $ python manage.py migrate
 
6) To run django server, run command : $ python manage.py runserver
7) From a different terminal, use mpx command to create a react project named "frontend", at the same location where 'backend' folder was created.
8) Replace/Add files in 'frontend folder' with the files provided here.
9) To run react.js frontend, while keeping terminal inside 'frontend' folder run the command : $ npm start
