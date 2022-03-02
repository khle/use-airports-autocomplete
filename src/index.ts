import { useState, useCallback } from "react"
import _debounce from "./debounce"
import Fuse from "fuse.js"

const DEFAULT_DEBOUNCE = 200
const MIN_LENGTH_SUGGEST = 2

export interface HookArgs {
  debounce?: number
  minLengthSuggest?: number
  defaultValue?: string
}

export interface Suggestion {
  name: string
  city: string
  country: string
  IATA: string
  ICAO: string
  lat: number
  lon: number
  timezone: number
}

interface Suggestions {
  readonly loading: boolean
  readonly hasError: boolean
  data: Suggestion[]
}

interface SetValue {
  (val: string, shouldFetchData?: boolean): void
}

interface HookReturn {
  ready: boolean
  value: string
  suggestions: Suggestions
  setValue: SetValue
  clearSuggestions: () => void
  init: () => void
}

import AIRPORTS_DATA from "./airports"

export function useAirportsAutocomplete({
  debounce = DEFAULT_DEBOUNCE,
  minLengthSuggest = MIN_LENGTH_SUGGEST,
  defaultValue = "",
}: HookArgs = {}): HookReturn {
  const [ready, setReady] = useState(false)
  const [value, setVal] = useState(defaultValue)
  const [suggestions, setSuggestions] = useState<Suggestions>({
    loading: false,
    hasError: false,
    data: [],
  })

  const init = useCallback(() => {
    setReady(true)
  }, [])

  const clearSuggestions = useCallback(() => {
    setSuggestions({ loading: false, hasError: false, data: [] })
  }, [])

  const fetchPredictions = useCallback(
    _debounce(async (val: string) => {
      if (!val || val.length < minLengthSuggest) {
        clearSuggestions()
        return
      }

      const airportsData = AIRPORTS_DATA.filter(
        (a) =>
          (a.city.toLowerCase().includes(val.toLowerCase()) ||
            a.name.toLowerCase().includes(val.toLowerCase()) ||
            a.IATA.toLowerCase() === val.toLowerCase()) &&
          a.IATA !== "\\N"
      )

      const fuseOptions = {
        shouldSort: true,
        threshold: 0.4,
        maxPatternLength: 32,
        keys: [
          {
            name: "IATA",
            weight: 0.25,
          },
          {
            name: "name",
            weight: 0.25,
          },
          {
            name: "city",
            weight: 0.5,
          },
        ],
      }
      const fuse = new Fuse(airportsData, fuseOptions)
      const result = fuse.search(val)

      const airports = result.map((r) => {
        return {
          name: r.item.name,
          city: r.item.city,
          country: r.item.country,
          IATA: r.item.IATA,
          ICAO: r.item.ICAO,
          lat: parseFloat(r.item.lat),
          lon: parseFloat(r.item.lon),
          timezone: parseInt(r.item.timezone),
        }
      })
      setSuggestions({
        loading: false,
        hasError: false,
        data: airports,
      })
    }, debounce),
    [debounce, clearSuggestions]
  )

  const setValue: SetValue = useCallback(
    (val, shouldFetchData = true) => {
      setVal(val)
      fetchPredictions(val)
    },
    [fetchPredictions]
  )

  return {
    ready,
    value,
    suggestions,
    setValue,
    clearSuggestions,
    init,
  }
}

export default useAirportsAutocomplete
