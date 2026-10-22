// DATA 25 SOAL UJIAN TEORI SIM C RESMI
const questionsData = [
    {
        id: 1,
        question: "Rambu lalu lintas berbentuk segitiga sama sisi dengan warna dasar merah/kuning menandakan apa?",
        options: [
            { key: "a", text: "Petunjuk jalan" },
            { key: "b", text: "Larangan" },
            { key: "c", text: "Peringatan" },
            { key: "d", text: "Perintah" }
        ],
        answer: "c",
        explanation: "Rambu berbentuk segitiga (biasanya dengan warna dasar kuning atau pinggiran merah) berfungsi memberi peringatan adanya potensi bahaya atau tempat berbahaya di jalan."
    },
    {
        id: 2,
        question: "Apa arti marka jalan berupa garis putih putus-putus di tengah jalan?",
        options: [
            { key: "a", text: "Kendaraan tidak boleh menyalip" },
            { key: "b", text: "Kendaraan boleh menyalip jika aman" },
            { key: "c", text: "Kendaraan harus berhenti" },
            { key: "d", text: "Jalur khusus sepeda motor" }
        ],
        answer: "b",
        explanation: "Marka garis putih putus-putus membolehkan pengemudi untuk berpindah lajur atau mendahului kendaraan lain dengan tetap memperhatikan keselamatan dari arah depan."
    },
    {
        id: 3,
        question: "Ketika lampu lalu lintas berwarna kuning menyala, pengendara harus…",
        options: [
            { key: "a", text: "Berhenti segera" },
            { key: "b", text: "Hati-hati dan bersiap berhenti" },
            { key: "c", text: "Langsung jalan cepat" },
            { key: "d", text: "Belok ke kiri" }
        ],
        answer: "b",
        explanation: "Lampu kuning merupakan sinyal peringatan agar pengendara mengurangi kecepatan dan bersiap berhenti sebelum garis henti, bukan untuk memacu kecepatan."
    },
    {
        id: 4,
        question: "Apa yang harus dilakukan saat berkendara di jalan licin?",
        options: [
            { key: "a", text: "Menambah kecepatan" },
            { key: "b", text: "Mengurangi kecepatan dan jaga jarak aman" },
            { key: "c", text: "Gunakan klakson terus-menerus" },
            { key: "d", text: "Rem mendadak" }
        ],
        answer: "b",
        explanation: "Kondisi jalan licin mengurangi daya cengkeram ban. Kurangi kecepatan dan gandakan jarak aman untuk mencegah ban tergelincir saat pengereman."
    },
    {
        id: 5,
        question: "Rambu berbentuk lingkaran merah dengan garis miring berarti…",
        options: [
            { key: "a", text: "Perintah wajib" },
            { key: "b", text: "Petunjuk arah" },
            { key: "c", text: "Larangan" },
            { key: "d", text: "Peringatan bahaya" }
        ],
        answer: "c",
        explanation: "Rambu berbentuk lingkaran dengan batas merah dan garis diagonal/silang melambangkan larangan bagi pengguna jalan (seperti dilarang parkir, dilarang masuk, dilarang putar balik)."
    },
    {
        id: 6,
        question: "Apa fungsi utama helm berstandar SNI?",
        options: [
            { key: "a", text: "Hanya sebagai syarat formal" },
            { key: "b", text: "Melindungi kepala dari benturan saat kecelakaan" },
            { key: "c", text: "Menambah gaya saat berkendara" },
            { key: "d", text: "Menghindari tilang polisi" }
        ],
        answer: "b",
        explanation: "Helm SNI telah lolos uji ketahanan material untuk meredam energi benturan langsung ke tempurung kepala saat terjadi insiden."
    },
    {
        id: 7,
        question: "Ketika mendekati perlintasan kereta tanpa palang pintu, pengendara wajib…",
        options: [
            { key: "a", text: "Langsung melintas" },
            { key: "b", text: "Berhenti sejenak, pastikan aman baru melintas" },
            { key: "c", text: "Membunyikan klakson panjang" },
            { key: "d", text: "Menyalip kendaraan di depan" }
        ],
        answer: "b",
        explanation: "Sesuai UU No. 22 Tahun 2009 Pasal 114, pengemudi wajib berhenti sejenak, menengok kanan dan kiri untuk memastikan tidak ada kereta api yang akan lewat."
    },
    {
        id: 8,
        question: "Jika pengendara melawan arus lalu lintas, sanksinya adalah…",
        options: [
            { key: "a", text: "Denda tilang dan poin pelanggaran" },
            { key: "b", text: "Teguran lisan" },
            { key: "c", text: "Hanya diperingatkan" },
            { key: "d", text: "Tidak ada sanksi" }
        ],
        answer: "a",
        explanation: "Melawan arus lalu lintas sangat berisiko fatal dan merupakan pelanggaran berat dengan sanksi tilang denda maksimal sesuai UU LLAJ."
    },
    {
        id: 9,
        question: "Batas kecepatan di kawasan pemukiman umumnya adalah…",
        options: [
            { key: "a", text: "30 km/jam" },
            { key: "b", text: "40 km/jam" },
            { key: "c", text: "50 km/jam" },
            { key: "d", text: "60 km/jam" }
        ],
        answer: "a",
        explanation: "Berdasarkan Permenhub No. 111 Tahun 2015, batas kecepatan tertinggi untuk kawasan permukiman/lingkungan perumahan adalah 30 km/jam demi keamanan warga dan anak-anak."
    },
    {
        id: 10,
        question: "Apa arti garis kuning ganda di tengah jalan?",
        options: [
            { key: "a", text: "Boleh menyalip ke arah kanan" },
            { key: "b", text: "Tidak boleh menyalip dari dua arah" },
            { key: "c", text: "Jalur khusus kendaraan besar" },
            { key: "d", text: "Hanya untuk darurat" }
        ],
        answer: "b",
        explanation: "Dua garis utuh membujur di tengah jalan menandakan kendaraan dari kedua arah dilarang keras melintasi garis atau menyalip."
    },
    {
        id: 11,
        question: "Kapan pengendara motor harus menyalakan lampu utama di siang hari?",
        options: [
            { key: "a", text: "Saat hujan atau berkabut" },
            { key: "b", text: "Saat melintasi terowongan" },
            { key: "c", text: "Saat jalanan ramai" },
            { key: "d", text: "Semua benar" }
        ],
        answer: "d",
        explanation: "Selain kewajiban menyalakan lampu utama setiap saat di siang hari (UU LLAJ), pengendara wajib memastikan lampu menyala saat kondisi berkabut, hujan, maupun melewati terowongan."
    },
    {
        id: 12,
        question: "Apa yang harus diperhatikan saat menyalip kendaraan lain?",
        options: [
            { key: "a", text: "Pastikan jalur aman dan beri sinyal lampu sein" },
            { key: "b", text: "Menyalip dari sisi kiri" },
            { key: "c", text: "Menambah kecepatan secara mendadak" },
            { key: "d", text: "Menggunakan klakson keras" }
        ],
        answer: "a",
        explanation: "Menyalip harus didahului dengan menyalakan lampu sein, memastikan ruang depan cukup kosong, dan tidak membahayakan pengguna jalan dari lawan arah."
    },
    {
        id: 13,
        question: "Rambu berbentuk lingkaran biru dengan gambar panah berarti…",
        options: [
            { key: "a", text: "Petunjuk arah" },
            { key: "b", text: "Perintah yang harus diikuti" },
            { key: "c", text: "Larangan" },
            { key: "d", text: "Informasi umum" }
        ],
        answer: "b",
        explanation: "Rambu berbentuk lingkaran dengan latar belakang biru dan simbol putih merupakan rambu perintah wajib yang harus dipatuhi pengendara."
    },
    {
        id: 14,
        question: "Jika kendaraan di depan berhenti mendadak, apa yang sebaiknya dilakukan?",
        options: [
            { key: "a", text: "Klakson keras" },
            { key: "b", text: "Rem mendadak sambil jaga jarak aman" },
            { key: "c", text: "Menyalip dari kiri" },
            { key: "d", text: "Menambah kecepatan" }
        ],
        answer: "b",
        explanation: "Lakukan pengereman terukur sambil tetap menjaga kestabilan motor dan jarak aman agar tidak menabrak bumper kendaraan depan."
    },
    {
        id: 15,
        question: "Kapan wajib membawa STNK saat berkendara?",
        options: [
            { key: "a", text: "Hanya saat razia" },
            { key: "b", text: "Setiap saat berkendara" },
            { key: "c", text: "Saat malam hari" },
            { key: "d", text: "Saat melewati tol" }
        ],
        answer: "b",
        explanation: "STNK (Surat Tanda Nomor Kendaraan) adalah dokumen legitimasi resmi kendaraan yang wajib dibawa setiap kali berkendara di jalan raya."
    },
    {
        id: 16,
        question: "Apa fungsi zebra cross?",
        options: [
            { key: "a", text: "Tempat pejalan kaki menyeberang" },
            { key: "b", text: "Tempat parkir sementara" },
            { key: "c", text: "Jalur sepeda motor" },
            { key: "d", text: "Jalur khusus darurat" }
        ],
        answer: "a",
        explanation: "Zebra cross merupakan marka jalan garis-garis putih melintang yang berfungsi memberi hak prioritas bagi pejalan kaki untuk menyeberang jalan."
    },
    {
        id: 17,
        question: "Apa arti rambu berbentuk segi empat biru dengan gambar huruf “P”?",
        options: [
            { key: "a", text: "Perintah parkir dilarang" },
            { key: "b", text: "Area parkir" },
            { key: "c", text: "Perlintasan kereta api" },
            { key: "d", text: "Jalan prioritas" }
        ],
        answer: "b",
        explanation: "Rambu segi empat berwarna biru dengan simbol huruf 'P' putih merupakan rambu petunjuk tempat atau fasilitas parkir kendaraan."
    },
    {
        id: 18,
        question: "Apa arti lampu lalu lintas menyala merah?",
        options: [
            { key: "a", text: "Jalan terus" },
            { key: "b", text: "Bersiap berhenti" },
            { key: "c", text: "Wajib berhenti" },
            { key: "d", text: "Hanya berhenti jika ada petugas" }
        ],
        answer: "c",
        explanation: "Lampu merah mewajibkan seluruh pengemudi berhenti di belakang garis berhenti (stop line) sampai sinyal berubah hijau."
    },
    {
        id: 19,
        question: "Apa yang harus dilakukan jika ada ambulans dengan sirine melintas?",
        options: [
            { key: "a", text: "Ikut di belakangnya" },
            { key: "b", text: "Memberi jalan terlebih dahulu" },
            { key: "c", text: "Tetap pada jalur" },
            { key: "d", text: "Mendahului ambulans" }
        ],
        answer: "b",
        explanation: "Ambulans darurat adalah salah satu pengguna jalan yang memperoleh hak utama kelancaran lalu lintas sesuai pasal 134 UU LLAJ."
    },
    {
        id: 20,
        question: "Apa fungsi spion pada sepeda motor?",
        options: [
            { key: "a", text: "Hanya aksesoris" },
            { key: "b", text: "Untuk gaya" },
            { key: "c", text: "Memantau kondisi lalu lintas di belakang" },
            { key: "d", text: "Menghindari tilang" }
        ],
        answer: "c",
        explanation: "Kaca spion berfungsi membantu pengemudi memantau situasi lalu lintas di sisi samping dan belakang sebelum berbelok atau berpindah lajur."
    },
    {
        id: 21,
        question: "Saat hujan deras, apa yang sebaiknya dilakukan pengendara motor?",
        options: [
            { key: "a", text: "Berkendara lebih cepat agar cepat sampai" },
            { key: "b", text: "Berteduh jika hujan terlalu deras" },
            { key: "c", text: "Menggunakan lampu hazard terus-menerus" },
            { key: "d", text: "Menghindari jalan utama" }
        ],
        answer: "b",
        explanation: "Hujan yang sangat lebat menyebabkan jarak pandang sangat terbatas dan jalanan licin ekstrem. Menepi dan berteduh di tempat aman adalah tindakan paling selamat."
    },
    {
        id: 22,
        question: "Apa arti rambu berbentuk segitiga dengan gambar rusa?",
        options: [
            { key: "a", text: "Area hutan lindung" },
            { key: "b", text: "Waspada hewan melintas" },
            { key: "c", text: "Larangan berburu" },
            { key: "d", text: "Jalur wisata" }
        ],
        answer: "b",
        explanation: "Rambu segitiga bergambar hewan adalah rambu peringatan agar pengemudi berhati-hati terhadap kemungkinan hewan liar menyeberang jalan."
    },
    {
        id: 23,
        question: "Apa arti rambu bergambar orang berjalan kaki?",
        options: [
            { key: "a", text: "Dilarang masuk" },
            { key: "b", text: "Perlintasan pejalan kaki" },
            { key: "c", text: "Jalan khusus sepeda" },
            { key: "d", text: "Jalan bergelombang" }
        ],
        answer: "b",
        explanation: "Rambu ini mengingatkan pengemudi bahwa ada zona penyeberangan pejalan kaki sehingga wajib memperlambat laju kendaraan."
    },
    {
        id: 24,
        question: "Batas usia minimal pembuatan SIM C adalah…",
        options: [
            { key: "a", text: "15 tahun" },
            { key: "b", text: "16 tahun" },
            { key: "c", text: "17 tahun" },
            { key: "d", text: "18 tahun" }
        ],
        answer: "c",
        explanation: "Berdasarkan Peraturan Kepolisian (Perpol) No. 5 Tahun 2021 Pasal 7, batas usia minimal pemohon SIM C (kapasitas mesin s.d. 250cc) adalah 17 tahun."
    },
    {
        id: 25,
        question: "Apa tindakan terbaik jika ban motor pecah di jalan?",
        options: [
            { key: "a", text: "Rem mendadak" },
            { key: "b", text: "Pegang stang dengan kuat dan kurangi kecepatan perlahan" },
            { key: "c", text: "Segera belok ke kiri mendadak" },
            { key: "d", text: "Loncat dari motor" }
        ],
        answer: "b",
        explanation: "Pegang stang dengan kokoh, jangan mengerem secara mendadak karena bisa membuat motor terbalik. Lepaskan gas perlahan dan arahkan ke bahu jalan."
    }
];

