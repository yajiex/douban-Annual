const ans = [];
const length = document.querySelectorAll('._3N3gMyojNGbkmBiDAQ6Ckx').length;
let index = 1;
const func = () => {
  if (index === length) {
    console.log(JSON.stringify(ans));
    return;
  }
  location.hash = `#${index}`;
  const divs = document.querySelectorAll('._1cnXEZ67xh0DwnXQRe0jbH');
  const div = divs[1];
  const bg = div.style.backgroundImage;
  ans.push({
    index,
    bgImage: bg ? bg.slice(5, -2) : null,
  });

  index++;
  setTimeout(func, 1000);
};

setTimeout(func, 1000);
