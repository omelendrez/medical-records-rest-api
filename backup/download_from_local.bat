@echo off
set file_name=%DATE:~10,4%%DATE:~4,2%%DATE:~7,2%%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%_heroku_188f5830c19670d.sql
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump" -h 127.0.0.1  -u %ROOT_USER% --routines --column-statistics=0 --no-create-db --no-set-names --password=%ROOT_PASSWORD% --databases heroku_188f5830c19670d > %file_name%
pause