// STATE MANAGEMENT
let currentQuestionIndex = 0;
let userAnswers = []; // stores { questionId, selectedKey, isCorrect }
let currentMode = 'practice'; // 'practice' or 'exam'
let soundEnabled = true;
let bgmEnabled = true;
let timerSeconds = 15 * 60; // 15 mins for exam
let timerInterval = null;
let quizStartTime = null;

// AUTO-NEXT 5 SECONDS COUNTDOWN TIMER
let autoNextInterval = null;
let autoNextRemaining = 5;

// ==========================================
// AUDIO & SFX ENGINE (HTML5 AUDIO & WEB AUDIO API)
// ==========================================
let sharedAudioCtx = null;

function getAudioContext() {
    if (!sharedAudioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
        sharedAudioCtx.resume();
    }
    return sharedAudioCtx;
}

// SFX ENGINE (Suara benar, salah, detak detik, kemenangan)
class SoundEffects {
    constructor() {}

    playTone(freq, type, duration, startTime = 0, vol = 0.15) {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
        gain.gain.setValueAtTime(vol, ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + startTime);
        osc.stop(ctx.currentTime + startTime + duration);
    }

    tick() {
        // Nada detak countdown 5 detik
        this.playTone(650, 'triangle', 0.05, 0, 0.12);
    }

