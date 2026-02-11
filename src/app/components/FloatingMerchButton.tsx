import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

// Sponsor product page URL
const SPONSOR_PRODUCT_URL = 'https://cozzon.in/shop/product/texibition-2k26-official-tee';

interface FloatingMerchButtonProps {
  onClick?: () => void;
}

export function FloatingMerchButton({ onClick }: FloatingMerchButtonProps) {
  const handleClick = () => {
    // Open the merch link in the same tab
    window.location.href = SPONSOR_PRODUCT_URL;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay: 0.5,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <motion.button
        onClick={onClick || handleClick}
        className="group relative flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-5 sm:py-3.5 bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] rounded-full shadow-lg shadow-[#00d4ff]/25 hover:shadow-[#00d4ff]/40 transition-shadow duration-300 overflow-hidden cursor-pointer"
        aria-label="Buy Merchandise"
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <span className="relative z-10">
          <ShoppingBag className="size-5 sm:size-6 text-white" />
        </span>

        {/* Text label - hidden on mobile, visible on larger screens */}
        <span className="relative z-10 hidden sm:block">
          <span className="text-white font-bold text-sm whitespace-nowrap tracking-wide">
            Merch
          </span>
        </span>
      </motion.button>

      {/* Pulse indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-[#00d4ff] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

