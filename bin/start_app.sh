sudo npm install -g strongloop
git pull
node bin/buildenv.js
npm run build-min

cp dist/bundle.min.js sprout/public/bundle.js
cp index.html sprout/public/index.html
cd sprout
slc start