    correct() {
        // Ascending harmonic chime
        this.playTone(523.25, 'sine', 0.15, 0, 0.2);     // C5
        this.playTone(659.25, 'sine', 0.15, 0.08, 0.2);  // E5
        this.playTone(783.99, 'sine', 0.25, 0.16, 0.2);  // G5
    }

    wrong() {
        // Low descending buzz
        this.playTone(260, 'sawtooth', 0.2, 0, 0.18);
        this.playTone(220, 'sawtooth', 0.3, 0.15, 0.18);
    }

    click() {
        this.playTone(800, 'triangle', 0.04, 0, 0.1);
    }

    victory() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, i) => {
            this.playTone(f, 'sine', 0.3, i * 0.12, 0.2);
        });
    }
}

const sfx = new SoundEffects();

// DOM ELEMENTS
const screenHome = document.getElementById('screen-home');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnNext = document.getElementById('btn-next');
const btnQuit = document.getElementById('btn-quit');
const btnRestart = document.getElementById('btn-restart');
const btnToggleReview = document.getElementById('btn-toggle-review');

// AUDIO CONTROLS
const bgmAudio = document.getElementById('bgm-audio');
const bgmToggle = document.getElementById('bgm-toggle');
const bgmIcon = document.getElementById('bgm-icon');
const bgmPlayerCapsule = document.getElementById('bgm-player-capsule');
const equalizerWaves = document.getElementById('equalizer-waves');
const bgmStatusText = document.getElementById('bgm-status-text');
const bgmVolumeSlider = document.getElementById('bgm-volume-slider');
const volIcon = document.getElementById('vol-icon');
const soundToggle = document.getElementById('sound-toggle');

