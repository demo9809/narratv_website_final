
export interface CountryCode {
    code: string;
    country: string;
    flag: string;
    name: string;
}

export const COUNTRY_CODES: CountryCode[] = [
    // Priority Countries
    { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
    { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
    { code: '+44', country: 'UK', flag: '🇬🇧', name: 'UK' },
    { code: '+1', country: 'US', flag: '🇺🇸', name: 'USA' },
    { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
    { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
    { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
    { code: '+965', country: 'KW', flag: '🇰🇼', name: 'Kuwait' },

    // Rest of World (Common)
    { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
    { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
    { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Ireland' },
    { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
    { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
    { code: '+852', country: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
    { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
    { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
    { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
    { code: '+90', country: 'TR', flag: '🇹🇷', name: 'Turkey' },
    { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
    { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
    { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
    { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
    { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
    { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
    { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: '+977', country: 'NP', flag: '🇳🇵', name: 'Nepal' },

    // Europe
    { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
    { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
    { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
    { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
    { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Greece' },
    { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
    { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
    { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Poland' },
    { code: '+40', country: 'RO', flag: '🇷🇴', name: 'Romania' },
    { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Hungary' },
    { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Czechia' },

    // Middle East & Africa
    { code: '+962', country: 'JO', flag: '🇯🇴', name: 'Jordan' },
    { code: '+961', country: 'LB', flag: '🇱🇧', name: 'Lebanon' },
    { code: '+964', country: 'IQ', flag: '🇮🇶', name: 'Iraq' },
    { code: '+98', country: 'IR', flag: '🇮🇷', name: 'Iran' },
    { code: '+972', country: 'IL', flag: '🇮🇱', name: 'Israel' },
    { code: '+212', country: 'MA', flag: '🇲🇦', name: 'Morocco' },
    { code: '+213', country: 'DZ', flag: '🇩🇿', name: 'Algeria' },
    { code: '+216', country: 'TN', flag: '🇹🇳', name: 'Tunisia' },
    { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
    { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },

    // Americas
    { code: '+54', country: 'AR', flag: '🇦🇷', name: 'Argentina' },
    { code: '+56', country: 'CL', flag: '🇨🇱', name: 'Chile' },
    { code: '+57', country: 'CO', flag: '🇨🇴', name: 'Colombia' },
    { code: '+51', country: 'PE', flag: '🇵🇪', name: 'Peru' }
];
