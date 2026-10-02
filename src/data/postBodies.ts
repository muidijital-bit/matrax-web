export type PostBlock =
  // text ve items içinde [metin](/yol) biçimiyle bağlantı verilebilir
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'note'; title: string; text: string }
  // contain: beyaz/gri zeminli render görseller kırpılmadan gösterilir
  | { type: 'img'; src: string; alt: string; caption?: string; contain?: boolean };

export type PostBody = {
  content: PostBlock[];
  sources: { label: string; url: string }[];
};

const SRC = {
  iso23659:  { label: `ISO 23659:2022 — Trambolin parkları, güvenlik gereklilikleri`, url: `https://www.iso.org/standard/76556.html` },
  en1176_10: { label: `EN 1176-10:2023 — Tamamen kapalı oyun ekipmanları için ek güvenlik gereklilikleri`, url: `https://standards.iteh.ai/catalog/standards/cen/6038c521-6c36-40a2-ad59-b106d533280f/en-1176-10-2023` },
  en1177:    { label: `EN 1177:2018+A1:2023 — Darbe sönümleyici oyun alanı zeminleri`, url: `https://standards.iteh.ai/catalog/standards/cen/8a9d50c2-fc9a-482a-9481-c0c73d573df1/en-1177-2018a1-2023` },
  reach:     { label: `SGS — AB'de ftalat kısıtının genişletilmesi (REACH Ek XVII)`, url: `https://www.sgs.com/en/news/2019/01/safeguards-00219-eu-expands-restriction-of-phthalates-under-reach` },
  aap:       { label: `American Academy of Pediatrics — Trampoline Safety in Childhood and Adolescence (Pediatrics, 2012)`, url: `https://publications.aap.org/pediatrics/article/130/4/774/30158/Trampoline-Safety-in-Childhood-and-Adolescence` },
  ruhsat:    { label: `İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik`, url: `https://www.icisleri.gov.tr/kurumlar/icisleri.gov.tr/IcSite/strateji/yikob-panel/mevzuat/Atiflar/6-_-Isyeri-Acma-ve-Calisma-Ruhsatlarina-Iliskin-Yonetmelik.pdf` },
  topHavuzu: { label: `Oesterle ve ark. — Top havuzlarında mikroorganizma çalışması (American Journal of Infection Control)`, url: `https://pubmed.ncbi.nlm.nih.gov/30471972/` },
  meb:       { label: `MEB — Özel Öğretim Kurumları Standartlar Yönergesi (27.11.2025 değişikliğiyle)`, url: `https://ookgm.meb.gov.tr/meb_iys_dosyalar/2026_01/19165007_standartlaryonergesi.pdf` },
  mebDuyuru: { label: `MEB — Özel Öğretim Kurumları Yönetmeliği değişikliği duyurusu (5 Eylül 2025)`, url: `https://www.meb.gov.tr/milli-egitim-bakanligi-ozel-ogretim-kurumlari-yonetmeliginde-degisiklik-yapilmasina-dair-yonetmelik-resmi-gazetede-yayimlandi/haber/38229/tr` },
};

