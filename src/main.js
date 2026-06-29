// Projects Data
const projects = [
  {
    title: "Brain Tumor Detection",
    lang: "Python",
    category: "ai-ml",
    desc: "A Deep Learning system that utilizes Convolutional Neural Networks (CNNs) to classify MRI brain scans into tumor and non-tumor categories, aiding early diagnosis.",
    tags: ["Deep Learning", "Computer Vision", "Keras", "TensorFlow", "Medical AI"],
    github: "https://github.com/Sapair-og/brain_tumor"
  },
  {
    title: "Pneumonia Detection",
    lang: "Python",
    category: "ai-ml",
    desc: "An AI-powered diagnostic tool built with Keras and TensorFlow that analyzes chest X-rays to detect pneumonia with high sensitivity and accuracy.",
    tags: ["Computer Vision", "Transfer Learning", "Medical Imaging", "CNNs"],
    github: "https://github.com/Sapair-og/pneumonia_detection"
  },
  {
    title: "Chat with PDF",
    lang: "Python",
    category: "ai-ml",
    desc: "A Retrieval-Augmented Generation (RAG) tool that lets users upload PDF documents and have natural language conversations about their contents using LLMs.",
    tags: ["RAG", "LLMs", "LangChain", "Vector Databases", "NLP"],
    github: "https://github.com/Sapair-og/chat-with-pdf"
  },
  {
    title: "Red Wine Classification",
    lang: "Python",
    category: "ai-ml",
    desc: "A tabular classification model implementing a Random Forest Classifier to categorize red wine quality based on physicochemical attributes like acidity, pH, and alcohol content.",
    tags: ["Machine Learning", "Random Forest", "Scikit-Learn", "Data Informatics"],
    github: "https://github.com/Sapair-og/redwine_classification"
  },
  {
    title: "Visual Canvas Builder",
    lang: "TypeScript",
    category: "web-dev",
    desc: "A rich interactive web application featuring a draggable visual canvas workspace for designing workflows, mockups, and charts with absolute layout control.",
    tags: ["TypeScript", "Canvas API", "UI / UX", "Frontend Developer"],
    github: "https://github.com/Sapair-og/visual-canvas-builder"
  },
  {
    title: "Anime Recommendation System",
    lang: "CSS / Python",
    category: "ai-ml",
    desc: "A personalized anime recommendation engine utilizing collaborative filtering and content-based recommendation techniques to suggest shows based on user ratings.",
    tags: ["Recommender Systems", "Collaborative Filtering", "Data Science", "Pandas"],
    github: "https://github.com/Sapair-og/anime_recommedation"
  },
  {
    title: "Japanese Spaced Repetition System",
    lang: "JavaScript",
    category: "web-dev",
    desc: "A memory retention tool for learning Japanese vocabularies (Kanji/Kana) using spaced repetition algorithms to optimize study intervals and flashcard displays.",
    tags: ["JavaScript", "Local Storage", "Study Tool", "Algorithm"],
    github: "https://github.com/Sapair-og/japanese_srs"
  },
  {
    title: "Building Materials Informatics",
    lang: "Python",
    category: "ai-ml",
    desc: "Data-driven research project applying machine learning methodologies to analyze concrete compressive strength, thermal insulation, and material lifecycle metrics.",
    tags: ["Informatics", "Data Analysis", "Regression Model", "Materials Science"],
    github: "https://github.com/Sapair-og/Building-Materials-Informatics-"
  }
];

