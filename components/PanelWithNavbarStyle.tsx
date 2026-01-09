import React from 'react';

export const PanelWithNavbarStyle: React.FC = () => {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/5 rounded-xl p-6 max-w-md mx-auto">
      <div className="flex flex-col space-y-4">
        {/* Header section with same styling approach */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white">Krypton UI Panel</h2>
        </div>
        
        {/* Content section */}
        <div className="space-y-3">
          <p className="text-neutral-300 text-sm">This component uses the same CSS styling patterns as the navbar.</p>
          
          <div className="space-y-2">
            <div className="h-2 bg-white/10 rounded"></div>
            <div className="h-2 bg-white/10 rounded w-3/4"></div>
          </div>
        </div>
        
        {/* Action buttons with same styling */}
        <div className="flex space-x-3 pt-2">
          <button className="flex-1 px-4 py-2 text-sm font-semibold bg-white text-black rounded-lg hover:bg-neutral-200 transition-all active:scale-95">
            Confirm
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-lg border border-white/20">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};