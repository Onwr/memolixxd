const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Günaydın");
    }

    else if(hr == 12) {
        speak("Tünaydın");
    }

    else if(hr > 12 && hr <= 17) {
        speak("İyi Günler");
    }

    else {
        speak("İyi akşamlar");
    }
}

window.addEventListener('load', ()=>{
    speak("Memoli Etkinleştirildi");
    speak("Artık Çevrimiçi");
    speak("Ben Memoli, Web tabanlı bir yapay zekayım ve Onur Kürkaya tarafından geliştirildim.");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Anlamadım";

    if(message.includes('Merhaba') || message.includes('merhaba')) {
        const finalText = "merhaba";
        speech.text = finalText;
    }

    else if(message.includes('kimsin sen')) {
        const finalText = "Ben Memoli, Onur Kürkaya tarafından kodlanan bir yapay zekayım."
        speech.text = finalText;
    }

    else if(message.includes('ankara trafik')) {
        const finalText = "Şuan Ankarada trafik yoğunluğu %43"
        speech.text = finalText;
    }

    else if(message.includes('nasılsın')) {
        const finalText = "iyiyim elhamdulillah, siz nasılsınız?";
        speech.text = finalText;
    }

    else if(message.includes('rap yap')) {
        const finalText = "Her siyah beyaz fotoğraf şeffaf bi pencere sol elin var hep yüzümde bana bi bukle külfet.";
        speech.text = finalText;
    }

    else if(message.includes('adın ne')) {
        const finalText = "Benim adım Memoli";
        speech.text = finalText;
    }

    else if(message.includes('google aç')) {
        window.open("https://google.com", "_blank");
        const finalText = "Google Açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('youtube aç')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Youtube açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('şarkı aç') || message.includes('video aç') || message.includes('youtubede ara')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "internette bununla ilgili bulduğum şey " + message;
        speech.text = finalText;
    }

    else if(message.includes('instagram aç')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "instagram açılıyor";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Wikipedia'da bununla ilgili bulduğum şey bu " + message;
        speech.text = finalText;
    }

    else if(message.includes('saat kaç')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('bugün ayın kaçı')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}