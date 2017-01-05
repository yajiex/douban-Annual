const ans = [];
const length = document.querySelectorAll('._3N3gMyojNGbkmBiDAQ6Ckx').length;
let index = 1;
const func = () => {
  if (index === length) {
    console.log(JSON.stringify(ans));
    return;
  }
  location.hash = `#${index}`;
  let slideType = "section";
  const divs = document.querySelectorAll('._1cnXEZ67xh0DwnXQRe0jbH');
  const div = divs[1];
  const bg = div.style.backgroundImage;
  if (!bg) {
    if (div.querySelector('._2VMkKOsHIbLiyRzZaUqNrC')) {
      slideType = "death";
      const candidates = div.querySelectorAll('.zUTcAuvKmT5ejWpKFXnCq > li');
      const deathCandidates = [].map.call(candidates, (candidate) => {
        const link = candidate.querySelector('a').href;
        const imageLink = candidate.querySelector('._1ab_hq0rtagAqQqIoNWmOd').style.backgroundImage.slice(5, -2);
        const name = candidate.querySelector('._38oDQd3vCBZeAXgn1BQkjI > span:nth-child(1)').textContent;
        const translatedName = candidate.querySelector('._38oDQd3vCBZeAXgn1BQkjI > span:nth-child(2)').textContent;
        const title = candidate.querySelector('._1ST4I4uRALlb6-VxZ2WePc').childNodes[1].textContent;
        const age = candidate.querySelector('._1ST4I4uRALlb6-VxZ2WePc').childNodes[7].textContent;
        return {
          link,
          imageLink,
          name,
          translatedName,
          title,
          age
        }

      });

      ans.push({
        slideType,
        deathCandidates
      });
    } else if (div.querySelector('._2RhO9oUicdBsjk1RtXa9fF')) {
      slideType = "cover";
      ans.push({
        slideType
      });
    }
    index++;
    setTimeout(func, 1000);
    return;
  }
  const bgImage = div.style.backgroundImage.slice(5, -2);
  const catalog = div.querySelector('._1NVsYd_N5b88WYOrWQ1V0f') || div.querySelector('._27VCmQ1Xycv6A2sSrOB6F2');
  if (!catalog) {
    if (div.querySelector('._81uXP4H0BVgKUxESCMdAh')) {
      slideType = "dialogue";
      const dialogueWords = div.querySelector('._81uXP4H0BVgKUxESCMdAh').textContent;
      const dialogueLink = div.querySelector('._16l6bCEHRpF_6hp6GnL_Pp a').href;
      const dialogueSource = div.querySelector('._16l6bCEHRpF_6hp6GnL_Pp a').childNodes[4].textContent;
      ans.push({
        slideType,
        bgImage,
        dialogueWords,
        dialogueLink,
        dialogueSource,
      });
    } else if (div.querySelector('.Epilogue')) {
      slideType = "epilogue";
      ans.push({
        slideType,
        bgImage
      });
    }

    index++;
    setTimeout(func, 1000);
    return;
  }
  const isPeopleSection = div.querySelector('._27VCmQ1Xycv6A2sSrOB6F2') !== null;
  const sectionBGColor = div.querySelector('._1H_eVxGecv_lR4dQKKT2C2').style.backgroundColor;
  const isReverse = div.querySelector('._1iICKA3PQKA9GURWgUgWW1') !== null;
  const categoryBGColor = catalog.style.backgroundColor;
  const winnerBGColor = div.querySelectorAll('._2lW_59kCU7Q1YO6TUQVYsM')[2] ? div.querySelectorAll('._2lW_59kCU7Q1YO6TUQVYsM')[2].style.backgroundColor : categoryBGColor;
  const class1 = div.querySelector('h1 > div:nth-child(1)').textContent;
  const h1 = div.querySelector('h1 > div:nth-child(2)');
  let class2 = "";
  if (h1) {
    class2 = div.querySelector('h1 > div:nth-child(2)').textContent;
  }

  let winnerName = "";
  let winnerLink = "";
  let director = "";
  let rating = "";
  let ratingNum = "";
  let comment = "";
  let author = "";
  let commentAuthor = "";
  let commentAuthorLink = "";
  const h2a = div.querySelector('h2 > a');
  if (h2a) {
    winnerName = h2a.textContent;
    winnerLink = h2a.href;
    director = div.querySelector('._2sZmTiKimI1I2IEm1ZjhqO').textContent;
    rating = div.querySelector('.react-rater') === null ? "" : div.querySelector('._17BG2O97MJtM8FIb8df5-c > span').textContent;
    const ratingNumSpan = div.querySelector('._17BG2O97MJtM8FIb8df5-c > span:nth-child(3)') || div.querySelector('._17BG2O97MJtM8FIb8df5-c > span:nth-child(1)');
    if (ratingNumSpan) {
      ratingNum = ratingNumSpan.childNodes[1].textContent;
    }
    comment = div.querySelector('._3pWYxXKRL2dGkX-mAInq_b').childNodes[1].textContent;
    author = div.querySelector('._3pWYxXKRL2dGkX-mAInq_b > a');

    if (author) {
      commentAuthor = author.textContent;
      commentAuthorLink = author.href;
    }
  } else {
    winnerName = div.querySelector('h2').textContent;
  }

  const candidatesList = div.querySelector('.AYaeas_-R5LmVD-fsRQRW');
  let candidates = [];
  if (candidatesList) {
    const lis = candidatesList.querySelectorAll('li');
    candidates = [].map.call(lis, (li) => {
      const num = li.querySelector('._3GXe55RA_8FjEYJFtzCx9X > span').textContent;
      let name = "";
      const link = li.querySelector('a').href;
      const posterLink = li.querySelector('image').getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      let rating = "";
      const ratingSpan = li.querySelector('._2Co6lPjzZBvOCHDQdhEfWH');
      if (ratingSpan) {
        rating = ratingSpan.textContent;
        name = li.querySelector('._3ni-thhUIKt4Kol3M62NAH').childNodes[1].textContent;
      } else {
        name = li.querySelector('._3ni-thhUIKt4Kol3M62NAH').textContent;
      }
      return {
        num,
        name,
        rating,
        link,
        posterLink
      };
    });
  }

  const isExist = ans.find((data) => data.class1 + data.class2 === class1 + class2);
  if (isExist) {
    index++;
    setTimeout(func, 1000);
    return;
  }

  const obj = {
    slideType,
    isPeopleSection,
    sectionBGColor,
    isReverse,
    bgImage,
    categoryBGColor,
    winnerBGColor,
    class1,
    class2,
    winnerName,
    winnerLink,
    director,
    rating,
    ratingNum,
    comment,
    commentAuthor,
    commentAuthorLink,
    candidates
  };
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "") {
      delete obj[key];
    }
  });
  ans.push(obj);

  index++;
  setTimeout(func, 1000);
};

setTimeout(func, 1000);
