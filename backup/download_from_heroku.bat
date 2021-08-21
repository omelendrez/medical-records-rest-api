@echo off
set backuptime=heroku_b3627cd1b200890_%DATE:~6,4%%DATE:~0,2%%DATE:~3,2%%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%
echo %backuptime%

"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump" -u %VMR_USER% --routines --column-statistics=0 --no-create-db -h us-cdbr-east-06.cleardb.net --password=%VMR_PASSWORD% heroku_b3627cd1b200890 > %backuptime%.sql

pause