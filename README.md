## Setup

1. install docker desktop
2. create file `.env` and copy content from `.env.example`
3. edit `.env` DB settings
4. start docker containers by run
```
docker-compose up -d
```
5. dump database from `sql/*` file
6. install dependencies 
```
npm install
```


## Run
1. start docker containers by run
```
docker-compose up -d
```
2. run node server
```
npm run dev
```

## Dockers
- check running docker containers
```
docker ps
```
- stop docker containers
```
docker-compose down
```