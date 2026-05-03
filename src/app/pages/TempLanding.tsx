import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Image, Heart, Search, Download, Loader2, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import DomeGallery from '../components/DomeGallery';

export default function TempLanding() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: string, name: string, webViewLink: string, webContentLink: string }[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [galleryImages, setGalleryImages] = useState<{ src: string, alt: string }[]>([]);

  // Optimizations for heavy load
  const [searchCache, setSearchCache] = useState<Record<string, any[]>>({});
  const [searchAttempts, setSearchAttempts] = useState<number[]>([]);


  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const apiKey = 'AIzaSyC7JWzV0NV0_GkYi4QsY1-2kf3yPze36o8';
        const folderId = '1R901GFJstceL-41tc2F_iOP-W0FHWQS9';
        const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&key=${apiKey}&fields=files(id,name,thumbnailLink)&pageSize=35`;

        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          const images = (data.files || []).map((file: any) => {
            const src = file.thumbnailLink 
              ? file.thumbnailLink.replace(/=s\d+/, '=s800') 
              : `https://drive.google.com/uc?id=${file.id}`;
            return { src, alt: file.name || 'Gallery Image' };
          });
          console.log("Loaded images:", images);
          if (images.length > 0) {
            setGalleryImages(images);
          }
        }
      } catch (err) {
        console.error('Failed to fetch gallery images:', err);
      }
    };
    fetchGallery();
  }, []);

  const fetchWithRetry = async (url: string, retries = 3, delay = 1000): Promise<Response> => {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url);
      if (response.ok) return response;
      // If rate limited (429) or server error (5xx), wait and retry
      if (response.status === 429 || response.status === 403 || response.status >= 500) {
        if (i === retries - 1) throw response;
        await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
      } else {
        throw response;
      }
    }
    throw new Error('Max retries reached');
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // 1. Client-Side Rate Limiting (prevent spamming)
    const now = Date.now();
    // Keep attempts from the last 60 seconds
    const recentAttempts = searchAttempts.filter(timestamp => now - timestamp < 60000);
    
    if (recentAttempts.length >= 5) {
      setSearchError('Too many search attempts. Please wait a minute and try again.');
      return;
    }
    
    setSearchAttempts([...recentAttempts, now]);

    // 2. Caching (if previously searched, use cache)
    const cacheKey = query.toLowerCase();
    if (searchCache[cacheKey]) {
      setSearchResults(searchCache[cacheKey]);
      setSearchError('');
      if (searchCache[cacheKey].length === 0) {
        setSearchError('No certificates found for this name.');
      }
      return;
    }

    setSearchLoading(true);
    setSearchError('');
    setSearchResults([]);

    try {
      const apiKey = 'AIzaSyC7JWzV0NV0_GkYi4QsY1-2kf3yPze36o8';
      const folderId = '1gHf22F9gjoC-iC72DeflD2wgFMwB1hnp';
      const safeQuery = query.replace(/'/g, "\\'");
      const q = `name contains '${safeQuery}' and '${folderId}' in parents and trashed = false`;
      const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&key=${apiKey}&fields=files(id,name,webViewLink,webContentLink)`;

      // 3. Exponential Backoff Retry mechanism
      const response = await fetchWithRetry(url, 3, 1000);
      
      const data = await response.json();
      const files = data.files || [];
      
      setSearchResults(files);
      setSearchCache(prev => ({ ...prev, [cacheKey]: files }));

      if (files.length === 0) {
        setSearchError('No certificates found for this name.');
      }
    } catch (err: any) {
      console.error('Search API error:', err);
      if (err instanceof Response) {
        if (err.status === 429 || err.status === 403) {
          setSearchError('High traffic detected! The system is busy, please try again in a few minutes.');
        } else {
          setSearchError('An error occurred connecting to the server. Please try again later.');
        }
      } else {
        setSearchError('An error occurred. Please check your connection and try again.');
      }
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white overflow-hidden relative">
      {/* CSS Animated Particles Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.2),transparent)] animate-pulse" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#00d4ff] rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#a855f7] rounded-full animate-ping [animation-delay:1s]" />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-ping [animation-delay:2s]" />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-ping [animation-delay:3s]" />
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/95 via-[#0a0a0f]/50 to-[#0a0a0f]/95" />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 lg:py-32 min-h-screen flex flex-col items-center justify-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <img
            src="/images/texibitionlogo.png"
            alt="TEXIBITION"
            className="h-24 sm:h-32 lg:h-40 w-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Orbitron'] font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight bg-gradient-to-r from-[#00d4ff] via-[#00ffff] to-[#a855f7] bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-12 tracking-tight"
        >
          WE ARE COOKING
          <br />
          <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">SOMETHING CRAZY</span>
          <br />
          FOR NEXT YEAR
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 lg:mb-16 text-lg sm:text-xl lg:text-2xl font-['Rajdhani'] text-white/80 leading-relaxed px-4"
        >
          <p>TEXIBITION 2K26 MAY BE OVER,</p>
          <p className="text-[#00d4ff] font-semibold mt-2">BUT THE ENERGY, IDEAS AND CRAZY MOMENTS ARE STILL ALIVE.</p>
        </motion.div>

        {/* Certificate Search Section - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-3xl mx-auto px-4 mb-16 sm:mb-20 lg:mb-24 z-20"
        >
          <div className="bg-[#0a0a0f]/80 backdrop-blur-2xl border-2 border-[#a855f7]/40 rounded-[2rem] p-6 sm:p-10 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#a855f7]/20 to-transparent blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00d4ff]/10 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ec4899]/10 blur-3xl -z-10 pointer-events-none" />

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20 rounded-2xl mb-5 text-[#a855f7] border border-[#a855f7]/20 shadow-lg">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-bold bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent mb-4">
                CLAIM YOUR CERTIFICATE
              </h2>
              <p className="text-white/70 font-['Rajdhani'] text-lg sm:text-xl max-w-xl mx-auto">
                Enter your registered name below to instantly download your Texibition 2K26 participation certificate.
              </p>
            </div>

            <form onSubmit={handleSearch} className="mb-6 relative z-10">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center group/input gap-4 sm:gap-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-2xl blur opacity-20 group-focus-within/input:opacity-50 transition-opacity duration-500 hidden sm:block" />
                <div className="relative flex w-full bg-[#0f0f1a] border-2 border-white/10 sm:rounded-2xl rounded-xl overflow-hidden focus-within:border-[#a855f7]/50 transition-colors flex-col sm:flex-row shadow-inner">
                  <div className="hidden sm:flex pl-6 items-center justify-center text-white/40">
                    <Search className="w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-white px-5 sm:px-4 py-5 focus:outline-none placeholder:text-white/30 font-['Rajdhani'] text-xl sm:text-2xl"
                  />
                  <button
                    type="submit"
                    disabled={searchLoading || !searchQuery.trim()}
                    className="flex items-center justify-center gap-3 px-8 py-5 sm:py-0 bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#d946ef] hover:to-[#f472b6] text-white font-bold transition-all disabled:opacity-50 disabled:grayscale font-['Space_Grotesk'] text-xl sm:rounded-none rounded-b-xl"
                  >
                    {searchLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Search className="w-6 h-6 sm:hidden" /> SEARCH</>}
                  </button>
                </div>
              </div>
            </form>

            {/* Error Message */}
            {searchError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-lg font-['Rajdhani'] text-center mb-6 bg-red-400/10 py-4 rounded-xl border border-red-400/20"
              >
                {searchError}
              </motion.div>
            )}

            {/* Results Area */}
            {searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-4 max-h-[350px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#a855f7]/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#a855f7]/80"
              >
                {searchResults.map((cert, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                    key={cert.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#a855f7]/50 transition-all group/cert gap-4"
                  >
                    <div className="flex items-center gap-4 overflow-hidden w-full sm:w-auto">
                      <div className="p-3 bg-[#a855f7]/20 rounded-xl text-[#a855f7] shrink-0">
                        <FileText className="w-7 h-7" />
                      </div>
                      <span className="text-white font-['Rajdhani'] text-xl truncate" title={cert.name}>{cert.name}</span>
                    </div>
                    <a
                      href={cert.webContentLink || cert.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#a855f7]/20 hover:bg-[#a855f7] text-[#a855f7] hover:text-white rounded-xl transition-all font-bold font-['Space_Grotesk'] shrink-0 text-lg"
                    >
                      <Download className="w-5 h-5" />
                      DOWNLOAD
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Motivational Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <div className="font-['Orbitron'] font-bold text-xl sm:text-2xl lg:text-3xl text-[#00ffff] mb-4 flex flex-col items-center gap-2">
            TILL NEXT TIME —
            <div className="text-sm sm:text-base text-white/60 font-['Rajdhani'] tracking-wider uppercase">KEEP LEARNING. KEEP BUILDING. KEEP INNOVATING.</div>
          </div>
        </motion.div>

        {/* Gallery Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8 text-center"
        >
          <h3 className="font-['Orbitron'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00d4ff] tracking-widest uppercase">
            TEXIBITION 2K26 HIGHLIGHTS
          </h3>
          <p className="font-['Rajdhani'] text-white/60 text-base sm:text-lg mt-2 uppercase tracking-wider">Drag to rotate • Click to view</p>
        </motion.div>

        {/* 3D Dome Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-[100vw] max-w-[100vw] h-[75vh] sm:h-[85vh] lg:h-[90vh] relative mb-16 sm:mb-20 lg:mb-24 overflow-hidden bg-[#0a0a0f]/50 flex-shrink-0"
        >
          <div className="w-full h-full relative">
            <DomeGallery
              images={galleryImages.length > 0 ? galleryImages : undefined}
              fit={1}
              grayscale={false}
              minRadius={400}
              overlayBlurColor="rgba(10, 10, 15, 0.8)"
            />
          </div>
        </motion.div>

        {/* Wall of Fame Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full max-w-6xl mx-auto px-4 mb-20 sm:mb-32 relative z-20"
        >
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-['Orbitron'] font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent tracking-widest mb-4 inline-block drop-shadow-lg">
              WALL OF FAME
            </h2>
            <div className="flex items-center justify-center gap-3 text-white/60 font-['Rajdhani'] text-lg sm:text-xl tracking-widest uppercase">
              <span className="w-12 h-px bg-white/20"></span>
              The Organizers
              <span className="w-12 h-px bg-white/20"></span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group rounded-3xl sm:rounded-[3rem] p-2 sm:p-4 bg-gradient-to-br from-[#00d4ff]/20 via-[#a855f7]/20 to-[#ec4899]/20 backdrop-blur-md shadow-[0_0_80px_rgba(168,85,247,0.15)]"
          >
            {/* Glowing borders */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500 rounded-[3rem] -z-10" />

            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-[#0a0a0f]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <img
                src="/images/group.jpeg"
                alt="Texibition Organizers"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-center transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                <p className="font-['Orbitron'] text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  THE DREAM TEAM
                </p>
                <p className="font-['Rajdhani'] text-[#00d4ff] text-base sm:text-xl lg:text-2xl font-semibold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Turning visions into reality
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Message */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-2xl mx-auto px-4 text-lg sm:text-xl lg:text-2xl font-['Rajdhani'] text-white/70 leading-relaxed"
        >
          <p className="mb-4">PROBLEMS, RESULTS AND COMPETITIONS MAY BE FORGOTTEN,</p>
          <p className="mb-4 font-semibold text-[#00d4ff]">BUT EVERYONE WILL REMEMBER ONE THING —</p>
          <div className="bg-gradient-to-r from-[#a855f7]/30 to-[#ec4899]/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#a855f7]/30">
            <p className="font-bold text-[#a855f7] mb-2">IT WAS A TEAM.</p>
            <p className="font-bold text-[#a855f7] mb-2">IT WAS A MOVEMENT.</p>
            <p className="font-bold text-[#a855f7]">IT WAS TEXIBITION.</p>
          </div>
          <p className="mt-8 text-sm sm:text-base text-white/50 font-['Orbitron'] tracking-wider uppercase">SEE YOU NEXT YEAR ✨</p>
        </motion.footer>
      </div>
    </div>
  );
}