// Blogs Data
const blogs = [
  {
    id: "brain-tumor-cnn",
    title: "Demystifying Brain Tumor Classification using CNNs",
    category: "AI & Deep Learning",
    date: "June 28, 2026",
    readTime: "5 min read",
    excerpt: "Medical imaging is being revolutionized by Deep Learning. In this article, we walk through how a Convolutional Neural Network (CNN) learns to identify tumors in MRI brain scans.",
    svgColor1: "#8b5cf6",
    svgColor2: "#ec4899",
    content: `
      <p>Convolutional Neural Networks (CNNs) have emerged as the gold standard for computer vision tasks. In the healthcare domain, they provide life-saving utility by identifying anomalies in complex medical scans. This blog post explores how we can utilize CNN architectures to classify MRI brain scans as tumorous or normal.</p>
      
      <h3>The Challenge of Medical MRI Scans</h3>
      <p>MRI brain scans contain high-resolution, multi-dimensional structures. For a standard machine learning algorithm, treating these as flat arrays misses the spatial relationships between pixels. CNNs solve this by using kernels (filters) that slide over the image, capturing local features like edges, textures, and blood-vessel boundaries.</p>
      
      <h3>The CNN Architecture Break-down</h3>
      <p>A typical model for MRI brain scan classification is structured as follows:</p>
      <ul>
        <li><strong>Convolutional Layers:</strong> Extract visual feature maps from the MRI inputs. We apply multiple kernels to extract different types of edges and shapes.</li>
        <li><strong>Max Pooling Layers:</strong> Downsample the feature maps, reducing spatial dimensions and computation, while making the model translation-invariant.</li>
        <li><strong>Dropout Layers:</strong> Randomly drop neurons during training to prevent overfitting on specific scan patterns, forcing the model to generalize.</li>
        <li><strong>Dense Output Layer:</strong> A fully connected layer with a Sigmoid activation function to output a probability score between 0 (Normal) and 1 (Tumor).</li>
      </ul>

      <h3>Key Implementation Insights</h3>
      <p>When training these networks, data preprocessing is critical. MRI scans often contain noise or varying contrast. Implementing contrast normalization (such as CLAHE) and image resizing to 224x224 pixels ensures consistent training inputs. Using binary cross-entropy loss and the Adam optimizer allows the model to converge efficiently.</p>
      
      <p>Through careful parameter tuning and validation, deep learning models can achieve over 96% accuracy, acting as a reliable first-pass validation tool for radiologists.</p>
    `
  },
  {
    id: "rag-chat-pdf",
    title: "Building a Chat-with-PDF App using RAG and LLMs",
    category: "Generative AI",
    date: "June 15, 2026",
    readTime: "7 min read",
    excerpt: "Retrieval-Augmented Generation (RAG) is the key to solving LLM hallucinations. Let's build a system that lets you upload custom PDF files and ask questions directly.",
    svgColor1: "#06b6d4",
    svgColor2: "#3b82f6",
    content: `
      <p>Large Language Models (LLMs) are incredibly capable, but they are limited by their training cutoff and tend to hallucinate when asked about proprietary or private datasets. Retrieval-Augmented Generation (RAG) bridges this gap by feeding relevant document context directly into the prompt before querying the LLM.</p>
      
      <h3>The RAG Pipeline Overview</h3>
      <p>Building a Chat-with-PDF application involves five key stages:</p>
      <ol>
        <li><strong>Document Loading:</strong> Extracting raw text from uploaded PDF files.</li>
        <li><strong>Chunking:</strong> Splitting the raw text into smaller, overlapping segments (e.g., 1000 characters with 200 character overlap) to preserve local context.</li>
        <li><strong>Embedding Generation:</strong> Converting each chunk of text into a high-dimensional vector representation using models like OpenAI's text-embedding-ada-002 or HuggingFace sentence transformers.</li>
        <li><strong>Vector Storage:</strong> Storing the vectors in a specialized Vector Database (such as Chroma, Pinecone, or FAISS) for rapid semantic searches.</li>
        <li><strong>Retrieval and Synthesis:</strong> When a user asks a question, we embed the query, find the most mathematically similar text chunks in the Vector DB, inject them into the prompt template, and let the LLM generate a concise, grounded answer.</li>
      </ol>

      <h3>Why Overlap and Chunk Size Matter</h3>
      <p>If your chunk size is too small, the system loses the wider narrative context. If it's too large, the retrieved text blocks will dilute the semantic relevance, filling up the LLM's context window with irrelevant information. Adjusting these parameters is the first step in tuning RAG performance.</p>
      
      <p>By implementing this pipeline, you create a self-contained AI research assistant that is fully grounded in your custom documents, eliminating hallucinations entirely.</p>
    `
  },
  {
    id: "wine-random-forest",
    title: "Predicting Quality: Wine Classification with Random Forest",
    category: "Machine Learning",
    date: "May 29, 2026",
    readTime: "4 min read",
    excerpt: "Random Forests remain one of the most powerful algorithms for tabular datasets. Discover how we can predict red wine quality using chemical properties.",
    svgColor1: "#ec4899",
    svgColor2: "#8b5cf6",
    content: `
      <p>While Deep Learning dominates computer vision and natural language processing, traditional Machine Learning algorithms like Random Forests are still the superior choice for tabular, structured datasets. In this article, we review how to classify wine quality based on chemical characteristics.</p>
      
      <h3>The Red Wine Quality Dataset</h3>
      <p>The dataset includes variables representing acidity levels (fixed, volatile, citric), sugar concentrations, chlorides, sulfur dioxide levels, density, pH, sulphates, and alcohol percentage. The target is a quality grade score. We simplify this into a binary classification problem: Good Wine (quality >= 6) vs. Average Wine (quality < 6).</p>
      
      <h3>Why Random Forest?</h3>
      <p>A Random Forest is an ensemble of decision trees. It operates on two key principles:</p>
      <ul>
        <li><strong>Bootstrap Aggregation (Bagging):</strong> Each tree in the forest is trained on a random bootstrap sample of the training data, introducing diversity.</li>
        <li><strong>Feature Randomness:</strong> When splitting a node, the algorithm only considers a random subset of features. This decorrelates the trees, preventing a single dominant feature from dictating all splits.</li>
      </ul>

      <h3>Evaluating the Results</h3>
      <p>Using Scikit-Learn, we split the data and train our model. The Random Forest model provides a key benefit: <em>Feature Importance</em>. Analysis reveals that **alcohol content** and **volatile acidity** are the primary factors determining wine quality. Volatile acidity leads to an unpleasant vinegar taste at high levels, while optimal alcohol levels correlate with higher ratings.</p>
      
      <p>With an accuracy rate of 82-85% on unseen data, Random Forests demonstrate how a collection of simple decision trees can combine to make accurate predictions on complex real-world tabular data.</p>
    `
  }
];

