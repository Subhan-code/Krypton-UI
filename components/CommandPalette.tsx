import React, { useState, useEffect, useCallback } from 'react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeChange: (theme: 'light' | 'dark') => void;
  currentTheme: 'light' | 'dark';
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ 
  isOpen, 
  onClose, 
  onThemeChange, 
  currentTheme 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Check if the search term starts with '/' to show advanced commands
  const isAdvancedMode = searchTerm.startsWith('/');
  
  const generalCommands = [
    { id: 'theme-light', label: 'Switch to Light Theme', shortcut: '/theme light', action: () => onThemeChange('light') },
    { id: 'theme-dark', label: 'Switch to Dark Theme', shortcut: '/theme dark', action: () => onThemeChange('dark') },
    { id: 'home', label: 'Go to Home', shortcut: '/home', action: () => { window.location.hash = '#/'; onClose(); } },
    { id: 'components', label: 'Go to Components', shortcut: '/components', action: () => { window.location.hash = '#/components'; onClose(); } },
    { id: 'docs', label: 'Go to Documentation', shortcut: '/docs', action: () => { window.location.hash = '#/docs'; onClose(); } },
    { id: 'about', label: 'Go to About', shortcut: '/about', action: () => { window.location.hash = '#/about'; onClose(); } },
  ];
  
  // When in advanced mode, show general commands
  // Otherwise, show normal search results
  const commands = isAdvancedMode ? generalCommands : [];
  
  const filteredCommands = isAdvancedMode 
    ? commands.filter(cmd =>
        cmd.label.toLowerCase().includes(searchTerm.substring(1).toLowerCase()) ||
        cmd.shortcut.toLowerCase().includes(searchTerm.substring(1).toLowerCase())
      )
    : [];
  
  // Mock search results for normal search (when not in advanced mode)
  const normalSearchResults = [
    { id: 'search-result-1', label: 'Search: Components', shortcut: 'components', action: () => { onClose(); } },
    { id: 'search-result-2', label: 'Search: Buttons', shortcut: 'buttons', action: () => { onClose(); } },
    { id: 'search-result-3', label: 'Search: Forms', shortcut: 'forms', action: () => { onClose(); } },
    { id: 'search-result-4', label: 'Search: Navigation', shortcut: 'navigation', action: () => { onClose(); } },
  ];
  
  const filteredNormalResults = searchTerm && !isAdvancedMode
    ? normalSearchResults.filter(result =>
        result.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.shortcut.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  const searchResults = isAdvancedMode ? filteredCommands : filteredNormalResults;
  
  // Handle input changes to detect if the first character is '/'
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // If the user is deleting the '/' and there's no more text, close the palette
    if (searchTerm === '/' && value === '') {
      onClose();
      return;
    }
    
    setSearchTerm(value);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults[selectedIndex]) {
        searchResults[selectedIndex].action();
        onClose();
      }
    }
  }, [isOpen, onClose, searchResults, selectedIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20">
      <div className="w-full max-w-md bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-3 border-b border-white/10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full bg-transparent border-none text-white text-lg placeholder-neutral-500 focus:outline-none"
            placeholder={isAdvancedMode ? "Search commands..." : "Type to search or / for commands"}
            autoFocus
          />
        </div>
        <div className="max-h-80 overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div
                key={result.id}
                className={`p-3 cursor-pointer transition-colors ${
                  index === selectedIndex 
                    ? 'bg-white/10' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => {
                  result.action();
                  onClose();
                }}
              >
                <div className="text-white font-medium">{result.label}</div>
                <div className="flex justify-between text-xs text-neutral-400 mt-1">
                  <span>{!isAdvancedMode ? 'Search result' : 'Command'}</span>
                  <span className="font-mono bg-white/10 px-2 py-1 rounded">/{result.shortcut}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-3 text-neutral-400 text-center">
              {isAdvancedMode ? 'No commands found' : searchTerm ? 'No search results' : 'Start typing to search, or type \'/\' for commands'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;