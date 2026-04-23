/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Clock, 
  Star, 
  ChevronRight, 
  UtensilsCrossed, 
  Car,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const REVIEWS = [
  { id: 1, name: "Katarzyna", text: "Świetny klimat! Cadillac w ścianie robi wrażenie, a burger był obłędny. Na pewno wrócę!", rating: 5 },
  { id: 2, name: "Marek", text: "Pyszne jedzenie, bardzo miła obsługa. Idealne miejsce na przystanek w trasie.", rating: 5 },
  { id: 3, name: "Anna", text: "Najlepszy klimat amerykańskiego dineru w tej części Polski. Polecam steki!", rating: 5 },
];

const MENU_ITEMS = [
  { category: "Burgery", items: [
    { name: "Lotos Classic", price: "34 zł", description: "Soczysta wołowina, ser cheddar, sałata, pomidor, cebula, sos firmowy." },
    { name: "Cadillac Burger", price: "42 zł", description: "Podwójna wołowina, bekon, karmelizowana cebula, sos BBQ." }
  ]},
  { category: "Dania Główne", items: [
    { name: "Stek z Antrykotu", price: "78 zł", description: "Sezonowana wołowina z masłem czosnkowym i frytkami." },
    { name: "Amerykańskie Żeberka", price: "56 zł", description: "Długo pieczone w sosie miodowo-musztardowym." }
  ]},
  { category: "Przekąski", items: [
    { name: "Krążki Cebulowe", price: "18 zł", description: "Chrupiące krążki w domowej panierce." },
    { name: "Frytki Belgijskie", price: "15 zł", description: "Grubo ciosane, podawane z sosem do wyboru." }
  ]}
];

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/555959491_1802384010473680_3277773774791571118_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XMdC3JX4siIQ7kNvwFFRgYP&oh=00_Af0_8Wauil2mV75uCFnXnykSVAd25F_0jt7NnycBWK3qRA&oe=69EF9A18",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/556892494_1802360900475991_647774063571387651_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9XM4Bxu-ZHEQ7kNvwFwIrOb&oh=00_Af34hfLCxoLe0ytbAOZToBEYCOCmJZvZBgXvn0aU0CEqew&oe=69EFB1B5",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/484075197_1647151939330222_4604593790086263795_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=GGXpI6EvfLAQ7kNvwHfe5wu&oh=00_Af06AgSs-c_CYIHYhv7KRWRoWzfJL1cjPO0j0ucCJ4Au9Q&oe=69EFA199",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/483751292_1647151985996884_2391905775776737894_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xkKpPOXxjKEQ7kNvwGawthp&oh=00_Af2-bt4rEvSqYXBPrTyiyE8OSTdK056_PDF3RH1svptfkw&oe=69EF943A",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/476453867_1624451761600240_316169056175233821_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=b895b5&_nc_ohc=Ecthctu0v1gQ7kNvwGO3qna&oh=00_Af0KBOhbXtCtln8m1FWQa8LZ7nkI6H_Qt55K848SZQFKJw&oe=69EF8EC5",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGDgMld2tpT_ZLnF0HKuGlKCVCNgPEm9Kw4wrY7rrWvsJ9fWZr3A5NJSPhrjRHnufrVnFELpCarwIKtTKitLArNBZ_LnmtQLIt-gg7_WuUvgXnKbNmYyH0hcC5bSTgchsFvNXq9=s680",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKyTdlsm8ji2CC7MuX6tdxh4AzCXqEMeTrxObTEiaB8CVAhaVBh1A95HonwlUCKIAWyG8MUnreBHuv2Wl3JySwEgUq4CO6jGoz6_vVaG4GfFuTDSBp3p4LS0fWMRQZTPPnsx8cAQ=s680"
];

const REELS = [
  "https://www.facebook.com/reel/937105515978800",
  "https://www.facebook.com/reel/1246113757485652",
  "https://www.facebook.com/reel/1650331609274295"
];

