import { ThumbsUp } from "lucide-react";
import { SiShopee } from "react-icons/si";
import { PiFacebookLogo, PiInstagramLogo, PiTiktokLogo } from "react-icons/pi";
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
// FaTiktok

export const APPCONSTANT = {
  name: "OLMAT UINSA",
  fullName: "Olimpiade Matematika UINSA",
  year: "2026",
  theme: `GALACTIC MINDS: Menaklukkan Semesta dengan Matematika`,
  about: {
    desc: "The UINSA Math Olympiad is Indonesias premier mathematics competition, bringing together the brightest young minds from across the nation.",
    item: [
      {
        label: "Tentang OLMAT",
        desc: "Olimpiade Matematika (Olmat) merupakan acara tahunan yang diselenggarakan oleh Program Studi Pendidikan Matematika UIN Sunan Ampel Surabaya. Kegiatan ini ditujukan untuk siswa-siswi dari seluruh Indonesia dalam tiga jenjang pendidikan, yaitu Sekolah Dasar (SD/MI), Sekolah Menengah Pertama (SMP/MTs), dan Sekolah Menengah Atas/Kejuruan (SMA/SMK/MA). Olmat hadir sebagai wadah bagi para pelajar untuk berkompetisi secara sehat, meningkatkan semangat belajar, serta mengembangkan minat dan prestasi di bidang matematika.",
      },
    ],
  },

  socialEcommerce: {
    shopee: {
      name: "Shopee",
      icon: <SiShopee />,
      desc: "Buku Paket Soal & Pembahasan OLMAT",
      username: "",
      item: [
        {
          tumbnail: "/social/allBook.webp",
          label: "Buku Kumpulan Soal Olmat dan Pembahasannya",
          price: 70000,
          link: "https://id.shp.ee/ZNQQe5pN",
          chat: "https://api.whatsapp.com/send?phone=+6281558616119&text=Hai%20Kak%2C%20mau%20buku%20olmatnya%20dong",
        },
        // {
        //   tumbnail: "/social/book_smp.webp",
        //   label: "Buku Olmat Jenjang SMP",
        //   price: 70000,
        //   link: "https://id.shp.ee/4pU9zCc",
        //   chat: "https://api.whatsapp.com/send?phone=+6281558616119&text=Hai%20Kak%2C%20mau%20buku%20olmatnya%20dong",
        // },
        // {
        //   tumbnail: "/social/book_sma.webp",
        //   label: "Buku Olmat Jenjang SMA",
        //   price: 70000,
        //   link: "https://id.shp.ee/4pU9zCc",
        //   chat: "https://api.whatsapp.com/send?phone=+6281558616119&text=Hai%20Kak%2C%20mau%20buku%20olmatnya%20dong",
        // },
      ],
    },
    // socialMedia: {
    //   icon: <ThumbsUp className="h-5 w-5" />,
    //   name: "Social Media",
    //   desc: "Ikuti akun Sosial Media kami untuk mendapatkan info terbaru seputar Olimpiade Matematika UINSA!",
    //   username: "",
    //   item: [
    //     {
    //       icon: <FaInstagram className="text-red-500" />,
    //       key: "Instagram",
    //       tumbnail: "/social/comingOut.png",
    //       caption: "Persiapan Olimpiade Matematika UINSA 2024",
    //       like: 245,
    //       view: 417,
    //       link: "https://www.instagram.com/reel/DJNQostTynO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    //       embedUrl: "https://www.instagram.com/p/DJNQostTynO/embed/",
    //     },
    //     {
    //       icon: <FaInstagram className="text-red-500" />,
    //       key: "Instagram",
    //       tumbnail: "/social/teaserIg.png",
    //       caption: "Tips dan Trik Menghadapi Olimpiade Matematika",
    //       like: 158,
    //       view: 318,
    //       link: "https://www.instagram.com/reel/DJMzNzBPJue/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    //       embedUrl: "https://www.instagram.com/p/DJMzNzBPJue/embed/",
    //     },
    //     {
    //       icon: <FaTiktok />,
    //       key: "Tiktok",
    //       tumbnail: "/images/tiktok/video-1.jpg",
    //       caption:
    //         "Persiapan Olimpiade Matematika UINSA 2024 #olmatuinsa #matematika",
    //       like: 1245,
    //       view: 15200,
    //       link: "https://www.tiktok.com/@olmatuinsa/video/7501128312756899090?is_from_webapp=1&sender_device=pc&web_id=7419597193205958162",
    //       embedUrl: "https://www.tiktok.com/embed/v2/7501128312756899090",
    //     },
    //     {
    //       icon: <FaTiktok />,
    //       key: "Tiktok",
    //       tumbnail: "/images/tiktok/video-2.jpg",
    //       caption:
    //         "Tips Jitu Menghadapi Soal Olimpiade Matematika #olmatuinsa #tipsmatematika",
    //       like: 987,
    //       view: 12400,
    //       link: "https://www.tiktok.com/@olmatuinsa/video/7501131059292081416?is_from_webapp=1&sender_device=pc&web_id=7419597193205958162",
    //       embedUrl: "https://www.tiktok.com/embed/v2/7501131059292081416",
    //     },
    //   ],
    // },
  },

  supportEvent: [
    {
      name: "Seminar Nasional",
      img: "/seminar.webp",
      desc: "Seminar Mathematics for the Future: Building Critical Thinking in the Digital Era bertujuan mengajak peserta memahami peran matematika sebagai fondasi dalam membangun kemampuan berpikir kritis, logis, dan analitis untuk menghadapi tantangan di era digital. Melalui seminar ini, peserta diharapkan memperoleh wawasan tentang pentingnya matematika dalam mendukung inovasi, pemecahan masalah, dan pengambilan keputusan di masa depan.",
      options: [
        {
          label: "Narasumber",
          value:
            "Papa Zidan (Encep Muhammad Subhan) komika dan konten kreator matematika, dengan parodi mengajar yang menjelaskan rumus - rumus dengan cara cerdas namun penuh kelakar dan absurd.",
        },
        {
          label: "Moderator",
          value:
            "Elen Riswana (1st Most Outstanding Student of Mathematics UINSA 2023, Rector UiTM Malaysia Grand Award of UIYSC 2022, Honorable Delegate of Asia Europe Conference & Exchange Program)",
        },
        {
          label: "Hari/Tanggal",
          value: "Sabtu, 17 Oktober 2026",
        },
        {
          label: "Waktu",
          value: "Open Gate 07.00 – 09.00 WIB, Acara 09.00 WIB – Selesai",
        },
        {
          label: "Tempat",
          value: "Auditorium UIN Sunan Ampel Surabaya",
        },
        {
          label: "Benefit",
          value: "Certificate, Knowledge, Snack, Relation, Entertainment",
        },
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScywD0X3oAE8O7RyFYTPfaQd1OGCGIpaivQ0rbYHwIyyjomMA/viewform",
    },
    {
      name: "Lomba Tilawah Tartil",
      img: "/eventTilawah.webp",
      desc: "Membangun Peradaban Qur’ani Melalui Tilawah Tartil dalam",
      juknis: "/pdf/juknisTilawah.pdf",
      options: [
        {
          label: "Peserta",
          value: "SD/MI, SMP/MTs, SMA/MA/SMK",
        },
        {
          label: "Tema Pidato",
          value: "Membangun Peradaban Qur’ani Melalui Tilawah Tartil dalam",
        },
        {
          label: "HTM Gelombang 1",
          value: "Rp 20.000 (13 Juli – 11 Agustus 2026)",
        },
        {
          label: "HTM Gelombang 2",
          value: "Rp 20.000 (12 Agustus – 10 September 2026)",
        },
        {
          label: "Technical Meeting",
          value: "14 September 2026 (Wajib ikut)",
        },
        {
          label: "Pengumpulan Video",
          value: "15 September – 30 September 2026",
        },
        {
          label: "Penjurian",
          value: "1 – 10 Oktober 2026",
        },
        {
          label: "Pengumuman Pemenang",
          value: "13 Oktober 2026",
        },
      ],
      registerLink: "https://forms.gle/Dgs35ntcs4tmEkHBA",
    },
    {
      name: "Mobile Legends",
      img: "/comingSoon.png",
      desc: "Bukan hanya otak, tapi juga kerjasama tim yang diuji! Turnamen Mobile Legends hadir untuk kamu yang ingin menunjukkan strategi dan kekompakan dalam dunia e-sports. Siapkan tim terbaikmu dan rebut gelar juara dalam pertandingan yang seru dan kompetitif!",
      options: [
        {
          label: "Wilayah",
          value: "Surabaya dan sekitarnya",
        },
      ],
      registerLink: "",
    },
  ],

  timelineEvents: [
    {
      date: "10 Juli 2026",
      title: "Pembukaan Pendaftaran",
      description:
        "Pendaftaran OLMAT UINSA 2026 resmi dibuka untuk jenjang MI/SD, MTs/SMP, dan MA/SMA/SMK. Proses pendaftaran dilakukan melalui website resmi​",
    },
    {
      date: "22 Agustus 2026",
      title: "Try Out Gratis",
      description:
        "Pendaftar yang melakukan registrasi antara 10 Juli – 16 Agustus 2026 berhak mengikuti Try Out Gratis pada 23 Agustus 2026.",
    },
    {
      date: "10 September 2026",
      title: "Penutupan Pendaftaran",
      description:
        "Hari terakhir pendaftaran OLMAT UINSA 2026. Peserta harus sudah melengkapi seluruh proses, mulai dari pengisian formulir, pembayaran, hingga konfirmasi.",
    },
    {
      date: "19 September 2026",
      title: "Babak Penyisihan",
      description:
        "Babak pertama olimpiade dilaksanakan online via platform Sibiti dan Zoom Meeting. Peserta terbaik akan dipilih berdasarkan peringkat nasional dan rayon untuk melaju ke babak semifinal​",
    },
    {
      date: "3 Oktober 2026",
      title: "Babak Semifinal",
      description:
        "Peserta yang lolos melanjutkan ke semifinal dengan sistem pengawasan ketat (double device). Peringkat 10 terbaik tiap jenjang berhak maju ke babak final",
    },
    {
      date: "17 Oktober 2026",
      title: "Babak Final",
      description:
        "Final diadakan secara luring (offline) di Fakultas Tarbiyah dan Keguruan UINSA Surabaya. Tahapan Tes tulis & Presentasi",
    },
  ],

  footer: {
    mainName: "Romie",
    mainWhatsApp: "6285604632754",
    registerName: "Maullid Avriliyanti E.K",
    registerWhatsApp: "6288228906018",
    email: "olimpiadematematikauinsa@gmail.com",
    socialMedia: [
      {
        name: "Instagram",
        icon: <PiInstagramLogo />,

        link: "#",
      },
      {
        name: "Tiktok",
        icon: <PiTiktokLogo />,
        link: "#",
      },
      {
        name: "Facebook",
        icon: <PiFacebookLogo />,
        link: "#",
      },
    ],
    shopee: {
      icon: <TbBrandShopee />,
      link: "#",
    },
  },
};
