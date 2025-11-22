const allQuestionsData = [
    { question: "Ijtimoiy pedagogika fan sifatida rivojlanishning birinchi bosqichi nechanchi asrga to‘g‘ri keladi?", options: ["XVI asr", "XVII asr", "XVIII asr", "XX asr"], correctText: "XVII asr" },
    { question: "Ilmiy tadqiqot mohiyati?", options: ["Amaliy va nazariy bilimlar to‘plami", "Bilimlarni mujassmlashtirish jarayoni", "Hayotiy tajribalar", "Voqe’likning ma’lum sohasini o‘rganish jarayoni"], correctText: "Amaliy va nazariy bilimlar to‘plami" },
    { question: "Ijtimoiy pedagogikaning predmeti?", options: ["Bolaning ijtimoiylashuvi jarayoni hisoblanadi", "Bolaning o‘sib kelishi", "Bolani nazorat qilish", "Bolaning ta’lim – tarbiya jarayoni"], correctText: "Bolaning ijtimoiylashuvi jarayoni hisoblanadi" },
    { question: "Ijtimoiy pedagogikada “og‘ir guruhlarni” ayting:", options: ["Ishsizlar, kasalllar, jinoyatchi kishilar", "Yigitlar", "Ulfatlar", "Qizlar"], correctText: "Ishsizlar, kasalllar, jinoyatchi kishilar" },
    { question: "Ijtimoiy pedagogikaning obyektini ayting?", options: ["ijtimoiy hayotda adashgan kishilar", "ishsizlar", "jinoyatchi kishilar", "qizlar"], correctText: "ijtimoiy hayotda adashgan kishilar" },
    { question: "“Sotsiologiya” va “Pedagogikani” qo‘shilishiga nima deyiladi?", options: ["Fanlarning integratsiyasi", "Diferensiatsiya", "Ijtimoiylashuv", "Ijtimoiy muhit"], correctText: "Fanlarning integratsiyasi" },
    { question: "\"Vijdon deb ruhimizga, fikrimizga ta’sir qiladurhon hissiyot, ya’ni sezishni anglashdan iborat ma’naviy huvvatga aytilur. ... Vijdon insonning aql va fikrining haqiqiy mezonidirki, bu tarozu orqali o‘z kamcqiliklarimizni o‘lchab bilib olamiz ...\" iborasi qaysi pedagogning qalamiga mansub?", options: ["Abdullo Avloniy", "Alisher Navoiy", "Voiz Koshifiy", "H.H. Niyoziy"], correctText: "Abdullo Avloniy" },
    { question: "Murakkab ishni tez, aniq, oson, sifatli bajarish va yuqori mehnat unumdorligiga qiyincqiliklarsiz erishish hamda faoliyatda to‘la ishonch bilan o‘zini namoyon qilish nima orqali amalga oshadi?", options: ["mahorat", "mehnat", "izlanish", "qobiliyat"], correctText: "mahorat" },
    { question: "Kasbiy pedagogik tayyorgarlik yo‘nalishi qaysi qatorda to‘g‘ri ko‘rsatilgan?", options: ["pedagogning ijtimoiy pedagogik va ilmiy nazariy tayyorligi", "shaxsiy fazilati", "tashabbuskor", "ilmiy nazariy tayyorligi"], correctText: "pedagogning ijtimoiy pedagogik va ilmiy nazariy tayyorligi" },
    { question: "O‘qituvchilikni yer yuzidagi har qanday kasbdan yuqoriroq turadigan kasb deb kim e’tirof qilgan?", options: ["Y. Amos Komenskiy", "A. Disterverg", "Petrovskiy", "S. Jonson"], correctText: "Y. Amos Komenskiy" },
    { question: "XIX asrning 60-70 yillarida qayerda ijtimoiy qonunchilik tizimlari yaratildi?", options: ["AQSH", "Rossiyada", "Germaniyada", "Angliya"], correctText: "AQSH" },
    { question: "Ijtimoiy pedagogikaning rivojlanish bosqichllari nechta?", options: ["3", "4", "5", "7"], correctText: "3" },
    { question: "Ijtimoiy pedagogika rivojlanishining birinchi davri nima deb ataladi?", options: ["Boshlang‘ich davr", "O‘rta davr", "So‘nggi davr", "Oltin davr"], correctText: "Boshlang‘ich davr" },
    { question: "Ijtimoiy pedagogikaning boshlangich davri qancha davrni oz ichiga oladi?", options: ["17 asrgacha", "16 asr", "15 asr", "14 asr"], correctText: "17 asrgacha" },
    { question: "Ijtimoiy pedagogikaning rivojlanishining ikkinchi bosqichi qaysi davrni oz ichiga oladi?", options: ["17-19 asrgacha", "18 asr", "16-15 asr", "19 asr"], correctText: "17-19 asrgacha" },
    { question: "Bu davr ijtimoiy pedagogikaning goyalari va ilmiy konsepsiylarining rivijlantirish davri bo‘lgan edi?", options: ["2", "3", "1", "4"], correctText: "2" },
    { question: "Ijtimoiy pedagogikani rivojlanishini 3-bosqichi qaysi davrlarni o‘z ichiga oladi?", options: ["20-asrning boshi", "19-asrning boshi", "18-asrning boshi", "17-asrning boshi"], correctText: "20-asrning boshi" },
    { question: "20-asrning 90-yillarida qayerda ijtimoiy pedagogikaning rivojlanishining yangi davri boshlandi?", options: ["Rossiyada", "Germaniyada", "Angliya", "AQSH"], correctText: "Rossiyada" },
    { question: "Ijtimoiy pedagogikaning nechta asosiy vazifasini mavjud?", options: ["4", "2", "1", "7"], correctText: "4" },
    { question: "XIX asrning 60-70 yillarida qayerda ijtimoiy qonunchilik tizimlari yaratildi?", options: ["Angliya", "Rossiyada", "Germaniyada", "AQSH"], correctText: "Angliya" },
    { question: "“Avesto” qaysi dinning muqaddas kitobi?", options: ["Zardushtiylik", "Buddavizm", "Xristianlik", "Islom"], correctText: "Zardushtiylik" },
    { question: "“Avesto” dastlab nechta kitobdan iborat bo‘lgan?", options: ["21", "24", "72", "20"], correctText: "21" },
    { question: "“Avesto”ning vatani qayer bo‘lgan?", options: ["Xorazm, Buxoro, Samarqand", "Hindiston", "Xitoy", "AQSH"], correctText: "Xorazm, Buxoro, Samarqand" },
    { question: "Zardusht so‘zining ma’nosi?", options: ["Sariq tuya mingan", "Kitob", "Dinga oid qo‘llanma", "Qadimiy kitob"], correctText: "Sariq tuya mingan" },
    { question: "Savol-javob metodi orqali bilimlar qo‘lga kiritilishi haqida qaysi olim ta’kidlagan?", options: ["Xorazmiy", "Beruniy", "Ibn Sino", "A.Navoiy"], correctText: "Xorazmiy" },
    { question: "XX asr boshida o‘zbek pedagogik g‘oyasi nechi yo‘nalishga ajralgan?", options: ["3", "1", "2", "4"], correctText: "3" },
    { question: "Kimning fikricha Tarbiya ijtimoiy maqsadlarni ko‘zlashi kerak?", options: ["A.Avloniy", "Beruniy", "Ibn Sino", "A.Navoiy"], correctText: "A.Avloniy" },
    { question: "“Turkiy Guliston yoxud axloq” asari muallifi?", options: ["Avloniy", "Beruniy", "Ibn Sino", "A.Navoi"], correctText: "Avloniy" },
    { question: "O‘zbek maktab internatlarining ochilishiga faol ishtirok etgan shaxs....", options: ["G‘.G‘ulom", "Beruniy", "Ibn Sino", "A.Fitrat"], correctText: "G‘.G‘ulom" },
    { question: "“Avesto” nechta kitobdan tashkil topgan?", options: ["4", "8", "1", "6"], correctText: "4" },
    { question: "Aqliy kamolot nima?", options: ["Bilim va zakovat, o‘quvga ega bo‘lish", "O‘zgalarga g‘amxo‘r bo‘lish", "Aql – idroklilik", "Boshqalarning haq-huquqini himoya qilish"], correctText: "Bilim va zakovat, o‘quvga ega bo‘lish" },
    { question: "Zardushtiylik axloqining asosi bu...", options: ["Ezgu fikr, ezgu kamol, ezgu amal", "Ezgu niyat, ezgu kayfiyat, ezga amal", "Falsafa, siyosat, e’tiqod", "Saodat, e’tiqod, tafakkur."], correctText: "Ezgu fikr, ezgu kamol, ezgu amal" },
    { question: "Ma’naviy-axloqiy qadriyatlarni o‘z asarlarida aks ettirgan allomalar?", options: ["Y.Xos Xojib, A. Navoiy, Farobiy", "A. Disterverg", "Y. Kamenskiy", "Y. Kamenskiy, Farobi"], correctText: "Y.Xos Xojib, A. Navoiy, Farobiy" },
    { question: "Milliy, ma’naviy, umuminsoniy qadriyatlar asosida amalga oshiriladigan tarbiya turi?", options: ["axloqiy tarbiya", "aqliy tarbiya", "fuqarolik tarbiyasi", "mehnat tarbiyasi"], correctText: "axloqiy tarbiya" },
    { question: "«Rahbari najot» asarining muallifi?", options: ["A. Fitrat", "Shakuriy", "H.Hamza", "Y.Komenskiy"], correctText: "A. Fitrat" },
    { question: "“Aqllilik – biror ishni bajarishda shoshma-shosharlik qilishdan saqlovchi quvvat”. Ushbu fikr muallifini toping?", options: ["Abu Ali Ibn Sino", "Yusuf Xos Xojib", "Kaykovus", "A.Makarenko"], correctText: "Abu Ali Ibn Sino" },
    { question: "“Badanning salomat va quvvatli bo‘lmog‘i insonga eng kerakli narsadir. Chunki, o‘qimoq, o‘qitmoq, o‘rganmoq va o‘rgatmoq uchun insonga kuch va sog‘lik lozimdur”. Ushbu fikr muallifini toping?", options: ["Abdulla Avloniy", "Mahmudxo‘ja Behbudiy", "Yusuf Xos Xojib", "Kaykovus"], correctText: "Abdulla Avloniy" },
    { question: "“Insonlarni yaxshilikka chaqiruvchi, yomonlikdan qaytarguvchi bir ilmdir. Yaxshi xulqlarning yaxshiligini, yomon xulqlarning yomonligini dalil va misollar bilan bayon qiladurgon kitobni axloq deyilur”. Ushbu fikr muallifini toping?", options: ["Abdulla Avloniy", "A. Fitrat", "SHakuriy", "H.Hamza"], correctText: "Abdulla Avloniy" },
    { question: "«Ilm insonlarning madori, Hayoti, rahbari najotidur. Agar aqlingni qo‘li nafsingni jilovini ushlasa, sani yomoni yo‘llarga kirmoqdan saqlar. Har narsa ko‘p bo‘lsa, bahosi arzon bo‘lur, ammo aql esa ilm va tajriba soyasida qancha ko‘paysa, shuncha qimmatbaho bo‘lur». Insonga va uning aqliga ana shunday yuksak baho bergan muallif kim?", options: ["Abdulla Avloniy", "Farobiy", "A.Navoiy", "Ibn Sino"], correctText: "Abdulla Avloniy" },
    { question: "..... bola tarbiyasini nisbiy ravishda quyidagi to‘rt bo‘limga ajratadi: 1. «Tarbiyaning zamoni». 2. «Badan tarbiyasi». 3. «Fikr tarbiyasi». 4. «Axloq tarbiyasi»", options: ["Abdulla Avloniy", "Mahmudxo‘ja Behbudiy", "Farobiy", "Kaykovus"], correctText: "Abdulla Avloniy" },
    { question: "O‘zbek xalq pedagogikasining o‘ziga xos xususiyatlaridan biri bu……", options: ["xalq og‘zaki ijodi matnlarida tarbiyaning vosita, usullarining tavsifi berilganligi", "Murakkabligi", "ilmiyligi", "soddaligi"], correctText: "xalq og‘zaki ijodi matnlarida tarbiyaning vosita, usullarining tavsifi berilganligi" },
    { question: "Xalq pedagogikasida xalq og‘zaki ijodi namunalari ......... da o‘zining ifodasini topgan.", options: ["maqol, ertak, topishmoq, doston, rivoyatlar", "musiqa", "topishmoq", "ertak,rivoyat"], correctText: "maqol, ertak, topishmoq, doston, rivoyatlar" },
    { question: "Xalq og‘zaki ijodi namunalari qahday mazmunga ega?", options: ["pand, o‘git, nasihat", "musiqiy", "she’riy", "mazmunga ega bo‘lmaydi"], correctText: "pand, o‘git, nasihat" },
    { question: "Xalq og‘zaki ijodi namunalari qahday shaklga ega?", options: ["hikmatlar shaklida", "qoidalar shaklida", "murakkab shaklida", "shaklga ega bo‘lmaydi"], correctText: "hikmatlar shaklida" },
    { question: "Xalq og‘zaki ijodi namunalari xalqning ijtimoiy hayotga bo‘lgan qanday qarashlarini ifodalaydi.", options: ["real (hayotiy) qarashlarini", "afsonaviy qarashlarini", "qarashlarini ifodalamaydi", "murakkab shaklida"], correctText: "real (hayotiy) qarashlarini" },
    { question: "Xalq pedagogikasini o‘rganishga hissa qo‘shgan olimlar?", options: ["S.Rajabov, A.Ismoilova, M.Ochilov", "A.Makarenko", "A.Ismoilova,A.Makarenko", "M.Ochilov"], correctText: "S.Rajabov, A.Ismoilova, M.Ochilov" },
    { question: "Ikki narsa borki, ko‘pchilik ularni qadriga yetmaydi: biri sog‘lik, ikkinchisi ..?", options: ["Bo‘sh vaqt", "Ozodalik", "boylik", "uyqu"], correctText: "Bo‘sh vaqt" },
    { question: "O‘zbek xalq pedagogikasining o‘ziga xos xususiyati nima?", options: ["xalq og‘zaki ijodi", "ilmiyligi", "maqollarda", "murakkabligida"], correctText: "xalq og‘zaki ijodi" },
    { question: "Bolalar dastlab “Vatan”, “Xalq” tushunchalarining mohiyatini qayerda o‘zlashtiradi?", options: ["Oilada", "bolalar bog‘chasida", "maktabda", "mahallada"], correctText: "Oilada" },
    { question: "Eng qadimgi madaniy boyliklarning o‘rganishdagi manbalar qaysi javobda to‘liq o‘z aksini topgan?", options: ["Xalq ogzaki ijodi, buyuk adiblarning asarlari, arxeologik qazilmalar natijasida topilgan ashyolar.", "Xalq ogzaki ijodi materiallari.", "Etnografiya va arxeolgiya materiallari.", "buyuk adiblar, allomalarning ijodiy merosi."], correctText: "Xalq ogzaki ijodi, buyuk adiblarning asarlari, arxeologik qazilmalar natijasida topilgan ashyolar." },
    { question: "Topishmoq, lapar, rivoyat, afsona, ertak, dostonlar ..........da o‘rganiladi?", options: ["o‘zbek xalq pedagogikasi", "o‘zbek ijtimoiy pedagogikasi", "pedagogika", "psixologiya"], correctText: "o‘zbek xalq pedagogikasi" },
    { question: "Hadis ilmining yaratilishida oltin davr qaysi asrga to‘g‘ri keladi?", options: ["VIII- IX asrlar", "VII asr", "XV asr", "X asr"], correctText: "VIII- IX asrlar" },
    { question: "«As – saxix » to‘plami qaysi muxaddis – vatandoshimiz ijodiga mansub?", options: ["Imom Ismoil Al – Buxoriy", "Imom Ismoil Al –Nishopuriy", "Imom ibn Mojja", "Imom ibn Iso at – Termiziy"], correctText: "Imom Ismoil Al – Buxoriy" },
    { question: "Hadis ilmida «Sahih» yo‘nalishining asoschisi kim?", options: ["Imom al- Buxoriy", "Abu Iso at- Termiziy", "Imom Axmad an Nasoiy", "Imom Abu Dovud Sulaymon Sijistoniy"], correctText: "Imom al- Buxoriy" },
    { question: "«Al –Jome as – saxix » asrning mualifi kim?", options: ["Imom al- Buxoriy", "Abu Iso at- Termiziy", "An –Nasoiy", "Imom ibn Mojja"], correctText: "Imom al- Buxoriy" },
    { question: "Islom dini Mavoraunnahrga qachon kirib keldi?", options: ["VIII-asrda", "V-asrda", "VI-asrda", "IX-asrda"], correctText: "VIII-asrda" },
    { question: "Hadisu Sharifda ilm o‘rganish farz deyiladi. Buning ma’nosi nima?", options: ["Xoh og‘il, xoh qiz bola odobi, axloq qoidalarini diniy va dunyoviy bilimlarini o‘rganishlari shart.", "Imkon doirasida ilm o‘rganish.", "Iqtisodiy bilimlarni o‘rganish.", "Xayotda zarur bo‘ladigan bilimlarni o‘rganish."], correctText: "Xoh og‘il, xoh qiz bola odobi, axloq qoidalarini diniy va dunyoviy bilimlarini o‘rganishlari shart." },
    { question: "Qur’oni Karimda ilm so‘zi nechi marta qo‘llanilgan?", options: ["750dan ortiq", "850dan ortiq", "650dan ortiq", "800dan ortiq"], correctText: "750dan ortiq" },
    { question: "Payg‘ambarimizning qilgan amallari, aytgan gaplari jamlanmasi bu..?", options: ["hadis", "rivoyat", "afsona", "suhbat"], correctText: "hadis" },
    { question: "A.Buxoriy qancha hadisi yod olingan?", options: ["600000", "7000", "50000", "65000"], correctText: "600000" },
    { question: "Ijtimoiy pedagogning funksiyalarini toping?", options: ["Bashorat qilish, tashxis, korreksiya, himoya qilish,oldini olish,Vositachilik", "Bashorat qilish", "Vositachilik.", "Ximoya qilish."], correctText: "Bashorat qilish, tashxis, korreksiya, himoya qilish,oldini olish,Vositachilik" },
    { question: "Ijtimoiy pedagogning reabilitatsion funksiyasi qaysi javobda to‘g‘ri berilgan?", options: ["Jamiyat ichiga qaytarish, oilasiga qaytarish.", "Bolaning ma’lumotlarini mahalladan huquq targ‘ibot organlaridan kerakli ma’lumotlarni olish.", "Me’yordan og‘ishgan bolani diagnoz qilish.", "Me’yoridan og‘ishgan bolalarni yomon yo‘lga kirib ketishidan bolani himoya qilish."], correctText: "Jamiyat ichiga qaytarish, oilasiga qaytarish." },
    { question: "Ijtimoiy pedagogika fan sifatida rivojlanishning birinchi bosqichi nechanchi asrga to‘g‘ri keladi?", options: ["XVII asr.", "XVI asr.", "XV asr.", "XIV asr."], correctText: "XVII asr." },
    { question: "O‘zbekiston Respublikada’’ oila yili’’ deb qachon e’lon qilindi?", options: ["1998 yil.", "1999 yil.", "1997 yil.", "1996 yil."], correctText: "1998 yil." },
    { question: "Profilaktika so‘zining ma’nosi?", options: ["Noxush oqibatlarni keltirib chiqaruvchi,sabablarni bartaraf etish.", "Oqibat, sabablarni nazorat qilish.", "Voyaga yetmaganlarning keyingi taqdirini hal qilishda ishtirok etish.", "Bolalarni nazorat qilish"], correctText: "Noxush oqibatlarni keltirib chiqaruvchi,sabablarni bartaraf etish." },
    { question: "Yosh avlodni hayotga, mehnatga tayyorlash, xalq, davlat oldida javobgarlikni his etishga, ta’lim - tarbiya berishga tayyorlanish inson mehnatining ... faoliyatidir .", options: ["pedagogik", "shaxsiy - ijtimoiy.", "ma’naviy - madaniy.", "ijodiy"], correctText: "pedagogik" },
    { question: "Idrok so‘zining ma’nosi?", options: ["Idrok – aniq maqsadga yo‘naltirilgan anglash jarayoni.", "oddiy tayyorgarligi.", "ijodiy xususiyatlar", "ruhiy holat."], correctText: "Idrok – aniq maqsadga yo‘naltirilgan anglash jarayoni." },
    { question: "Ilmiy dunyoqarash, e’tiqod, iymon, ijtimoiy ehtiyoj va ma’naviy - axloqiy salohiyat, fuqarolik burchini his etish, ijtimoiy - siyosiy faollik pedagogning qanday xususiyatlariga kiradi?", options: ["shaxsiy va kasbiy", "shaxsiy.", "kasbiy.", "ilmiy - pedagogik."], correctText: "shaxsiy va kasbiy" },
    { question: "O‘quvchi - tarbiyalanuvcqilarning ijtimoiy foydali faoliyatini har tomonlama va muntazam rahbatlantirib, tarbiyaviy vazifalarni aniq bajarishga yo‘naltirilgan usul bu ... dir", options: ["jamoatcqilik fikri.", "Istiqbol.", "demokratik", "talab"], correctText: "jamoatcqilik fikri." },
    { question: "Ijtimoiylashuv so‘zi dastlab qanday kelib chiqan?", options: ["siyosiy iqtisodiyotdan", "nazariy iqtisodiyotdan", "iqtisodiyotdan", "psixologiya"], correctText: "siyosiy iqtisodiyotdan" },
    { question: "Ijtimoiylashuv atamasini birinchi bo‘lib kim insonlarga nisbatan qo‘llagan?", options: ["Amerkalik sotsiyolik F G Keddings", "E. Dyurkjgeym", "R. Mertoj", "Ya.Kamenskiy"], correctText: "Amerkalik sotsiyolik F G Keddings" },
    { question: "Ijtimoiy moslashuv nima?", options: ["Iijtimoiy muhit talablariga insoning munosabat bildirishi", "O‘z qarashlariga ega bo‘lish", "O‘ziga hosligiga ega bo‘lish", "Loqauydlik"], correctText: "Iijtimoiy muhit talablariga insoning munosabat bildirishi" },
    { question: "Bolaning barqaror rivojlanishni eng muhim shartlaridan biri bu…", options: ["muloqot", "oila", "jamiyat", "xulq atvor"], correctText: "muloqot" },
    { question: "I.P.Podlasiy tasnifi bo‘yicha ijtimoiylashuv mehanizimlari nechta?", options: ["12", "11", "10", "9"], correctText: "12" },
    { question: "Ijtimoiy maqom nima ?", options: ["Insonning jamyatdagi huquq va majburyatlari bilan tavsiflanadigan mavqeyi", "Bolani tarbiyalash", "Ijtimoiy hulq atvor", "Iijtimoiy rivojlanish"], correctText: "Insonning jamyatdagi huquq va majburyatlari bilan tavsiflanadigan mavqeyi" },
    { question: "“Ijtimoiylashuv nazaryasi” asar mualifi kim ?", options: ["F G Kiddings", "A. Komeniski", "Farobiy", "A.Navoiy"], correctText: "F G Kiddings" },
    { question: "Sotsium yoki mikrosotysiumga tariff bering?", options: ["shaxs tug‘ulganidan boshlab rivojlanadigan muhit, umri davomida rivojlanadigan muhit", "shaxs tug‘ulganidan boshlab rivojlanadigan muhit", "muhit", "umri davomida rivojlanadigan muhit"], correctText: "shaxs tug‘ulganidan boshlab rivojlanadigan muhit, umri davomida rivojlanadigan muhit" },
    { question: "Me’yor tushunchasi qaysi fandan kirib kelgan.", options: ["Sotsiologiya", "Ekologiya", "Iqtisod", "Pedagogika"], correctText: "Sotsiologiya" },
    { question: "M.A.Galaguzova me’yordan og‘ish turlarini nechtaga bo‘lgan.", options: ["4", "5", "6", "3"], correctText: "4" },
    { question: "XIX asrning 60-70 yillarida qayerda ijtimoiy konunchilik tizimlari yaratildi.", options: ["Angliya", "Rossiyada", "Germaniyada", "AQSH"], correctText: "Angliya" },
    { question: "Ijtimoiy me’yordan og‘ish og‘ishning …….turi hisoblanadi?", options: ["4", "3", "2", "1"], correctText: "4" },
    { question: "Umumjahon sog‘liqni saqlash tashkiloti 1980-yilda cheklangan imkoniyatlarni nechta bo‘g‘inini qabul qildi?", options: ["3", "4", "5", "6"], correctText: "3" },
    { question: "Oilaning funksiyalarini aniqlang?", options: ["Reproduktiv, ijtimoiy", "Ijtimoiy", "Mahalliy", "Ilmiy"], correctText: "Reproduktiv, ijtimoiy" },
    { question: "Xulq-atvor me’yorlaridan chetga chiqgan o‘smirlar qanday ataladi?", options: ["Tarbiyasi og‘ir o‘smirlar", "Ahloqsiz bolalar", "Loqayd bolalar", "Imkoniyati cheklangan bolalar"], correctText: "Tarbiyasi og‘ir o‘smirlar" },
    { question: "Vasiylik bu?", options: ["Voyaga yetmagan yetim bolalarga ular voyaga yetguncha g‘amxo‘rlik qilish", "Majburiyat", "O‘rtakashlik", "Homiy"], correctText: "Voyaga yetmagan yetim bolalarga ular voyaga yetguncha g‘amxo‘rlik qilish" },
    { question: "Deviatsiya ma’nosi nima?", options: ["Og‘ish", "Me’yor", "Bola", "Xulq-atvor"], correctText: "Og‘ish" },
    { question: "Deviatsiya necha xil bo‘ladi?", options: ["3", "4", "5", "1"], correctText: "3" },
    { question: "Yetimlikning necha xil sabablari mavjud?", options: ["3", "1", "2", "7"], correctText: "3" },
    { question: "Ruhiy og‘ish qanday nuqsonlarga bog‘liq ?", options: ["Bolaning aqliy rivojlanishi hamda ruhiy nuqsonlariga bog‘liq", "Ko‘rish qobiliyatlarining buzilishlariga bog‘liq", "Eshitish qobiliyatlarining buzilishlariga bog‘liq", "Nutq qobiliyatlarining buzilishlariga bog‘liq"], correctText: "Bolaning aqliy rivojlanishi hamda ruhiy nuqsonlariga bog‘liq" },
    { question: "Jismoniy rivojlanishidagi y og‘ish qanday nuqsonlarga bog‘liq ?", options: ["Kasallik, ko‘rish, eshitish qobiliyatlarining buzilishlari", "Doimiy o‘g‘ish", "Bolaning nuqsonlariga bog‘liq", "Bolaning aqliy rivojlanishi hamda ruhiy nuqsonlariga bog‘liq"], correctText: "Kasallik, ko‘rish, eshitish qobiliyatlarining buzilishlari" },
    { question: "Ijtimoiy pedagogikada qanday og‘ish turlari bor?", options: ["Jismоniy og‘ish", "Ruхiy og‘ish", "Pеdagоgik og‘ish", "Ijtimоiy og‘ish"], correctText: "Jismоniy og‘ish" },
    { question: "Vasiylik nechi yoshgacha bo‘lgan bolalar ustidan o‘rnatiladi?", options: ["14- 18y.", "14-15y.", "12-14y.", "14-16y."], correctText: "14- 18y." },
    { question: "Oilaning Reproduktiv funksiyani aniqlang", options: ["Nasilni davom ettirish", "Mablag‘ bilan bog‘liq", "Mahsulot bilan bog‘liq", "Moliya bilan bog‘liq"], correctText: "Nasilni davom ettirish" },
    { question: "Oilaning Iqtisodiy funksiyaning aniqlang", options: ["Moddiy mablag‘ topish", "Nasilni davom ettirish", "Oilaviy an’analar bilan", "Moliya bilan bog‘liq"], correctText: "Moddiy mablag‘ topish" },
    { question: "Yetim bolalarga vasiylik qilish necha xil yo‘l bilan amalga oshiradi?", options: ["2 xil", "4xil", "6 xil", "1 xil"], correctText: "2 xil" },
    { question: "Inson kamolatida uch narsa- « irsiyat, muhit, tarbiya» muxim rol’ o‘ynaydi degan fikrni ilk bor ilgari surgan olim....", options: ["Ibn Sino", "Forobiy", "Beruniy", "Al- Motrudiy"], correctText: "Ibn Sino" },
    { question: "Biror kimsani himoya etish,tarafini olish ijtimoiy pedagogikada nima dep ataladi?", options: ["Homiylik", "Vasiylik", "Do‘stlik", "Mehribonlik"], correctText: "Homiylik" },
    { question: "O‘qituvchilik ixtisossi professiogrammasini aniq ko‘rsating.", options: ["ruhiy - pedagogik tayyorgarligi, maxsus - ijtimoiy tayyorgarligi, ixtisosga oid usuliy tayyorgarligi.", "shaxsiy y xususiyatlar.", "ruhiy - pedagogik", "ma’naviy - madaniy tayyorgarligi."], correctText: "ruhiy - pedagogik tayyorgarligi, maxsus - ijtimoiy tayyorgarligi, ixtisosga oid usuliy tayyorgarligi." },
    { question: "Insondagi dastlabki ijtimoiy tajriba va ijtimoiy xulq elementlari qayerda shakllanadi?", options: ["Oilada", "mahallada", "bog‘chada", "maktabda"], correctText: "Oilada" },
    { question: "Maxsus tashkil etilgan tarbiyaviy vositalarda shaxsni ijtimoiylashtiruvchi maskan?", options: ["maktab", "mahalla", "pullik tayyorlov kurslari", "oila"], correctText: "maktab" }
];



