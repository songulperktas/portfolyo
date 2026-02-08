document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("gameTrack");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");

  if (!track) {
    console.error("HATA: #gameTrack bulunamadı! HTML'de id=gameTrack var mı?");
    return;
  }

  const projects = [
    {
      
  title: "Blender",
  subtitle: "Blender, 3D, Modeling",
  cover: "resim/render3.png",
  desc: "modelleme benim için her geçen gün daha da keyif aldığım işten çok kendi tarzımı yansıtabildiğim bir dünya oldu. Daha çok oyunlarımda ve uygulamalarımda kullanmak üzere tasarlansa da hobi amaçlı tasarladığım modeller de bulunmaktadır.",
      groups: [
        {
          title: "tiny house",
          images: [
            "resim/pencere.png",
            "resim/render3.png"
          ]
        },
        {
          title: "Ort Çağ Pazar Yeri",
          images: [
            "resim/etvebaliklar.png",
            "resim/tumu.png",
            "resim/pastane2.png"
          ]
        },
        {
          title: "Vr Proje Modelleri",
          images: [
            "resim/giyim.png",
            "resim/market1.png",
            "resim/market3.png"
          ]
        }
      ]
    },

    {
  title: "3D platform oyunu",
  subtitle: "Unity • 3D",
  cover: "resim/platform8.jpeg",
  desc: "platform oyunu.",
  groups: [
    {
      images: [
        "resim/platform1.jpeg",
        "resim/platform2.jpeg",
        "resim/platform9.jpeg",
        "resim/platform10.jpeg"
      ],
      text: "..."
    },
    {
      images: [
        "resim/platform5.jpeg",
        "resim/platform13.png"
      ],
      text: "..."
    },
    {
      images: [
        "resim/platform3.jpeg",
        "resim/platform8.jpeg",
        "resim/platform11.png",
        "resim/platform14.png",
        "resim/platform15.png",
        "resim/platform16.png"
      ],
      text: "..."
    },
    {
      images: [
        "resim/platform4.jpeg",
        "resim/platform6.jpeg",
        "resim/platform7.jpeg"
      ],
      text: "..."
    }
  ]
},

    
   {
  title: "VR İngilizce Uygulaması",
  subtitle: "Unity • VR",
  cover: "resim/vr5.jpeg",
  desc: "VR eğitim oyunu.",
  groups: [
    {
      
      text: "...",
      images: [
        "resim/vr1.jpeg",
        "resim/vr2.jpeg"
      ]
    },
    {
      
      text: "...",
      images: [
        "resim/vr3.jpeg"
      ]
    },
    {
      
      text: "...",
      images: [
        "resim/vr4.jpeg"
      ]
    },
    {
      
      text: "...",
      images: [
        "resim/vr5.jpeg",
        "resim/vr6.jpeg"
      ]
    },
    {
      
      text: "...",
      images: [
        "resim/vr7.jpeg",
        "resim/vr8.jpeg"
      ]
    }
  ]
},

  ];

 function renderGroups(groups){
  if (!groups || groups.length === 0) return "";

  return groups.map(g => {
    const imgs = (g.images || []).map(src =>
      `<img src="${src}" alt="">`
    ).join("");

    return `
      <div class="group">
        <div class="gallery">
          ${imgs}
        </div>
        ${g.text ? `<p class="group-text">${g.text}</p>` : ""}
      </div>
    `;
  }).join("");
}



  function renderCard(p) {
    return `
      <article class="card">
        <div class="thumb">
  ${p.cover ? `<img src="${p.cover}" alt="${p.title} kapak">` : (p.emoji || "🎮")}
</div>


        <div class="meta">
          <h3>${p.title}</h3>
          <p>${p.subtitle}</p>
        </div>

        <div class="details">
          <p>${p.desc || ""}</p>
          ${renderGroups(p.groups)}
        </div>
      </article>
    `;
  }

  track.innerHTML = projects.map(renderCard).join("");
  const cards = Array.from(track.querySelectorAll(".card"));

  let index = 0;

  function clamp(i) {
    return Math.max(0, Math.min(i, cards.length - 1));
  }

  function closeAllOpen() {
    cards.forEach(c => c.classList.remove("is-open"));
  }

  function setActive(i) {
    index = clamp(i);

    closeAllOpen();

    cards.forEach((c, idx) => c.classList.toggle("is-active", idx === index));

    const viewport = track.closest(".viewport");
    const activeCard = cards[index];
    if (!viewport || !activeCard) return;

    const gap = 24; // CSS track gap ile aynı
    const cardWidth = activeCard.offsetWidth;
    const viewportWidth = viewport.offsetWidth;

    const x = index * (cardWidth + gap) - (viewportWidth - cardWidth) / 2;
    track.style.transform = `translateX(${-x}px)`;
  }

  prevBtn?.addEventListener("click", () => setActive(index - 1));
  nextBtn?.addEventListener("click", () => setActive(index + 1));

  cards.forEach((card, i) => {
  card.addEventListener("click", (e) => {

    // ✅ Eğer tıklanan şey galeri resmi (veya lightbox açacak öğeyse) kartı hiç elleme
    if (e.target.closest(".gallery img")) return;

    if (i !== index) {
      setActive(i);
      return;
    }

    const willOpen = !card.classList.contains("is-open");
    closeAllOpen();
    if (willOpen) {
      card.classList.add("is-open");

      setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  });
});


  window.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") setActive(index - 1);
    if (e.key === "ArrowRight") setActive(index + 1);
    if (e.key === "Escape") closeAllOpen();
  });

  window.addEventListener("resize", () => setActive(index));

  setActive(0);
    // ===== LIGHTBOX (galeri resmine tıklayınca büyüt) =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, alt){
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox(){
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    if (lightboxImg) lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  // Galerideki resimlere click delegasyonu
  document.addEventListener("click", (e) => {
  const img = e.target.closest(".gallery img");
  if (!img) return;

  e.preventDefault();
  e.stopPropagation(); // ✅ kart click'ini tetiklemesin

  openLightbox(img.getAttribute("src"), img.getAttribute("alt"));
});


  lightboxBackdrop?.addEventListener("click", closeLightbox);
  lightboxClose?.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

});