export default function App() {
  return (
    <div className="min-h-screen bg-lotos-bg font-sans text-lotos-black overflow-x-hidden flex flex-col">
      {/* Header / Brand */}
      <header className="bg-lotos-red text-white p-6 border-b-8 border-black flex flex-col md:flex-row justify-between items-end gap-4 z-50 sticky top-0">
        <div className="leading-none">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
            Zajazd Lotos
          </h1>
          <p className="text-lg md:text-xl font-bold tracking-widest mt-2 uppercase">
            American Style Diner & Restaurant
          </p>
        </div>
        <div className="text-right flex flex-col items-end">
          <a href="tel:722108303" className="text-2xl md:text-4xl font-black hover:underline decoration-white underline-offset-4">
            722 108 303
          </a>
          <p className="text-sm uppercase font-bold opacity-90 flex items-center gap-2">
            <MapPin size={14} /> Mop Worów, Grójec 05-600
          </p>
        </div>
      </header>

      {/* Ticker Top */}
      <div className="bg-black text-white py-2 overflow-hidden border-b-4 border-black">
        <div className="flex gap-10 animate-ticker whitespace-nowrap px-4 font-black uppercase text-xs tracking-widest">
          <span>🍔 NAJLEPSZE BURGERY NA TRASIE</span>
          <span className="text-lotos-red">🚗 KLIMAT USA</span>
          <span>🎸 MUZYKA I SMAK</span>
          <span className="text-lotos-red">📍 MOP WORÓW, GRÓJEC</span>
          <span>🥩 STEKI Z GRILLA</span>
          <span className="text-lotos-red">☕ KAWA DLA KIEROWCÓW</span>
        </div>
      </div>

      <main className="flex-1 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-0 border-x-4 border-black bg-white">
        
        {/* Left Column: The Legend */}
        <section className="col-span-12 md:col-span-4 border-b-4 md:border-b-0 md:border-r-4 border-black p-8 flex flex-col">
          <div className="relative aspect-square md:aspect-auto flex-1 rounded-none overflow-hidden brutal-border brutal-shadow mb-8">
            <img 
              src={IMAGES[0]} 
              alt="Cadillac Wall" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-sm italic font-black uppercase">
              Nasz kultowy Cadillac zaprasza do środka!
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-5xl font-black uppercase mb-4 text-lotos-red leading-none italic tracking-tighter">
              Pyszne Jedzenie
            </h2>
            <p className="text-xl leading-tight font-bold uppercase italic text-slate-700">
              Poczuj klimat amerykańskiej trasy w samym sercu Polski. Czerwień, chrom i smaki, których nie zapomnisz.
            </p>
          </div>

          <a 
            href="https://www.facebook.com/ZajazdLotos" 
            target="_blank" 
            rel="no-referrer"
            className="bg-[#1877F2] text-white flex items-center justify-center gap-3 py-6 rounded-none font-black text-2xl hover:scale-[1.02] transition-transform brutal-border brutal-shadow-sm uppercase italic tracking-tighter"
          >
            <Facebook size={28} />
            <span>FB: Zajazd Lotos</span>
          </a>
        </section>

        {/* Middle Column: Menu & Photos */}
        <section className="col-span-12 md:col-span-4 bg-[#F2F2F2] border-b-4 md:border-b-0 md:border-r-4 border-black p-0 flex flex-col">
          {/* Menu Block */}
          <div className="p-8 bg-white border-b-4 border-black">
            <h3 className="text-center font-black text-3xl uppercase border-b-4 border-black pb-3 mb-6 italic tracking-tighter">Specjały Lotosu</h3>
            <div className="space-y-4">
              {MENU_ITEMS.flatMap(c => c.items).slice(0, 5).map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b-2 border-black/10 pb-2">
                  <span className="font-black uppercase text-sm leading-none">{item.name}</span>
                  <div className="h-[1px] border-b border-dotted border-black/20 grow mx-2 mb-1" />
                  <span className="font-black text-lotos-red">{item.price}</span>
                </div>
              ))}
            </div>
            <a href="#menu-full" className="block text-center mt-6 font-black uppercase text-xs underline decoration-lotos-red decoration-2 underline-offset-4 hover:text-lotos-red">Zobacz Pełne Menu</a>
          </div>

          {/* Photos Grid */}
          <div className="p-4 grid grid-cols-2 gap-2 flex-1 min-h-[300px]">
            <img src={IMAGES[2]} className="w-full h-full object-cover brutal-border" alt="Danie" />
            <img src={IMAGES[4]} className="w-full h-full object-cover brutal-border" alt="Wnętrze" />
          </div>

          {/* Quick Actions */}
          <div className="flex border-t-4 border-black h-24">
            <a href="#video" className="flex-1 bg-lotos-red hover:bg-red-700 transition-colors flex items-center justify-center text-white font-black text-xs text-center p-2 border-r-4 border-black uppercase italic tracking-widest">ZOBACZ REELS</a>
            <a href="#galeria" className="flex-1 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center text-black font-black text-xs text-center p-2 border-r-4 border-black uppercase italic tracking-widest">FOTO GALERIA</a>
            <a href="tel:722108303" className="flex-1 bg-lotos-red hover:bg-red-700 transition-colors flex items-center justify-center text-white font-black text-xs text-center p-2 uppercase italic tracking-widest">ZADZWOŃ</a>
          </div>
        </section>

        {/* Right Column: Map & Reviews */}
        <section className="col-span-12 md:col-span-4 bg-white p-0 flex flex-col">
          {/* Map */}
          <div className="flex-1 min-h-[400px] border-b-4 border-black">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.9607792515635!2d20.852334812852163!3d51.87992847178323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471922babe555555%3A0x29c00222910e292b!2zTWllanNjZSBPYnPFgnVnaSBQb2Ryw7PFvG55Y2ggV29yw7N3!5e0!3m2!1spl!2spl!4v1776930296503!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Reviews Block */}
          <div className="bg-black text-white p-8 md:h-[400px] overflow-hidden flex flex-col">
            <h4 className="text-3xl font-black uppercase mb-6 text-lotos-red italic tracking-tighter">Opinie Gości</h4>
            <div className="space-y-6 flex-1 overflow-auto">
              {REVIEWS.map((review) => (
                <div key={review.id} className="border-l-8 border-lotos-red pl-4 py-1">
                  <p className="text-lg italic font-bold leading-tight">"{review.text}"</p>
                  <p className="text-xs uppercase font-black mt-2 text-gray-400">— {review.name}, Facebook Reviews</p>
                </div>
              ))}
            </div>
            <a 
              href="https://www.facebook.com/ZajazdLotos/reviews/" 
              target="_blank" 
              rel="no-referrer"
              className="inline-block mt-6 text-sm font-black uppercase underline decoration-lotos-red decoration-2 underline-offset-4 hover:text-lotos-red"
            >
              ZOBACZ WSZYSTKIE OPINIE
            </a>
          </div>
        </section>
      </main>

      {/* Full Menu Section (Classic View) */}
      <section id="menu-full" className="bg-lotos-bg py-20 border-t-8 border-black">
        <div className="max-w-4xl mx-auto px-4">
           <div className="bg-white brutal-border brutal-shadow p-8 md:p-12">
             <h2 className="text-6xl font-black text-center uppercase italic tracking-tighter mb-12 border-b-8 border-black pb-4">Full Menu</h2>
             {MENU_ITEMS.map((cat, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-3xl font-black uppercase italic text-lotos-red mb-6">{cat.category}</h3>
                <div className="grid gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-xl font-black uppercase italic tracking-tight">{item.name}</span>
                        <span className="font-black text-2xl">{item.price}</span>
                      </div>
                      <p className="text-slate-500 font-bold uppercase text-xs italic">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Video / Reels (Brutalist Grid) */}
      <section id="video" className="bg-white py-20 border-t-8 border-black">
         <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-12">Filmy z Trasy</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REELS.map((url, i) => (
               <a key={i} href={url} target="_blank" rel="no-referrer" className="group relative block aspect-[9/16] brutal-border brutal-shadow hover:translate-y-[-4px] transition-transform">
                 <img src={IMAGES[i % IMAGES.length]} className="w-full h-full object-cover" alt="Reel" />
                 <div className="absolute inset-0 bg-lotos-red/20 group-hover:bg-lotos-red/0 transition-colors" />
                 <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-black text-xs uppercase italic">VIDEO #{i+1}</div>
                 <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 font-black uppercase text-center italic group-hover:bg-lotos-red transition-colors">OGLĄDAJ NA FB</div>
               </a>
             ))}
           </div>
         </div>
      </section>

      {/* Footer Ticker Re-emphasize */}
      <footer className="bg-black text-white py-6 border-t-8 border-black text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-black text-3xl uppercase italic tracking-tighter mb-2">Zajazd Lotos</p>
          <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">© {new Date().getFullYear()} - Najlepszy Diner na trasie S7</p>
        </div>
      </footer>
    </div>
  );
}
