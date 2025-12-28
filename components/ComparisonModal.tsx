
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComparisonLink } from '../types';
import { BayutIcon, AirbnbIcon, LinkIcon, AqarIcon } from './Icons';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  links: ComparisonLink[];
}

const PlatformIcon: React.FC<{ platform: string; className?: string }> = ({ platform, className }) => {
    const p = platform.toLowerCase();
    if (p.includes('bayut')) return <BayutIcon className={className} />;
    if (p.includes('airbnb')) return <AirbnbIcon className={className} />;
    if (p.includes('aqar')) return <AqarIcon className={className} />;
    // Wasalt typically uses a purple distinct W, using generic link or a stylized W could work, 
    // for now we stick to a clean generic if not mapped, or maybe a simple text avatar.
    return (
        <div className={`flex items-center justify-center bg-gray-100 rounded-full ${className}`}>
            <span className="font-bold text-gray-500 text-xs">{platform.charAt(0)}</span>
        </div>
    );
};

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, title, links }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative bg-[#F1ECE6] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50"
        >
             {/* Header */}
             <div className="bg-white/50 backdrop-blur-sm border-b border-[#A99484]/10 p-6 flex justify-between items-center">
                 <h3 className="text-xl font-bold text-[#4A2C5A] tracking-tight">{title}</h3>
                 <button 
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-[#A99484]/10 hover:bg-[#A99484]/20 flex items-center justify-center text-[#4A2C5A] transition-colors"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                 </button>
             </div>

             {/* Links List */}
             <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
                 {links.length === 0 ? (
                     <p className="text-center text-gray-500 py-8">No comparison links available yet.</p>
                 ) : (
                     links.map((link, idx) => (
                         <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-white/80 border border-transparent hover:border-[#A99484]/20 shadow-sm hover:shadow-md transition-all duration-300"
                         >
                             <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                                <PlatformIcon platform={link.platform} className="w-8 h-8" />
                             </div>
                             <div className="flex-1 min-w-0">
                                 <h4 className="font-bold text-[#4A2C5A] truncate text-base">{link.title}</h4>
                                 <p className="text-xs font-medium text-[#4A2C5A]/50 uppercase tracking-wider">{link.platform}</p>
                             </div>
                             <div className="w-8 h-8 rounded-full bg-[#4A2C5A]/5 flex items-center justify-center group-hover:bg-[#4A2C5A] group-hover:text-white transition-colors">
                                 <LinkIcon className="w-4 h-4" />
                             </div>
                         </a>
                     ))
                 )}
             </div>

             {/* Footer */}
             <div className="p-4 bg-gray-50/50 text-center border-t border-[#A99484]/10">
                 <p className="text-[10px] text-gray-400 font-medium">External comparison data sources.</p>
             </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ComparisonModal;
