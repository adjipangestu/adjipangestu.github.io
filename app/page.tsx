import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from 'lucide-react';

const waNumber = '6282184423449';
const waText = encodeURIComponent('Halo, saya ingin konsultasi pembuatan aplikasi custom.');

const services = [
  { icon: UsersRound, title: 'Manajemen Data', text: 'Siswa, guru, pegawai, pelanggan, member, pasien, atau data operasional sesuai kebutuhan.' },
  { icon: BookOpen, title: 'Akademik & Sekolah', text: 'SIAKAD, jadwal, absensi, nilai, pembayaran, laporan, hingga integrasi PDDikti/Feeder.' },
  { icon: CreditCard, title: 'Keuangan & Pembayaran', text: 'Tagihan, invoice, rekap pembayaran, dashboard kas, dan integrasi payment gateway.' },
  { icon: MessageCircle, title: 'Komunikasi', text: 'Notifikasi, pengumuman, pesan, reminder WhatsApp, dan alur komunikasi internal.' },
  { icon: BarChart3, title: 'Dashboard & Laporan', text: 'Laporan otomatis, export Excel/PDF, grafik monitoring, dan ringkasan data real-time.' },
  { icon: LockKeyhole, title: 'Akses & Keamanan', text: 'Role permission, audit trail, autentikasi aman, dan struktur akses sesuai organisasi.' },
];

const benefits = [
  'Aplikasi dibuat sesuai proses bisnis, bukan dipaksa mengikuti template.',
  'Desain modern, responsif, dan nyaman digunakan di desktop maupun mobile.',
  'Mudah dikembangkan ketika kebutuhan bertambah.',
  'Source code dan struktur sistem lebih jelas untuk maintenance jangka panjang.',
  'Bisa dibuat bertahap sesuai prioritas dan budget.',
];

const steps = [
  ['01', 'Konsultasi', 'Diskusi kebutuhan, masalah utama, dan target aplikasi.'],
  ['02', 'Analisis & Scope', 'Menentukan modul, prioritas fitur, timeline, dan estimasi biaya.'],
  ['03', 'Desain & Development', 'Pembuatan UI, API, database, integrasi, dan testing bertahap.'],
  ['04', 'Deploy & Support', 'Setup hosting/server, dokumentasi singkat, dan after sales support.'],
];

