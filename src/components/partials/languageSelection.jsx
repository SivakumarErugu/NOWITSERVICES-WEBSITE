'use client';

import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { FiGlobe } from 'react-icons/fi';
import useLocale from '../../app/hooks/useLocale';
import { useNowit } from '@/store/useNowit';

const languages = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: 'Simplified Chinese (Mandarin)' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'ar', label: 'Arabic' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'de', label: 'German' },
    { value: 'hi', label: 'Hindi' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ru', label: 'Russian' }
];

export default function LanguageSwitcher() {
    const { locale, changeLanguage } = useNowit();
    const [selectedOption, setSelectedOption] = useState('en');

    useEffect(() => {
        const current = languages.find((lang) => lang.value === locale) || languages[0];
        setSelectedOption(current);
    }, [locale]);

    const handleChange = (option) => {
        setSelectedOption(option);
        changeLanguage(option.value);
    };

    // Custom control to add globe icon
    const CustomControl = ({ children, ...props }) => (
        <components.Control {...props}>
            <FiGlobe style={{ marginLeft: 12, marginRight: 8, fontSize: 18 }} />
            {children}
        </components.Control>
    );

    return (
        <div style={{ width: 140 }}>
            <Select
                instanceId="language-select"
                options={languages}
                value={selectedOption}
                onChange={handleChange}
                isSearchable={false}
                components={{ Control: CustomControl }}
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: '#f3f4f6',
                        border: 'none',
                        boxShadow: 'none',
                        borderRadius: '6px',
                        minHeight: '40px',
                        cursor: 'pointer',

                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: '#333'
                    }),
                    indicatorSeparator: () => ({
                        display: 'none'
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        padding: '0 8px'
                    }),
                    menu: (base) => ({
                        ...base,
                        borderRadius: '6px',
                        overflow: 'hidden'
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused ? '#f3f4f6' : '#fff',
                        color: '#111',
                        cursor: 'pointer'
                    })
                }}
            />
        </div>
    );
}
