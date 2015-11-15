node bin/buildenv.js
npm run build-min
mongod --dbpath /data/db/ --logpath mongod.log --fork
cd sprout && npm start