const portfolio = [
  'Aplikasi Sekolah / SIAKAD',
  'Sistem Keuangan & Pembayaran',
  'Dashboard Monitoring',
  'Aplikasi Absensi & HR',
  'Sistem Klinik / Layanan',
  'Website Company Profile',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeeff,transparent_34%),linear-gradient(180deg,#f8fcff_0%,#eef7ff_45%,#ffffff_100%)]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-soft">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Custom App</p>
            <p className="text-xs text-slate-500">Adji Pangestu Team</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#layanan" className="hover:text-brand-700">Layanan</a>
          <a href="#proses" className="hover:text-brand-700">Proses</a>
          <a href="#team" className="hover:text-brand-700">Tim</a>
          <a href="#kontak" className="hover:text-brand-700">Kontak</a>
        </nav>
        <a href={`https://wa.me/${waNumber}?text=${waText}`} className="rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700">
          Hubungi WA
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-14">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
            <BadgeCheck className="h-4 w-4" />
            Next.js • Laravel API • Tailwind CSS
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-brand-900 md:text-7xl">
            Jasa Pembuatan <span className="gradient-text">Aplikasi Custom</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Kami membantu sekolah, lembaga, UMKM, klinik, dan organisasi membangun aplikasi web modern yang sesuai kebutuhan, rapi, aman, dan mudah dikembangkan.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={`https://wa.me/${waNumber}?text=${waText}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-7 py-4 font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-brand-700">
              Konsultasi Gratis <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#layanan" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-brand-900 shadow-sm transition hover:-translate-y-1 hover:border-brand-200">
              Lihat Layanan
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ['Custom', 'Sesuai kebutuhan'],
              ['Modern', 'UI responsif'],
              ['Support', 'After sales'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-xl font-black text-brand-900">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-cyan-200 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white bg-white/85 p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-brand-900 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Dashboard Project</p>
                  <h2 className="text-2xl font-black">Aplikasi Custom</h2>
                </div>
                <MonitorSmartphone className="h-9 w-9 text-blue-100" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ['Modul', '24+'],
                  ['Integrasi', 'API'],
                  ['Platform', 'Web'],
                  ['Support', 'Full'],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-blue-100">{title}</p>
                    <p className="mt-1 text-2xl font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-[1fr_0.75fr]">
              <div className="rounded-3xl border border-slate-100 bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <LayoutDashboard className="h-5 w-5 text-brand-600" />
                  <p className="font-bold text-brand-900">Contoh Modul</p>
                </div>
                <div className="space-y-3">
                  {['Master Data', 'Transaksi', 'Laporan', 'Pengaturan Role'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                      <span className="font-medium text-slate-600">{item}</span>
                      <CheckCircle2 className="h-4 w-4 text-brand-600" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white p-5">
                <Smartphone className="h-7 w-7 text-brand-600" />
                <p className="mt-4 text-lg font-black text-brand-900">Mobile Friendly</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Tampilan tetap nyaman untuk pengguna sekolah, admin, dan manajemen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.25em] text-brand-600">Layanan</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-brand-900 md:text-5xl">Fitur dapat disesuaikan dengan kebutuhan Anda.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-black text-brand-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-blue-200">Kenapa pilih kami</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Solusi digital yang tidak sekadar jadi, tapi siap dipakai.</h2>
          </div>
          <div className="space-y-4">
            {benefits.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-white/10 p-5">
                <ShieldCheck className="mt-0.5 h-6 w-6 flex-none text-blue-200" />
                <p className="leading-7 text-blue-50">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.25em] text-brand-600">Alur kerja</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-brand-900 md:text-5xl">Proses jelas dari konsultasi sampai aplikasi live.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([no, title, text]) => (
            <div key={no} className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-brand-100">{no}</p>
              <h3 className="mt-5 text-xl font-black text-brand-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <Rocket className="h-10 w-10 text-brand-600" />
          <h2 className="mt-5 text-3xl font-black text-brand-900">Cocok untuk banyak kebutuhan</h2>
          <p className="mt-4 leading-7 text-slate-600">Mulai dari aplikasi sekolah, bisnis, operasional kantor, sistem internal, hingga dashboard laporan.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-brand-600" />
              <p className="mt-4 font-bold text-brand-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-brand-600">Our Team</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-brand-900">Dikerjakan oleh tim kecil yang fokus dan komunikatif.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-brand-50 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white">AP</div>
                <h3 className="mt-5 text-xl font-black text-brand-900">Adji Pangestu</h3>
                <a href="https://adji.my.id" className="mt-1 block text-sm font-bold text-brand-600">adji.my.id</a>
                <p className="mt-4 text-sm leading-6 text-slate-600">Full-stack developer untuk frontend, backend, integrasi API, deployment, dan arsitektur sistem.</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">PS</div>
                <h3 className="mt-5 text-xl font-black text-brand-900">Puji Setiawan</h3>
                <p className="mt-1 text-sm font-bold text-brand-600">Project Partner</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">Membantu kebutuhan project, komunikasi, testing, dan penyesuaian sistem sesuai kebutuhan pengguna.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-900 p-8 text-white shadow-soft lg:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-blue-200">Mulai sekarang</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Punya ide aplikasi? Konsultasikan dulu, gratis.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-blue-50">Ceritakan kebutuhan Anda. Kami bantu susun modul, prioritas fitur, estimasi pengerjaan, dan teknologi yang paling masuk akal.</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
              <Headphones className="h-9 w-9 text-brand-600" />
              <h3 className="mt-4 text-2xl font-black text-brand-900">Hubungi Kami</h3>
              <p className="mt-2 text-slate-600">WhatsApp: +62 821-8442-3449</p>
              <a href={`https://wa.me/${waNumber}?text=${waText}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 font-black text-white transition hover:bg-brand-700">
                Chat WhatsApp <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Adji Pangestu & Puji Setiawan. Jasa pembuatan aplikasi custom.
      </footer>
    </main>
  );
}
