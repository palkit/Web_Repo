const blogContainer = document.getElementById("blogContainer");
const loader = document.getElementById("loader");

const allPosts = Array.from({ length: 20 }, (_, i) => ({
  title: `Blog Post #${i + 1}`,
  date: `July ${21 - (i % 20)}, 2025`,
  image: `https://picsum.photos/seed/${i}/600/400`,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  category: ["Tech", "News", "Life"][i % 3]
}));

let currentIndex = 0;
const POSTS_PER_LOAD = 6;

function renderPosts(reset = false) {
  if (reset) {
    blogContainer.innerHTML = "";
    currentIndex = 0;
  }

  const searchTerm = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const selectedCategory = document.getElementById("categoryFilter")?.value;

  let filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) &&
    (selectedCategory ? post.category === selectedCategory : true)
  );

  const nextPosts = filteredPosts.slice(currentIndex, currentIndex + POSTS_PER_LOAD);
  nextPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <div class="content">
        <h2>${post.title}</h2>
        <p><em>${post.date} | ${post.category}</em></p>
        <p>${post.content}</p>
      </div>
    `;
    blogContainer.appendChild(card);
  });

  currentIndex += POSTS_PER_LOAD;

  if (currentIndex >= filteredPosts.length) {
    loader.style.display = "none";
    window.removeEventListener("scroll", debouncedScrollHandler);
  }
}

function debounce(fn, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

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

document.getElementById("searchInput").addEventListener("input", () => renderPosts(true));
document.getElementById("categoryFilter").addEventListener("change", () => renderPosts(true));

document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;
  const category = document.getElementById("category").value;
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  allPosts.unshift({ title, image, content, category, date });
  showSection('blog');
  renderPosts(true);
});

function showSection(sectionId) {
  document.querySelectorAll(".view-section").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  if (sectionId === "blog") {
    renderPosts(true);
    window.addEventListener("scroll", debouncedScrollHandler);
  } else {
    window.removeEventListener("scroll", debouncedScrollHandler);
  }
}

// Initial load
showSection("home");