// LOGIKA
let currentQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let isClickable = true;

// Elementlar
const welcomeScreen = document.getElementById('welcome-screen');
const quizApp = document.getElementById('quiz-app');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const currentStatusEl = document.getElementById('current-status');
const scoreStatusEl = document.getElementById('score-status');
const progressBar = document.getElementById('progress-bar');
const modeNameEl = document.getElementById('mode-name');

function startMode(mode) {
    welcomeScreen.style.display = 'none';
    quizApp.style.display = 'block';
    
    if (mode === 'practice') {
        currentQuestions = [...allQuestionsData]; 
        modeNameEl.innerText = "Takrorlash";
    } else {
        // 30 talik Random Imtihon
        const shuffled = [...allQuestionsData].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 30);
        modeNameEl.innerText = "Imtihon (30)";
    }

    currentQuizIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    isClickable = true;
    optionsList.innerHTML = '';
    
    const currentData = currentQuestions[currentQuizIndex];
    
    // Savol matni
    questionEl.innerText = `${currentQuizIndex + 1}. ${currentData.question}`;
    
    // Progress
    const progressPercent = ((currentQuizIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentStatusEl.innerText = `${currentQuizIndex + 1} / ${currentQuestions.length}`;
    scoreStatusEl.innerText = `${score} to'g'ri`;

    // Variantlarni aralashtirish
    let shuffledOptions = [...currentData.options].sort(() => 0.5 - Math.random());
    const correctText = currentData.correctText;

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(opt, correctText, btn);
        optionsList.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnElement) {
    if (!isClickable) return;
    isClickable = false; // Ketma-ket bosishni oldini olish

    const buttons = document.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // To'g'risini ko'rsatamiz
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }

    scoreStatusEl.innerText = `${score} to'g'ri`;

    // 1.2 sekunddan keyin keyingisiga o'tish
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    quizApp.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;
    
    document.getElementById('total-count').innerText = `/ ${total}`;
    document.getElementById('final-score').innerText = score;
    
    const msgEl = document.getElementById('result-message');
    if (percentage >= 80) msgEl.innerText = "Ajoyib natija! 🎉";
    else if (percentage >= 60) msgEl.innerText = "Yaxshi, lekin yana o'qing. 📚";
    else msgEl.innerText = "Qayta urinib ko'ring. 💪";
}