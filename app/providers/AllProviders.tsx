import React, {ReactNode, useCallback, useState} from "react";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useColorScheme, useLocalStorageValue } from "@mantine/hooks";

function AllProviders({children}: {children: ReactNode}) {
    const preferredColorScheme = useColorScheme();
    const [storedColorScheme, setStoredColorScheme] = useLocalStorageValue({
        key: "color-scheme",
        defaultValue: preferredColorScheme
    });
    const [colorScheme, setColorScheme] = useState<ColorScheme>(storedColorScheme);

    const toggleColorScheme = useCallback((value?: ColorScheme) => {
        setColorScheme(() => {
            const newValue = value ?? (colorScheme === "dark" ? "light" : "dark");

            setStoredColorScheme(newValue);

            return newValue;
        });
    }, [colorScheme, setStoredColorScheme]);


    return (
    <MantineProvider withGlobalStyles={true}
                     withNormalizeCSS={true}
                     theme={{colorScheme}}>
        <ColorSchemeProvider colorScheme={colorScheme}
                             toggleColorScheme={toggleColorScheme}>
            {children}
        </ColorSchemeProvider>
    </MantineProvider>
    );
}

export default AllProviders;
