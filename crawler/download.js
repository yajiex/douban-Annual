const fs = require('fs');
const request = require('request');
const mkdirp = require('mkdirp');
const { metaData } = require('./data');

const download = (uri, filename) => {
  request.head(uri, (err, res, body) => {
    if (err) {
      console.log(uri);
      console.log(filename);
    }
    request(uri).pipe(fs.createWriteStream(filename));
  });
};

/* Download PC images
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
 */

/* Download mobile images
const mobileImages = [{
  "index": 1,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1848.jpg"
}, { "index": 2, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1755.jpg" }, {
  "index": 3,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1757.jpg"
}, { "index": 4, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1758.jpg" }, {
  "index": 5,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1759.jpg"
}, { "index": 6, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1949.jpg" }, {
  "index": 7,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1938.jpg"
}, { "index": 8, "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1896.jpg" }, {
  "index": 9,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1732.jpg"
}, { "index": 10, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1952.jpg" }, {
  "index": 11,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1879.jpg"
}, { "index": 12, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1880.jpg" }, {
  "index": 13,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1882.jpg"
}, { "index": 14, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1884.jpg" }, {
  "index": 15,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1885.jpg"
}, { "index": 16, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1887.jpg" }, {
  "index": 17,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1951.jpg"
}, { "index": 18, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1611.jpg" }, {
  "index": 19,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1960.jpg"
}, { "index": 20, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1953.jpg" }, {
  "index": 21,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1538.jpg"
}, { "index": 22, "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1956.jpg" }, {
  "index": 23,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1865.jpg"
}, { "index": 24, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1722.jpg" }, {
  "index": 25,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1917.jpg"
}, { "index": 26, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1918.jpg" }, {
  "index": 27,
  "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1726.jpg"
}, { "index": 28, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1930.jpg" }, {
  "index": 29,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1932.jpg"
}, { "index": 30, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1922.jpg" }, {
  "index": 31,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1838.jpg"
}, { "index": 32, "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1836.jpg" }, {
  "index": 33,
  "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1916.jpg"
}, { "index": 34, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1839.jpg" }, {
  "index": 35,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1837.jpg"
}, { "index": 36, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1830.jpg" }, {
  "index": 37,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1399.jpg"
}, { "index": 38, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1398.jpg" }, {
  "index": 39,
  "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1406.jpg"
}, { "index": 40, "bgImage": null }, {
  "index": 41,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1897.jpg"
}, { "index": 42, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1899.jpg" }, {
  "index": 43,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1867.jpg"
}, { "index": 44, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1900.jpg" }, {
  "index": 45,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1909.jpg"
}, { "index": 46, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1904.jpg" }, {
  "index": 47,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1905.jpg"
}, { "index": 48, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1857.jpg" }, {
  "index": 49,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1799.jpg"
}, { "index": 50, "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1806.jpg" }, {
  "index": 51,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1844.jpg"
}, { "index": 52, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1764.jpg" }, {
  "index": 53,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1849.jpg"
}, { "index": 54, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1921.jpg" }, {
  "index": 55,
  "bgImage": "https://img5.doubanio.com/view/activity_page/raw/public/p1846.jpg"
}, { "index": 56, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1773.jpg" }, {
  "index": 57,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1702.jpg"
}, { "index": 58, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1684.jpg" }, {
  "index": 59,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1468.jpg"
}, { "index": 60, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1963.jpg" }, {
  "index": 61,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1962.jpg"
}, { "index": 62, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1492.jpg" }, {
  "index": 63,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1795.jpg"
}, { "index": 64, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1672.jpg" }, {
  "index": 65,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1568.jpg"
}, { "index": 66, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1659.jpg" }, {
  "index": 67,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1829.jpg"
}, { "index": 68, "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1861.jpg" }, {
  "index": 69,
  "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1827.jpg"
}, { "index": 70, "bgImage": "https://img1.doubanio.com/view/activity_page/raw/public/p1959.jpg" }, {
  "index": 71,
  "bgImage": "https://img3.doubanio.com/view/activity_page/raw/public/p1841.jpg"
}];

mobileImages.forEach((data) => {
  if (data.bgImage) {
    download(data.bgImage, 'public/assets/backgrounds/mobile/' + data.index + '.jpg');
  }
});

*/

/*
 arr.forEach((a, index) => { if(a.bgImage !== "") a.bgImage = "`${process.env.PUBLIC_URL}/assets/backgrounds/" + (index + 1) + ".jpg`"});
 arr.forEach((a, index) => { if(a.candidates) a.candidates.forEach((candidate, i) => {candidate.posterLink = "`${process.env.PUBLIC_URL}/assets/candidates/" + (index + 1) + "/" + (i + 1) + ".jpg`"})});
 arr.forEach((a, index) => { if(a.deathCandidates) a.deathCandidates.forEach((candidate, i) => {candidate.imageLink = "`${process.env.PUBLIC_URL}/assets/death-candidates/" + (index + 1) + "/" + (i + 1) + ".jpg`"})});
 */

