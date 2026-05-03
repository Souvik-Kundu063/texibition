import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Loader2, FileText, CheckCircle, Sparkles, Award, ArrowLeft, Mail, Phone } from 'lucide-react';

export default function CertificatePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: string, name: string, webViewLink: string, webContentLink: string }[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Optimizations for heavy load
  const [searchCache, setSearchCache] = useState<Record<string, any[]>>({});
  const [searchAttempts, setSearchAttempts] = useState<number[]>([]);

  const fetchWithRetry = async (url: string, retries = 3, delay = 1000): Promise<Response> => {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url);
      if (response.ok) return response;
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

    // Rate Limiting
    const now = Date.now();
    const recentAttempts = searchAttempts.filter(timestamp => now - timestamp < 60000);
    
    if (recentAttempts.length >= 5) {
      setSearchError('Too many search attempts. Please wait a minute and try again.');
      return;
    }
    
    setSearchAttempts([...recentAttempts, now]);

    // Caching
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
    <div className="min-h-screen bg-[#050508] text-white relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d4ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#a855f7] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#ec4899] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-[length:50px_50px]" />
      </div>

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl z-10 relative flex flex-col min-h-[calc(100vh-160px)]"
      >
        {/* Navigation & Logos Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-12 sm:mb-16 gap-6 relative z-20">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/60 hover:text-[#00d4ff] transition-colors font-['Rajdhani'] font-bold text-lg group self-start sm:self-auto"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
          
          <div className="flex items-center justify-center gap-3 sm:gap-10 w-full sm:w-auto overflow-hidden">
            <img 
              src="/images/bwulogo.png" 
              alt="Brainware University" 
              className="h-8 sm:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink"
            />
            <div className="w-px h-6 sm:h-10 bg-white/20 shrink-0"></div>
            <img 
              src="/images/texibitionlogo.png" 
              alt="Texibition" 
              className="h-10 sm:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,212,255,0.3)] shrink"
            />
          </div>
        </div>

        {/* Title Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20 border border-[#00d4ff]/30 shadow-[0_0_30px_rgba(0,212,255,0.2)] mb-6"
          >
            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#00d4ff]" />
          </motion.div>
          
          <h1 className="font-['Orbitron'] font-black text-4xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] mb-4 drop-shadow-lg tracking-wider">
            CERTIFICATE PORTAL
          </h1>
          <p className="font-['Rajdhani'] text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto">
            Access your verified digital certificates for Texibition 2K26. Enter your registered name to download.
          </p>
        </div>

        {/* Search Module */}
        <div className="relative group">
          {/* Glowing Border Frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-white/40" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your registered name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-14 pr-4 py-4 sm:py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/50 focus:border-transparent font-['Rajdhani'] text-xl sm:text-2xl transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={searchLoading || !searchQuery.trim()}
                className="flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] hover:from-[#a855f7] hover:to-[#ec4899] text-white rounded-2xl font-['Space_Grotesk'] font-bold text-lg sm:text-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                {searchLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    SEARCH
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {searchError && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 font-['Rajdhani'] text-lg text-center flex items-center justify-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {searchError}
              </motion.div>
            )}

            {/* Results */}
            {searchResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
              >
                {searchResults.map((cert, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={cert.id}
                    className="relative overflow-hidden group/cert bg-gradient-to-r from-white/5 to-white/0 border border-white/10 hover:border-[#00d4ff]/50 rounded-2xl transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d4ff] to-[#a855f7] transform scale-y-0 group-hover/cert:scale-y-100 transition-transform origin-top duration-300" />
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 gap-6">
                      <div className="flex items-center gap-5 flex-1 min-w-0 w-full">
                        <div className="flex-shrink-0 p-4 bg-[#00d4ff]/10 rounded-xl text-[#00d4ff] group-hover/cert:bg-[#00d4ff]/20 transition-colors">
                          <FileText className="w-8 h-8" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-['Rajdhani'] font-bold text-xl sm:text-2xl truncate mb-1" title={cert.name}>
                            {cert.name}
                          </h3>
                          <div className="flex items-center gap-2 text-[#00d4ff] text-sm sm:text-base font-['Space_Grotesk']">
                            <CheckCircle className="w-4 h-4" />
                            <span>Verified Certificate</span>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={cert.webContentLink || cert.webViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white rounded-xl transition-all font-bold font-['Space_Grotesk'] tracking-wide group/btn"
                      >
                        <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                        DOWNLOAD
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center text-white/50 font-['Rajdhani'] flex flex-col items-center justify-center gap-4">
          <p className="text-lg text-white/70 uppercase tracking-widest font-semibold border-b border-white/10 pb-2 inline-block">
            Organizing Committee Contact
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-2 flex-wrap">
            <a href="mailto:texibition@brainwareuniversity.ac.in" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              <Mail className="w-4 h-4 shrink-0" />
              texibition@brainwareuniversity.ac.in
            </a>
            <a href="tel:+917718427880" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              <Phone className="w-4 h-4 shrink-0" />
              +91 7718427880
            </a>
            <a href="tel:+919531605804" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              <Phone className="w-4 h-4 shrink-0" />
              +91 9531605804
            </a>
          </div>
        </div>
        
        {/* Spacer to push footer to bottom */}
        <div className="flex-grow"></div>
      </motion.div>

      {/* Footer message */}
      <footer className="w-full text-center py-8 relative z-10 border-t border-white/5 mt-auto">
        <p className="font-['Orbitron'] text-xs sm:text-sm text-white/40 tracking-[0.2em] uppercase font-bold bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent opacity-80">
          MADE WITH LOVE FOR TEXIBITION PARTICIPANTS BY THE TECH CLUB DEVELOPERS OF BWU
        </p>
      </footer>

      {/* Global styles for scrollbar in this component */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 212, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
