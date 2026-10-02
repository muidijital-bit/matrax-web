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

// Anahtar: posts.ts içindeki slug
export const postBodies: Record<string, PostBody> = {
  'trambolin-parki-nasil-kurulur': {
    content: [
      { type: 'p', text: 'Trambolin parkı, dışarıdan bakıldığında boş bir salona trambolin döşemek gibi görünür. Gerçekte ise yapının yüksekliğinden personel eğitimine kadar birbirine bağlı kararlardan oluşan bir projedir. Bu yazıda, yatırım kararını vermeden önce netleştirmeniz gereken başlıkları uluslararası güvenlik standardını temel alarak sıraladık.' },

      { type: 'h2', text: 'Önce standardı tanıyın: EN ISO 23659' },
      { type: 'p', text: 'Trambolin parklarına özel ilk uluslararası standart, Kasım 2022\'de yayımlanan ISO 23659\'dur: "Spor ve rekreasyon tesisleri — Trambolin parkları — Güvenlik gereklilikleri". ISO ile Avrupa Standardizasyon Komitesi (CEN) tarafından birlikte hazırlandığı için Avrupa\'da EN ISO 23659:2022 adıyla geçerlidir. Standart yalnızca ekipmanı değil işletmeyi de kapsar: tasarım, imalat, muayene ve bakımın yanında asgari işletme gerekliliklerini de tanımlar.' },
      { type: 'p', text: 'Standardın giriş bölümü iki noktanın altını çizer: trambolin parkı kullanıcılarının büyük bölümü çocuktur ve en sık görülen yaralanma nedenleri kontrolsüz inişler ile kişinin kendi becerisini yanlış değerlendirmesidir. Yani güvenlik, iyi malzeme kadar iyi işletmeyle de ilgilidir.' },
      { type: 'note', title: 'Standardın kapsamadıkları', text: 'Genel yapı, yangın ve imar mevzuatı; tırmanma duvarı, parkur ve engel parkuru gibi trambolin dışı aktiviteler; açık hava trambolin parkları. Bu konularda ayrıca ilgili mevzuata ve standartlara (örneğin kapalı oyun yapıları için EN 1176-10) bakmanız gerekir.' },

      { type: 'h2', text: '1. Alan seçimi: metrekareden önce yükseklik' },
      { type: 'p', text: 'Mekân ararken ilk bakılacak ölçü net tavan yüksekliğidir. Standart, park trambolinleri ile performans trambolinleri için ayrı yükseklik koşulları tanımlar; kiriş, havalandırma kanalı, sprinkler ve aydınlatma gibi tavandan sarkan her eleman bu hesabı etkiler. Kira sözleşmesini imzalamadan önce mekânın ölçülü planını üreticinizle paylaşın: yerleşim planı ölçüye göre çizilir, ölçü plana göre değil.' },
      { type: 'ul', items: [
        'Kolon aksları ve aralıkları: sahaların boyutunu ve yönünü belirler.',
        'Zeminin düzgünlüğü ve taşıma kapasitesi: çelik iskelet yükünü ayaklar üzerinden zemine aktarır.',
        'Acil çıkışlar: yerleşim planı kaçış yollarını kapatmamalıdır.',
        'Ebeveyn bekleme alanı, kafe, soyunma bölümü ve kasa için ayrılacak pay.',
      ] },
      { type: 'img', src: '/images/parklar/park-olimpik.png', alt: 'Çevre filesiyle çevrili çok sahalı trambolin parkı yerleşim örneği', caption: 'Örnek bir trambolin parkı yerleşimi: sahalar, pedli geçişler ve çevre filesi birlikte planlanır.', contain: true },

      { type: 'h2', text: '2. Yerleşim planı ve aktivite seçimi' },
      { type: 'p', text: 'Standart iki trambolin sınıfı tanımlar: performans indeksi 95 ve altında olan "park trambolini" ile daha yüksek sıçrama üretebilen "performans trambolini". İlki serbest zıplama sahalarının, ikincisi eğitmen gözetimindeki sporcu bölümlerinin ekipmanıdır; ikisini aynı sahada karıştırmamak gerekir.' },
      { type: 'p', text: 'Tipik bir [trambolin parkında](/katalog?kategori=trambolin-parklari) serbest zıplama sahası, basketbol potaları, yakar top sahası, duvar trambolini ve sünger havuzu ya da hava yastığı gibi iniş alanları bulunur. Standart bu iniş alanlarını ayrı bir başlıkta ele alır ve sünger havuzu ile hava yastığı için ayrı koşullar getirir. Küçük yaş grubu için ayrı bir saha planlamak hem güvenliği hem de ebeveyn memnuniyetini artırır.' },
      { type: 'img', src: '/images/galeri-yeni/galeri-20.jpg', alt: 'Tırmanma duvarı önünde sünger bloklarla dolu sünger havuzu', caption: 'Tırmanma duvarı önünde sünger havuzu: iniş alanının derinliği ve dolgu miktarı tasarımın parçasıdır.' },

      { type: 'h2', text: '3. Konstrüksiyon ve malzeme' },
      { type: 'p', text: 'Üreticiden teklif alırken aşağıdaki kalemlerin teknik karşılığını yazılı isteyin. Fiyatları karşılaştırmanın tek sağlıklı yolu budur. Sünger, kaplama ve file tarafının ayrıntıları için [soft play malzeme seçimi](/blog/soft-play-malzeme-secimi) yazımıza bakabilirsiniz.' },
      { type: 'ul', items: [
        'İskelet: profil kesiti, kaplama türü (galvaniz ya da elektrostatik toz boya) ve bağlantı detayları.',
        'Zıplama yüzeyi ve yaylar: yay çapı, kaplaması ve [yedek parça](/yedek-parcalar) temin süresi.',
        'Yay ve iskelet pedleri: sünger kalınlığı, PVC kaplamanın özellikleri ve yangın sınıfı.',
        'Çevre filesi ve koruma sistemi: göz açıklığı ve sabitleme şekli.',
        'Kullanım ve bakım kılavuzu: standardın yapım gereklilikleri arasında ayrı bir başlıktır.',
      ] },
      { type: 'img', src: '/images/imalat/imalat-11.jpg', alt: 'Atölyede hazırlanan çelik iskelet modülleri', caption: 'Atölyede hazırlanan çelik iskelet modülleri.' },

      { type: 'h2', text: '4. Ruhsat ve resmî süreç' },
      { type: 'p', text: 'Türkiye\'de trambolin parkı açmak için belediyeden (belediye sınırları dışında il özel idaresinden) işyeri açma ve çalışma ruhsatı alınır. Süreç, İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik çerçevesinde yürür. İşletmenin hangi sınıfta değerlendirileceği ve istenen belgeler belediyeden belediyeye değişebildiği için, mekânı kiralamadan önce ilgili ruhsat müdürlüğüne danışmanızı öneririz. AVM içindeki işletmelerde AVM yönetiminin teknik şartnamesi de ayrıca bağlayıcıdır.' },

      { type: 'h2', text: '5. İşletme: güvenliğin yarısı burada' },
      { type: 'p', text: 'EN ISO 23659\'un ikinci ana bölümü tamamen işletmeye ayrılmıştır. Açılıştan önce şu başlıkların yazılı hâle gelmesi beklenir:' },
      { type: 'ul', items: [
        'Risk değerlendirmesi ve standart işletme prosedürleri.',
        'Personel eğitimi ve saha gözetimi.',
        'Seans öncesi güvenlik bilgilendirmesi ve görünür güvenlik işaretleri.',
        'Temizlik ve hijyen planı.',
        'Düzenli muayene, bakım ve yedek parça takibi.',
        'İlk yardım, acil durum eylem planı ve tahliye.',
        'Kaza ve olay kayıtları, yaralanma istatistikleri ve sigorta.',
      ] },
      { type: 'p', text: 'Kuralların en önemlisi basittir: bir trambolinde aynı anda tek kişi. Amerikan Pediatri Akademisi\'nin trambolin güvenliği bildirisine göre yaralanmaların yaklaşık dörtte üçü, trambolini aynı anda birden fazla kişi kullanırken meydana geliyor ve en büyük riski gruptaki en hafif çocuk taşıyor. Sahayı tek kişilik yataklara bölen bir yerleşim ve bu kuralı uygulayan saha görevlisi, riski doğrudan azaltır.' },

      { type: 'h2', text: '6. Kapasite ve gelir planı' },
      { type: 'p', text: 'Standart, park alanı ve yeni tip aktivite alanları için kapasiteyi ayrı ayrı ele alır. Kapasite aynı zamanda iş planınızın temelidir: seans süresi, saatlik kapasite ve doluluk oranı gelirinizi belirler. Hafta içi okul grupları, hafta sonu doğum günü paketleri gibi farklı saat dilimlerine farklı ürünler koymak, aynı metrekareden daha dengeli gelir üretir.' },

      { type: 'h2', text: 'Kısa kontrol listesi' },
      { type: 'ul', items: [
        'Mekânın net yüksekliği ve ölçülü planı üreticiyle paylaşıldı mı?',
        'Yerleşim planında yaş grupları ve iniş alanları ayrıştırıldı mı?',
        'Teklifte malzeme özellikleri ve bakım kılavuzu yazılı mı?',
        'Ruhsat sınıfı ve istenen belgeler belediyeden teyit edildi mi?',
        'İşletme prosedürleri, personel eğitimi ve muayene planı hazır mı?',
      ] },
      { type: 'p', text: 'Üretim aşamalarını [imalat](/imalat) sayfamızda, tamamlanan kurulumları [projelerimizde](/projeler) görebilirsiniz. Mekânınıza uygun yerleşim için [bizimle iletişime geçin](/iletisim).' },
    ],
    sources: [
      { label: 'ISO 23659:2022 — Trampoline parks, Safety requirements', url: 'https://www.iso.org/standard/76556.html' },
      { label: 'American Academy of Pediatrics — Trampoline Safety in Childhood and Adolescence (Pediatrics, 2012)', url: 'https://publications.aap.org/pediatrics/article/130/4/774/30158/Trampoline-Safety-in-Childhood-and-Adolescence' },
      { label: 'İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik', url: 'https://www.icisleri.gov.tr/kurumlar/icisleri.gov.tr/IcSite/strateji/yikob-panel/mevzuat/Atiflar/6-_-Isyeri-Acma-ve-Calisma-Ruhsatlarina-Iliskin-Yonetmelik.pdf' },
    ],
  },
  'soft-play-malzeme-secimi': {
    content: [
      { type: 'p', text: 'İki [soft play oyun grubu](/katalog?kategori=soft-play-gruplari) fotoğrafta birbirinin aynısı görünebilir; farkı aylar sonra, süngerler çöktüğünde ve dikişler açıldığında anlarsınız. Malzeme seçimi hem güvenliği hem de yatırımın ömrünü belirler. Aşağıda bir oyun grubunu katman katman açıp her birinde neye bakmanız gerektiğini anlattık.' },

      { type: 'h2', text: 'Hangi standart geçerli?' },
      { type: 'p', text: 'Çok katlı, fileyle çevrili kapalı oyun yapıları için Avrupa\'daki referans EN 1176-10\'dur. Standardın güncel sürümü 2023\'te yayımlandı ve 2008 sürümünün yerini aldı. Bina içine ya da dışına kurulan, 14 yaşına kadar çocuklara yönelik "tamamen kapalı oyun ekipmanları" için genel oyun alanı standardına ek güvenlik gereklilikleri getirir. Acil durum prosedürleri, yangın güvenliği ve tahliye, yapının içinin görülebilirliği, işaretler, muayene ve bakım bu ek başlıklar arasındadır.' },
      { type: 'p', text: 'Düşme yüzeyleri için ise EN 1177 devreye girer. Bu standart, bir zeminin hangi yükseklikten düşmeye kadar yeterli koruma sağladığını "kritik düşme yüksekliği" ile ifade eder. Trambolinli bölümler için ayrıca [trambolin parkı kurulum rehberimize](/blog/trambolin-parki-nasil-kurulur) bakabilirsiniz.' },

      { type: 'h2', text: '1. İskelet: çelik ve kaplaması' },
      { type: 'p', text: 'Taşıyıcı sistem çelik borudan oluşur. Sormanız gerekenler: boru çapı ve et kalınlığı, korozyona karşı kaplama (galvaniz ya da elektrostatik toz boya) ve bağlantı elemanlarının malzemesi. Kapalı mekânda bile temizlik suyu ve nem, korunmasız çeliği zamanla paslandırır. Çocukların ulaşabildiği her yerde iskelet sünger kılıfla kaplanmış olmalı, açıkta metal kalmamalıdır. İskeletin nasıl hazırlandığını [imalat](/imalat) sayfamızda görebilirsiniz.' },
      { type: 'img', src: '/images/imalat/imalat-10.jpg', alt: 'Kaplama öncesi soft play çelik iskeleti', caption: 'Kaplama öncesi çelik iskelet: oyun grubunun ömrünü belirleyen katman.' },

      { type: 'h2', text: '2. Sünger: dansite ve yangın sınıfı' },
      { type: 'p', text: 'Süngerde iki değer önemlidir. Birincisi dansite (kg/m³) ve sertliktir: düşük dansiteli sünger ilk haftalarda iyi görünür, sonra çöker ve altındaki sert yüzeyi hissettirir. Basılan ve üzerine düşülen yüzeylerde yüksek dansiteli sünger aranır; bu değeri ürünün teknik föyünde yazılı görmek isteyin.' },
      { type: 'p', text: 'İkincisi yangın davranışıdır. Avrupa\'da yapı malzemelerinin yangına tepkisi EN 13501-1\'e göre sınıflandırılır. Örneğin "B-s1, d0" ifadesinde B yangına çok sınırlı katkıyı, s1 düşük duman üretimini, d0 ise yanan damlacık oluşmadığını gösterir. "Yangın geciktirici" ibaresinin arkasında böyle bir sınıf ve test raporu olmalıdır.' },

      { type: 'h2', text: '3. PVC kaplama: gözle görülmeyen kimya' },
      { type: 'p', text: 'Süngeri saran PVC kaplama, çocukların eli ve yüzüyle sürekli temas eder. Bakılacak üç şey var:' },
      { type: 'ul', items: [
        'Dayanım: ipliğin kalınlığı (denye) ve kumaşın gramajı. Matrax oyun gruplarında 1100 denye PVC branda kullanılır.',
        'Kimyasal güvenlik: PVC\'yi yumuşatan bazı ftalatlar AB\'de kısıtlıdır. REACH Tüzüğü Ek XVII\'nin 51. maddesi DEHP, DBP, BBP ve DIBP ftalatlarının toplamını plastikleştirilmiş malzemede ağırlıkça %0,1 ile sınırlar. Üreticiden ftalat test raporu isteyin.',
        'Temizlenebilirlik: yüzey silinebilir olmalı, dikişler kir tutmayacak şekilde kapatılmalıdır.',
      ] },
      { type: 'img', src: '/images/galeri-yeni/galeri-1.jpg', alt: 'PVC kaplı pedler ve koruma filesiyle çevrili trambolin bölümü', caption: 'PVC kaplı pedler ve koruma filesi: çocukların en çok temas ettiği yüzeyler.' },

      { type: 'h2', text: '4. File ve koruma ağları' },
      { type: 'p', text: 'File, çocuğu yapının içinde tutan bariyerdir. Göz açıklığı parmak ve ayak sıkışmasına izin vermeyecek ölçüde olmalı, file iskelete sık aralıklarla bağlanmalıdır. File aynı zamanda ebeveynin ve görevlinin içeriyi görmesini sağlar; EN 1176-10\'da görülebilirliğin ayrı bir başlık olmasının nedeni budur. İçerinin rahatça izlenebildiği fileleri tercih edin.' },

      { type: 'h2', text: '5. Zemin: kritik düşme yüksekliği' },
      { type: 'p', text: 'EN 1177\'deki testte, ölçüm cihazı takılı bir baş modeli zemine farklı yüksekliklerden düşürülür ve iki sınıra bakılır: kafa yaralanma kriteri (HIC) 1000\'i, tepe ivmesi (gmax) 200 g\'yi aşmamalıdır. Her iki sınırın da sağlandığı en büyük yükseklik, o zeminin kritik düşme yüksekliğidir.' },
      { type: 'p', text: 'Pratikteki anlamı şudur: zeminin kritik düşme yüksekliği, üzerindeki ekipmanın serbest düşme yüksekliğinden küçük olamaz. Tatami karo ya da kauçuk zemin alırken yalnızca kalınlığı değil, test raporundaki bu değeri sorun.' },

      { type: 'h2', text: 'Top havuzu ve hijyen' },
      { type: 'p', text: 'American Journal of Infection Control\'de 2019\'da yayımlanan bir çalışma, ABD\'de fizik tedavi kliniklerindeki altı top havuzunu inceledi ve toplarda 31 bakteri türü ile bir maya türü buldu; bazı toplarda binlerce hücre sayıldı. Araştırmacılar, temizlik aralığının günleri hatta haftaları bulabildiğine dikkat çekti.' },
      { type: 'p', text: 'Çıkarılacak sonuç açık: [top havuzu](/katalog?kategori=havuzlar), yazılı bir temizlik planı olmadan işletilmemeli. Toplar kolayca boşaltılabilmeli, havuz tabanı silinebilir olmalı ve temizlik sıklığı kayıt altına alınmalıdır.' },

      { type: 'h2', text: 'Üreticiden isteyeceğiniz belgeler' },
      { type: 'ul', items: [
        'Ürünün hangi standarda göre tasarlandığını gösteren uygunluk belgesi ya da test raporu.',
        'Sünger ve PVC için yangına tepki sınıfı raporu.',
        'PVC için ftalat (kimyasal) test raporu.',
        'Zemin malzemesi için EN 1177 kritik düşme yüksekliği raporu.',
        'Bakım kılavuzu ve [yedek parça](/yedek-parcalar) listesi.',
        'Garanti süresi ve kapsamı.',
      ] },
    ],
    sources: [
      { label: 'EN 1176-10:2023 — Tamamen kapalı oyun ekipmanları için ek güvenlik gereklilikleri', url: 'https://standards.iteh.ai/catalog/standards/cen/6038c521-6c36-40a2-ad59-b106d533280f/en-1176-10-2023' },
      { label: 'EN 1177:2018+A1:2023 — Darbe sönümleyici oyun alanı zeminleri', url: 'https://standards.iteh.ai/catalog/standards/cen/8a9d50c2-fc9a-482a-9481-c0c73d573df1/en-1177-2018a1-2023' },
      { label: 'SGS — EU Expands Restriction of Phthalates Under REACH', url: 'https://www.sgs.com/en/news/2019/01/safeguards-00219-eu-expands-restriction-of-phthalates-under-reach' },
      { label: 'Oesterle ve ark. — Are ball pits located in physical therapy clinical settings a source of pathogenic microorganisms? (AJIC)', url: 'https://pubmed.ncbi.nlm.nih.gov/30471972/' },
    ],
  },
  'kres-oyun-alani-tasarimi': {
    content: [
      { type: 'p', text: 'Kreşlerde ve çocuk kafelerinde oyun alanına ayrılan yer genellikle sınırlıdır. Bu ölçekte her karar daha görünür olur: yanlış yerleştirilen bir kaydırak hem alanı tüketir hem gözetimi zorlaştırır. Aşağıdaki başlıklar, küçük bir alanı güvenli ve verimli kullanmanın temel kararlarını özetliyor.' },

      { type: 'h2', text: 'Önce mevzuat: hangi kurum, hangi kural?' },
      { type: 'p', text: 'Kural seti işletmenin türüne göre değişir. Özel anaokulları, Millî Eğitim Bakanlığı\'nın Özel Öğretim Kurumları Standartlar Yönergesi\'ne tabidir. Yönergenin güncel hâline göre anaokullarında:' },
      { type: 'ul', items: [
        'Okul öncesi eğitim dersliği en az 15 m² olur.',
        'Bahçe, oyunlara uygun ve her öğrenci için 1,5 m² alan sağlayacak büyüklükte olur; bahçede isteğe bağlı olarak kum havuzu, oyun parkı ve benzeri alanlar oluşturulabilir.',
        'Etkinlikler için en az 25 m² büyüklüğünde çok amaçlı salon bulunur.',
      ] },
      { type: 'p', text: 'Eylül 2025\'te yönetmeliğe yeni bir kurum türü eklendi: 25–72 ay grubuna yönelik "çocuk etkinlik ve oyun evi". Yönergeye Kasım 2025\'te eklenen maddeye göre bu kurumlarda etkinlik odası en az 20 m² olur, kontenjan çocuk başına 1,5 m² üzerinden hesaplanır ve bir odaya 20\'den fazla çocuk alınmaz. Zeminin "çocukların sağlığına zarar vermeyecek, kolaylıkla silinip temizlenebilen anti bakteriyel malzemeyle" kaplanması istenir. İsteğe bağlı oyun bahçesi ya da alanı ise çocuk başına 1,5 m² olmak üzere en az 40 m² olur.' },
      { type: 'note', title: 'Çocuk kafeleri ve kreşler', text: 'Çocuk kafeleri ve AVM oyun alanları eğitim kurumu değil, belediyeden ruhsat alan ticari işletmelerdir. Kreş ve gündüz bakımevleri ise Aile ve Sosyal Hizmetler Bakanlığı mevzuatına tabidir. Tasarıma başlamadan önce bağlı olduğunuz kurumun güncel şartlarını teyit edin.' },

      { type: 'h2', text: '1. Kapasiteyi alandan hesaplayın' },
      { type: 'p', text: 'Oyun grubunun kaç çocuğa hizmet edeceği, alanın metrekaresinden ve ekipmanın kapasitesinden çıkar; kayıtlı öğrenci sayısından değil. Çocuk başına 1,5 m² ölçütünü alt sınır olarak düşünün: 30 m²\'lik bir oyun alanı aynı anda en fazla 20 çocuk demektir. Üreticiden ekipmanın eşzamanlı kullanıcı kapasitesini yazılı isteyin ve gruplarınızı buna göre dönüşümlü planlayın.' },

      { type: 'h2', text: '2. Yaş gruplarını ayırın' },
      { type: 'p', text: 'İki yaşındaki bir çocukla altı yaşındaki bir çocuğun hızı, ağırlığı ve risk algısı aynı değildir. Küçük alanlarda bile iki bölge tanımlayın: alçak ve yumuşak [sünger modüllerden](/katalog?kategori=soft-play) oluşan bir küçük yaş köşesi ile tırmanma, kaydırak ve top havuzu içeren büyük yaş bölümü. Aradaki sınır alçak bir sünger bariyer olabilir; önemli olan, büyüklerin koşu hattının küçüklerin alanından geçmemesidir.' },
      { type: 'img', src: '/images/kres-2.jpg', alt: 'Kreş ve kafe serisi kompakt oyun grubunun dört farklı açıdan görünümü', caption: 'Kompakt bir oyun grubunun dört açıdan görünümü: tünel, top havuzu ve tırmanma bölümleri tek gövdede.', contain: true },

      { type: 'h2', text: '3. Her noktayı görün' },
      { type: 'p', text: 'Kapalı oyun yapıları için Avrupa standardı EN 1176-10, görülebilirliği ayrı bir güvenlik başlığı olarak ele alır. Tasarımdaki karşılığı şudur: öğretmenin ya da ebeveynin durduğu yerden tünelin içi, kaydırağın çıkışı ve top havuzu görülebilmelidir. Oyun grubunu duvara yaslarken kapalı kalan yüzleri ve kör köşeleri hesaba katın. Çocuk kafelerinde masaların oyun alanına bakması hem güvenlik hem de müşteri konforudur.' },

      { type: 'h2', text: '4. Modüler düşünün' },
      { type: 'p', text: '[Kompakt oyun grupları](/katalog?kategori=kres-kafe); kaydırak, top havuzu, tünel, tırmanma rampası ve sünger engel gibi modüllerin birleşiminden oluşur. Modüler sistemin küçük işletme için üç faydası vardır: ölçü mekânın kolonuna, penceresine ve kapısına göre uyarlanır; yıpranan parça tek başına değiştirilir; taşınma ya da büyüme durumunda yapı sökülüp yeniden kurulabilir.' },
      { type: 'img', src: '/images/galeri-yeni/galeri-29.png', alt: 'Top havuzu, tünel ve mini saha içeren iki katlı kompakt oyun grubu tasarımı', caption: 'Top havuzu, tünel ve mini saha içeren iki katlı kompakt bir tasarım.', contain: true },

      { type: 'h2', text: '5. Zemin ve hijyen' },
      { type: 'p', text: 'Zeminde iki özellik aranır: darbe sönümleme ve kolay temizlik. Düşme ihtimali olan her yüzeyin altı darbe sönümleyici olmalıdır; EN 1177 bu zeminleri, koruma sağladıkları en büyük düşme yüksekliğine göre değerlendirir. Karo zeminlerde birleşim yerlerinin kir tutmamasına, kaplamaların silinebilir olmasına dikkat edin. [Top havuzu](/katalog?kategori=havuzlar) varsa topların belirli aralıklarla boşaltılıp yıkanacağı bir temizlik planı hazırlayın; küçük yaş grubunda her şey ağza gider. Kaplama ve sünger seçiminin ayrıntıları [soft play malzeme seçimi](/blog/soft-play-malzeme-secimi) yazımızda.' },

      { type: 'h2', text: '6. Renk ve tema' },
      { type: 'p', text: 'Renk seçimi estetik olduğu kadar işlevseldir. Bölgeleri renkle ayırmak, örneğin küçük yaş köşesine ayrı bir palet vermek, çocukların alanı okumasını kolaylaştırır. Tüm yüzeyleri doygun renklerle kaplamak yerine birkaç ana renk seçip nötr bir zeminle dengelemek mekânı daha sakin ve daha geniş gösterir. Kurum renklerinizi ya da seçtiğiniz temayı üretim aşamasında kaplamalara ve panel baskılarına uygulatabilirsiniz.' },

      { type: 'h2', text: 'Teklif almadan önce hazırlayın' },
      { type: 'ul', items: [
        'Alanın ölçülü krokisi: tavan yüksekliği, kolon, pencere ve kapı yerleri.',
        'Hedef yaş aralığı ve alanı aynı anda kullanacak çocuk sayısı.',
        'Bağlı olduğunuz kurumun (MEB, Aile ve Sosyal Hizmetler Bakanlığı ya da belediye) alan şartları.',
        'Bütçe aralığı ve varsa kurum renkleri.',
      ] },
      { type: 'p', text: 'Benzer alanlarda yaptığımız kurulumları [galeride](/galeri) görebilir, ölçülerinizle birlikte [bize ulaşabilirsiniz](/iletisim).' },
    ],
    sources: [
      { label: 'MEB — Özel Öğretim Kurumları Standartlar Yönergesi (27.11.2025 değişikliğiyle)', url: 'https://ookgm.meb.gov.tr/meb_iys_dosyalar/2026_01/19165007_standartlaryonergesi.pdf' },
      { label: 'MEB — Özel Öğretim Kurumları Yönetmeliği değişikliği duyurusu (5 Eylül 2025)', url: 'https://www.meb.gov.tr/milli-egitim-bakanligi-ozel-ogretim-kurumlari-yonetmeliginde-degisiklik-yapilmasina-dair-yonetmelik-resmi-gazetede-yayimlandi/haber/38229/tr' },
      { label: 'EN 1176-10:2023 — Tamamen kapalı oyun ekipmanları için ek güvenlik gereklilikleri', url: 'https://standards.iteh.ai/catalog/standards/cen/6038c521-6c36-40a2-ad59-b106d533280f/en-1176-10-2023' },
      { label: 'EN 1177:2018+A1:2023 — Darbe sönümleyici oyun alanı zeminleri', url: 'https://standards.iteh.ai/catalog/standards/cen/8a9d50c2-fc9a-482a-9481-c0c73d573df1/en-1177-2018a1-2023' },
    ],
  },
};