let currentVolume = 0.40; // 40% default volume

if (bgmAudio) {
    bgmAudio.volume = currentVolume;
}

function playBGM() {
    if (!bgmAudio) return;
    bgmAudio.volume = currentVolume;
    const playPromise = bgmAudio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            if (bgmIcon) bgmIcon.textContent = '⏸️';
            if (bgmPlayerCapsule) bgmPlayerCapsule.classList.add('playing');
            if (equalizerWaves) equalizerWaves.classList.remove('paused');
            if (bgmStatusText) bgmStatusText.textContent = 'Musik Aktif';
        }).catch(err => {
            console.log("Audio autoplay waiting for user interaction:", err);
            if (bgmIcon) bgmIcon.textContent = '▶️';
            if (bgmPlayerCapsule) bgmPlayerCapsule.classList.remove('playing');
            if (equalizerWaves) equalizerWaves.classList.add('paused');
            if (bgmStatusText) bgmStatusText.textContent = 'Klik Play ▶️';
        });
    }
}

function pauseBGM() {
    if (!bgmAudio) return;
    bgmAudio.pause();
    if (bgmIcon) bgmIcon.textContent = '▶️';
    if (bgmPlayerCapsule) bgmPlayerCapsule.classList.remove('playing');
    if (equalizerWaves) equalizerWaves.classList.add('paused');
    if (bgmStatusText) bgmStatusText.textContent = 'Musik Dijeda';
}

