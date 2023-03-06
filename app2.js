 let options = {
        strings: ['As-salamu alaykum', 
                  'in this program you can memorize', 
                  'a number of surahs,',
                  'for now here is surah Mulk,',
                  'and we are working on the rest...'],
        typeSpeed: 50,
        startDelay: 1000,
        backSpeed: 20,
        backDeelay: 1000,
        loop: true,
        loopCount: Infinity,
    };
    let typed = new Typed('.element', options);

    // Surah Kahf
    let surahKahf = document.getElementById('surahKahf');
    let surahRahman = document.getElementById('surahRahman');

    surahKahf.addEventListener('click', function(){
      alert('we are working on it!')
      alert('If you have a question or suggestion, just write an email.')
    })
    surahRahman.addEventListener('click', function(){
      alert('we are working on it!')
      alert('If you have a question or suggestion, just write an email.') })     