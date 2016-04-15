./bin/buildenv.sh
npm run build-min

cp dist/bundle.min.js sprout/public/bundle.js
cp index.html sprout/public/index.html

docker-compose build
docker-compose up
