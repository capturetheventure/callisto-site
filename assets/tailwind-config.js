// Shared Tailwind config for the Callisto landing site.
// Mirrors design tokens used in the Android app (CallistoColors).
tailwind.config = {
    theme: {
        extend: {
            colors: {
                bg: '#0E1116',
                bg2: '#13171F',
                bg3: '#1A1F29',
                bg4: '#222836',
                panel: '#10141B',
                panel2: '#0B0E14',
                borderApp: '#232936',
                borderStrong: '#323A47',
                borderSoft: '#1B2029',
                fg: '#E6E9EF',
                fgStrong: '#F5F7FA',
                fgMuted: '#9AA3B2',
                fgDim: '#6B7280',
                accent: '#5EEAD4',
                accentStrong: '#2DD4BF',
                accentSolid: '#14B8A6',
                accentDeep: '#0F766E',
                accentFg: '#0B1B19',
                codeBg: '#0B0E14',
                outputBg: '#171C25',
                synKw: '#C792EA',
                synStr: '#C3E88D',
                synNum: '#F78C6C',
                synFn: '#82AAFF',
                synCom: '#5C6370',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            }
        }
    }
};
