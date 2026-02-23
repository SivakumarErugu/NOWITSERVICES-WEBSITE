'use client';

import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { FiGlobe } from 'react-icons/fi';
import useLocale from '../../app/hooks/useLocale';
import { useNowit } from '@/store/useNowit';

const languages = [
    { value: 'en', label: 'EN-English' },

    { value: 'es', label: 'ES-Spanish' },
    { value: 'fr', label: 'FR-French' },
    { value: 'ar', label: 'AR-Arabic' },
    { value: 'pt', label: 'PT-Portuguese' },
    { value: 'de', label: 'DE-German' },
    { value: 'hi', label: 'HI-Hindi' },
    { value: 'ja', label: 'JA-Japanese' },
    { value: 'ru', label: 'RU-Russian' },
    { value: 'zh', label: 'ZH-Chinese' }
];
export default function LanguageSwitcher({isMobile=false,onSelect}) {
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
    const CustomControl = ({ children, ...props }) => {
        return (
            <components.Control
                {...props}
                className="border-2"
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 6
                }}
            >
                <FiGlobe
                    size={16}
                    style={{
                        marginRight: 6,
                        cursor: "pointer"
                    }}
                    onMouseDown={props.innerProps.onMouseDown}
                />

                {children}
            </components.Control>
        );
    };
    const CustomSingleValue = ({ data }) => (
        <span className="text-sm font-medium uppercase">
            {data.value}
        </span>
    );

 
    return (
        <div style={{ width: 90 }}>
            <Select
                instanceId="language-select"
                options={languages}
                value={selectedOption}
                onChange={handleChange}
                isSearchable={false}

                components={{
                    Control: CustomControl,
                    DropdownIndicator: () => null, // ❌ remove arrow
                    IndicatorSeparator: () => null,
                    SingleValue: CustomSingleValue
                }}

                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        cursor: 'pointer',
                        minHeight: '28px'
                    }),

                    menu: (base) => ({
                        ...base,
                        width: 180,              // 🔥 Increase dropdown width
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }),

                    menuList: (base) => ({
                        ...base,
                        padding: 0
                    }),

                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused ? '#f3f4f6' : '#fff',
                        color: '#111',
                        cursor: 'pointer',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',     // 🔥 Force single line
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'  // Prevent overflow breaking layout
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        alignItems: "center"
                    }),
                }}
            />
        </div>
    );

}