function toggleBGM() {
    if (!bgmAudio) return;
    if (bgmAudio.paused) {
        playBGM();
    } else {
        pauseBGM();
    }
}

const questionCounter = document.getElementById('question-counter');
const currentScorePill = document.getElementById('current-score-pill');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer-display');
const progressBarFill = document.getElementById('progress-bar-fill');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackBox = document.getElementById('feedback-box');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackExplanation = document.getElementById('feedback-explanation');

const autoAdvanceBar = document.getElementById('auto-advance-bar');
const autoAdvanceText = document.getElementById('auto-advance-text');
const countdownNumber = document.getElementById('countdown-number');
const countdownBar = document.getElementById('countdown-bar');
const btnPauseCountdown = document.getElementById('btn-pause-countdown');
const pauseBtnIcon = document.getElementById('pause-btn-icon');
const pauseBtnText = document.getElementById('pause-btn-text');

let isAutoNextPaused = false;

const reviewSection = document.getElementById('review-section');
const reviewList = document.getElementById('review-list');

// INITIALIZE EVENT LISTENERS
function init() {
    btnStartQuiz.addEventListener('click', startQuiz);
    btnNext.addEventListener('click', handleNextClick);
    btnQuit.addEventListener('click', confirmQuit);
    btnRestart.addEventListener('click', startQuiz);
    btnToggleReview.addEventListener('click', toggleReview);

    // Tombol Jeda / Lanjutkan Timer 5 Detik
    if (btnPauseCountdown) {
        btnPauseCountdown.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePauseAutoNext();
        });
    }

    // Toggle Efek Suara (SFX)
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundToggle.textContent = soundEnabled ? '🔔' : '🔕';
        soundToggle.classList.toggle('muted', !soundEnabled);
    });

    // Toggle Musik Latar (BGM)
    if (bgmToggle) {
        bgmToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBGM();
        });
    }

    // Volume Slider Musik Latar
    if (bgmVolumeSlider) {
        bgmVolumeSlider.addEventListener('input', (e) => {
            currentVolume = parseFloat(e.target.value) / 100;
            if (bgmAudio) bgmAudio.volume = currentVolume;
            if (currentVolume === 0) {
                if (volIcon) volIcon.textContent = '🔇';
            } else if (currentVolume < 0.5) {
                if (volIcon) volIcon.textContent = '🔉';
            } else {
                if (volIcon) volIcon.textContent = '🔊';
            }
            if (currentVolume > 0 && bgmAudio && bgmAudio.paused) {
                playBGM();
            }
        });
    }
}

