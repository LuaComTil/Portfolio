
export interface Theme {
    background: string;
    overlay: string
    text: string;
    headerBg: string;
    }

    export const lightTheme: Theme = {
    background: '#F5F5F5',
    overlay: '#e6e3e3',
    text: 'black',
    headerBg: '#f0f0f0',
    };

    export const darkTheme: Theme = {
    background: 'linear-gradient(to right, #000000, #434343)',
    overlay: '#181818',
    text: '#FFF',
    headerBg: '#181818',
    };
