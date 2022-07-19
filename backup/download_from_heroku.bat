@echo off
set file_name=%DATE:~10,4%%DATE:~4,2%%DATE:~7,2%%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%_heroku_188f5830c19670d_PRODUCTION.sql
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump" -u %VETEAPP_USER% --routines --column-statistics=0 --no-create-db --no-tablespaces -h us-cdbr-east-06.cleardb.net --password=%VETEAPP_PASSWORD% heroku_188f5830c19670d > %file_name%.sql
