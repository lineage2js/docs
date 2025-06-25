# Get Started

in progress...

## Загрузите и установите программы
* Node.js 22.14.0 (Windows)
* MongoDB Community Server 8.0.5 (Windows)
* MongoDB Compass 1.45.3 (Windows)

## Проверьте доступность установленных программ
### Node.js
Проверьте установку, выполнив в командной строке:
```:no-line-numbers
node -v
npm -v
```
Команды должны отобразить номер версии.

### MongoDB Community Server
Проверьте, что сервис MongoDB запущен (через Win+R: services.msc).  
Название сервиса: MongoDB Server (MongoDB).  
Статус: Запущен.

### MongoDB Compass
После установки запустите Compass и подключитесь к локальному серверу (mongodb://localhost:27017).

## Настройка сервера
1. Клонируем репозиторий.
```:no-line-numbers
git clone https://github.com/lineage2js/server.git
```
2. Переходим в папку.
```:no-line-numbers
cd server
```
3. Выполняем установку.
```:no-line-numbers
npm install
```

## Запуск сервера

1. Запуск login сервера.
```:no-line-numbers
node loginserver.js
```
2. Запуск game сервера.
```:no-line-numbers
node gameserver.js
```
