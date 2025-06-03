let blogData = {};

// Data for title placement
const MIN_X = 0;
const MAX_X = window.innerWidth - 200;
const MIN_Y = 0;
const MAX_Y = window.innerHeight - 200;
const SHADOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const placedAreas = [];

// Shuffles a list using Fisher-Yates
const shuffleList = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

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
  let retries = 0;

  do {
    retries++;
    randX = Math.round(MIN_X + ((MAX_X - MIN_X) * Math.random()));
    randY = Math.round(MIN_Y + ((MAX_Y - MIN_Y) * Math.random()));
    area = {
      x: randX, y: randY, width: element.offsetWidth, height: element.offsetHeight,
    };
    if (retries > 10) {
        document.body.removeChild(element);
        return;
    }
  } while (checkOverlap(area));

  placedAreas.push(area);
  element.style.left = `${randX}px`;
  element.style.top = `${randY}px`;
};

const displayCloud = () => {
 blogData = shuffleList(blogData);
  blogData.forEach((blog, index) => {
    const titleDiv = document.createElement('div');
    titleDiv.innerText = blog.Title;
    titleDiv.classList.add('blogCloudItem');
    titleDiv.role = 'button';
    titleDiv.tabIndex = '0';
    titleDiv.style.boxShadow = `1px 1px 1px 1px ${SHADOW_COLORS[Math.floor(Math.random() * SHADOW_COLORS.length)]}`;
    titleDiv.onclick = () => {
      window.location.href = `./blogs/${blog.Key}`;
    };
    titleDiv.onkeydown = (event) => {
      if (event.key === 'Enter') {
        window.location.href = `./blogs/${blog.Key}`;
      }
    };
    setTimeout(() => {
        document.body.appendChild(titleDiv);
        placeBlogCloudItem(titleDiv);
    }, 100 * index);
  });
};

// Get the blogs
fetch('https://andrewnolan.dev/blogs/blogData.json')
  .then((res) => res.json())
  .then((json) => {
    blogData = json.posts;
    const blogInfoBlock = document.getElementById('blogInfoBlock');
    placedAreas.push({
      x: blogInfoBlock.offsetLeft,
      y: blogInfoBlock.offsetTop,
      width: blogInfoBlock.offsetWidth,
      height: blogInfoBlock.offsetHeight
    });
    displayCloud();
  });
