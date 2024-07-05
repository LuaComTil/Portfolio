
export interface Theme {
    background: string;
    overlay: string
    text: string;
    shadow: string;
    }

    export const lightTheme: Theme = {
    background: 'linear-gradient(to right, #757f9a, #d7dde8);',
    overlay: '#F5F5F5',
    text: 'black',
    shadow: '#6666ff',
    };

    export const darkTheme: Theme = {
    background: 'linear-gradient(to right, #181818, #434343)',
    overlay: '#292929',
    text: '#FFF',
    shadow: 'red',
    };
