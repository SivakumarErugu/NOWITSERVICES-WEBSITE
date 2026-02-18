'use client';

import { useEffect, useState } from 'react';

export default function useLocale() {
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') || 'en';
        setLocale(savedLocale);
        loadMessages(savedLocale);
    }, []);

    const loadMessages = async (lang) => {
        try {
            const data = await import(`../../translations/${lang}.json`);
            console.log(data, "data hereee")
            setMessages(data.default);
        } catch (err) {
            console.error('Translation file not found');
        }
    };

    const changeLanguage = (lang) => {
        localStorage.setItem('locale', lang);
        setLocale(lang);
        loadMessages(lang);
    };
    console.log(locale, "Current Locale in Hook")

    const t = (key) => {
        return messages[key] || key;
    };

    return { locale, changeLanguage, t };
}