// START QUIZ
function startQuiz() {
    getAudioContext();
    sfx.click();

    const selectedMode = document.querySelector('input[name="game-mode"]:checked');
    currentMode = selectedMode ? selectedMode.value : 'practice';

    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    clearAutoNextTimer();

    // Setup Timer Mode Ujian
    if (timerInterval) clearInterval(timerInterval);
    if (currentMode === 'exam') {
        timerContainer.style.display = 'flex';
        timerSeconds = 15 * 60; // 15 menit
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                finishQuiz();
            }
        }, 1000);
    } else {
        timerContainer.style.display = 'none';
    }

    // Mulai Backsound Ujian (MP3)
    playBGM();

    // Switch screens
    showScreen(screenQuiz);
    loadQuestion(currentQuestionIndex);
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (timerSeconds <= 120) {
        timerContainer.classList.add('urgent');
    } else {
        timerContainer.classList.remove('urgent');
    }
}

// SHOW SPECIFIC SCREEN
function showScreen(targetScreen) {
    [screenHome, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// LOAD QUESTION
function loadQuestion(index) {
    clearAutoNextTimer();

    const q = questionsData[index];
    const total = questionsData.length;

    // Update Header status
    questionCounter.textContent = `Soal ${index + 1} dari ${total}`;
    const calculatedScore = userAnswers.filter(a => a.isCorrect).length * 4;
    currentScorePill.textContent = `Skor: ${calculatedScore}`;
    progressBarFill.style.width = `${((index) / total) * 100}%`;

    // Reset components
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    feedbackBox.className = 'feedback-box hidden';
    btnNext.disabled = true;
    btnNext.innerHTML = 'Lanjut ➔';

    // Render options
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.key = opt.key;
        btn.innerHTML = `
            <span class="option-key">${opt.key}</span>
            <span class="option-text">${opt.text}</span>
        `;
        btn.addEventListener('click', () => handleOptionClick(opt.key, btn, q));
        optionsContainer.appendChild(btn);
    });
}

// 5-SECOND AUTO-TRANSITION & PAUSE LOGIC
function clearAutoNextTimer() {
    if (autoNextInterval) {
        clearInterval(autoNextInterval);
        autoNextInterval = null;
    }
    isAutoNextPaused = false;
    if (autoAdvanceBar) {
        autoAdvanceBar.classList.add('hidden');
        autoAdvanceBar.classList.remove('paused');
    }
    if (countdownBar) {
        countdownBar.style.width = '100%';
    }
}

function startAutoNextTimer() {
    clearAutoNextTimer();
    isAutoNextPaused = false;
    autoNextRemaining = 5;

    autoAdvanceBar.classList.remove('hidden');
    autoAdvanceBar.classList.remove('paused');

    if (pauseBtnIcon) pauseBtnIcon.textContent = '⏸️';
    if (pauseBtnText) pauseBtnText.textContent = 'Jeda Timer';
    if (autoAdvanceText) {
        autoAdvanceText.innerHTML = `Otomatis lanjut ke soal berikutnya dalam <strong id="countdown-number">5</strong> detik...`;
    }
    if (countdownBar) {
        countdownBar.style.width = '100%';
    }

    btnNext.disabled = false;
    btnNext.innerHTML = `Lanjut Sekarang (<strong>5</strong>s) ➔`;

    // Interval hitung mundur per 1 detik
    autoNextInterval = setInterval(() => {
        autoNextRemaining--;
        if (autoNextRemaining > 0) {
            const numElem = document.getElementById('countdown-number');
            if (numElem) numElem.textContent = autoNextRemaining;
            btnNext.innerHTML = `Lanjut Sekarang (<strong>${autoNextRemaining}</strong>s) ➔`;
            if (countdownBar) countdownBar.style.width = `${(autoNextRemaining / 5) * 100}%`;
            sfx.tick(); // bunyi detak detik
        } else {
            clearAutoNextTimer();
            nextQuestion();
        }
    }, 1000);
}

