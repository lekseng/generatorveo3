document.addEventListener('DOMContentLoaded', () => {

    const cameraMovements = {
        '--Pilih Gerakan--': '',
        '3D Rotation': 'Rotasi 3D',
        '360 Orbit': 'Orbit 360 Derajat',
        'Action Run': 'Lari Aksi',
        'Agent Reveal': 'Kemunculan Agen',
        'Angel Wings': 'Sayap Malaikat',
        'Arc Left': 'Busur Kiri',
        'Arc Right': 'Busur Kanan',
        'Bloom Mouth': 'Mulut Mekar',
        'Buckle Up': 'Kencangkan Sabuk',
        'Bullet Time': 'Waktu Peluru (Gerak Lambat)',
        'Building Explosion': 'Ledakan Gedung',
        'Car Chasing': 'Pengejaran Mobil',
        'Car Explosion': 'Ledakan Mobil',
        'Car Grip': 'Cengkeraman Mobil',
        'Crane Down': 'Kamera Turun (Crane)',
        'Crane Up': 'Kamera Naik (Crane)',
        'Crane Over The Head': 'Kamera di Atas Kepala (Crane)',
        'Crash Zoom In': 'Zoom Cepat Mendekat',
        'Crash Zoom Out': 'Zoom Cepat Menjauh',
        'Datamosh': 'Datamosh (Efek Glitch)',
        'Dirty Lens': 'Lensa Kotor',
        'Disintegration': 'Disintegrasi (Terurai)',
        'Dolly In': 'Dolly Mendekat',
        'Dolly Left': 'Dolly ke Kiri',
        'Dolly Out': 'Dolly Menjauh',
        'Dolly Right': 'Dolly ke Kanan',
        'Dolly Zoom In': 'Dolly Zoom Mendekat',
        'Dolly Zoom Out': 'Dolly Zoom Menjauh',
        'Double Dolly': 'Dolly Ganda',
        'Dutch Angle': 'Sudut Miring (Dutch Angle)',
        'Eyes In': 'Fokus ke Mata',
        'Face Punch': 'Pukulan Wajah',
        'Fisheye': 'Lensa Mata Ikan',
        'Floating Fish': 'Ikan Melayang',
        'Flood': 'Banjir',
        'Floral Eyes': 'Mata Bunga',
        'Flying': 'Terbang',
        'Focus Change': 'Perubahan Fokus',
        'FPV Drone': 'Drone FPV',
        'Garden Bloom': 'Taman Mekar',
        'Glam': 'Glamor',
        'Glowshift': 'Pergeseran Cahaya',
        'Handheld': 'Kamera Genggam',
        'Head Explosion': 'Ledakan Kepala',
        'Head Tracking': 'Pelacakan Kepala',
        'Hyperlapse': 'Hyperlapse',
        'Incline': 'Miring',
        'Invisible': 'Tak Terlihat',
        'Jelly Drift': 'Goyangan Puding',
        'Jib Down': 'Jib Turun',
        'Jib Up': 'Jib Naik',
        'Kiss': 'Ciuman',
        'Lazy Susan': 'Lazy Susan (Putaran Lambat)',
        'Lens Crack': 'Lensa Retak',
        'Lens Flare': 'Suar Lensa',
        'Levitation': 'Melayang',
        'Low Shutter': 'Rana Lambat',
        'Medusa Gorgona': 'Medusa Gorgon',
        'Melting': 'Meleleh',
        'Morphskin': 'Perubahan Kulit',
        'Mouth In': 'Fokus ke Mulut',
        'Push To Glass': 'Dorong ke Kaca',
        'Rap Flex': 'Gaya Rap',
        'Robo Arm': 'Lengan Robot',
        'Set on Fire': 'Terbakar',
        'Skin Surge': 'Gelombang Kulit',
        'Snorricam': 'Snorricam (Kamera di Badan)',
        'Soul Jump': 'Lompatan Jiwa',
        'Static': 'Statis (Seperti TV Rusak)',
        'Super Dolly In': 'Super Dolly Mendekat',
        'Super Dolly Out': 'Super Dolly Menjauh',
        'Tentacles': 'Tentakel',
        'Thunder God': 'Dewa Petir',
        'Tilt Down': 'Miring ke Bawah',
        'Tilt up': 'Miring ke Atas',
        'Timelapse Human': 'Timelapse Manusia',
        'Timelapse Landscape': 'Timelapse Pemandangan',
        'Turning Metal': 'Logam Berputar',
        'Whip Pan': 'Gerakan Kamera Cepat (Whip Pan)',
        'Wiggle': 'Bergoyang',
        'Wind to Face': 'Angin ke Wajah',
        'YoYo Zoom': 'Zoom YoYo',
        'Zoom In': 'Perbesar (Zoom In)',
        'Zoom Out': 'Perkecil (Zoom Out)',
    };

    const cameraSelect = document.getElementById('camera-movement');
    for (const [english, indonesian] of Object.entries(cameraMovements)) {
        const option = document.createElement('option');
        option.value = english;
        option.textContent = `${english} (${indonesian})`;
        cameraSelect.appendChild(option);
    }
    
    // Element Selectors
    const mainTitle = document.getElementById('main-title');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Event Listeners
    mainTitle.addEventListener('click', () => {
        const newTitle = prompt('Masukkan judul baru:', mainTitle.textContent);
        if (newTitle) {
            mainTitle.textContent = newTitle;
        }
    });

    changeStyleBtn.addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        document.body.classList.toggle('theme-dark');
        changeStyleBtn.textContent = document.body.classList.contains('theme-light') ? 'Ganti ke Tema Gelap' : 'Ubah Style';
    });
    
    generateBtn.addEventListener('click', generatePrompts);
    copyBtn.addEventListener('click', copyFinalPrompt);

    // Functions
    function getInputValue(id) {
        return document.getElementById(id).value.trim();
    }

    function generatePrompts() {
        // Get all values
        const sceneTitle = getInputValue('scene-title');
        const charDesc = getInputValue('char-desc');
        const charVoice = getInputValue('char-voice');
        const charAction = getInputValue('char-action');
        const charExpression = getInputValue('char-expression');
        const setting = getInputValue('setting');
        const cameraMovement = getInputValue('camera-movement');
        const lighting = getInputValue('lighting');
        const artStyle = getInputValue('art-style');
        const visualQuality = getInputValue('visual-quality');
        const atmosphere = getInputValue('atmosphere');
        const ambience = getInputValue('ambience');
        const dialogue = getInputValue('dialogue');
        const negativePrompt = getInputValue('negative-prompt');

        // --- Indonesian Prompt Generation ---
        let indonesianPrompt = `**Judul Scene:** ${sceneTitle}\n\n`;
        indonesianPrompt += `**Karakter Utama:**\n${charDesc}\n\n`;
        indonesianPrompt += `**Detail Suara Karakter:**\n${charVoice}\n\n`;
        indonesianPrompt += `**Aksi:**\nKarakter terlihat ${charAction}.\n\n`;
        indonesianPrompt += `**Ekspresi:**\n${charExpression}.\n\n`;
        indonesianPrompt += `**Latar & Waktu:**\n${setting}\n\n`;
        indonesianPrompt += `**Detail Visual Tambahan:**\n- Gerakan Kamera: ${cameraMovement}\n- Pencahayaan: ${lighting}\n- Gaya Video: ${artStyle}\n- Kualitas Visual: ${visualQuality}\n\n`;
        indonesianPrompt += `**Suasana:**\n${atmosphere}\n\n`;
        indonesianPrompt += `**Suara Lingkungan:**\n${ambience}\n\n`;
        indonesianPrompt += `**Dialog:**\n${dialogue}\n\n`;
        indonesianPrompt += `**Negative Prompt:**\n${negativePrompt}`;
        
        document.getElementById('output-indonesian').value = indonesianPrompt;

        // --- English Prompt Generation ---
        let englishPrompt = `**Scene Title:** A cinematic shot of "${sceneTitle}".\n\n`;
        englishPrompt += `**Main Character:**\nA detailed view of the main character. ${charDesc}.\n\n`;
        englishPrompt += `**Character Voice Details:**\n${charVoice}.\n\n`;
        englishPrompt += `**Action:**\nThe character is seen ${charAction}.\n\n`;
        englishPrompt += `**Expression:**\nThe character shows an expression of ${charExpression}.\n\n`;
        englishPrompt += `**Setting and Time:**\n${setting}.\n\n`;
        englishPrompt += `**Additional Visual Details:**\n- Camera Movement: A dynamic ${cameraMovement} shot.\n- Lighting: The scene has ${lighting} lighting.\n- Art Style: in a ${artStyle} style.\n- Visual Quality: ${visualQuality}.\n\n`;
        englishPrompt += `**Overall Atmosphere:**\nThe overall atmosphere is ${atmosphere}.\n\n`;
        englishPrompt += `**Environmental Sound/Ambience:**\n${ambience}.\n\n`;
        englishPrompt += `**Dialogue (in original language):**\n${dialogue}\n\n`;
        englishPrompt += `**Negative Prompt:**\nAvoid: ${negativePrompt}`;

        document.getElementById('output-english').innerHTML = englishPrompt.replace(/\n/g, '<br>');

    }

    function copyFinalPrompt() {
        const finalPromptText = document.getElementById('output-english').innerText;
        navigator.clipboard.writeText(finalPromptText).then(() => {
            copyBtn.textContent = 'Tersalin!';
            setTimeout(() => {
                copyBtn.textContent = 'Salin Prompt Final';
            }, 2000);
        }).catch(err => {
            console.error('Gagal menyalin prompt: ', err);
            alert('Gagal menyalin teks.');
        });
    }
}); 