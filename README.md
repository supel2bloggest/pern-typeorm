# pern-typeorm
PERN with typeorm docker-compose

#setting ormconfig
in ormconfig.json
if you run on pc you must set\
{\
 ...,\
 "host": "localhost"\
}\

if you run on docker you must set\
{\
 ...,\
 "host": "db"\
}\


# get-started

go to server folder\
<code>
cd server
</code>

install package\
<code>
yarn install
</code>

migration script\
<code>
yarn typeorm migration:run
</code>

seeding data\
<code>
yarn seed:run
</code>

run code\
<code>
yarn dev
</code>

# add project to docker with docker-compose 
go to main folder\
<code>
cd ../
</code>

run docker-compose 
<code>
docker-compose up
</code>

you must access to docker by docker exec -it\
<code>
   docker exec -it (container_id)/bin/sh
</code>

install database\
<code>
yarn typeorm migration:run
</code>

seeding data to database\
<code>
yarn seed:run
</code>

NOTE: please install nodejs and docker before run this project
# Enjoy coding
