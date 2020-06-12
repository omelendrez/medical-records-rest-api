@echo off
rem echo %DATE%
rem echo %TIME%

rem set year=%DATE:~5,4%
rem set month=%DATE:~8,2%
rem set day=%DATE:~0,2%
rem set hour=%TIME:~0,2%
rem set minute=%TIME:~3,2%

rem set backuptime=%year%%month%%day%%hour%%minute%
echo %backuptime%

set backuptime=%DATE:~10,4%%DATE:~4,2%%DATE:~7,2%
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump" -u %VMR_USER% --routines --column-statistics=0 --no-create-db -h us-cdbr-east-06.cleardb.net --password=%VMR_PASSWORD% heroku_b3627cd1b200890 > %backuptime%.sql

