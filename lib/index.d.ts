export interface HookArgs {
    debounce?: number;
    defaultValue?: string;
}
interface Suggestion {
    name: string;
    city: string;
    country: string;
    IATA: string;
    ICAO: string;
    lat: number;
    lon: number;
    timezone: number;
}
interface Suggestions {
    readonly loading: boolean;
    readonly hasError: boolean;
    data: Suggestion[];
}
interface SetValue {
    (val: string, shouldFetchData?: boolean): void;
}
interface HookReturn {
    ready: boolean;
    value: string;
    suggestions: Suggestions;
    setValue: SetValue;
    clearSuggestions: () => void;
    init: () => void;
}
export declare function useAirportsAutocomplete({ debounce, defaultValue, }?: HookArgs): HookReturn;
export default useAirportsAutocomplete;