function togglePauseAutoNext() {
    if (!autoAdvanceBar || autoAdvanceBar.classList.contains('hidden')) return;

    if (!isAutoNextPaused) {
        // Jeda Timer: pengguna ingin membaca pembahasan dengan santai
        isAutoNextPaused = true;
        if (autoNextInterval) {
            clearInterval(autoNextInterval);
            autoNextInterval = null;
        }
        autoAdvanceBar.classList.add('paused');
        if (pauseBtnIcon) pauseBtnIcon.textContent = '▶️';
        if (pauseBtnText) pauseBtnText.textContent = 'Lanjutkan Timer';
        if (autoAdvanceText) {
            autoAdvanceText.innerHTML = `<span>⏸️ Timer Dijeda (Sisa <strong>${autoNextRemaining}s</strong>) — <em>Silakan pelajari pembahasan</em></span>`;
        }
        btnNext.innerHTML = 'Lanjut Sekarang ➔';
        sfx.click();
    } else {
        // Lanjutkan Timer kembali
        isAutoNextPaused = false;
        autoAdvanceBar.classList.remove('paused');
        if (pauseBtnIcon) pauseBtnIcon.textContent = '⏸️';
        if (pauseBtnText) pauseBtnText.textContent = 'Jeda Timer';
        if (autoAdvanceText) {
            autoAdvanceText.innerHTML = `Otomatis lanjut ke soal berikutnya dalam <strong id="countdown-number">${autoNextRemaining}</strong> detik...`;
        }
        btnNext.innerHTML = `Lanjut Sekarang (<strong>${autoNextRemaining}</strong>s) ➔`;
        sfx.click();

        // Lanjutkan hitung mundur
        autoNextInterval = setInterval(() => {
            autoNextRemaining--;
            if (autoNextRemaining > 0) {
                const numElem = document.getElementById('countdown-number');
                if (numElem) numElem.textContent = autoNextRemaining;
                btnNext.innerHTML = `Lanjut Sekarang (<strong>${autoNextRemaining}</strong>s) ➔`;
                if (countdownBar) countdownBar.style.width = `${(autoNextRemaining / 5) * 100}%`;
                sfx.tick();
            } else {
                clearAutoNextTimer();
                nextQuestion();
            }
        }, 1000);
    }
}

// HANDLE OPTION CLICK
function handleOptionClick(selectedKey, clickedBtn, question) {
    const isCorrect = (selectedKey === question.answer);

    if (currentMode === 'practice') {
        // Mode Latihan: reveal immediately
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.key === question.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.key === selectedKey && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Show feedback
        feedbackBox.classList.remove('hidden');
        if (isCorrect) {
            feedbackBox.className = 'feedback-box correct';
            feedbackIcon.textContent = '✅';
            feedbackTitle.textContent = 'Jawaban Anda Benar!';
            sfx.correct();
        } else {
            feedbackBox.className = 'feedback-box wrong';
            feedbackIcon.textContent = '❌';
            feedbackTitle.textContent = `Kurang Tepat! Jawaban yang benar adalah (${question.answer.toUpperCase()})`;
            sfx.wrong();
        }
        feedbackExplanation.textContent = question.explanation;

        // Store answer
        userAnswers.push({
            questionId: question.id,
            questionText: question.question,
            selectedKey: selectedKey,
            correctKey: question.answer,
            isCorrect: isCorrect,
            explanation: question.explanation
        });

        // Mulai timer 5 detik otomatis menuju soal berikutnya
        startAutoNextTimer();

    } else {
        // Mode Ujian: pilih opsi & mulai countdown 5 detik
        sfx.click();
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.classList.remove('selected'));
        clickedBtn.classList.add('selected');

        // Update or add user answer
        const existingIdx = userAnswers.findIndex(a => a.questionId === question.id);
        const answerObj = {
            questionId: question.id,
            questionText: question.question,
            selectedKey: selectedKey,
            correctKey: question.answer,
            isCorrect: isCorrect,
            explanation: question.explanation
        };

        if (existingIdx !== -1) {
            userAnswers[existingIdx] = answerObj;
        } else {
            userAnswers.push(answerObj);
        }

        // Mulai timer 5 detik otomatis
        startAutoNextTimer();
    }
}

// TOMBOL LANJUT MANUAL
function handleNextClick() {
    clearAutoNextTimer();
    nextQuestion();
}

// NEXT QUESTION OR FINISH
function nextQuestion() {
    clearAutoNextTimer();
    sfx.click();
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        progressBarFill.style.width = '100%';
        finishQuiz();
    }
}

