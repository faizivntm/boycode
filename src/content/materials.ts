// ┌─────────────────────────────────────────────────────────────────┐
// │  ISI MATERI DI SINI. Cukup edit array `materials` di bawah.        │
// │  Semua halaman (home, /materials, /materials/$slug) baca dari sini.│
// └─────────────────────────────────────────────────────────────────┘

// Satu "blok" konten di dalam sebuah materi.
export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; lang?: string; code: string }

export interface Material {
  slug: string // dipakai di URL: /materials/<slug> — huruf kecil, pakai tanda hubung
  title: string
  summary: string // 1–2 kalimat, muncul di kartu
  category: string // mis. "JavaScript", "Catatan", "Python"
  date: string // format ISO: "2026-07-08"
  tags?: string[]
  body: Block[] // isi materi, disusun blok demi blok
}

// ── Materi kamu ──────────────────────────────────────────────────────
// Seri "Java Fundamental" — modul awal tanggalnya paling baru biar tampil
// paling atas (daftar materi urut dari tanggal terbaru).
export const materials: Material[] = [
  {
    slug: 'pengenalan-java',
    title: 'Pengenalan Java',
    summary:
      'Mengenal apa itu Java, sejarah singkatnya, karakteristik utama, serta alasan mengapa Java masih menjadi salah satu bahasa pemrograman paling populer di dunia.',
    category: 'Java',
    date: '2026-07-08',
    tags: ['java', 'fundamental', 'pengenalan', 'dasar'],
    body: [
      { type: 'heading', text: 'Jadi, Java itu makhluk apa?' },
      {
        type: 'paragraph',
        text: 'Java itu bahasa pemrograman tingkat tinggi yang berbasis objek (object-oriented). Jualan utamanya satu kalimat sakti: "Write Once, Run Anywhere" alias tulis sekali, jalan di mana saja. Analoginya kayak bikin satu resep rendang: sekali jadi, bisa dimasak di dapur mana pun dan rasanya tetap sama. Program Java ditulis sekali, lalu bisa jalan di Windows, Mac, atau Linux asalkan di situ ada Java Virtual Machine (JVM).',
      },
      {
        type: 'paragraph',
        text: 'Sampai sekarang Java masih jadi salah satu bahasa paling laris sedunia. Perusahaan besar naksir dia karena stabil, aman, performanya ngebut, dan komunitasnya segede lautan. Artinya kalau kamu nyangkut, tinggal googling, pasti ada ribuan orang yang pernah senasib.',
      },
      { type: 'heading', text: 'Sejarah Singkat (sambil ngopi)' },
      {
        type: 'paragraph',
        text: 'Java lahir tahun 1991, digodok oleh James Gosling bersama tim Green Project di Sun Microsystems. Lucunya, awalnya Java bukan buat aplikasi komputer, tapi buat perangkat elektronik seperti televisi interaktif. Nama pertamanya adalah Oak, tapi karena nama itu sudah jadi merek dagang orang lain, akhirnya diganti jadi Java — konon terinspirasi dari kopi.',
      },
      {
        type: 'paragraph',
        text: 'Tahun 1995 Java resmi dilepas ke publik dan langsung meledak berbarengan dengan naik daunnya internet. Lalu pada 2010 Sun Microsystems diakuisisi oleh Oracle, dan sampai hari ini Oracle-lah yang meneruskan pengembangan Java.',
      },
      { type: 'heading', text: 'Filosofinya: ogah bergantung sama OS' },
      {
        type: 'paragraph',
        text: 'Prinsip Java sederhana: sebuah program tidak boleh manja dan cuma mau jalan di satu sistem operasi. Solusinya, Java menaruh seorang "penerjemah" di tengah bernama JVM. Alurnya kira-kira begini:',
      },
      {
        type: 'code',
        lang: 'text',
        code: 'Write Once\n    ↓\nCompile jadi Bytecode\n    ↓\nDijalankan oleh JVM\n    ↓\nRun Anywhere',
      },
      { type: 'heading', text: 'Ciri Khas Java' },
      {
        type: 'list',
        items: [
          'Berbasis objek (Object-Oriented Programming).',
          'Lintas platform berkat Java Virtual Machine (JVM).',
          'Keamanannya oke.',
          'Sintaksnya cukup rapi dan gampang dipelajari.',
          'Bisa multithreading (mengerjakan banyak hal sekaligus).',
          'Punya garbage collector yang beberes memori otomatis, jadi kamu nggak perlu ngepel sendiri.',
          'Didukung ribuan library dan framework.',
        ],
      },
      { type: 'heading', text: 'Kelebihannya' },
      {
        type: 'list',
        items: [
          'Bisa jalan di Windows, Linux, maupun macOS tanpa ubah kode.',
          'Komunitasnya raksasa, jadi referensi bertebaran di mana-mana.',
          'Banyak dipakai industri, artinya peluang kerjanya luas.',
          'Stabil buat aplikasi berskala besar.',
          'Dokumentasi resminya lengkap banget.',
          'Ekosistem framework seperti Spring Boot bikin bikin aplikasi modern jadi lebih enteng.',
        ],
      },
      { type: 'heading', text: 'Kekurangannya (biar nggak lebay muji)' },
      {
        type: 'list',
        items: [
          'Sintaksnya relatif lebih panjang dibanding beberapa bahasa modern (siapkan jari).',
          'Butuh JVM, jadi pemakaian memorinya lebih boros.',
          'Waktu startup aplikasinya cenderung lebih lambat dibanding bahasa yang langsung dikompilasi ke native code.',
        ],
      },
      { type: 'heading', text: 'Java Dipakai Buat Apa Aja?' },
      {
        type: 'paragraph',
        text: 'Hampir di semua lini pengembangan software, dari aplikasi receh sampai sistem raksasa perusahaan.',
      },
      {
        type: 'list',
        items: [
          'Backend website.',
          'REST API.',
          'Aplikasi enterprise.',
          'Sistem perbankan.',
          'Aplikasi pemerintahan.',
          'Big Data.',
          'Cloud Computing.',
          'Aplikasi desktop.',
          'Android (sebelum Kotlin jadi anak emas).',
          'Internet of Things (IoT).',
        ],
      },
      { type: 'heading', text: 'PENTING: Java itu BUKAN JavaScript' },
      {
        type: 'paragraph',
        text: 'Namanya memang mirip, tapi Java dan JavaScript itu dua bahasa yang beda total, kira-kira semirip "Padang" dan "kuda". Java fokus ke aplikasi lintas platform lewat JVM, sedangkan JavaScript awalnya dibuat untuk bikin halaman web jadi interaktif (dan sekarang juga dipakai di backend lewat Node.js). Jangan sampai ketuker di grup sebelah, nanti diketawain senior.',
      },
      { type: 'heading', text: 'Versi Java' },
      {
        type: 'paragraph',
        text: 'Java rajin rilis versi baru. Beberapa yang populer:',
      },
      {
        type: 'list',
        items: [
          'Java 8 — memperkenalkan Lambda Expression dan Stream API.',
          'Java 11 — Long Term Support (LTS).',
          'Java 17 — Long Term Support (LTS).',
          'Java 21 — LTS dengan berbagai peningkatan performa dan fitur modern.',
        ],
      },
      { type: 'heading', text: 'Kenapa Harus Belajar Java?' },
      {
        type: 'paragraph',
        text: 'Belajar Java memberi fondasi yang kokoh untuk memahami konsep pemrograman, terutama OOP. Konsep penting seperti class, object, inheritance, encapsulation, sampai polymorphism dijelaskan dengan sangat mulus lewat Java. Nggak heran Java sering dipakai sebagai bahasa pengantar di kampus maupun bootcamp.',
      },
      { type: 'heading', text: 'Habis Ini ke Mana?' },
      {
        type: 'paragraph',
        text: 'Setelah kenalan sama Java, materi berikutnya membahas bagaimana Java bekerja lewat trio JDK, JRE, dan JVM. Memahami tiga sekawan ini penting banget sebelum kita nulis program Java pertama.',
      },
      { type: 'heading', text: 'Intinya' },
      {
        type: 'paragraph',
        text: 'Java sudah membuktikan kualitasnya selama lebih dari tiga dekade. Dengan filosofi "Write Once, Run Anywhere", komunitas raksasa, dan ekosistem yang matang, dia tetap jadi andalan di dunia pengembangan software modern. Buat pemula, belajar Java bukan sekadar belajar satu bahasa, tapi membangun pondasi kuat buat memahami konsep-konsep penting di dunia programming. Santai, pelan-pelan, terus berenang.',
      },
    ],
  },
  {
    slug: 'cara-kerja-java',
    title: 'Cara Kerja Java',
    summary:
      'Pelajari bagaimana program Java dijalankan, mulai dari source code, proses kompilasi, bytecode, hingga Java Virtual Machine (JVM). Materi ini juga membahas peran JDK dan JRE dalam ekosistem Java.',
    category: 'Java',
    date: '2026-07-08',
    tags: ['java', 'jvm', 'jdk', 'jre', 'bytecode', 'compiler'],
    body: [
      { type: 'heading', text: 'Kok Bisa Satu Program Jalan di Mana-Mana?' },
      {
        type: 'paragraph',
        text: 'Keunggulan andalan Java adalah bisa jalan di berbagai sistem operasi tanpa ubah kode. Ini beda dengan beberapa bahasa lain (misal C atau C++) yang harus dikompilasi khusus untuk tiap OS. Dan ini bukan sulap bukan sihir, melainkan hasil dari cara kerja Java yang unik lewat Java Virtual Machine (JVM).',
      },
      {
        type: 'paragraph',
        text: 'Di materi ini kita bakal bongkar perjalanan sebuah file Java: dari sekadar teks yang kita ketik sampai berubah jadi program yang jalan. Sekalian kenalan sama JDK, JRE, JVM, compiler, dan bytecode.',
      },
      { type: 'heading', text: 'Gambaran Besarnya' },
      {
        type: 'paragraph',
        text: 'Faktanya, komputer itu nggak ngerti kode yang kita tulis (dia cuma paham 0 dan 1). Jadi kode kita harus mampir ke beberapa pos dulu sebelum akhirnya bisa dieksekusi.',
      },
      {
        type: 'code',
        lang: 'text',
        code: 'Source Code (.java)\n        │\n        ▼\n   Compiler (javac)\n        │\n        ▼\n   Bytecode (.class)\n        │\n        ▼\nJava Virtual Machine (JVM)\n        │\n        ▼\n   Machine Code\n        │\n        ▼\n  Program Berjalan',
      },
      { type: 'heading', text: 'Langkah 1 — Nulis Source Code' },
      {
        type: 'paragraph',
        text: 'Semua dimulai dari kita mengetik program pakai bahasa Java. File-nya berekstensi .java dan isinya masih ramah dibaca manusia.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      },
      {
        type: 'paragraph',
        text: 'Di tahap ini program belum bisa jalan, karena komputer masih bengong lihat sintaks Java.',
      },
      { type: 'heading', text: 'Langkah 2 — Dikompilasi' },
      {
        type: 'paragraph',
        text: 'Source code kemudian diserahkan ke Java Compiler (javac). Tugasnya mirip guru bahasa: mengecek ada salah tulis (syntax error) atau tidak. Kalau bersih dari kesalahan, dia mengeluarkan file baru berekstensi .class.',
      },
      { type: 'code', lang: 'bash', code: 'javac Main.java' },
      {
        type: 'paragraph',
        text: 'Hasil kompilasi ini bukan machine code, melainkan bytecode.',
      },
      { type: 'heading', text: 'Bytecode Itu Apa?' },
      {
        type: 'paragraph',
        text: 'Bytecode adalah bahasa perantara yang khusus dirancang biar dimengerti JVM. Dia bersikap netral, nggak milih-milih OS, jadi file .class hasilnya bisa dibawa ke Windows, Linux, maupun macOS tanpa perlu dikompilasi ulang. Inilah rahasia di balik slogan "Write Once, Run Anywhere" (WORA).',
      },
      { type: 'heading', text: 'Langkah 3 — Masuk ke JVM' },
      {
        type: 'paragraph',
        text: 'JVM itu penerjemah sekaligus mesin. Dia membaca bytecode lalu menerjemahkannya jadi machine code yang dipahami sistem operasi. Tiap OS punya JVM versinya sendiri, tapi semuanya sama-sama ngerti bytecode yang sama. Analoginya: bytecode itu naskah pidato, dan JVM adalah penerjemah lokal di tiap negara.',
      },
      {
        type: 'paragraph',
        text: 'Selain menjalankan program, JVM juga mengurus memori, keamanan, beberes sampah (garbage collection), dan ngebut-ngebutin performa lewat Just-In-Time (JIT) Compiler.',
      },
      { type: 'heading', text: 'Trio yang Bikin Bingung: JDK, JRE, JVM' },
      {
        type: 'paragraph',
        text: 'Tiga komponen ini paling sering ketuker di kepala pemula. Padahal tugasnya beda-beda.',
      },
      {
        type: 'list',
        items: [
          'JDK (Java Development Kit): buat MEMBUAT aplikasi Java. Isinya compiler (javac), JRE, debugger, dan berbagai tools lain. Ini yang kamu install kalau mau ngoding.',
          'JRE (Java Runtime Environment): buat MENJALANKAN aplikasi Java. Di dalamnya ada JVM plus library yang dibutuhkan saat program berjalan.',
          'JVM (Java Virtual Machine): mesin virtual yang benar-benar menjalankan bytecode jadi machine code.',
        ],
      },
      {
        type: 'code',
        lang: 'text',
        code: 'JDK\n├── Compiler (javac)\n├── Debugger\n├── Tools\n└── JRE\n     ├── Library Java\n     └── JVM',
      },
      { type: 'heading', text: 'JIT Compiler Itu Apa?' },
      {
        type: 'paragraph',
        text: 'Awalnya JVM menerjemahkan bytecode pelan-pelan pakai interpreter. Tapi biar makin ngebut, JVM punya jurus bernama Just-In-Time (JIT) Compiler. JIT memantau bagian kode yang sering dijalankan, lalu mengubahnya jadi machine code supaya eksekusinya jauh lebih kilat. Ibarat jalan yang sering dilewati, lama-lama diaspal biar mulus.',
      },
      { type: 'heading', text: 'Kenapa Java Bisa Lintas Platform?' },
      {
        type: 'paragraph',
        text: 'Bahasa seperti C atau C++ menghasilkan file executable yang cuma cocok untuk satu OS. Java sebaliknya: dia menghasilkan bytecode yang dijalankan oleh JVM. Selama sebuah perangkat punya JVM yang sesuai, program Java bisa langsung jalan tanpa dikompilasi ulang.',
      },
      {
        type: 'code',
        lang: 'text',
        code: 'Program Java\n      │\n      ▼\n   Bytecode\n      │\n ┌────┼────┐\n ▼    ▼    ▼\nJVM  JVM  JVM\nWin Linux macOS',
      },
      { type: 'heading', text: 'Untungnya Pakai Arsitektur Begini' },
      {
        type: 'list',
        items: [
          'Program bisa jalan di berbagai sistem operasi.',
          'Lebih aman karena dijalankan di dalam JVM.',
          'Ada garbage collector yang mengurus memori otomatis.',
          'Performa terdongkrak berkat Just-In-Time Compiler.',
          'Gampang dipindah ke lingkungan lain tanpa ubah source code.',
        ],
      },
      { type: 'heading', text: 'Contoh Alur Eksekusi' },
      {
        type: 'paragraph',
        text: 'Misalkan kita punya file Main.java. Saat menjalankan javac Main.java, compiler menghasilkan Main.class. Lalu saat menjalankan java Main, JVM membaca Main.class, menerjemahkannya jadi machine code, dan sistem operasi mengeksekusinya sampai program selesai. Kelar.',
      },
      { type: 'code', lang: 'bash', code: 'javac Main.java\njava Main' },
      { type: 'heading', text: 'Intinya' },
      {
        type: 'paragraph',
        text: 'Cara kerja Java itu berurutan: source code dikompilasi jadi bytecode oleh javac, lalu bytecode dijalankan JVM yang menerjemahkannya jadi machine code. Kombinasi JDK, JRE, JVM, dan bytecode inilah yang bikin Java bisa "Write Once, Run Anywhere". Paham alur ini bakal ngebantu banget pas nanti masuk ke materi yang lebih dalam, mulai dari struktur program, debugging, sampai optimasi performa.',
      },
    ],
  },
  {
    slug: 'instalasi-java',
    title: 'Instalasi Java',
    summary:
      'Pelajari cara menginstal Java Development Kit (JDK), memahami perbedaan OpenJDK dan Oracle JDK, mengatur environment variable, hingga menjalankan program Java pertama di komputer.',
    category: 'Java',
    date: '2026-07-08',
    tags: ['java', 'jdk', 'instalasi', 'setup', 'environment', 'intellij'],
    body: [
      { type: 'heading', text: 'Siapin Dapur Dulu Sebelum Masak' },
      {
        type: 'paragraph',
        text: 'Sebelum ngoding, kita siapin dulu "dapurnya" (development environment). Prosesnya: install Java Development Kit (JDK), pastikan Java dikenali sistem operasi, lalu pilih editor atau IDE yang nyaman. Setelah semua siap, baru kita gas program pertama.',
      },
      { type: 'heading', text: 'Yang Perlu Disiapin' },
      {
        type: 'list',
        items: [
          'Java Development Kit (JDK).',
          'Text editor atau IDE.',
          'Terminal atau Command Prompt.',
          'Sistem operasi Windows, Linux, atau macOS.',
        ],
      },
      { type: 'heading', text: 'Kenalan sama JDK' },
      {
        type: 'paragraph',
        text: 'Java Development Kit (JDK) adalah paket lengkap buat mengembangkan aplikasi Java. Isinya bukan cuma compiler (javac), tapi juga JRE, JVM, debugger, dokumentasi, dan berbagai tools lain yang kamu butuhkan selama ngoding. Ibarat kotak perkakas komplit.',
      },
      {
        type: 'code',
        lang: 'text',
        code: 'JDK\n├── javac (Compiler)\n├── java (Runtime)\n├── JRE\n│   └── JVM\n└── Development Tools',
      },
      { type: 'heading', text: 'OpenJDK vs Oracle JDK' },
      {
        type: 'paragraph',
        text: 'Waktu mau download Java, kamu bakal ketemu dua distribusi paling populer: OpenJDK dan Oracle JDK. Fungsinya hampir sama, bedanya di soal lisensi dan distribusi.',
      },
      {
        type: 'list',
        items: [
          'OpenJDK bersifat open source dan jadi pilihan mayoritas developer.',
          'Oracle JDK dikembangkan langsung oleh Oracle dengan dukungan komersial.',
          'Buat belajar, OpenJDK sudah lebih dari cukup, nggak usah galau.',
        ],
      },
      { type: 'heading', text: 'Download JDK' },
      {
        type: 'paragraph',
        text: 'Unduh JDK sesuai sistem operasimu. Sebaiknya pilih versi Long Term Support (LTS) seperti Java 21 biar dapat dukungan jangka panjang dan lebih stabil.',
      },
      { type: 'heading', text: 'Install di Windows' },
      {
        type: 'list',
        items: [
          'Unduh installer JDK.',
          'Jalankan file installer-nya.',
          'Klik Next sampai proses instalasi selesai.',
          'Catat lokasi instalnya, misalnya C:\\Program Files\\Java\\jdk-21.',
        ],
      },
      { type: 'heading', text: 'Install di Linux (Ubuntu)' },
      {
        type: 'paragraph',
        text: 'Di Ubuntu, OpenJDK bisa dipasang lewat package manager apt.',
      },
      {
        type: 'code',
        lang: 'bash',
        code: 'sudo apt update\nsudo apt install openjdk-21-jdk',
      },
      { type: 'heading', text: 'Install di macOS' },
      {
        type: 'paragraph',
        text: 'Pengguna macOS bisa pakai Homebrew buat memasang OpenJDK.',
      },
      { type: 'code', lang: 'bash', code: 'brew install openjdk@21' },
      { type: 'heading', text: 'Atur Environment Variable (Windows)' },
      {
        type: 'paragraph',
        text: 'Biar perintah java dan javac bisa dipanggil dari Command Prompt di mana saja (tanpa harus menunjuk lokasinya tiap kali), kita tambahkan lokasi JDK ke dalam PATH.',
      },
      {
        type: 'list',
        items: [
          'Buka Environment Variables.',
          'Bikin variabel JAVA_HOME yang mengarah ke folder instalasi JDK.',
          'Tambahkan %JAVA_HOME%\\bin ke dalam PATH.',
          'Simpan perubahan, lalu buka lagi Command Prompt yang baru.',
        ],
      },
      { type: 'heading', text: 'Cek Instalasi Berhasil apa Belum' },
      {
        type: 'paragraph',
        text: 'Setelah beres, buka Terminal atau Command Prompt lalu jalankan perintah berikut.',
      },
      { type: 'code', lang: 'bash', code: 'java -version\njavac -version' },
      {
        type: 'paragraph',
        text: 'Kalau keduanya menampilkan versi Java, selamat, instalasimu sukses!',
      },
      { type: 'heading', text: 'Pilih IDE' },
      {
        type: 'paragraph',
        text: 'Sebenarnya Java bisa ditulis pakai text editor biasa, tapi pakai IDE bikin hidup jauh lebih enak (auto-complete, deteksi error, dll).',
      },
      {
        type: 'list',
        items: [
          'IntelliJ IDEA Community Edition (paling direkomendasikan).',
          'Visual Studio Code dengan Extension Pack for Java.',
          'Eclipse IDE.',
          'Apache NetBeans.',
        ],
      },
      { type: 'heading', text: 'Kenapa IntelliJ IDEA Sering Direkomendasikan?' },
      {
        type: 'list',
        items: [
          'Auto-completion-nya juara.',
          'Refactoring-nya canggih.',
          'Debugging lebih gampang.',
          'Dipakai banyak perusahaan.',
          'Nyambung mulus dengan Maven, Gradle, dan Spring Boot.',
        ],
      },
      { type: 'heading', text: 'Bikin Project Java Pertama' },
      {
        type: 'paragraph',
        text: 'Setelah IDE terpasang, buat project baru, pilih Java sebagai bahasanya dan JDK yang tadi kamu install. IDE bakal menyiapkan struktur project-nya otomatis.',
      },
      { type: 'heading', text: 'Jalankan Program Pertama' },
      {
        type: 'paragraph',
        text: 'Buat file Main.java lalu tulis kode berikut.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
      },
      {
        type: 'paragraph',
        text: 'Jalankan lewat tombol Run di IDE, atau lewat terminal pakai javac dan java.',
      },
      { type: 'code', lang: 'bash', code: 'javac Main.java\njava Main' },
      { type: 'heading', text: 'Output' },
      { type: 'code', lang: 'text', code: 'Hello, Java!' },
      { type: 'heading', text: 'Error yang Sering Bikin Nangis' },
      {
        type: 'list',
        items: [
          'Perintah java tidak dikenali karena PATH belum diatur.',
          'Kepasang JRE doang, tanpa JDK.',
          'Versi JDK nggak cocok dengan project.',
          'Nama file beda dengan nama class public (Java cerewet soal ini).',
          'Lupa nyimpen file sebelum menjalankan program (klasik).',
        ],
      },
      { type: 'heading', text: 'Tips' },
      {
        type: 'list',
        items: [
          'Pakai Java versi LTS seperti Java 21.',
          'Kalau masih belajar, pakai IntelliJ IDEA Community Edition.',
          'Sesekali coba lewat Terminal juga, biar paham proses kompilasi Java.',
          'Simpan semua project dalam satu folder khusus biar rapi.',
        ],
      },
      { type: 'heading', text: 'Intinya' },
      {
        type: 'paragraph',
        text: 'Di modul ini kita sudah menyiapkan dapur ngoding Java: dari install JDK, atur environment variable, pilih IDE, sampai menjalankan program pertama. Semua alat sudah siap. Langkah berikutnya kita bedah struktur dasar program Java biar paham fungsi tiap bagian kode yang kita tulis.',
      },
    ],
  },
  {
    slug: 'struktur-dasar-program-java',
    title: 'Struktur Dasar Program Java',
    summary:
      'Bedah kerangka program Java baris demi baris. Kenalan sama class, method main, statement, komentar, dan si titik koma yang paling sering bikin drama.',
    category: 'Java',
    date: '2026-07-07',
    tags: ['java', 'fundamental', 'struktur', 'dasar'],
    body: [
      { type: 'heading', text: 'Setiap program punya kerangka baku' },
      {
        type: 'paragraph',
        text: 'Program Java itu ibarat surat resmi: ada formatnya yang harus diikuti. Awalnya kelihatan ribet dan penuh kata-kata sakti, tapi tenang, setelah sepuluh kali nulis, tanganmu bakal hafal sendiri. Kita mulai dari yang paling legendaris: Hello World.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Halo, dunia! Aku programmer Java sekarang.");\n    }\n}',
      },
      { type: 'heading', text: 'Bedah baris demi baris' },
      {
        type: 'list',
        items: [
          'public class Main — semua kode Java wajib tinggal di dalam class. Anggap class ini rumah/folder tempat kodemu menetap. Nama filenya harus sama persis: Main.java.',
          'public static void main(String[] args) — ini PINTU MASUK program. Java selalu mulai baca dari sini. Hafalkan dulu apa adanya, nanti tiap kata bakal masuk akal sendiri.',
          'System.out.println(...) — perintah cetak ke layar. println itu singkatan print + line: cetak lalu pindah baris.',
          'Titik koma ( ; ) — penanda akhir sebuah perintah. Kenalan baik-baik sama simbol ini, karena dia yang paling sering kamu lupakan seumur hidup.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Satu hal yang wajib kamu tahu: Java itu galak soal huruf besar-kecil (case-sensitive). System beda dengan system, dan Main beda dengan main. Jadi kalau ada error merah, sebelum panik, cek dulu barangkali cuma salah ketik huruf kapital.',
      },
      { type: 'heading', text: 'Statement dan blok' },
      {
        type: 'paragraph',
        text: 'Statement adalah satu perintah utuh, dan selalu diakhiri titik koma. Sementara blok adalah sekumpulan statement yang dibungkus kurung kurawal { }. Kurawal ini kayak kotak: semua yang di dalamnya dianggap satu kesatuan.',
      },
      { type: 'heading', text: 'Komentar: catatan buat manusia' },
      {
        type: 'paragraph',
        text: 'Komentar adalah tulisan yang diabaikan total oleh Java, tapi berguna banget buat mengingatkan dirimu sendiri (atau menghina dirimu tiga bulan kemudian saat lupa kode ini ngapain).',
      },
      {
        type: 'code',
        lang: 'java',
        code: '// ini komentar satu baris\n\n/*\n  ini komentar\n  beberapa baris sekaligus\n*/\nSystem.out.println("Kode jalan, komentar cuma nonton.");',
      },
      { type: 'heading', text: 'print vs println' },
      {
        type: 'code',
        lang: 'java',
        code: 'System.out.print("Halo ");\nSystem.out.print("dunia");   // hasilnya nyambung: Halo dunia\nSystem.out.println("!");     // println pindah baris setelahnya',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Ubah tulisan Hello World jadi perkenalan singkatmu (nama, hobi, cita-cita) memakai beberapa println.',
          'Coba campur print dan println, amati bedanya di baris output.',
          'Sengaja hapus satu titik koma, baca pesan error-nya, lalu perbaiki. Kenalan sama error itu wajib.',
        ],
      },
    ],
  },
  {
    slug: 'variabel-dan-tipe-data',
    title: 'Variabel dan Tipe Data',
    summary:
      'Cara Java menyimpan data lewat variabel: dari angka, teks, sampai benar/salah. Plus kenapa tiap "loker" harus dikasih label tipe.',
    category: 'Java',
    date: '2026-07-06',
    tags: ['java', 'fundamental', 'variabel', 'tipe-data'],
    body: [
      { type: 'heading', text: 'Variabel itu apa?' },
      {
        type: 'paragraph',
        text: 'Bayangkan deretan loker di sekolah. Tiap loker punya nama (label) dan isi. Variabel ya loker itu: tempat menyimpan data, dikasih nama, dan isinya bisa diambil atau diganti kapan saja.',
      },
      {
        type: 'paragraph',
        text: 'Bedanya, loker Java itu pemilih banget. Loker sepatu ya isinya sepatu, jangan dimasukin bakso kuah. Makanya tiap variabel harus dikasih tahu tipe datanya: mau nyimpen jenis apa.',
      },
      { type: 'heading', text: 'Tipe data dasar yang wajib kenal' },
      {
        type: 'list',
        items: [
          'int — bilangan bulat. Contoh: umur, jumlah barang.',
          'double — bilangan desimal/pecahan. Contoh: harga, tinggi badan, saldo.',
          'boolean — cuma dua nilai: true (benar) atau false (salah). Pas buat status ya/tidak.',
          'char — satu karakter tunggal, ditulis pakai petik satu.',
          'long, float, byte, short — saudara-saudaranya buat kebutuhan khusus. Santai, jarang dipakai di awal.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Ada bintang tamu yang bukan tipe dasar tapi paling sering dipakai: String, yaitu teks. Ditulis pakai petik dua.',
      },
      { type: 'heading', text: 'Cara bikinnya' },
      {
        type: 'code',
        lang: 'java',
        code: 'int umur = 20;               // bilangan bulat\ndouble saldo = 15000.5;      // bilangan desimal\nboolean sedangBelajar = true; // benar / salah\nchar grade = \'A\';            // satu karakter (petik satu)\nString nama = "Pais";        // teks (petik dua)\n\nSystem.out.println(nama + " umur " + umur + ", lagi belajar? " + sedangBelajar);',
      },
      {
        type: 'paragraph',
        text: 'Perhatikan tanda + di dalam println. Kalau ketemu teks, + artinya "sambung/tempel", bukan menambah. Jadi "umur " + umur menggabungkan teks dengan angka menjadi satu kalimat.',
      },
      { type: 'heading', text: 'Trik singkat: var' },
      {
        type: 'paragraph',
        text: 'Kalau malas menulis tipe, sejak Java 10 kamu bisa pakai var, dan Java akan menebak sendiri tipenya dari isinya. Tapi jangan kebablasan, kadang menulis tipe secara jelas malah bikin kode lebih enak dibaca.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'var kota = "Jakarta";  // Java tahu ini String\nvar tahun = 2026;       // Java tahu ini int',
      },
      { type: 'heading', text: 'Kalau isinya tidak boleh berubah: final' },
      {
        type: 'paragraph',
        text: 'Sebagian nilai haram diubah, misalnya nilai PI. Tambahkan kata kunci final, dan Java akan menolak kalau kamu coba menggantinya. Ini sama saja dengan menggembok lokernya.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'final double PI = 3.14159;\n// PI = 3.2;  // ERROR! konstanta tidak boleh diubah',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Bikin variabel data dirimu: nama (String), umur (int), tinggi (double), sudahSarapan (boolean).',
          'Cetak semuanya jadi satu kalimat rapi memakai println.',
          'Coba masukkan angka desimal ke variabel int. Baca error-nya: Java sedang bilang loker ini tidak muat pecahan.',
        ],
      },
    ],
  },
  {
    slug: 'operator-java',
    title: 'Operator dalam Java',
    summary:
      'Simbol-simbol untuk menghitung, membandingkan, dan menggabungkan logika. Termasuk jebakan pembagian bilangan bulat yang bikin banyak pemula garuk kepala.',
    category: 'Java',
    date: '2026-07-05',
    tags: ['java', 'fundamental', 'operator'],
    body: [
      { type: 'heading', text: 'Operator adalah alat kerja' },
      {
        type: 'paragraph',
        text: 'Kalau variabel itu bahan, operator adalah alat untuk mengolahnya. Ada empat geng operator yang paling sering nongol: aritmatika, perbandingan, logika, dan penugasan.',
      },
      { type: 'heading', text: '1. Aritmatika (matematika biasa)' },
      {
        type: 'code',
        lang: 'java',
        code: 'int a = 10, b = 3;\nSystem.out.println(a + b);  // 13\nSystem.out.println(a - b);  // 7\nSystem.out.println(a * b);  // 30\nSystem.out.println(a / b);  // 3   <- lho, kok bukan 3.33?\nSystem.out.println(a % b);  // 1   <- sisa bagi',
      },
      {
        type: 'paragraph',
        text: 'Operator % (modulo) memberi SISA pembagian. Analoginya: kamu punya 10 permen, dibagi rata ke 3 teman. Tiap teman dapat 3, sisa 1 buat kamu. Sisa itulah hasil %. Modulo ini juara buat cek ganjil/genap: kalau angka % 2 hasilnya 0, berarti genap.',
      },
      { type: 'heading', text: 'JEBAKAN: pembagian bilangan bulat' },
      {
        type: 'paragraph',
        text: 'Kenapa 10 / 3 hasilnya 3, bukan 3.33? Karena kedua angkanya int, Java membuang koma di belakang tanpa ampun. Kalau mau hasil desimal, minimal salah satu angkanya harus double.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'System.out.println(10 / 3);      // 3\nSystem.out.println(10.0 / 3);    // 3.3333333333333335\nSystem.out.println(10 / 3.0);    // 3.3333333333333335',
      },
      { type: 'heading', text: '2. Perbandingan (menghasilkan true/false)' },
      {
        type: 'list',
        items: [
          '==  sama dengan',
          '!=  tidak sama dengan',
          '>  lebih besar,  <  lebih kecil',
          '>=  lebih besar atau sama,  <=  lebih kecil atau sama',
        ],
      },
      {
        type: 'paragraph',
        text: 'Catatan penting: untuk membandingkan isi String, JANGAN pakai ==. Pakai .equals(). Ingat dulu polanya: namaA.equals(namaB). Alasannya cerita seru buat modul lanjutan.',
      },
      { type: 'heading', text: '3. Logika (menggabungkan kondisi)' },
      {
        type: 'code',
        lang: 'java',
        code: 'boolean punyaUang = true;\nboolean lagiLapar = false;\n\nSystem.out.println(punyaUang && lagiLapar); // false — && butuh DUA-DUANYA benar\nSystem.out.println(punyaUang || lagiLapar); // true  — || cukup SALAH SATU benar\nSystem.out.println(!lagiLapar);             // true  — ! artinya kebalikan',
      },
      {
        type: 'paragraph',
        text: 'Analogi: mau jajan bakso butuh "punya uang DAN lagi lapar" (&&). Tapi mau pulang cukup "capek ATAU sudah malam" (||), salah satu saja sudah cukup.',
      },
      { type: 'heading', text: '4. Penugasan (jalan pintas)' },
      {
        type: 'code',
        lang: 'java',
        code: 'int skor = 10;\nskor += 5;  // sama dengan skor = skor + 5  -> 15\nskor -= 2;  // 13\nskor *= 2;  // 26\nskor++;     // tambah 1 -> 27\nskor--;     // kurang 1 -> 26',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Hitung luas dan keliling persegi panjang dari variabel panjang dan lebar.',
          'Cek apakah sebuah angka genap memakai operator %.',
          'Bikin variabel harga dan diskon (persen), lalu hitung harga akhir. Awas pembagian bilangan bulat!',
        ],
      },
    ],
  },
  {
    slug: 'input-scanner',
    title: 'Membaca Input dengan Scanner',
    summary:
      'Sampai sini programmu masih monolog. Saatnya bikin dia mendengarkan ketikan pengguna dan membalas, memakai Scanner.',
    category: 'Java',
    date: '2026-07-04',
    tags: ['java', 'fundamental', 'input', 'scanner'],
    body: [
      { type: 'heading', text: 'Program yang bisa mendengar' },
      {
        type: 'paragraph',
        text: 'Selama ini program kita cuma ngomong sendiri. Biar interaktif, kita butuh alat untuk mendengar ketikan pengguna. Alat itu bernama Scanner. Anggap saja Scanner ini kupingnya program.',
      },
      { type: 'heading', text: 'Cara pakainya' },
      {
        type: 'code',
        lang: 'java',
        code: 'import java.util.Scanner;  // ambil "kuping" dari gudang Java\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n\n        System.out.print("Siapa namamu? ");\n        String nama = input.nextLine();\n\n        System.out.print("Berapa umurmu? ");\n        int umur = input.nextInt();\n\n        System.out.println("Halo " + nama + "! Tahun depan umurmu " + (umur + 1) + ".");\n    }\n}',
      },
      {
        type: 'paragraph',
        text: 'Baris import di paling atas itu wajib. Artinya: "Java, ambilkan alat Scanner dari gudang java.util". Tanpa itu, Java pura-pura tidak kenal Scanner.',
      },
      { type: 'heading', text: 'Menu "mendengar" sesuai jenis data' },
      {
        type: 'list',
        items: [
          'input.nextLine()  — baca satu baris teks lengkap (boleh mengandung spasi).',
          'input.next()      — baca satu kata saja (berhenti di spasi).',
          'input.nextInt()   — baca satu bilangan bulat.',
          'input.nextDouble()— baca satu bilangan desimal.',
        ],
      },
      { type: 'heading', text: 'JEBAKAN legendaris: nextInt lalu nextLine' },
      {
        type: 'paragraph',
        text: 'Ada bug yang bikin sejuta pemula garuk kepala. Kalau kamu pakai nextInt() lalu langsung nextLine(), si nextLine sering kelewat dan langsung kosong. Penyebabnya: nextInt() cuma mengambil angkanya, sedangkan tombol Enter-nya masih tertinggal di antrean. Solusi singkat: tambahkan satu input.nextLine() ekstra untuk membuang sisa Enter itu.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'int umur = input.nextInt();\ninput.nextLine();               // buang sisa Enter\nString kota = input.nextLine();  // sekarang aman',
      },
      { type: 'heading', text: 'Bonus: mencetak rapi pakai printf' },
      {
        type: 'code',
        lang: 'java',
        code: 'double harga = 15000.5;\nSystem.out.printf("Total: Rp%.2f%n", harga);  // Total: Rp15000.50',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Bikin program yang menanyakan nama dan tahun lahir, lalu menebak umurnya.',
          'Bikin kalkulator sederhana: minta dua angka, cetak hasil tambah, kurang, kali, dan bagi.',
          'Tanya nama depan dan nama belakang, lalu sapa dengan nama lengkapnya.',
        ],
      },
    ],
  },
  {
    slug: 'percabangan-java',
    title: 'Percabangan: if, else, dan switch',
    summary:
      'Ajari programmu mengambil keputusan seperti kamu memilih menu di warung. Bahas if/else if/else, switch, dan operator ternary.',
    category: 'Java',
    date: '2026-07-03',
    tags: ['java', 'fundamental', 'percabangan', 'if', 'switch'],
    body: [
      { type: 'heading', text: 'Hidup itu pilihan, program juga' },
      {
        type: 'paragraph',
        text: 'Percabangan adalah momen program berpikir "kalau begini, lakukan begitu". Persis satpam di gerbang: kalau punya kartu akses, silakan masuk; kalau tidak, putar balik.',
      },
      { type: 'heading', text: 'if / else if / else' },
      {
        type: 'code',
        lang: 'java',
        code: 'int nilai = 78;\n\nif (nilai >= 90) {\n    System.out.println("Grade A — mantap jiwa!");\n} else if (nilai >= 75) {\n    System.out.println("Grade B — lumayan lah.");\n} else if (nilai >= 60) {\n    System.out.println("Grade C — hati-hati ya.");\n} else {\n    System.out.println("Belajar lagi yuk, semangat!");\n}',
      },
      {
        type: 'paragraph',
        text: 'Java membaca dari atas ke bawah. Begitu ketemu kondisi pertama yang bernilai true, dia jalankan bloknya lalu kabur keluar, sisanya diabaikan. Jadi urutan itu penting: taruh syarat paling ketat di atas.',
      },
      { type: 'heading', text: 'switch — kalau pilihannya banyak dan pasti' },
      {
        type: 'paragraph',
        text: 'Kalau kamu cuma mencocokkan satu nilai dengan banyak kemungkinan (misalnya nomor hari), switch lebih rapi ketimbang if bertumpuk-tumpuk.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'int hari = 3;\nswitch (hari) {\n    case 1 -> System.out.println("Senin");\n    case 2 -> System.out.println("Selasa");\n    case 3 -> System.out.println("Rabu");\n    default -> System.out.println("Hari lainnya");\n}',
      },
      { type: 'heading', text: 'Ternary — if versi satu baris' },
      {
        type: 'paragraph',
        text: 'Untuk keputusan sederhana, ada jalan pintas keren. Bacanya: (kondisi) ? nilai_kalau_benar : nilai_kalau_salah.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'int umur = 18;\nString status = (umur >= 17) ? "boleh bikin SIM" : "sabar dulu ya";\nSystem.out.println(status);',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Minta sebuah angka, cetak "Genap" atau "Ganjil".',
          'Minta nilai ujian (0-100), cetak grade A/B/C/D sesuai rentangnya.',
          'Bikin cek sederhana: kalau saldo cukup cetak "Transaksi berhasil", kalau tidak cetak "Saldo kurang".',
        ],
      },
    ],
  },
  {
    slug: 'perulangan-java',
    title: 'Perulangan: for, while, dan do-while',
    summary:
      'Suruh komputer mengulang pekerjaan membosankan, karena memang untuk itu dia diciptakan. Bahas for, while, do-while, plus break dan continue.',
    category: 'Java',
    date: '2026-07-02',
    tags: ['java', 'fundamental', 'perulangan', 'loop'],
    body: [
      { type: 'heading', text: 'Kenapa perlu perulangan?' },
      {
        type: 'paragraph',
        text: 'Coba cetak angka 1 sampai 100 memakai println satu per satu. Capek, kan? Komputer diciptakan justru untuk pekerjaan berulang yang bikin manusia bosan. Perulangan (loop) adalah cara menyuruhnya mengulang sampai puas.',
      },
      { type: 'heading', text: 'for — kalau tahu berapa kali mengulang' },
      {
        type: 'code',
        lang: 'java',
        code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println("Putaran ke-" + i);\n}',
      },
      {
        type: 'list',
        items: [
          'int i = 1  — titik start (mulai dari 1).',
          'i <= 5     — syarat lanjut (selama i masih <= 5, terus jalan).',
          'i++        — langkah tiap putaran (naik 1).',
        ],
      },
      {
        type: 'paragraph',
        text: 'Analogi: lari mengelilingi lapangan 5 kali. i adalah hitungan putaranmu, i++ berarti kamu menambah satu putaran tiap balik ke garis start, dan begitu putaran ke-6 kamu berhenti.',
      },
      { type: 'heading', text: 'while — kalau tidak tahu berapa kali, tapi tahu kapan berhenti' },
      {
        type: 'code',
        lang: 'java',
        code: 'int bensin = 3;\nwhile (bensin > 0) {\n    System.out.println("Masih jalan, sisa bensin: " + bensin);\n    bensin--;\n}\nSystem.out.println("Mogok. Dorong, bro.");',
      },
      {
        type: 'paragraph',
        text: 'Hati-hati: kalau kondisinya tidak pernah menjadi false, kamu membuat loop abadi (infinite loop) dan program menggantung. Pastikan ada sesuatu di dalam yang lama-lama menghentikan loop (di sini: bensin--).',
      },
      { type: 'heading', text: 'do-while — pokoknya jalan dulu sekali' },
      {
        type: 'code',
        lang: 'java',
        code: 'int i = 10;\ndo {\n    System.out.println("Aku tetap jalan sekali walau syaratnya false");\n} while (i < 5);',
      },
      {
        type: 'paragraph',
        text: 'Bedanya, do-while memeriksa syarat DI AKHIR, jadi isinya dijamin jalan minimal sekali. Cocok untuk menu yang harus tampil dulu sebelum menanyakan "mau lanjut?".',
      },
      { type: 'heading', text: 'break & continue — rem darurat dan lompatan' },
      {
        type: 'code',
        lang: 'java',
        code: 'for (int i = 1; i <= 10; i++) {\n    if (i == 5) continue; // lompati angka 5, lanjut putaran berikutnya\n    if (i == 8) break;    // berhenti total begitu ketemu 8\n    System.out.println(i);\n}\n// Hasil: 1 2 3 4 6 7',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Cetak angka 1 sampai 100 (buktikan kamu tidak copy-paste).',
          'Cetak tabel perkalian sebuah angka, misalnya perkalian 7.',
          'Jumlahkan semua angka dari 1 sampai 10 memakai loop, lalu cetak totalnya.',
        ],
      },
    ],
  },
  {
    slug: 'array-java',
    title: 'Array: Satu Nama untuk Banyak Data',
    summary:
      'Daripada bikin 100 variabel, tampung semuanya dalam satu array. Kenalan dengan index yang anehnya mulai dari nol.',
    category: 'Java',
    date: '2026-07-01',
    tags: ['java', 'fundamental', 'array'],
    body: [
      { type: 'heading', text: 'Masalahnya dulu' },
      {
        type: 'paragraph',
        text: 'Mau menyimpan nilai 30 siswa. Masa bikin nilai1, nilai2, sampai nilai30? Itu namanya menyiksa diri. Array hadir sebagai penyelamat: satu variabel yang menampung banyak data sekaligus.',
      },
      { type: 'heading', text: 'Analogi: rak sepatu bernomor' },
      {
        type: 'paragraph',
        text: 'Bayangkan rak sepatu panjang dengan kotak-kotak bernomor. Satu rak (array), banyak kotak (elemen). Mau ambil sepatu di kotak tertentu? Sebut nomornya. Nomor kotak inilah yang disebut index.',
      },
      { type: 'heading', text: 'Aturan aneh tapi wajib: index mulai dari 0' },
      {
        type: 'paragraph',
        text: 'Elemen pertama itu index 0, bukan 1. Elemen kedua index 1, dan seterusnya. Awalnya bikin bingung, tapi lama-lama jadi refleks. Anggap saja programmer suka menghitung dari nol biar beda dari orang biasa.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'int[] nilai = {90, 85, 77, 100};\n\nSystem.out.println(nilai[0]);      // 90  (elemen pertama)\nSystem.out.println(nilai[3]);      // 100 (elemen keempat)\nSystem.out.println(nilai.length);  // 4   (jumlah elemen)',
      },
      { type: 'heading', text: 'Mengelilingi isi array pakai loop' },
      {
        type: 'code',
        lang: 'java',
        code: '// Cara 1: for biasa (kalau butuh nomor index-nya)\nfor (int i = 0; i < nilai.length; i++) {\n    System.out.println("Nilai ke-" + (i + 1) + ": " + nilai[i]);\n}\n\n// Cara 2: for-each (kalau cuma mau isinya, lebih ringkas)\nfor (int n : nilai) {\n    System.out.println(n);\n}',
      },
      {
        type: 'paragraph',
        text: 'for-each dibaca: "untuk setiap n di dalam nilai". Rapi untuk sekadar keliling tanpa pusing memikirkan index.',
      },
      { type: 'heading', text: 'JEBAKAN: kelewat batas' },
      {
        type: 'paragraph',
        text: 'Array {90, 85, 77, 100} punya index 0 sampai 3. Kalau kamu mengakses nilai[4], Java langsung ngambek dengan ArrayIndexOutOfBoundsException. Artinya: "kamu cari kotak nomor 4, raknya cuma sampai 3, mau ambil dari mana?"',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Bikin array berisi 5 angka, lalu cetak jumlah dan rata-ratanya.',
          'Cari nilai terbesar dalam sebuah array memakai loop.',
          'Bikin array nama teman, lalu cetak semuanya memakai for-each.',
        ],
      },
    ],
  },
  {
    slug: 'method-java',
    title: 'Method: Bungkus Kode Biar Dipakai Ulang',
    summary:
      'Method itu mesin mini: kasih bahan, dapat hasil. Tulis sekali, panggil sesuka hati, dan kodemu jadi jauh lebih rapi.',
    category: 'Java',
    date: '2026-06-30',
    tags: ['java', 'fundamental', 'method', 'fungsi'],
    body: [
      { type: 'heading', text: 'Method itu apa?' },
      {
        type: 'paragraph',
        text: 'Method (di bahasa lain sering disebut fungsi) adalah sepotong kode yang diberi nama dan bisa dipanggil berkali-kali. Analoginya blender: masukkan buah (input), tekan tombol, keluar jus (output). Kamu tidak perlu tahu isi mesinnya, tinggal pakai.',
      },
      {
        type: 'paragraph',
        text: 'Prinsipnya: jangan menulis kode yang sama berulang-ulang (dikenal dengan istilah DRY, Do Not Repeat Yourself). Kalau ada kode yang kamu tulis berulang, kemungkinan besar dia layak dijadikan method.',
      },
      { type: 'heading', text: 'Anatomi method' },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Main {\n    // method yang menerima 2 angka dan mengembalikan hasilnya\n    static int tambah(int a, int b) {\n        return a + b;\n    }\n\n    // method tanpa nilai balik (void) — cuma "melakukan" sesuatu\n    static void sapa(String nama) {\n        System.out.println("Halo, " + nama + "!");\n    }\n\n    public static void main(String[] args) {\n        int hasil = tambah(4, 5);\n        System.out.println(hasil); // 9\n        sapa("Pais");              // Halo, Pais!\n    }\n}',
      },
      {
        type: 'list',
        items: [
          'int di depan tambah — tipe nilai yang dikembalikan (hasilnya berupa int).',
          'void — kata sakti untuk "method ini tidak mengembalikan apa-apa, cuma beraksi".',
          '(int a, int b) — parameter, alias bahan yang diminta method.',
          'return — mengirim hasil balik ke pemanggil. Method non-void wajib punya ini.',
        ],
      },
      { type: 'heading', text: 'Overloading: satu nama, banyak versi' },
      {
        type: 'paragraph',
        text: 'Java membolehkan beberapa method bernama sama asalkan parameternya berbeda. Ini disebut overloading, praktis supaya tidak perlu memikirkan nama baru terus-menerus.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'static int luas(int sisi) { return sisi * sisi; }   // persegi\nstatic int luas(int p, int l) { return p * l; }     // persegi panjang\n\n// Java otomatis memilih yang cocok berdasar jumlah argumen',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Bikin method kali(a, b) yang mengembalikan hasil perkalian.',
          'Bikin method cekGenap(int angka) yang mengembalikan boolean.',
          'Bikin method sapa yang menerima nama dan mencetak salam, lalu panggil untuk 3 nama berbeda.',
        ],
      },
    ],
  },
  {
    slug: 'class-dan-object',
    title: 'Class dan Object (Dasar OOP)',
    summary:
      'Selamat datang di dunia OOP. Class itu cetakan kue, object itu kuenya. Bikin cetakan sendiri lalu cetak sepuasnya.',
    category: 'Java',
    date: '2026-06-29',
    tags: ['java', 'oop', 'class', 'object'],
    body: [
      { type: 'heading', text: 'Kenapa OOP?' },
      {
        type: 'paragraph',
        text: 'OOP (Object Oriented Programming) adalah cara ngoding dengan memodelkan hal-hal dunia nyata menjadi objek. Java itu bahasa yang OOP banget, jadi ini bagian penting. Tenang, konsepnya sebenarnya masuk akal kok.',
      },
      { type: 'heading', text: 'Class vs Object: cetakan vs kue' },
      {
        type: 'paragraph',
        text: 'Class adalah cetakan/blueprint: dia mendefinisikan bahwa "kucing itu punya nama, umur, dan bisa mengeong". Object adalah wujud nyatanya: Oyen si kucing umur 2 tahun. Dari satu cetakan, kamu bisa bikin banyak kue yang berbeda-beda isinya.',
      },
      { type: 'heading', text: 'Bikin class' },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Kucing {\n    // atribut (sifat / data yang dimiliki)\n    String nama;\n    int umur;\n\n    // constructor: dipanggil saat objek DIBUAT, untuk mengisi data awal\n    Kucing(String nama, int umur) {\n        this.nama = nama;\n        this.umur = umur;\n    }\n\n    // method (kelakuan / hal yang bisa dilakukan)\n    void meong() {\n        System.out.println(nama + " bilang: Meoong!");\n    }\n}',
      },
      {
        type: 'paragraph',
        text: 'Kata kunci this berarti "milik objek ini". Baris this.nama = nama membedakan atribut objek (this.nama) dengan parameter yang masuk (nama). Tanpa this, Java bingung yang mana yang kamu maksud.',
      },
      { type: 'heading', text: 'Bikin dan pakai object' },
      {
        type: 'code',
        lang: 'java',
        code: 'public class Main {\n    public static void main(String[] args) {\n        Kucing oyen = new Kucing("Oyen", 2);\n        Kucing kembang = new Kucing("Kembang", 1);\n\n        oyen.meong();     // Oyen bilang: Meoong!\n        kembang.meong();  // Kembang bilang: Meoong!\n\n        System.out.println(oyen.nama + " umur " + oyen.umur);\n    }\n}',
      },
      {
        type: 'paragraph',
        text: 'Kata kunci new adalah tombol "cetak kue". Tiap kali dipanggil, lahir objek baru dengan datanya sendiri. Oyen dan Kembang sama-sama Kucing, tapi hidup masing-masing.',
      },
      { type: 'heading', text: 'Latihan' },
      {
        type: 'list',
        items: [
          'Bikin class Mobil dengan atribut merk dan kecepatan, plus method klakson().',
          'Buat 2 objek mobil berbeda lalu panggil method-nya.',
          'Bikin class Mahasiswa dengan nama dan nilai, lalu method cetakInfo() yang menampilkan datanya.',
        ],
      },
    ],
  },
  {
    slug: 'empat-pilar-oop',
    title: 'Empat Pilar OOP',
    summary:
      'Encapsulation, Inheritance, Polymorphism, dan Abstraction. Empat konsep yang bikin kode besar tetap rapi, dan bikin kamu terdengar keren saat wawancara kerja.',
    category: 'Java',
    date: '2026-06-28',
    tags: ['java', 'oop', 'lanjutan', 'pilar'],
    body: [
      { type: 'heading', text: 'Empat pilar yang bikin OOP kokoh' },
      {
        type: 'paragraph',
        text: 'Kalau modul sebelumnya kita belajar membuat class, sekarang kita belajar empat prinsip yang membuat class-class itu bekerja sama dengan rapi. Ini yang sering ditanyakan saat interview, jadi simak baik-baik ya.',
      },
      { type: 'heading', text: '1. Encapsulation — bungkus dan lindungi' },
      {
        type: 'paragraph',
        text: 'Analoginya ATM. Kamu tidak bisa membuka brankasnya lalu comot uang; kamu harus lewat tombol resmi (tarik/setor). Encapsulation menyembunyikan data (private) dan hanya membolehkan akses lewat method resmi (getter/setter). Tujuannya supaya data tidak dirusak sembarangan.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'public class RekeningBank {\n    private double saldo; // private = tidak bisa disentuh langsung dari luar\n\n    public void setor(double jumlah) {\n        if (jumlah > 0) saldo += jumlah;  // dijaga: tidak boleh setor minus\n    }\n\n    public double getSaldo() {\n        return saldo;\n    }\n}',
      },
      { type: 'heading', text: '2. Inheritance — mewarisi sifat' },
      {
        type: 'paragraph',
        text: 'Seperti anak mewarisi sifat orang tua. Sebuah class bisa extends class lain dan otomatis memperoleh semua atribut serta method-nya tanpa menulis ulang. Hemat tenaga, anti copy-paste.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'class Hewan {\n    void bernapas() { System.out.println("Hirup... hembus..."); }\n}\n\nclass Anjing extends Hewan {\n    void menggonggong() { System.out.println("Guk guk!"); }\n}\n\n// objek Anjing otomatis bisa bernapas() DAN menggonggong()',
      },
      { type: 'heading', text: '3. Polymorphism — satu perintah, banyak bentuk' },
      {
        type: 'paragraph',
        text: 'Poly berarti banyak, morph berarti bentuk. Method dengan nama sama bisa berperilaku beda tergantung objeknya. Analoginya tombol "mainkan": di gitar keluar petikan, di piano keluar tuts, di drum keluar dentuman. Perintahnya sama, hasilnya beda.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'class Hewan {\n    void suara() { System.out.println("..."); }\n}\nclass Kucing extends Hewan {\n    void suara() { System.out.println("Meong"); }  // menimpa versi induk\n}\nclass Sapi extends Hewan {\n    void suara() { System.out.println("Moo"); }\n}\n\n// panggil suara() ke objek berbeda -> hasil berbeda-beda',
      },
      { type: 'heading', text: '4. Abstraction — sembunyikan yang rumit' },
      {
        type: 'paragraph',
        text: 'Saat menyetir mobil, kamu cukup tahu setir, gas, dan rem. Kamu tidak perlu paham cara mesin membakar bensin. Abstraction menyembunyikan detail rumit dan hanya menampilkan yang penting dipakai. Di Java sering memakai interface atau abstract class.',
      },
      {
        type: 'code',
        lang: 'java',
        code: 'interface Kendaraan {\n    void jalan(); // cuma janji "aku pasti bisa jalan", tanpa detail caranya\n}\n\nclass Mobil implements Kendaraan {\n    public void jalan() { System.out.println("Mobil melaju di jalan raya"); }\n}',
      },
      { type: 'heading', text: 'Latihan penutup' },
      {
        type: 'list',
        items: [
          'Bikin class Karyawan dengan gaji yang private, plus getter/setter (encapsulation).',
          'Bikin class Pegawai lalu Manager yang extends Pegawai dengan tambahan tunjangan (inheritance).',
          'Bikin beberapa class hewan yang menimpa method suara() masing-masing (polymorphism).',
        ],
      },
      {
        type: 'paragraph',
        text: 'Selamat! Kamu sudah menuntaskan fundamental Java dari nol sampai OOP. Ini pondasi yang dipakai selamanya, entah nanti kamu bikin aplikasi Android, backend, atau game. Ingat, jago itu soal jam terbang, bukan bakat. Terus latihan, terus berenang. Just keep swimming.',
      },
    ],
  },
  // {
  //   slug: 'contoh-catatan',
  //   title: 'Contoh: Catatan',
  //   summary:
  //     'Hapus materi contoh ini dan mulai isi catatanmu sendiri. Struktur di file ini sudah siap pakai.',
  //   category: 'Catatan',
  //   date: '2026-07-08',
  //   tags: ['mulai', 'contoh'],
  //   body: [
  //     { type: 'heading', text: 'Cara pakai' },
  //     {
  //       type: 'paragraph',
  //       text: 'Buka src/content/materials.ts, salin objek ini, lalu ganti judul, ringkasan, dan isi body-nya. Halaman akan otomatis menampilkannya.',
  //     },
  //     { type: 'heading', text: 'Blok yang tersedia' },
  //     {
  //       type: 'list',
  //       items: [
  //         'heading — sub-judul di dalam materi',
  //         'paragraph — paragraf teks biasa',
  //         'list — daftar poin seperti ini',
  //         'code — cuplikan kode',
  //       ],
  //     },
  //     {
  //       type: 'code',
  //       lang: 'ts',
  //       code: "const semangat = 'just keep swimming'\nconsole.log(semangat)",
  //     },
  //   ],
  // },
]

// ── Helper (tidak perlu diubah) ──────────────────────────────────────
export const getMaterial = (slug: string) =>
  materials.find((m) => m.slug === slug)

// Materi terbaru dulu.
export const sortedMaterials = () =>
  [...materials].sort((a, b) => b.date.localeCompare(a.date))

// Daftar kategori unik + jumlah materinya (buat section "Explore" di home).
export const categories = () => {
  const count = new Map<string, number>()
  for (const m of materials) count.set(m.category, (count.get(m.category) ?? 0) + 1)
  return [...count.entries()].map(([name, total]) => ({ name, total }))
}