// DOMContentLoaded Handler
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");
  
  const blogGrid = document.getElementById("blog-grid");
  const blogModal = document.getElementById("blog-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBodyContent = document.getElementById("modal-body-content");
  
  const contactForm = document.getElementById("contact-form");
  
  // Quick navigation buttons from Hero section
  const viewProjectsBtn = document.getElementById("view-projects-btn");
  const contactMeBtn = document.getElementById("contact-me-btn");

  // --- Tab Switching Logic ---
  const switchTab = (tabId) => {
    // Deactivate current links and sections
    navLinks.forEach(link => link.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    // Activate the requested link and section
    const targetLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
    const targetSection = document.getElementById(tabId);
    
    if (targetLink) targetLink.classList.add("active");
    if (targetSection) targetSection.classList.add("active");

    // Close mobile menu if open
    navMenu.classList.remove("active");
    
    // Scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Hero Actions
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", () => switchTab("projects"));
  }
  if (contactMeBtn) {
    contactMeBtn.addEventListener("click", () => switchTab("contact"));
  }

  // Mobile Menu Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // --- Render Projects ---
  const renderProjects = (filter = "all", searchQuery = "") => {
    projectsGrid.innerHTML = "";
    
    const filtered = projects.filter(proj => {
      const matchesCategory = filter === "all" || proj.category === filter;
      const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
          <p>No projects found matching your search criteria.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(proj => {
      const isPython = proj.lang.toLowerCase().includes("python");
      const langClass = isPython ? "project-lang python" : "project-lang";
      
      const tagsHTML = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
      
      const card = document.createElement("div");
      card.className = "project-card glass-panel";
      card.innerHTML = `
        <div>
          <div class="project-meta">
            <span class="${langClass}">${proj.lang}</span>
            <div class="project-links">
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View Source on GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
        </div>
        <div class="project-tags">
          ${tagsHTML}
        </div>
      `;
      
      projectsGrid.appendChild(card);
    });
  };

  // Filter Projects Click Event
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter, searchInput.value);
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeFilterBtn = document.querySelector(".filter-btn.active");
      const filter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
      renderProjects(filter, e.target.value);
    });
  }

  // --- Render Blogs ---
  const renderBlogs = () => {
    blogGrid.innerHTML = "";
    
    blogs.forEach(post => {
      // Abstract geometric SVG for premium aesthetics card headers
      const svgHeaderHTML = `
        <svg class="blog-card-image" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-${post.id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${post.svgColor1};stop-opacity:1" />
              <stop offset="100%" style="stop-color:${post.svgColor2};stop-opacity:1" />
            </linearGradient>
            <pattern id="pattern-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad-${post.id})" />
          <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          <circle cx="280" cy="100" r="60" fill="rgba(255,255,255,0.07)" />
          <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="10" />
          <path d="M 0 150 C 100 130, 200 180, 400 120" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4" />
        </svg>
      `;

      const card = document.createElement("div");
      card.className = "blog-card glass-panel";
      card.innerHTML = `
        ${svgHeaderHTML}
        <div class="blog-card-content">
          <div class="blog-meta">
            <span class="blog-category">${post.category}</span>
            <span>•</span>
            <span>${post.date}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <div class="blog-read-more">
            <span>Read Article</span>
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => openBlogModal(post));
      blogGrid.appendChild(card);
    });
  };

  // --- Open Blog Modal ---
  const openBlogModal = (post) => {
    // Generate detailed SVG cover for modal header
    const svgHeaderHTML = `
      <svg class="modal-article-image" viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="modal-grad-${post.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${post.svgColor1};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${post.svgColor2};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#modal-grad-${post.id})" />
        <g fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1">
          <circle cx="400" cy="175" r="140" fill="none" stroke-width="2" />
          <circle cx="400" cy="175" r="90" />
          <polygon points="400,100 480,220 320,220" />
        </g>
      </svg>
    `;

    modalBodyContent.innerHTML = `
      <div class="modal-header">
        <span class="modal-category">${post.category}</span>
        <h2 class="modal-title">${post.title}</h2>
        <div class="modal-meta">
          <span>Published on ${post.date}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
      </div>
      ${svgHeaderHTML}
      <div class="modal-markdown">
        ${post.content}
      </div>
    `;
    
    blogModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeBlogModal = () => {
    blogModal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeBlogModal);
  }

  if (blogModal) {
    blogModal.addEventListener("click", (e) => {
      if (e.target === blogModal) closeBlogModal();
    });
  }

  // --- Contact Form Submission ---
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
      submitBtn.innerHTML = `<span>Sending Message...</span>`;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerHTML = `<span>Message Sent Successfully!</span>`;
        submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"; // Green success state
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "";
          submitBtn.style.background = "";
          submitBtn.innerHTML = originalText;
        }, 3000);
      }, 1500);
    });
  }

  // --- Initial Render ---
  renderProjects();
  renderBlogs();
});
