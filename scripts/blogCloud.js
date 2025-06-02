let blogData = {};

// Data for title placement
const MIN_X = 0;
const MAX_X = window.innerWidth - 200;
const MIN_Y = 52;
const MAX_Y = window.innerHeight - 200;
const placedAreas = [];

const checkOverlap = (area) => {
  for (let i = 0; i < placedAreas.length; i++) {
    const pa = placedAreas[i];
    const bottom1 = area.y + area.height;
    const bottom2 = pa.y + pa.height;
    const top1 = area.y;
    const top2 = pa.y;
    const left1 = area.x;
    const left2 = pa.x;
    const right1 = area.x + area.width;
    const right2 = pa.x + pa.width;
    if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) continue;
    return true;
  }
  return false;
};

const placeBlogCloudItem = (element) => {
  let randX = 0;
  let randY = 0;
  let area;

  do {
    randX = Math.round(MIN_X + ((MAX_X - MIN_X) * (Math.random() % 1)));
    randY = Math.round(MIN_Y + ((MAX_Y - MIN_Y) * (Math.random() % 1)));
    area = {
      x: randX, y: randY, width: element.offsetWidth, height: element.offsetHeight,
    };
  } while (checkOverlap(area));

  placedAreas.push(area);
  element.style.left = `${randX}px`;
  element.style.top = `${randY}px`;
};

const displayCloud = () => {
  blogData.forEach((blog) => {
    const titleDiv = document.createElement('div');
    titleDiv.innerText = blog.Title;
    titleDiv.classList.add('blogCloudItem');
    document.body.appendChild(titleDiv);
    placeBlogCloudItem(titleDiv);
  });
};

// Get the blogs
fetch('https://andrewnolan.dev/blogs/blogData.json')
  .then((res) => res.json())
  .then((json) => {
    blogData = json.posts;
    displayCloud();
  });
