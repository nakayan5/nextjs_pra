import { base, dark } from '@theme-ui/presets'
import { useCallback } from 'react';
// import { ColorMode } from 'theme-ui';
import { useColorMode } from 'theme-ui'
import {merge} from 'theme-ui'

export const theme = merge(base, {
    styles: {
        root: {
            button: {
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
            }
        }
    },
    colors: {
        ...base.colors,
        modes: {
            dark: dark.colors
        }
    }
})


enum ColorMode {
    Default = 'default',
    Dark = 'dark'
}

// カスタムhooks
export function useToggleColorMode() {
    const [mode, setColorMode] = useColorMode();

    return useCallback(() => {
        const newMode = 
            mode === ColorMode.Default ? ColorMode.Dark : ColorMode.Default;
        setColorMode(newMode)
    }, [mode])
}