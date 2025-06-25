'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales';
import { ChevronDown } from 'lucide-react';

const languageNames = {
  th: 'ไทย',
  en: 'English',
  zh: '中文'
};

const languageFlags = {
  th: '🇹🇭',
  en: '🇺🇸',
  zh: '🇨🇳'
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
      >
        <span>{languageFlags[language]}</span>
        <span>{languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          {Object.entries(languageNames).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`w-full flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                language === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{languageFlags[lang as Language]}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}