const blogContainer = document.getElementById("blogContainer");
const loader = document.getElementById("loader");

const allPosts = Array.from({ length: 50 }, (_, i) => ({
  title: `Blog Post #${i + 1}`,
  date: `July ${21 - (i % 20)}, 2025`,
  image: `https://picsum.photos/seed/${i}/600/400`,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor justo ut turpis efficitur."
}));

let currentIndex = 0;
const POSTS_PER_LOAD = 6;

// Render blog posts from current index
function renderPosts() {
  const nextPosts = allPosts.slice(currentIndex, currentIndex + POSTS_PER_LOAD);

  nextPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <div class="content">
        <h2>${post.title}</h2>
        <p><em>${post.date}</em></p>
        <p>${post.content}</p>
      </div>
    `;
    blogContainer.appendChild(card);
  });

  currentIndex += POSTS_PER_LOAD;
  if (currentIndex >= allPosts.length) {
    loader.style.display = "none";
    window.removeEventListener("scroll", debouncedScrollHandler);
  }
}

// Debounce helper
function debounce(fn, delay = 300) {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Scroll handler
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loader.style.display = "block";
    setTimeout(() => {
      renderPosts();
      loader.style.display = "none";
    }, 500);
  }
}

const debouncedScrollHandler = debounce(handleScroll, 200);

// Initial load
renderPosts();
window.addEventListener("scroll", debouncedScrollHandler);
