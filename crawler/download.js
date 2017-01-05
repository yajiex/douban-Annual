const fs = require('fs');
const request = require('request');
const mkdirp = require('mkdirp');
const { metaData } = require('./data');

const download = (uri, filename) => {
  request.head(uri, (err, res, body) => {
    if(err) {
      console.log(uri);
      console.log(filename);
    }
    request(uri).pipe(fs.createWriteStream(filename));
  });
};

metaData.forEach((data, index) => {
  if (data.bgImage) {
    download(data.bgImage, 'public/assets/backgrounds/' + (index + 1) + '.jpg');
  }
  if (data.candidates) {
    mkdirp('public/assets/candidates/' + (index + 1), () => {
      data.candidates.forEach((candidate, i) => {
        download(candidate.posterLink, 'public/assets/candidates/' + (index + 1) + '/' + (i + 1) + '.jpg');
      });
    });
  }
  if (data.deathCandidates) {
    mkdirp('public/assets/death-candidates/' + (index + 1), () => {
      data.deathCandidates.forEach((candidate, i) => {
        download(candidate.imageLink, 'public/assets/death-candidates/' + (index + 1) + '/' + (i + 1) + '.jpg');
      });
    });
  }
});

/*
 arr.forEach((a, index) => { if(a.bgImage !== "") a.bgImage = "`${process.env.PUBLIC_URL}/assets/backgrounds/" + (index + 1) + ".jpg`"});
 arr.forEach((a, index) => { if(a.candidates) a.candidates.forEach((candidate, i) => {candidate.posterLink = "`${process.env.PUBLIC_URL}/assets/candidates/" + (index + 1) + "/" + (i + 1) + ".jpg`"})});
 arr.forEach((a, index) => { if(a.deathCandidates) a.deathCandidates.forEach((candidate, i) => {candidate.imageLink = "`${process.env.PUBLIC_URL}/assets/death-candidates/" + (index + 1) + "/" + (i + 1) + ".jpg`"})});
 */