// Anahtar: posts.ts içindeki slug
export const postBodies: Record<string, PostBody> = {
  'trambolin-ureticisi': {
    content: [
      { type: 'p', text: `Doğru trambolin üreticisi yalnızca ürünü teslim eden değil; ölçüye göre üreten, kuran ve yıllar sonra yedek parçasını bulabildiğiniz firmadır. Matrax Oyun Grupları 2005'ten bu yana [ticari trambolin](/blog/ticari-trambolin), trambolin parkı ve soft play oyun grubu üretiyor; üretim Ankara İvedik OSB'deki atölyemizde yapılıyor. Bu rehberde bir trambolin üreticisini değerlendirirken bakmanız gereken başlıkları derledik.` },

      { type: 'h2', text: `Trambolin Üreticisinde Aranacak Özellikler` },
      { type: 'ul', items: [
        `Kendi atölyesinde üretim: çelik iskelet, ped ve file aynı çatı altında hazırlanıyorsa ölçüye özel üretim ve hızlı servis mümkün olur.`,
        `Malzeme şeffaflığı: profil kesiti, yay çapı ve kaplama türü teklifte yazılı olmalıdır.`,
        `Standartlara uygunluk: jimnastik ekipmanları için EN 913, trambolinler için EN 13219, trambolin parkları için EN ISO 23659 referans alınır.`,
        `Kurulum: anahtar teslim montaj ve işletme personeline kullanım bilgilendirmesi.`,
        `Yedek parça ve garanti: yay, ped ve file gibi yıpranan parçaların stokta bulunması.`,
      ] },

      { type: 'h2', text: `Üretimde Kullanılan Malzemeler` },
      { type: 'p', text: `Matrax ticari trambolinlerinde galvanizli çelik iskelet, çift galvaniz kaplamalı 6 mm çelik yaylar ve UV dayanımlı A-1 kalite PVC yay pedleri kullanılır; kenarlarda mantar profil koruma bulunur. Tasarımdan sevkiyata kadar üretim adımlarını [imalat](/imalat) sayfamızda görebilirsiniz.` },
      { type: 'img', src: `/images/imalat/imalat-11.jpg`, alt: `Trambolin üreticisi Matrax atölyesinde hazırlanan çelik iskelet modülleri`, caption: `Atölyede hazırlanan çelik iskelet modülleri.` },

      { type: 'h2', text: `Hangi Trambolin Modelleri Üretiliyor?` },
      { type: 'ul', items: [
        `[Olimpik trambolin](/blog/olimpik-trambolin): 1 kişilikten 12 kişiliğe çok yataklı ticari sahalar.`,
        `Junior trambolin: 4–10 yaş grubuna uygun junior ölçü.`,
        `Zemin trambolini: zemine gömülü, düşme yüksekliği olmayan modeller.`,
        `Tekli koruma fileli, fitness ve portatif trambolinler.`,
        `Salto (bungee) trambolin sistemleri.`,
      ] },
      { type: 'p', text: `Tüm modelleri [trambolin kategorisinde](/katalog?kategori=trambolinler), çok sahalı projeleri ise [trambolin parkları](/katalog?kategori=trambolin-parklari) sayfasında inceleyebilirsiniz.` },

      { type: 'h2', text: `Satış Sonrası: Yedek Parça ve Servis` },
      { type: 'p', text: `Trambolin yoğun kullanılan bir üründür; yaylar, pedler ve zıplama filesi zamanla yenilenir. Üreticinizin bu parçaları stokta tutması, sahanın kapalı kaldığı süreyi kısaltır. Hangi parçanın ne zaman değiştiğini [trambolin yedek parça](/blog/trambolin-yedek-parca) rehberimizde anlattık.` },

      { type: 'note', title: `Trambolin projeniz için teklif alın`, text: `Alanınızın ölçüsünü paylaşın; size uygun trambolin modelini ve yerleşimini birlikte belirleyelim. [İletişim sayfasından](/iletisim) bize ulaşabilirsiniz.` },
    ],
    sources: [SRC.iso23659],
  },

  'cocuk-oyun-grubu-ureticisi': {
    content: [
      { type: 'p', text: `Çocuk oyun grubu üreticisi seçimi; kreş, kafe, AVM ya da oyun merkezi yatırımının en kritik kararıdır. Oyun grubu yıllarca, her gün onlarca çocuk tarafından kullanılır; bu yüzden üreticinin malzemesi, işçiliği ve satış sonrası desteği doğrudan işletmenizin güvenliğini belirler.` },

      { type: 'h2', text: `Çocuk Oyun Grubu Çeşitleri` },
      { type: 'ul', items: [
        `[Soft play oyun grupları](/katalog?kategori=soft-play-gruplari): çok katlı, fileyle çevrili kapalı oyun yapıları.`,
        `[Trambolin parkları](/katalog?kategori=trambolin-parklari): zıplama sahaları, sünger havuzu ve aktivite modülleri.`,
        `[Top havuzları](/katalog?kategori=top-havuzlari) ile [sünger ve kum havuzları](/katalog?kategori=havuzlar).`,
        `[Kreş ve kafe serisi](/katalog?kategori=kres-kafe): küçük alanlar için kompakt oyun grupları.`,
        `[Şişme parklar](/katalog?kategori=sisme-parklar): açık alan ve etkinlikler için.`,
      ] },

      { type: 'h2', text: `Çocuk Oyun Grubu Üreticisi Seçerken Dikkat Edilecekler` },
      { type: 'ul', items: [
        `Güvenlik standardı: oyun alanı ekipmanları için EN 1176, kapalı oyun yapıları için EN 1176-10, düşme zeminleri için EN 1177 esas alınır.`,
        `Malzeme: çelik konstrüksiyonun kaplaması, süngerin yangın sınıfı ve PVC kaplamanın temizlenebilirliği.`,
        `Ölçüye özel üretim: kolon, tavan yüksekliği ve kapı yerlerine göre proje çizimi.`,
        `Anahtar teslim kurulum ve kullanım bilgilendirmesi.`,
        `Garanti ve yedek parça desteği.`,
      ] },
      { type: 'img', src: `/images/imalat/imalat-10.jpg`, alt: `Çocuk oyun grubu üreticisi Matrax atölyesinde hazırlanan çelik iskelet`, caption: `Atölyede hazırlanan oyun grubu iskeleti.` },

      { type: 'h2', text: `Matrax'ta Üretim Süreci` },
      { type: 'p', text: `Matrax'ta çocuk oyun grupları Ankara'daki atölyede üretilir. Süreç, mekânın ölçüsüne göre hazırlanan tasarımla başlar; çelik konstrüksiyon, sünger üretimi, kalite kontrol, montaj ve sevkiyat adımlarıyla tamamlanır. Aşamaları [imalat](/imalat) sayfasında, tamamlanan kurulumları [projelerimizde](/projeler) görebilirsiniz.` },

      { type: 'h2', text: `Hangi İşletmeler İçin?` },
      { type: 'ul', items: [
        `Kreş ve anaokulları.`,
        `Çocuk kafeleri ve restoranlar.`,
        `AVM'ler ve oyun merkezleri.`,
        `Siteler, oteller ve belediye alanları.`,
      ] },
      { type: 'p', text: `Alan planlaması için [çocuk oyun alanı](/blog/cocuk-oyun-alani) rehberimize, malzeme tarafı için [softplay üreticisi](/blog/softplay-ureticisi) yazımıza göz atabilirsiniz.` },

      { type: 'note', title: `Mekânınıza özel oyun grubu`, text: `Ölçülerinizi gönderin; yerleşim önerisi ve teklif hazırlayalım. [İletişim sayfasından](/iletisim) bize ulaşabilirsiniz.` },
    ],
    sources: [SRC.en1176_10, SRC.en1177],
  },

  'softplay-ureticisi': {
    content: [
      { type: 'p', text: `Softplay üreticisi ararken fotoğraflar çoğu zaman birbirine benzer; farkı malzeme belirler. Bir softplay (soft play) oyun grubu çelik iskelet, sünger dolgu, PVC kaplama, koruma filesi ve zemin katmanlarından oluşur. Bu yazıda bir softplay üreticisini bu beş katman üzerinden nasıl değerlendireceğinizi anlatıyoruz.` },

      { type: 'h2', text: `Softplay Üreticisinin Kullandığı Malzemeler` },
      { type: 'ul', items: [
        `İskelet: galvaniz çelik konstrüksiyon; çocukların ulaşabildiği her noktada sünger kılıf.`,
        `Sünger: yangına tepki sınıfı belgeli dolgu. Matrax sünger modüllerinde B-s1, d0 sınıfı yangın geciktirici sünger kullanılır.`,
        `Kaplama: antibakteriyel ve yıkanabilir PVC; Matrax oyun gruplarında 1100 denye PVC branda.`,
        `File: içerinin dışarıdan izlenebildiği, iskelete sık aralıklarla bağlanmış koruma ağı.`,
        `Zemin: ekipmanın düşme yüksekliğine uygun darbe sönümleyici kaplama.`,
      ] },
      { type: 'img', src: `/images/galeri-yeni/galeri-1.jpg`, alt: `Softplay oyun grubunda PVC kaplı pedler ve koruma filesi`, caption: `PVC kaplı pedler ve koruma filesi: çocukların en çok temas ettiği yüzeyler.` },

      { type: 'h2', text: `Standartlar: EN 1176-10 ve EN 1177` },
      { type: 'p', text: `Çok katlı, fileyle çevrili kapalı oyun yapıları için Avrupa'daki referans EN 1176-10'dur. Standardın 2023'te yayımlanan güncel sürümü, 14 yaşına kadar çocuklara yönelik tamamen kapalı oyun ekipmanları için acil durum prosedürleri, yangın güvenliği ve tahliye, görülebilirlik, işaretler, muayene ve bakım başlıklarında ek gereklilikler getirir.` },
      { type: 'p', text: `Düşme yüzeyleri için EN 1177 geçerlidir. Testte ölçüm cihazı takılı bir baş modeli zemine farklı yüksekliklerden düşürülür; kafa yaralanma kriteri (HIC) 1000'i, tepe ivmesi 200 g'yi aşmamalıdır. Her iki sınırın sağlandığı en büyük yükseklik, zeminin kritik düşme yüksekliğidir.` },

      { type: 'h2', text: `Kimyasal Güvenlik ve Yangın Sınıfı` },
      { type: 'p', text: `PVC'yi yumuşatan bazı ftalatlar AB'de kısıtlıdır: REACH Tüzüğü Ek XVII'nin 51. maddesi DEHP, DBP, BBP ve DIBP ftalatlarının toplamını plastikleştirilmiş malzemede ağırlıkça %0,1 ile sınırlar. Yangın tarafında ise malzemeler EN 13501-1'e göre sınıflandırılır; "B-s1, d0" ifadesinde B yangına çok sınırlı katkıyı, s1 düşük duman üretimini, d0 yanan damlacık oluşmadığını gösterir.` },

      { type: 'h2', text: `Softplay Modelleri` },
      { type: 'p', text: `Hazır projeleri [soft play oyun grupları](/katalog?kategori=soft-play-gruplari) sayfasında; dönengeç, roller kaydırak, tırmanma duvarı ve sünger engel gibi tekil modülleri [soft play oyuncakları](/katalog?kategori=soft-play) kategorisinde bulabilirsiniz. Oyun gruplarının vazgeçilmez bölümü için [top havuzu](/blog/top-havuzu) rehberimize de bakın.` },

      { type: 'h2', text: `Softplay Üreticisinden İstenecek Belgeler` },
      { type: 'ul', items: [
        `Ürünün hangi standarda göre tasarlandığını gösteren uygunluk belgesi ya da test raporu.`,
        `Sünger ve PVC için yangına tepki sınıfı raporu.`,
        `PVC için ftalat (kimyasal) test raporu.`,
        `Zemin malzemesi için EN 1177 kritik düşme yüksekliği raporu.`,
        `Bakım kılavuzu, yedek parça listesi ve garanti kapsamı.`,
      ] },

      { type: 'note', title: `Softplay projeniz için`, text: `Alanınızın ölçüsüne göre softplay tasarımı ve teklif için [bize ulaşın](/iletisim); üretim aşamalarını [imalat](/imalat) sayfamızda görebilirsiniz.` },
    ],
    sources: [SRC.en1176_10, SRC.en1177, SRC.reach],
  },

  'ticari-trambolin': {
    content: [
      { type: 'p', text: `Ticari trambolin; AVM, oyun merkezi, park, otel ve site gibi yoğun kullanılan alanlar için üretilen, ev tipi modellere göre daha güçlü iskelet ve yay sistemine sahip trambolindir. Her gün çok sayıda kullanıcıya hizmet ettiği için malzemesi, güvenlik donanımı ve işletme kuralları ev tipinden farklıdır.` },

      { type: 'h2', text: `Ticari Trambolin ile Ev Tipi Trambolin Farkı` },
      { type: 'ul', items: [
        `İskelet: yoğun kullanıma göre tasarlanmış galvanizli çelik konstrüksiyon.`,
        `Yay: Matrax ticari modellerinde çift galvaniz kaplı 6 mm çelik yay.`,
        `Koruma: UV dayanımlı PVC kaplı kalın yay pedi, mantar profil kenar koruma ve çevre filesi.`,
        `Kapasite: tek kişilik yataklardan oluşan çok sahalı yapı. Ev ve site tipi tekli modeller ise 183–366 cm çap seçenekleriyle tek kullanıcı içindir.`,
        `Servis: yedek parça temini ve düzenli bakım.`,
      ] },

      { type: 'h2', text: `Ticari Trambolin Modelleri` },
      { type: 'ul', items: [
        `[Olimpik trambolin](/blog/olimpik-trambolin): 1 kişilikten 12 kişiliğe çok yataklı sahalar.`,
        `Junior trambolin: 4–10 yaş grubuna uygun ölçü.`,
        `Zemin trambolini: zemine gömülü, düşme yüksekliği olmayan model.`,
        `Salto (bungee) trambolin: 1, 2 ya da 4 kişilik kule sistemleri.`,
        `[Trambolin parkları](/katalog?kategori=trambolin-parklari): sünger havuzu, basketbol potası ve tırmanma duvarı gibi modüllerle birleşen büyük sahalar.`,
      ] },
      { type: 'p', text: `Tüm ticari modeller [trambolin kategorisinde](/katalog?kategori=trambolinler) listelenir.` },
      { type: 'img', src: `/images/products/saha-olimpik-6-li.jpg`, alt: `Açık alana kurulmuş 6 kişilik ticari trambolin`, caption: `Açık alana kurulmuş 6 kişilik ticari trambolin.` },

      { type: 'h2', text: `Güvenlik ve İşletme Kuralları` },
      { type: 'p', text: `Trambolin parklarına özel uluslararası standart EN ISO 23659'dur; yalnızca ekipmanı değil işletmeyi de kapsar. Standardın giriş bölümüne göre en sık görülen yaralanma nedenleri kontrolsüz inişler ve kişinin kendi becerisini yanlış değerlendirmesidir. Bu yüzden işletme kuralları ekipman kadar önemlidir.` },
      { type: 'ul', items: [
        `Bir yatakta aynı anda tek kişi. Amerikan Pediatri Akademisi'ne göre yaralanmaların yaklaşık dörtte üçü, trambolini aynı anda birden fazla kişi kullanırken meydana geliyor.`,
        `Yaş gruplarını ayırın; küçük çocuklar için ayrı saha ya da seans planlayın.`,
        `Sahada görevli bulundurun ve kuralları görünür biçimde asın.`,
        `Yay, ped ve fileyi düzenli kontrol edin; yıpranan parçayı bekletmeden değiştirin.`,
      ] },

      { type: 'h2', text: `Kurulum Öncesi Kontrol Listesi` },
      { type: 'ul', items: [
        `Alanın ölçüsü; kapalı mekânda net tavan yüksekliği.`,
        `Zeminin düzgünlüğü ve taşıma kapasitesi.`,
        `İşyeri açma ve çalışma ruhsatı için belediyenin istediği belgeler.`,
        `Kullanıcı yaş grubu ve hedeflenen kapasite.`,
      ] },

      { type: 'note', title: `Ticari trambolin teklifi`, text: `Alanınıza uygun ticari trambolin modeli ve fiyat teklifi için [bize ulaşın](/iletisim). Üretici seçimi için [trambolin üreticisi](/blog/trambolin-ureticisi) rehberimize de bakabilirsiniz.` },
    ],
    sources: [SRC.iso23659, SRC.aap, SRC.ruhsat],
  },

  'olimpik-trambolin': {
    content: [
      { type: 'p', text: `Olimpik trambolin, dikdörtgen formlu zıplama yataklarından oluşan trambolin tipidir. İşletmelerde yan yana dizilen yataklarla kurulan sahalar "ticari olimpik" olarak adlandırılır ve kişi sayısına göre modellenir. Bu yazıda modelleri, teknik özellikleri ve kullanım alanlarını özetledik.` },

      { type: 'h2', text: `Olimpik Trambolin Modelleri ve Kapasite` },
      { type: 'p', text: `Matrax'ın ticari olimpik serisi 1, 2, 3, 4, 5, 6, 8, 10 ve 12 kişilik seçeneklerle üretilir; dar alanlar için 4 ve 6 kişilik ince uzun modeller de vardır. "Kişilik" ifadesi yatak sayısını gösterir: her yatakta aynı anda bir kişi zıplar. Modellerin tamamı [trambolin kategorisinde](/katalog?kategori=trambolinler) yer alır.` },
      { type: 'img', src: `/images/products/saha-olimpik-10-lu-1.jpg`, alt: `10 kişilik olimpik trambolin sahasında yataklar, pedler ve koruma filesi`, caption: `10 kişilik saha: yataklar, pedli geçişler ve çevre filesi.` },

      { type: 'h2', text: `Junior Modelden Farkı` },
      { type: 'p', text: `Junior model, 4–10 yaş grubuna özel daha küçük yataklı seridir ve küçük yaş grubuna hizmet veren işletmelerde tercih edilir. Olimpik seri ise daha büyük yatağıyla geniş bir yaş aralığına hitap eder ve yoğun kullanılan işletmelere uygundur.` },

      { type: 'h2', text: `Zemine Gömülü Model` },
      { type: 'p', text: `Zemin tipi model 3 × 5 m ölçüsündedir ve zemine gömülü olarak kurulur. Düşme yüksekliği olmadığı için park, spor tesisi ve büyük oyun alanlarında tercih edilir. Çift sıralı 6 mm galvaniz yay sistemi ve drenajlı beton çukur tasarımıyla açık alanda kullanılabilir.` },

      { type: 'h2', text: `Teknik Özellikler` },
      { type: 'ul', items: [
        `Galvanizli çelik iskelet.`,
        `Çift galvaniz kaplı 6 mm çelik yay.`,
        `A-1 kalite, UV dayanımlı PVC yay pedi.`,
        `Mantar profil kenar koruması ve çevre koruma filesi.`,
        `Anahtar teslim kurulum ve 2 yıl üretici garantisi.`,
      ] },

      { type: 'h2', text: `Olimpik Trambolin Nerelerde Kullanılır?` },
      { type: 'ul', items: [
        `AVM'ler ve oyun merkezleri.`,
        `Sahil, park ve açık alan işletmeleri.`,
        `Siteler, oteller ve tatil köyleri.`,
        `Okullar ve spor tesisleri.`,
      ] },

      { type: 'h2', text: `Kurulum Öncesi Hazırlık` },
      { type: 'ul', items: [
        `Zemin düz ve sağlam olmalıdır.`,
        `Sahanın çevresinde giriş, çıkış ve merdiven için yer bırakın.`,
        `Kapalı alanda net tavan yüksekliğini, kiriş ve aydınlatmaları hesaba katın.`,
        `Açık alanda kullanılmadığı zamanlar için branda kılıfı planlayın.`,
      ] },

      { type: 'h2', text: `Bakım ve Yedek Parça` },
      { type: 'p', text: `En çok yıpranan parçalar yaylar, pedler ve zıplama yüzeyidir. Yay ölçüleri ve zıplama filesi seçimi için [trambolin yedek parça](/blog/trambolin-yedek-parca) rehberimize, tüm parçalar için [yedek parça](/yedek-parcalar) sayfamıza bakabilirsiniz.` },

      { type: 'note', title: `Fiyat teklifi`, text: `Kişi sayısına ve alanınıza göre olimpik trambolin fiyat teklifi için [bize ulaşın](/iletisim). Ev tipinden farkını [ticari trambolin](/blog/ticari-trambolin) yazımızda anlattık.` },
    ],
    sources: [],
  },

  'trambolin-yedek-parca': {
    content: [
      { type: 'p', text: `Trambolin yedek parça ihtiyacı, yoğun kullanılan her sahada kaçınılmazdır: yaylar yorulur, pedler yıpranır, zıplama filesi güneşte sertleşir. Parçaları zamanında yenilemek hem güvenliği korur hem de trambolinin ömrünü uzatır. Bu rehberde trambolin yayları, zıplama filesi, ped ve koruma filesini tek tek ele aldık: hangi parça ne işe yarar, nasıl seçilir ve ne zaman değişir?` },

      { type: 'h2', text: `Trambolin Yedek Parça Çeşitleri` },
      { type: 'ul', items: [
        `Trambolin yayları: 8,5 cm'den 28 cm'ye, yuvarlak ve kare kesit galvaniz çelik yaylar.`,
        `Trambolin zıplama filesi: üzerinde zıplanan örme yüzey.`,
        `Koruma pedleri: yay ve çerçeveyi örten PVC kaplı sünger pedler; yuvarlak, olimpik ve zemin tipleri.`,
        `Koruma filesi: trambolin çevresini saran, 4 cm göz aralıklı file.`,
        `Merdiven ve step parçaları.`,
        `Aksesuarlar: branda kılıfı, boru köpükleri, kelepçe ve ayak stoperi.`,
        `Salto trambolin yedekleri: lastik takımı, halat, emniyet kemeri, toka ve karabina.`,
      ] },

      { type: 'h2', text: `Trambolin Yayları: Ölçüler ve Seçim` },
      { type: 'p', text: `Trambolin yayları, zıplama filesini çerçeveye bağlar ve sıçramayı sağlar. Yayın boyu, kesiti ve sayısı trambolinin sertliğini belirler.` },
      { type: 'ul', items: [
        `8,5 cm kare kesit: çocuk parkları ve junior trambolinler için kısa, sert yay.`,
        `15 cm yuvarlak ve kare kesit: junior ve orta boy trambolinler.`,
        `18 cm yuvarlak: olimpik trambolinler için orta-uzun seri.`,
        `20 cm kare kesit: ticari olimpik trambolinler.`,
        `25 cm yuvarlak: profesyonel olimpik trambolinler için uzun seri.`,
        `28 cm kare kesit: ağır kullanımlı olimpik sahalar için en uzun seri.`,
      ] },
      { type: 'img', src: `/images/yedek-parca/yay-20cm-kare.png`, alt: `20 cm kare kesit galvaniz trambolin yayı`, caption: `20 cm kare kesit galvaniz trambolin yayı.`, contain: true },
      { type: 'p', text: `Yuvarlak kesit yaylar standart kullanım içindir; kare kesit yaylar daha yüksek dayanım sunar ve yoğun kullanılan ticari sahalarda tercih edilir. Doğru yayı seçmek için mevcut bir yayı çıkarıp gerilmemiş hâlde çengelden çengele ölçün, kesit tipini not edin ve toplam yay adedini sayın. Aynı trambolinde farklı boyda yay kullanmayın; yüzey dengesiz gerilir ve erken yıpranır.` },

      { type: 'h2', text: `Trambolin Yayları Ne Zaman Değişir?` },
      { type: 'ul', items: [
        `Yayda pas ya da kaplamada dökülme varsa.`,
        `Yayın boyu uzamışsa ya da sarımlar arasında açıklık oluşmuşsa.`,
        `Çengel incelmiş ya da açılmışsa.`,
        `Zıplama yüzeyi eskisine göre gevşek ve sarkık duruyorsa.`,
      ] },
      { type: 'p', text: `Yayları takıp çıkarırken yay çekme aparatı kullanın; elle zorlamak yaralanmaya yol açabilir. Yayları karşılıklı sırayla takmak yüzeyin dengeli gerilmesini sağlar.` },

      { type: 'h2', text: `Trambolin Zıplama Filesi: Seçim ve Ölçü` },
      { type: 'p', text: `Zıplama filesi (zıplama ağı), üzerinde zıplanan yüzeydir ve trambolinin en çok yük taşıyan parçasıdır. Yüksek mukavemetli, sık örülmüş polipropilenden üretilir; yayların takıldığı bağlantı noktaları çift dikişli kenar şeridine dikilir. Koruma filesiyle karıştırılmamalıdır: koruma filesi trambolinin çevresini sarar ve UV stabilizatörlü polietilenden, 4 cm göz aralığıyla örülür.` },
      { type: 'img', src: `/images/blog/trambolin-ziplama-filesi.jpg`, alt: `Trambolin zıplama filesi ve yay bağlantısı`, caption: `Zıplama filesi ile yayın bağlantı noktası.` },
      { type: 'p', text: `Doğru zıplama filesi için şu bilgiler gerekir:` },
      { type: 'ul', items: [
        `Çerçevenin iç ölçüsü: yuvarlak trambolinde çap, olimpik trambolinde en ve boy.`,
        `Yay boyu (çengelden çengele) ve yay bağlantı noktası sayısı.`,
        `Trambolinin tipi: yuvarlak, olimpik, junior ya da zemin. Zemin trambolinlerinde yüzey kasaya göre özel kesilir ve modüler olarak yerleştirilir.`,
      ] },

      { type: 'h2', text: `Zıplama Filesi Ne Zaman Değişir?` },
      { type: 'ul', items: [
        `Kenar dikişlerinde açılma ya da bağlantı noktalarında kopma varsa.`,
        `Yüzeyde incelme, delik ya da yırtık oluşmuşsa.`,
        `Kumaş güneşten sertleşmiş ve rengi belirgin biçimde atmışsa.`,
      ] },

      { type: 'h2', text: `Ped ve Koruma Filesi` },
      { type: 'ul', items: [
        `Ped: PVC kaplamada yırtık, süngerde çökme ya da yayların üzerinin açıkta kalması değişim işaretidir.`,
        `Koruma filesi: gözlerde kopma, güneşten sertleşme ve renk atması.`,
      ] },
      { type: 'p', text: `Ped ve fileler ölçüye özel üretilir; siparişler Türkiye geneline kargoyla gönderilir.` },

      { type: 'h2', text: `Doğru Trambolin Yedek Parça Siparişi İçin` },
      { type: 'ul', items: [
        `Trambolinin tipi (yuvarlak, olimpik, junior, zemin) ve kişi sayısı.`,
        `Yay boyu ve adedi.`,
        `Çerçevenin iç ölçüsü.`,
        `Değişecek parçanın fotoğrafı.`,
      ] },

      { type: 'h2', text: `Düzenli Kontrol Alışkanlığı` },
      { type: 'p', text: `Trambolin parkları standardı EN ISO 23659, işletme bölümünde muayene ve yedek parça değişimini ayrı bir başlık olarak ele alır. Sahayı açmadan önce yayları, pedleri ve fileleri gözle kontrol etmek; yıpranan parçayı kaydedip bekletmeden değiştirmek en etkili önlemdir. Tüm parçaları [yedek parça](/yedek-parcalar) sayfasında inceleyebilirsiniz.` },

      { type: 'note', title: `Yedek parça siparişi`, text: `Parçanın ölçüsünü ya da fotoğrafını gönderin, uygun trambolin yedek parçasını belirleyelim. [İletişim sayfasından](/iletisim) ya da WhatsApp üzerinden yazabilirsiniz.` },
    ],
    sources: [SRC.iso23659],
  },

  'top-havuzu': {
    content: [
      { type: 'p', text: `Top havuzu; kreş, kafe, AVM ve oyun merkezlerinde en çok tercih edilen çocuk oyun bölümüdür. Az yer kaplar, 1 yaşından itibaren çocuklara uygundur ve kaydırak, tırmanma ya da tünel modülleriyle kolayca birleşir. Bu rehberde çeşitleri, ölçüye göre kaç top gerektiğini, top seçimini, fiyatı etkileyen kalemleri ve temizliği tek yerde topladık.` },

      { type: 'h2', text: `Top Havuzu Nedir?` },
      { type: 'p', text: `Top havuzu, yumuşak kenarlı bir havuzun plastik toplarla doldurulmasıyla oluşan oyun alanıdır. Çocuklar topların arasında yürür, saklanır ve kaydıraktan toplara iner. Tek başına kurulabildiği gibi soft play oyun gruplarının bir bölümü olarak da tasarlanabilir. İşletme açısından avantajı, küçük bir alanda geniş bir yaş grubuna hitap etmesi ve modüler yapısı sayesinde mekâna göre ölçülendirilebilmesidir.` },

      { type: 'h2', text: `Top Havuzu Çeşitleri` },
      { type: 'ul', items: [
        `Bağımsız model: modüler kenar panelli, istenen ölçüde üretilir.`,
        `Oyun grubuna entegre model: kaydırağın indiği, tırmanma ve tünel bölümleriyle birleşen havuz.`,
        `Top havuzlu trambolin: tek kişilik zıplama bölmesi ile havuzun aynı kafes içinde birleştiği model.`,
        `Sünger havuzu: top yerine küp süngerle doldurulur; trambolin parklarında ve tırmanma duvarlarının önünde iniş alanı olarak kullanılır.`,
        `Kum havuzu: yumuşak kenarlı, antibakteriyel zemin kaplamalı ve drenajlı model.`,
      ] },
      { type: 'p', text: `Modelleri [top havuzları](/katalog?kategori=top-havuzlari) kategorisinde, kum havuzlarını ise [sünger ve kum havuzları](/katalog?kategori=havuzlar) sayfasında inceleyebilirsiniz.` },
      { type: 'img', src: `/images/products/top-havuzlari-4.jpg`, alt: `Kaydıraklı oyun grubuna entegre top havuzu`, caption: `Oyun grubuna entegre, kaydıraklı model.` },

      { type: 'h2', text: `Ölçü ve Top Sayısı Hesabı` },
      { type: 'p', text: `Matrax top havuzları mekânın ölçüsüne göre üretilir; bu yüzden ilk karar havuzun taban ölçüsü ve topların dolum yüksekliğidir. Kaç top gerektiğini kabaca şöyle hesaplayabilirsiniz:` },
      { type: 'ul', items: [
        `Havuzun hacmini bulun: en × boy × dolum yüksekliği.`,
        `8 cm çaplı bir topun hacmi yaklaşık 268 cm³'tür. Toplar arasında boşluk kaldığı için havuz hacminin yaklaşık %60'ı topla dolar.`,
        `Buna göre 1 m³ hacim için yaklaşık 2.200 top gerekir.`,
      ] },
      { type: 'p', text: `Örneğin 2 × 2 m tabanlı ve 30 cm dolum yüksekliğindeki bir havuzun hacmi 1,2 m³'tür; bu havuz için yaklaşık 2.700 top hesaplanır. Bu bir tahmindir; kesin miktar havuzun biçimine ve kaydırak iniş bölgesine göre teklif aşamasında netleşir.` },

      { type: 'h2', text: `Top Havuzu Topu Nasıl Seçilir?` },
      { type: 'ul', items: [
        `Çap: Matrax havuzlarında 8 cm çaplı yumuşak toplar kullanılır.`,
        `Malzeme: antibakteriyel ve TSE onaylı toplar.`,
        `Dayanıklılık: ezilen ya da çatlayan toplar düzenli olarak ayıklanmalıdır.`,
        `Renk: mekânın temasına göre pastel ya da karışık renkler seçilebilir.`,
      ] },
      { type: 'img', src: `/images/blog/top-havuzu-toplar.jpg`, alt: `Top havuzunda pastel renkli toplar ve kaydırak`, caption: `Pastel renk toplarla doldurulmuş, kaydıraklı bir havuz.` },

      { type: 'h2', text: `Top Havuzu Fiyatını Etkileyen Faktörler` },
      { type: 'ul', items: [
        `Havuzun ölçüsü ve dolum yüksekliği, yani gereken top sayısı.`,
        `Kenar panelleri, kaplama ve renk seçimi.`,
        `Havuzun bağımsız mı, yoksa kaydırak ve tırmanma bölümlü bir oyun grubuna entegre mi olacağı.`,
        `Nakliye ve kurulum.`,
      ] },
      { type: 'p', text: `Fiyat bu kalemlere göre değiştiği için ölçünüzü paylaştığınızda size özel teklif hazırlıyoruz.` },

      { type: 'h2', text: `Yer Seçimi ve Kurulum` },
      { type: 'ul', items: [
        `Havuzu görevlinin ya da ebeveynin rahatça görebileceği bir noktaya yerleştirin.`,
        `Kaydırak iniyorsa iniş bölgesini havuzun giriş-çıkışından ayırın.`,
        `Giriş yüksekliğini hedef yaş grubunun kendi başına girip çıkabileceği ölçüde tutun.`,
        `Çevresinde temizlik için topların boşaltılabileceği bir alan bırakın.`,
      ] },

      { type: 'h2', text: `Temizlik ve Hijyen` },
      { type: 'p', text: `American Journal of Infection Control'de 2019'da yayımlanan bir çalışma, ABD'de fizik tedavi kliniklerindeki altı havuzu inceledi ve toplarda 31 bakteri türü ile bir maya türü buldu. Araştırmacılar, temizlik aralığının günleri hatta haftaları bulabildiğine dikkat çekti.` },
      { type: 'ul', items: [
        `Yazılı bir temizlik planı hazırlayın ve temizlikleri kaydedin.`,
        `Topları belirli aralıklarla boşaltıp yıkayın ve kurutun.`,
        `Havuz tabanını ve kenar panellerini silin.`,
        `Kırılan ya da ezilen topları ayıklayın.`,
      ] },

      { type: 'h2', text: `Hangi Yaş Grubu İçin Uygun?` },
      { type: 'p', text: `Standart model 1 yaş ve üzeri çocuklar için tasarlanır. Küçük ve büyük yaş gruplarının aynı anda kullanacağı alanlarda havuzu yaş grubuna göre ayırmak ya da kullanım saatlerini bölmek güvenliği artırır. Alan planlaması için [çocuk oyun alanı](/blog/cocuk-oyun-alani) rehberimize bakabilirsiniz.` },

      { type: 'h2', text: `Sık Sorulan Sorular` },
      { type: 'note', title: `Top havuzu kaç yaş için uygundur?`, text: `Standart model 1 yaş ve üzeri çocuklar için tasarlanır. Küçük ve büyük çocukların aynı alanı kullandığı yerlerde ayrı bölüm ya da ayrı kullanım saatleri planlanmalıdır.` },
      { type: 'note', title: `Top havuzu topları kaç cm olmalı?`, text: `Matrax havuzlarında 8 cm çaplı, antibakteriyel ve TSE onaylı yumuşak toplar kullanılır.` },
      { type: 'note', title: `Ne sıklıkla temizlenmeli?`, text: `Sıklık kullanım yoğunluğuna bağlıdır. Önemli olan yazılı bir temizlik planı hazırlamak, topları belirli aralıklarla boşaltıp yıkamak ve temizlikleri kayıt altına almaktır.` },
      { type: 'note', title: `Top havuzu ölçüye özel üretilir mi?`, text: `Evet. Havuzlar modüler kenar panellerle mekânın ölçüsüne göre üretilir; mevcut bir oyun grubuna da entegre edilebilir.` },
      { type: 'note', title: `Top havuzu ile sünger havuzu arasındaki fark nedir?`, text: `Top havuzu, küçük yaş grubunun içinde oynadığı bir alandır. Sünger havuzu ise küp süngerlerle doldurulur ve trambolinden ya da tırmanma duvarından atlayanlar için iniş alanı olarak kullanılır.` },

      { type: 'note', title: `Fiyat teklifi`, text: `Ölçünüzü gönderin; top sayısını hesaplayıp size özel top havuzu teklifi hazırlayalım. [İletişim sayfasından](/iletisim) bize ulaşabilirsiniz. Malzeme kriterleri için [softplay üreticisi](/blog/softplay-ureticisi) yazımıza bakabilirsiniz.` },
    ],
    sources: [SRC.topHavuzu],
  },

  'cocuk-oyun-alani': {
    content: [
      { type: 'p', text: `Çocuk oyun alanı kurmak; kreş, kafe, AVM, site ya da belediye projesi fark etmeksizin üç sorunun cevabıyla başlar: alan kaç metrekare, hangi yaş grubu kullanacak ve aynı anda kaç çocuk olacak? Bu rehberde çocuk oyun alanı planlarken bilmeniz gereken mevzuatı ve tasarım kurallarını özetledik.` },

      { type: 'h2', text: `Çocuk Oyun Alanı Türleri` },
      { type: 'ul', items: [
        `Kapalı çocuk oyun alanı: [soft play oyun grupları](/katalog?kategori=soft-play-gruplari), [top havuzu](/blog/top-havuzu) ve sünger modüller.`,
        `Açık çocuk oyun alanı: [trambolinler](/katalog?kategori=trambolinler), zemin trambolini ve [şişme parklar](/katalog?kategori=sisme-parklar).`,
        `Kreş ve kafe oyun alanı: küçük metrekareye sığan [kompakt oyun grupları](/katalog?kategori=kres-kafe).`,
      ] },

      { type: 'h2', text: `Çocuk Oyun Alanında Mevzuat` },
      { type: 'p', text: `Kural seti işletmenin türüne göre değişir. Özel anaokulları Millî Eğitim Bakanlığı'nın Özel Öğretim Kurumları Standartlar Yönergesi'ne tabidir: okul öncesi eğitim dersliği en az 15 m² olur, bahçede her öğrenci için 1,5 m² alan aranır ve en az 25 m² büyüklüğünde çok amaçlı salon bulunur.` },
      { type: 'p', text: `Eylül 2025'te yönetmeliğe 25–72 ay grubuna yönelik "çocuk etkinlik ve oyun evi" adlı yeni bir kurum türü eklendi. Bu kurumlarda etkinlik odası en az 20 m² olur, kontenjan çocuk başına 1,5 m² üzerinden hesaplanır ve bir odaya 20'den fazla çocuk alınmaz; zeminin kolay temizlenen, antibakteriyel malzemeyle kaplanması istenir.` },
      { type: 'note', title: `Çocuk kafeleri ve kreşler`, text: `Çocuk kafeleri ve AVM oyun alanları eğitim kurumu değil, belediyeden ruhsat alan ticari işletmelerdir. Kreş ve gündüz bakımevleri ise Aile ve Sosyal Hizmetler Bakanlığı mevzuatına tabidir. Tasarıma başlamadan önce bağlı olduğunuz kurumun güncel şartlarını teyit edin.` },

      { type: 'h2', text: `Çocuk Oyun Alanı Tasarım Kuralları` },
      { type: 'ul', items: [
        `Kapasiteyi alandan hesaplayın: çocuk başına 1,5 m² ölçütünü alt sınır kabul ederseniz 30 m²'lik alan aynı anda en fazla 20 çocuk demektir.`,
        `Yaş gruplarını ayırın: küçükler için alçak ve yumuşak modüller, büyükler için tırmanma ve kaydırak bölümü.`,
        `Her noktayı görün: tünelin içi, kaydırağın çıkışı ve top havuzu görevlinin durduğu yerden izlenebilmeli.`,
        `Zemin: düşme ihtimali olan her yüzeyin altı EN 1177'ye uygun darbe sönümleyici olmalı.`,
        `Hijyen: silinebilir kaplamalar ve yazılı temizlik planı.`,
      ] },
      { type: 'img', src: `/images/kres-2.jpg`, alt: `Küçük çocuk oyun alanı için kompakt oyun grubunun dört açıdan görünümü`, caption: `Kompakt bir oyun grubunun dört açıdan görünümü.`, contain: true },

      { type: 'h2', text: `Küçük Alanlar İçin Çözüm` },
      { type: 'p', text: `Matrax Kreş & Kafe Serisi kompakt macera parkuru 4,00 × 2,50 m ölçüsündedir; yalnızca 10 m² yer kaplar ve aynı anda 6–8 çocuğa hizmet eder. Modüler yapı sayesinde ölçü kolon, pencere ve kapı yerlerine göre uyarlanır, yıpranan parça tek başına değiştirilir.` },

      { type: 'h2', text: `Teklif Almadan Önce Hazırlayın` },
      { type: 'ul', items: [
        `Alanın ölçülü krokisi: tavan yüksekliği, kolon, pencere ve kapı yerleri.`,
        `Hedef yaş aralığı ve alanı aynı anda kullanacak çocuk sayısı.`,
        `Bağlı olduğunuz kurumun alan şartları.`,
        `Bütçe aralığı ve varsa kurum renkleri.`,
      ] },

      { type: 'note', title: `Çocuk oyun alanı projeniz için`, text: `Krokinizi gönderin, yerleşim önerisi hazırlayalım. [İletişim sayfasından](/iletisim) bize ulaşabilir, üretici seçimi için [çocuk oyun grubu üreticisi](/blog/cocuk-oyun-grubu-ureticisi) rehberimize bakabilirsiniz.` },
    ],
    sources: [SRC.meb, SRC.mebDuyuru, SRC.en1176_10, SRC.en1177],
  },
};
