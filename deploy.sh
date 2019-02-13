#!/bin/bash

DATE=$(date)
REV=$(git rev-parse HEAD)
MESSAGE="Deployed on $DATE by $USER at commit $REV"

echo "BUILDING"
git push heroku master -f
echo "DEPLOYING TO HEROKU"
#find dist/scripts/ -name "*.js" -exec sed -i '' 's/career-pillar-api/career-pillar-production/g' {} \;
echo "SYNCING"
# rsync -avzhe ssh --progress dist/ jenkins@192.168.50.242:/var/www/imago/
# echo $MESSAGE | ssh jenkins@192.168.50.242 'cat >> deploy.log'