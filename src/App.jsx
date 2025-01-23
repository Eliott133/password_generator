import { useState } from 'react'
import Generator from './Generator'

function App() {
  const [length, setLength] = useState(15);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor='passwordLength'>
            Password Length: {length}
          </label>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="range range-primary w-full"
            id='passwordLength'
          />
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lowercase"
              checked={useLowerCase}
              onChange={(e) => setUseLowerCase(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <label htmlFor="lowercase" className="ml-2 text-sm font-medium text-gray-700">
              Lowercase Letters
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="uppercase"
              checked={useUpperCase}
              onChange={(e) => setUseUpperCase(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <label htmlFor="uppercase" className="ml-2 text-sm font-medium text-gray-700">
              Uppercase Letters
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="numbers"
              checked={useNumbers}
              onChange={(e) => setUseNumbers(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <label htmlFor="numbers" className="ml-2 text-sm font-medium text-gray-700">
              Numbers
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="specialChars"
              checked={useSpecialChars}
              onChange={(e) => setUseSpecialChars(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <label htmlFor="specialChars" className="ml-2 text-sm font-medium text-gray-700">
              Special Characters
            </label>
          </div>
        </div>

        <Generator
          length={length}
          useLowerCase={useLowerCase}
          useUpperCase={useUpperCase}
          useNumbers={useNumbers}
          useSpecialChars={useSpecialChars}
        />
      </div>
    </div>
  );
}

export default App;