// CONFIRM QUIT
function confirmQuit() {
    if (confirm("Apakah Anda yakin ingin keluar dari latihan soal ini? Progres saat ini tidak akan disimpan.")) {
        clearAutoNextTimer();
        if (timerInterval) clearInterval(timerInterval);
        pauseBGM();
        showScreen(screenHome);
    }
}

// FINISH QUIZ & SHOW RESULTS
function finishQuiz() {
    clearAutoNextTimer();
    if (timerInterval) clearInterval(timerInterval);
    pauseBGM();

    const totalQuestions = questionsData.length;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = totalQuestions - correctCount;
    const finalScoreValue = Math.round((correctCount / totalQuestions) * 100);
    const accuracy = finalScoreValue;

    // Elapsed time calculation
    const elapsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Pass threshold is 70% (minimal 18 dari 25 soal)
    const isPassed = finalScoreValue >= 70;

    const statusBadge = document.getElementById('result-status-badge');
    const finalScoreElem = document.getElementById('final-score');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');

    finalScoreElem.textContent = finalScoreValue;
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-wrong').textContent = wrongCount;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
    document.getElementById('stat-time').textContent = timeFormatted;

    if (isPassed) {
        statusBadge.textContent = 'LULUS UJIAN TEORI! 🎉';
        statusBadge.className = 'result-badge pass';
        resultTitle.textContent = 'Selamat! Anda Siap Mengikuti Ujian SIM C';
        resultMessage.textContent = `Luar biasa! Anda menjawab ${correctCount} dari ${totalQuestions} soal dengan benar. Pertahankan pemahaman aturan dan keselamatan di jalan raya!`;
        sfx.victory();
    } else {
        statusBadge.textContent = 'BELUM LULUS (REMIDIAL) ⚠️';
        statusBadge.className = 'result-badge fail';
        resultTitle.textContent = 'Jangan Menyerah, Pelajari Lagi Rambu & Marka!';
        resultMessage.textContent = `Nilai Anda ${finalScoreValue} (batas kelulusan adalah 70). Silakan ulas pembahasan soal-soal di bawah ini dan coba kembali latihan!`;
        sfx.wrong();
    }

    // Populate review list
    buildReviewList();
    showScreen(screenResult);
}

// BUILD REVIEW LIST
function buildReviewList() {
    reviewList.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const ans = userAnswers.find(a => a.questionId === q.id);
        const userSelected = ans ? ans.selectedKey : '-';
        const isCorrect = ans ? ans.isCorrect : false;

        const correctOptionObj = q.options.find(o => o.key === q.answer);
        const userOptionObj = q.options.find(o => o.key === userSelected);

        const card = document.createElement('div');
        card.className = `review-item ${isCorrect ? 'item-correct' : 'item-wrong'}`;
        card.innerHTML = `
            <div class="review-q-title">${idx + 1}. ${q.question}</div>
            <div class="review-answer-row">
                <strong>Jawaban Anda:</strong> 
                <span class="review-user-ans">${userSelected ? `(${userSelected.toUpperCase()}) ${userOptionObj ? userOptionObj.text : 'Tidak dijawab'}` : 'Kosong'}</span> 
                ${isCorrect ? '✅' : '❌'}
            </div>
            ${!isCorrect ? `
                <div class="review-answer-row">
                    <strong>Kunci Jawaban:</strong> 
                    <span class="review-correct-ans">(${q.answer.toUpperCase()}) ${correctOptionObj ? correctOptionObj.text : ''}</span>
                </div>
            ` : ''}
            <div class="review-explanation">
                💡 <strong>Pembahasan:</strong> ${q.explanation}
            </div>
        `;
        reviewList.appendChild(card);
    });
}

// TOGGLE REVIEW ACCORDION
function toggleReview() {
    sfx.click();
    const isHidden = reviewSection.classList.contains('hidden');
    if (isHidden) {
        reviewSection.classList.remove('hidden');
        btnToggleReview.textContent = 'Tutup Pembahasan ✖️';
        reviewSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        reviewSection.classList.add('hidden');
        btnToggleReview.textContent = 'Lihat Pembahasan Lengkap 📖';
    }
}

// Start on DOM ready
document.addEventListener('DOMContentLoaded', init);
