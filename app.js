
let count = document.getElementById('count'),
surahText = document.getElementById('surahText'),
nextBtn = document.getElementById('next'),
backBtn = document.getElementById('back'),
audio = document.getElementById('audio'),
currentSourceIndex = 0;

// AUDIO SOURCE -----------------------------
let audioSources = [
    "audios/Mulk surah 1.mp3",   "audios/Mulk surah 2.mp3",
    "audios/Mulk surah 3.mp3",   "audios/Mulk surah 4.mp3",
    "audios/Mulk surah 5.mp3",   "audios/Mulk surah 6.mp3",
    "audios/Mulk surah 7.mp3",   "audios/Mulk surah 8.mp3",
    "audios/Mulk surah 9.mp3",   "audios/Mulk surah 10.mp3",
    "audios/Mulk surah 11.mp3",  "audios/Mulk surah 12.mp3",
    "audios/Mulk surah 13.mp3",  "audios/Mulk surah 14.mp3",
    "audios/Mulk surah 15.mp3",  "audios/Mulk surah 16.mp3",
    "audios/Mulk surah 17.mp3",  "audios/Mulk surah 18.mp3",
    "audios/Mulk surah 19.mp3",  "audios/Mulk surah 20.mp3",
    "audios/Mulk surah 21.mp3",  "audios/Mulk surah 22.mp3",
    "audios/Mulk surah 23.mp3",  "audios/Mulk surah 24.mp3",
    "audios/Mulk surah 25.mp3",  "audios/Mulk surah 26.mp3",
    "audios/Mulk surah 27.mp3",  "audios/Mulk surah 28.mp3",
    "audios/Mulk surah 29.mp3",  "audios/Mulk surah 30.mp3",
    // Add more audio sources as needed...
];


// SURAH MULK TEXT -----------------------------
let textSources = [
    "Aузу билляхи мина ш-шайтани р-раджим. Бисмилла\'хи Рохма\'ни Рохийм. Таба\'рокал-лазий би-йадихил Мулку ва хува ъала\' кулли шай-ин кодийр.",
    "Алазий холакол мавта валхайа\'талийаблувакум аййукум ахсану ъамала\',ва хувал ъазийзул Fофу\'р.",
    "Алазий холако сабъа сама\'ватин тиба\'ко\'. Ма\'таро\' фий холкир рохма\'ни мин тафа\'вут. Фаржиъил-басоро хал таро\' мин футу\'р.",
    "Суммаржиьил басоро карротайн йанколиб илайкалбасору хо\'си-ав ва хува хасийр.",
    "Ва лакод заййаннас-сама\'ад-дунйа\' бимасо\'бийха ва жаъална\'ха\' ружу\'мал лиш-шайа\'тийн, Ва аътадна\' лахум ъаза\'бас-саъийр",
    "Ва лиллазийна кафару\' бироббихим ъаза\'бу жаханнам, ва би-салмасийр.",
    "Иза\' улку\' фийха\' самиъу\' лаха\'шахийкон ва хийа тафу\'р.",
    "Така\'ду тамаййазу минал-ғойз.Куллама\' улкийа фийха\' фавжун са-алахум хозанатуха\' а лам йа-тикум назийр.",
    "Ко\'лу бала\' код-жаъа\'ана\' назийрун факаззабна\' ва кулна\'ма\' наззалалло\'ху мин шай-ин ин антум илла фий зола\'лин кабийр.",
    "Ва ко\'лу\' лав кунна\' насмаъу ав наъклу ма\' кунна\' фий асха\'биссаъийр.",
    "Фаьтарофу бизамбихим фасухкол лиасха биссавийр.",
    "Инналлазийна йахшавна роббахум бил-ғойби лахум мағфиротив ва ажрун кабийр.",
    "Ва асирру\' ковлакум авижару\' бихи\', инаху\' ъалиймум биза\'тис-суду\'р.",
    "А ла\' йаъаму ман холако ва хувал-латийфул хобийр.",
    "Хуваллазий жаъала лакумуларзо залу\'лан фамиу\' фий мана\'кибиха\' ва кулу\' мирризкихи ва илайхин-нушу\'р.",
    "Ааминтум ман фиссама\"и аййахсифа бикумуларзо фаиза\' хийа таму\'р.",
    "Амаминтум ман фис-сама\"и аййурсила ъалайкум ха\'сиба\'. Фасатаь\'ламу\'на кайфа назийр.",
    "Ва лакод каззабаилазийна мин коблихим факайфа ка\'на накийр.",
    "Ва лам йаров илаттойри фавкохум со\"ффа\'тив ва йакбизн. Ма\' йумскухунна илларрохма\'н. Иннаху бикулли шай-им басир.",
    "Амман ха\'заллазий хува жундул лакум йансурукум мин ду\'нир рохма\'н.",
    "Амман ха\'заллазий йарзукукум ин амсака ризкох. Бал лажку фий ъутуввив ва нуфу\'р.",
    "А фамай йамший мукиббан ъала\' важхихи ахда\' аммай йамший савиййан ъала\' сиро\'тим мустакийм.",
    "Кул хуваллазий анша-акум важаъала лакумуссамьа валабсо\'ро валаф\'идах. Колийлам ма\' ташкуру\'н.",
    "Кул хуваллазий заро-акум филарзи ва илайхи тухшару\'н.",
    "Ва йаку\'лу\'на мата\' ха\'залваьду ин кунтум содикийин.",
    "Кул иннамальилму ъиндаллохи ва иннама\' ана назийрум мубийн.",
    "Фаламма\' роавху зулфатан сий\"ат вужу\'хуиллазийна кафару\' ва кийла ха\'заллазий кунтум бихи\' таддаъу\'н.",
    "Кул ароайтумин ин ахлаканийаллоху ва мам маьийа ав рохимана\' фамай йужийрулка\'фирийна мин ъаза\' биалийм.",
    "Кул хуваррохма\'ну аминна\' бихим\' ва ъалайхи таваккална фасатаьламу\'на ман хува фий зола\'лим мубийн.",
    "Кул аро-айтум ин асбаха ма\'укум ғоврон фамай йа-тийкум бима\"им маьийн.",
]


// NEXT BUTTON -----------------------------
nextBtn.addEventListener('click', function(){
    //Increment the current source index
    currentSourceIndex++;

    // If the current source index is greater than or equal to the length of the audio sources array, reset it to 1;
    if (currentSourceIndex >= textSources.length){
        currentSourceIndex = 0;
    }

    count.innerHTML = currentSourceIndex+1;
    surahText.innerHTML = textSources[currentSourceIndex];
    audio.pause();
    let source = audio.getElementsByTagName('source')[0];
    source.src = audioSources[currentSourceIndex];
    audio.load();
});

// BACK BUTTON -----------------------------
backBtn.addEventListener('click', function(){
    //Decrement the current source index
    currentSourceIndex--;

   // If the current source index is less than 1, reset it to 30;
   if (currentSourceIndex < 0){
    currentSourceIndex = 29;
   } 

   count.innerHTML = currentSourceIndex+1;
   surahText.innerHTML = textSources[currentSourceIndex];
   let source = audio.getElementsByTagName('source')[0];
   source.src = audioSources[currentSourceIndex];
   audio.load();
})




