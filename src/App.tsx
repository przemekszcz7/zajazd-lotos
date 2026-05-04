/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Star, 
  ChevronRight, 
  UtensilsCrossed, 
  Car,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Flame,
  Coffee,
  IceCream,
  CircleHelp,
  ArrowDown
} from 'lucide-react';
import React, { useRef } from 'react';

// Image URLs for Diner theme
const imgHeroInterior = 'https://iili.io/BQ5WG4t.md.jpg';
const imgHeroCadillac = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5Ri_ENQR9gBD6rSjelXVzE2RUWlEua3SzKKYtOEArJA-GWNvgoLRCX7NRVseeG5mD9-pQqIZyj8a3D55lNohfnSMnwwch9jG0DkXCERPg-Z4DOVCIg_-rB__2C5PtZ7slK-29VA=s1200';
const imgGallery2 = 'https://iili.io/BQ5W5va.md.jpg';
const imgGallery3 = 'https://iili.io/BQ5WzCB.md.jpg';
const imgGallery4 = 'https://iili.io/BQ5WhyG.md.jpg';
const imgGallery5 = 'https://iili.io/BQ5WIEP.md.jpg';
const imgGallery6 = 'https://iili.io/BQ5WXvs.md.jpg';
const imgGallery7 = 'https://iili.io/BQ5Wwuf.md.jpg';

const REVIEWS = [
  { id: 1, name: "Katarzyna", text: "Świetny klimat! Cadillac w ścianie robi wrażenie, a burger był obłędny. Na pewno wrócę!", rating: 5 },
  { id: 2, name: "Marek", text: "Pyszne jedzenie, bardzo miła obsługa. Idealne miejsce na przystanek w trasie.", rating: 5 },
  { id: 3, name: "Anna", text: "Najlepszy klimat amerykańskiego dineru w tej części Polski. Polecam steki!", rating: 5 },
  { id: 4, name: "Tomasz", text: "Porcje gigantyczne, smak prawdziwej Ameryki. Frytki belgijskie chrupiące i genialnie przyprawione.", rating: 5 },
  { id: 5, name: "Julia", text: "Obsługa uśmiechnięta i bardzo szybka, mimo dużego ruchu. Cadillac to super tło do zdjęć!", rating: 4 },
];

const MENU_ITEMS = [
  { category: "Burgery", icon: <Flame />, items: [
    { name: "Lotos Classic", price: "34 zł", description: "Soczysta wołowina, ser cheddar, sałata, pomidor, cebula, sos firmowy." },
    { name: "Cadillac Burger", price: "42 zł", description: "Podwójna wołowina, bekon, karmelizowana cebula, sos BBQ." },
    { name: "Texas Spicy", price: "38 zł", description: "Jalapeno, ostry sos habanero, grillowana papryka, wołowina." }
  ]},
  { category: "Dania Główne", icon: <UtensilsCrossed />, items: [
    { name: "Stek z Antrykotu", price: "78 zł", description: "Sezonowana wołowina z masłem czosnkowym i frytkami." },
    { name: "Amerykańskie Żeberka", price: "56 zł", description: "Długo pieczone w sosie miodowo-musztardowym." },
    { name: "Schnitzel XXL", price: "45 zł", description: "Tradycyjny schabowy w amerykańskim wydaniu." }
  ]},
  { category: "Śniadania", icon: <Coffee />, items: [
    { name: "Pancakes with Syrup", price: "24 zł", description: "Puszyste naleśniki z syropem klonowym i owocami." },
    { name: "Eggs & Bacon", price: "28 zł", description: "Dwa jajka sadzone, chrupiący bekon, tost i grillowany pomidor." }
  ]},
  { category: "Desery", icon: <IceCream />, items: [
    { name: "Brownie Fudge", price: "22 zł", description: "Mocno czekoladowe ciasto z gałką lodów waniliowych." },
    { name: "Apple Pie", price: "19 zł", description: "Domowa szarlotka podawana na ciepło." }
  ]}
];

