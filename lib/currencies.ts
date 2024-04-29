export const Currencies = [
    {value: "USD", label:"$ Dollar", locale:"en-US"},
    {value: "EUR", label:"€ Euro", locale:"es-ES"},
    {value: "DOP", label:"$ Dominican Peso", locale:"es-DO"},
    {value: "GBP", label:"£ Pound", locale:"en-GB"},
    {value: "JPY", label:"¥ Yen", locale:"ja-JP"},
]

export type Currency = (typeof Currencies)[0]