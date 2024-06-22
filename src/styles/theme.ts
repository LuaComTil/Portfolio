
export interface Theme {
    background: string;
    overlay: string
    text: string;
    headerBg: string;
    techIcons: string
    }

    export const lightTheme: Theme = {
    background: '#e6e3e3',
    overlay: '#F5F5F5',
    text: 'black',
    headerBg: '#f0f0f0',
    techIcons: '#54585f'
    };

    export const darkTheme: Theme = {
    background: 'linear-gradient(to right, #000000, #434343)',
    overlay: '#181818',
    text: '#FFF',
    headerBg: '#181818',
    techIcons: '#b7b8ba'
    };
