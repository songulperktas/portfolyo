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
  desc: "Bu proje, Unity kullanılarak geliştirilmiş bir 3D platform oyunudur. Oyun sürecinde oyuncu, engellerle dolu bir seviyede karakterini kontrol ederek ilerlemeye çalışır. Amaç; doğru zamanda hareket etmek, çevresel tehditlerden kaçınmak ve bölümü başarıyla tamamlamaktır. <br> Oyun mekanikleri; hareket, zıplama, engellerden kaçma ve çarpışma tabanlı etkileşimler üzerine kuruludur. Karakterin engellere veya tehlikeli nesnelere temas etmesi durumunda can sistemi devreye girer ve oyuncuya görsel geri bildirimler sağlanır. Bu sayede oyuncu, yaptığı hataların sonuçlarını anında gözlemleyebilir. not: Oyun hala geliştirme aşamasındadır. Üzerinde çalışacağım ses effectleri, daha güçlü arayüz ve coin sistemi olacaktır." ,
  groups: [
    {
      images: [
        "resim/platform1.jpeg",
        "resim/platform17.png",
        "resim/platform2.jpeg",
        "resim/platform9.jpeg",
        "resim/platform10.jpeg",
      ],
      text: "Oyunda kullandığım UI sistemlerini görüyorsunuz. Renkleri yine oyun temasıyla aynı tutmaya çalıştım. oyunun girişteki ekranı 1 ve 2. resimlerde gördüğünüz gibi kullanım açısından kolaylaştırmak için ortaya büyük bir play butonu koydum. Karakter seçimi yaptıktan sonra karakterimiz solda beliriyor. Kullanıcı da neyi seçtiğini görmüş oluyor. Ayarlar menüsü ile oyunun sesiyle alakalı ayarlar yapılabiliyor. Bölümler ksımında şuanlık 3 bölüm oluşuyor ve oyunun asıl uzun vadeli oynanılabilirliğini sağlayacak olan coin sistemi burda devreye girecektir. 3 bölümden sonrası için kazanılan coinler kullanılmalı olacaktır. Aynı şekilde karakterler için de geçerli olacaktır. Çalışmalarım sürmektedir."
    },
    {
      images: [
        "resim/platform5.jpeg",
        "resim/platform13.png"
      ],
      text: "Oyun içerisindeki UI lar da ana menüdeki ayarlar mantığı ile yapılmıştır. Sol üst köşede bulunan 'oyunu durdurma' mantığı ile çalışan bir sistem ile tekrar bölümü başlatma, geri butonuyla devam etme, quit ile ana menüye dönüş ve ses ayarlarından oluşmaktadır. Bir sonraki panelim finsh paneldir ve karakter bayrağa ulaştığı zaman tetiklenmektedir. Bir sonraki levele geçebilir veya oyunu tekrar oyna diyebilir."
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
      text: "Oyun içeriği hakkındaki birçok objeyi ve çalışma prensibini görebiliyorsunuz. Oyunda farklı farklı zenginleştirmek amaçlı engeller koydum. Coinler de kimi zaman daha zor yerde kimi zaman daha kolay yerde konumlandırıldı."
    },
    {
      images: [
        "resim/platform4.jpeg",
        "resim/platform6.jpeg",
        "resim/platform7.jpeg"
      ],
      text: "Can sistemi de bu şekilde kullanıcıya aktarılmaktadır. Engele çarptığı zaman saliselik rengi kırmızıya fönmekte ve daha sonra eski halini almaktadır."
    }
  ]
},

    
   {
  title: "VR İngilizce Uygulaması",
  subtitle: "Unity • VR",
  cover: "resim/vr5.jpeg",
  desc: "Unity5 ve XR Interaction Toolkit kullanılarak geliştirilen etkileşimli yeni öğrenciler için bir İngilizce öğrenme uygulamasıdır. Kullanıcı, sanal bir ortamda (market) verilen görev listesindeki nesneleri bulup toplayarak kelime öğrenir. Her nesne etkileşimli şekilde tutulabilir (XR Grab Interactable) ve doğru/yanlış seçimlerde anlık geri bildirim alır. Uygulama; rastgele oluşturulan görev listesi, skor ve süre takibi, hata yönetimi, tamamlanma ekranı ve sonuç/puan tablosu gibi oyunlaştırılmış bileşenlerle öğrenme sürecini daha motive edici hale getirir. Oyundaki modellerin %70 i kendi modellerimdir.",
  groups: [
    {
      
      text: "Girişte bizi market havası katmak için elektronik market kasası ve sepetler karşılıyor. Daha sorna duvarda Welcome yazılı etkileşimli bir tablet bulunuyor. Bu tablet kullanıcının öğrenmesi ve nesneyi tanımadığı zaman veya nesnenin ingilizcesini bulamadığı zaman kullanabileceği bir tür rehber özelliği oluşturuyor. Etkileşime girerek nesenin görseline ve ismine ulaşabiliyorsunuz.",
      images: [
        "resim/vr1.jpeg",
        "resim/vr2.jpeg",
        "resim/vr3.jpeg"
      ]
    },
    {
      
      text: "Kapının hemen sağında bizi yine interaktif tablet karşılıyor. Tabletle etkileşime girildiğinde bize rastgele Check List veriyor. Her yeni uygulamayı başlattığında 40'tan fazla ürün random yeni liste oluşturuluyor. ",
      images: [
        "resim/vr4.jpeg"
      ]
    },
    {
      
      text: "Listede ismi görünen ürün ile etkileşime girildiği zaman o ürünün yanındaki boşlukta bir tik oluşuyor. Tıpkı resimdeki gibi yağa dokunulduğu zaman listede İngilizce karşılığının yanında tik olması gibi.",
      images: [
        "resim/vr5.jpeg",
        "resim/vr6.jpeg"
      ]
    },
    {
      
      text: " Puan sisteminde de her doğru için 100, her yanlış seçim için -50 puan almaktadır ve eğer üç yanlış yaparsa Game Over yazısı ile karşılaşılmakta. Eğer listeyi tamamlarsa oyuncunun ne kadar sürede ve ne kadar puan aldığının geri bildirimini veriyoruz.",
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
