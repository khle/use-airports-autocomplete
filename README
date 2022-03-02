This package is inspired by the package [Airport Autocomple JS](https://github.com/konsalex/Airport-Autocomplete-JS). Specifically it's the clever use of `fuse.js` as follow:

```Javascript
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
```

Other than that, this package is a complete fresh implementation of a React custom hook that allows it to work nicely with a headless dropdown component. The following example illustrates how it can be used with a [@reach/combobox](https://reach.tech/combobox):

```Typescript
import { useEffect, ChangeEvent } from 'react'
import { useAirportsAutocomplete, Suggestion } from '@kevinhle/use-airports-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox'

export default function App() {
  const {
    ready,
    init,
    value,
    setValue,
    suggestions: { data }
  } = useAirportsAutocomplete()

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const handleSelect = (val: string): void => {
    setValue(val, false)
  }

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map(({ name, IATA }: Suggestion) => (
      <ComboboxOption key={IATA} value={`${IATA} ${name}`} />
    ))
    return <div>{suggestions}</div>
  }

  useEffect(() => {
    init()
  })

  return (
    <div className="App">
      <Combobox onSelect={handleSelect} className="border-gray-500 ">
        <ComboboxInput
          className="w-80 max-w-2xl border-gray-500 border-2 bg-gray-200 px-1 py-1"
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList className="cursor-pointer">
            {renderSuggestions()}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
```