// Uwaga: Linki scontent z Facebooka są tymczasowe i mogą wygasnąć.
// Zaleca się wgranie własnych zdjęć do stałego hostingu lub bezpośrednio do projektu.
const IMAGES = [
  imgHeroCadillac, // Item 1 (Cadillac)
  imgGallery2,     // Item 2
  imgGallery3,     // Item 3
  imgGallery4,     // Item 4
  imgGallery5,     // Item 5
  imgGallery6,     // Item 6
  imgGallery7      // Item 7
];

const REELS = [
  "https://www.facebook.com/reel/937105515978800",
  "https://www.facebook.com/reel/1246113757485652",
  "https://www.facebook.com/reel/1650331609274295"
];

const FAQS = [
  { q: "Gdzie dokładnie się znajdujecie?", a: "Znajdujemy się bezpośrednio przy trasie S7, na Miejscu Obsługi Podróżnych (MOP) Worów, w kierunku Grójca." },
  { q: "Czy można rezerwować stoliki?", a: "Tak, oczywiście! Wystarczy zadzwonić pod numer 722 108 303." },
  { q: "Czy macie opcje wegetariańskie?", a: "Tak, serwujemy m.in. klasyczne burgery w wersji wege oraz sałatki śródziemnomorskie." },
  { q: "Czy lokal jest przyjazny dzieciom?", a: "Oczywiście! Mamy menu dla najmłodszych oraz dużo przestrzeni." }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotateCadillac = useTransform(scrollYProgress, [0, 0.2], [0, 15]);
  const driftText = useTransform(scrollYProgress, [0, 0.5], [0, -500]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('picsum.photos')) {
      target.src = `https://picsum.photos/seed/${Math.random()}/800/600?grayscale`;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-lotos-bg font-sans text-lotos-black overflow-x-hidden flex flex-col selection:bg-lotos-red selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-lotos-red z-[100] origin-left"
        style={{ scaleX: scaleProgress }}
      />

      {/* Header / Brand */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-lotos-red text-white p-6 border-b-8 border-black flex flex-col md:flex-row justify-between items-end gap-4 z-50 sticky top-0"
      >
        <div className="leading-none">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
            Zajazd Lotos
          </h1>
          <p className="text-lg md:text-xl font-bold tracking-widest mt-2 uppercase">
            American Style Diner & Restaurant
          </p>
        </div>
        <div className="text-right flex flex-col items-end">
          <a href="tel:722108303" className="text-2xl md:text-4xl font-black hover:underline hover:scale-105 transition-transform decoration-white underline-offset-4">
            722 108 303
          </a>
          <p className="text-sm uppercase font-bold opacity-90 flex items-center gap-2">
            <MapPin size={14} /> Mop Worów, Grójec 05-600
          </p>
        </div>
      </motion.header>

      {/* Ticker Top */}
      <div className="bg-black text-white py-4 overflow-hidden border-b-4 border-black relative">
        <div className="flex gap-10 animate-ticker grayscale hover:grayscale-0 transition-all cursor-default whitespace-nowrap px-4 font-black uppercase text-xl md:text-3xl tracking-tighter italic w-max">
          {[1, 2].map((group) => (
            <React.Fragment key={group}>
              <span>🍔 NAJLEPSZE BURGERY NA TRASIE</span>
              <span className="text-lotos-red underline decoration-white">🚗 KLIMAT USA</span>
              <span>🎸 MUZYKA I SMAK</span>
              <span className="text-lotos-red">📍 MOP WORÓW, GRÓJEC</span>
              <span>🥩 STEKI Z GRILLA</span>
              <span className="text-lotos-red">☕ KAWA DLA KIEROWCÓW</span>
              <span>🍔 NOWY CADILLAC BURGER</span>
              <span className="text-lotos-red">🛣️ TRANZYT S7</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-0 border-x-4 border-black bg-white">
        
        {/* Left Column: The Legend */}
        <section className="col-span-12 md:col-span-4 border-b-4 md:border-b-0 md:border-r-4 border-black p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Car size={300} className="rotate-45" />
          </div>

          <motion.div 
            style={{ rotate: rotateCadillac }}
            className="relative aspect-[3/4] flex-1 rounded-none overflow-hidden brutal-border brutal-shadow mb-8 group"
          >
            <img 
              src={imgHeroCadillac} 
              alt="Cadillac Wall" 
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-lotos-red/20 mix-blend-overlay group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 text-sm italic font-black uppercase transform translate-y-full group-hover:translate-y-0 transition-transform">
              Nasz kultowy Cadillac zaprasza do środka!
            </div>
          </motion.div>
          
          <div className="mb-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-5xl md:text-6xl font-black uppercase mb-4 text-lotos-red leading-[0.8] italic tracking-tighter"
            >
              Prawdziwa <br /> Legenda
            </motion.h2>
            <p className="text-xl leading-tight font-bold uppercase italic text-slate-700 border-l-4 border-lotos-red pl-4">
              Poczuj klimat amerykańskiej trasy w samym sercu Polski. Czerwień, chrom i smaki, których nie zapomnimz.
            </p>
          </div>

          <a 
            href="https://www.facebook.com/ZajazdLotos" 
            target="_blank" 
            rel="no-referrer"
            className="bg-[#1877F2] text-white flex items-center justify-center gap-3 py-6 rounded-none font-black text-2xl hover:bg-blue-600 active:scale-95 transition-all brutal-border brutal-shadow-sm uppercase italic tracking-tighter"
          >
            <Facebook size={28} />
            <span>ODWIEDŹ FACEBOOKA</span>
          </a>
        </section>

        {/* Middle Column: Experience */}
        <section className="col-span-12 md:col-span-8 bg-[#F2F2F2] p-0 flex flex-col">
          {/* Hero Row */}
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-white border-b-4 border-black border-r-4">
               <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                 Szybko. <br /><span className="text-lotos-red">Smacznie.</span> <br />Z Klimatem.
               </h3>
               <p className="font-bold text-slate-600 mb-8 uppercase text-sm tracking-widest leading-relaxed">
                 Zajazd Lotos to idealne miejsce na przerwę w trasie. Oferujemy doskonałą kuchnię,
                 profesjonalną obsługę i wystrój, który przeniesie Cię na słynną Route 66.
               </p>
               <div className="flex gap-4">
                 <div className="flex-1 brutal-border p-4 bg-lotos-red text-white">
                   <p className="text-3xl font-black italic mb-1 uppercase">100%</p>
                   <p className="text-[10px] uppercase font-black tracking-widest">Świeża Wołowina</p>
                 </div>
                 <div className="flex-1 brutal-border p-4 bg-white text-black">
                   <p className="text-3xl font-black italic mb-1 uppercase">S7</p>
                   <p className="text-[10px] uppercase font-black tracking-widest">MOP Worów</p>
                 </div>
               </div>
            </div>
            <div className="relative border-b-4 border-black overflow-hidden group">
               <img src={imgHeroInterior} onError={handleImageError} alt="Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-lotos-red/10 pointer-events-none" />
            </div>
          </div>

          {/* Scrolling Values */}
          <div className="bg-lotos-red py-6 border-b-4 border-black text-white flex gap-12 overflow-hidden whitespace-nowrap">
             <motion.div 
               style={{ x: driftText }}
               className="flex gap-12 font-black text-4xl uppercase italic tracking-tighter"
             >
                <span>CHEDDAR</span>
                <span className="text-black">★</span>
                <span>BEKON</span>
                <span className="text-black">★</span>
                <span>GRILL</span>
                <span className="text-black">★</span>
                <span>STAL</span>
                <span className="text-black">★</span>
                <span>CHROM</span>
                <span className="text-black">★</span>
                <span>V8 POWER</span>
                <span className="text-black">★</span>
                <span>BURGERY</span>
                <span className="text-black">★</span>
                <span>FRYTKI</span>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 grow">
             {/* Map Section Integrated */}
             <div className="min-h-[400px] md:min-h-0 relative border-r-4 border-black">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.9607792515635!2d20.852334812852163!3d51.87992847178323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471922babe555555%3A0x29c00222910e292b!2zTWllanNjZSBPYnPFgnVnaSBQb2Ryw7PFvG55Y2ggV29yw7N3!5e0!3m2!1spl!2spl!4v1776930296503!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 bg-black text-white p-2 px-4 brutal-border font-black text-xs uppercase italic z-10">ZNAJDŹ NAS NA S7</div>
             </div>
             
             {/* Reviews Section Integrated */}
             <div className="bg-black text-white p-8 overflow-hidden flex flex-col justify-center">
                <h4 className="text-4xl font-black uppercase mb-8 text-lotos-red italic tracking-tighter flex items-center gap-3">
                  <Star fill="#D42121" /> Głos Gości
                </h4>
                <div className="space-y-6">
                  {REVIEWS.slice(0, 2).map((review) => (
                    <motion.div 
                      key={review.id} 
                      className="border-l-4 border-lotos-red pl-6 py-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <p className="text-xl italic font-bold leading-none mb-2">"{review.text}"</p>
                      <p className="text-[10px] uppercase font-black text-gray-400">★ {review.name}</p>
                    </motion.div>
                  ))}
                </div>
                <a 
                  href="https://www.facebook.com/ZajazdLotos/reviews/" 
                  target="_blank" 
                  rel="no-referrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-black uppercase underline decoration-lotos-red decoration-2 underline-offset-4 hover:text-lotos-red"
                >
                  ODBLOKUJ WSZYSTKIE OPINIE <ArrowDown size={14} />
                </a>
             </div>
          </div>
        </section>
      </main>

      {/* Why Us / Process Section */}
      <section className="bg-white py-24 border-t-8 border-black overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring" }}
              className="relative"
            >
              <div className="aspect-video bg-lotos-red brutal-border brutal-shadow relative overflow-hidden">
                <img src={IMAGES[2]} alt="Food Process" onError={handleImageError} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center animate-pulse">
                     <Flame size={48} className="text-lotos-red" />
                   </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-lotos-red rounded-none brutal-border -rotate-12 hidden md:flex items-center justify-center text-white font-black">TOP SELL</div>
            </motion.div>
            
            <div>
              <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.8]">
                 Jak my to <br /><span className="text-lotos-red">Obrabiamy?</span>
              </h2>
              <ul className="space-y-6">
                {[
                  { icon: <ShieldCheck size={32} />, title: "Świeże Składniki", desc: "Dostawy od lokalnych rolników codziennie rano." },
                  { icon: <UtensilsCrossed size={32} />, title: "Autentyczne Receptury", desc: "Nasze sosy robimy sami wg tajnych amerykańskich receptur." },
                  { icon: <Flame size={32} />, title: "Moc Grilla", desc: "Używamy wysokiej temperatury dla idealnej soczystości." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-6 items-start"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-black text-white shrink-0 flex items-center justify-center brutal-border brutal-shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase italic leading-none mb-2">{item.title}</h4>
                      <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Menu Section */}
      <section id="menu-full" className="bg-lotos-red py-32 border-t-8 border-black text-white selection:bg-black selection:text-white">
        <div className="max-w-6xl mx-auto px-4">
           <div className="text-center mb-20">
              <motion.h2 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-4"
              >
                The Full <br /> <span className="text-black">Lotos Menu</span>
              </motion.h2>
              <p className="font-black uppercase tracking-widest text-white/80">Odkryj smak prawdziwej przygody</p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 md:gap-x-24">
             {MENU_ITEMS.map((cat, idx) => (
              <motion.div 
                key={idx} 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white text-black brutal-border">
                    {cat.icon}
                  </div>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter border-b-4 border-black pb-2 grow">{cat.category}</h3>
                </div>
                <div className="space-y-8">
                  {cat.items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="group relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-2xl font-black uppercase italic tracking-tight group-hover:text-black transition-colors">{item.name}</span>
                        <div className="h-[2px] bg-white/20 grow mx-4 mb-2 group-hover:bg-black transition-colors" />
                        <span className="font-black text-3xl group-hover:text-black transition-colors">{item.price}</span>
                      </div>
                      <p className="text-white/70 font-bold uppercase text-[10px] italic tracking-widest max-w-[80%] leading-tight group-hover:text-white transition-colors">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
           </div>
           
           <div className="mt-20 p-12 bg-black brutal-border brutal-shadow flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="text-4xl font-black uppercase italic tracking-tighter mb-2 text-lotos-red">Głodny?</h4>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest italic">Zadzwoń i zamów na konkretną godzinę!</p>
              </div>
              <a href="tel:722108303" className="bg-lotos-red text-white py-6 px-12 font-black text-2xl uppercase italic brutal-border brutal-shadow-sm hover:scale-105 transition-transform active:scale-95">722 108 303</a>
           </div>
        </div>
      </section>

      {/* Video / Reels - Refined Animation */}
      <section id="video" className="bg-white py-32 border-t-8 border-black">
         <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                On the <br /><span className="text-lotos-red">Road</span>
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {REELS.map((url, i) => (
               <motion.div 
                 key={i} 
                 className="relative aspect-[9/16] brutal-border brutal-shadow-sm overflow-hidden bg-black"
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ delay: i * 0.15 }}
               >
                 <iframe 
                   src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&t=0`} 
                   width="100%" 
                   height="100%" 
                   style={{ border: 'none', overflow: 'hidden' }} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                   className="absolute inset-0"
                 ></iframe>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* Gallery - Masonry Layout */}
      <section id="galeria" className="bg-lotos-black py-32 border-t-8 border-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-right">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-4 text-lotos-red">Visuals</h2>
            <p className="font-bold uppercase tracking-widest text-gray-500">Każdy detal ma znaczenie</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ rotate: i % 2 === 0 ? 2 : -2 }}
                className="relative break-inside-avoid rounded-none bg-white p-4 brutal-border brutal-shadow-sm group cursor-zoom-in"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  onError={handleImageError}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-4 flex justify-between items-center text-black font-black uppercase text-xs italic">
                   <span>#LOTOS_REST</span>
                   <span>PIC_00{i+1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-32 border-t-8 border-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-16 text-center underline decoration-lotos-red decoration-8 underline-offset-[12px]">Częste Pytania</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i} 
                className="brutal-border p-8 bg-lotos-bg group hover:bg-white transition-colors cursor-help"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <h4 className="text-2xl font-black uppercase italic mb-4 flex items-center gap-4">
                   <CircleHelp className="text-lotos-red" />
                   {faq.q}
                </h4>
                <p className="font-bold text-slate-600 uppercase text-xs tracking-widest leading-relaxed pl-10 border-l-2 border-black/10">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Final Section */}
      <section className="bg-lotos-red py-40 border-t-8 border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
           <h2 className="text-[40vw] font-black uppercase italic tracking-tighter leading-none select-none">LOTOS</h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-8 text-white">
               Wpadaj <br /><span className="text-black">do nas!</span>
            </h2>
            <p className="text-xl md:text-2xl font-black uppercase italic mb-12 tracking-wide text-white/90">
               Najbardziej klimatyczny przystanek przy S7 czeka.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://www.facebook.com/ZajazdLotos" target="_blank" className="bg-black text-white py-6 px-12 text-2xl font-black uppercase italic brutal-border brutal-shadow hover:translate-y-[-4px] active:translate-y-0 transition-transform flex items-center justify-center gap-4">
                <Facebook size={32} /> FACEBOOK
              </a>
              <a href="tel:722108303" className="bg-white text-black py-6 px-12 text-2xl font-black uppercase italic brutal-border brutal-shadow hover:translate-y-[-4px] active:translate-y-0 transition-transform flex items-center justify-center gap-4">
                <Phone size={32} /> ZADZWOŃ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="bg-black text-white py-12 border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-black text-5xl uppercase italic tracking-tighter mb-2 text-lotos-red">Zajazd Lotos</p>
            <p className="font-bold text-xs text-gray-500 uppercase tracking-widest">MOP Worów, Grójec 05-600 | S7 | American Diner Experience</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ZajazdLotos" target="_blank" rel="no-referrer">
              <Facebook className="hover:text-lotos-red cursor-pointer transition-colors" size={32} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.5em]">
            MADE FOR DRIVERS ★ BORN IN WORÓW ★ GRILLED IN LOTOS ★ © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
