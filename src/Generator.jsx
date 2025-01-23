import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

function Generator({ length, useLowerCase, useUpperCase, useNumbers, useSpecialChars }) {
  const [password, setPassword] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+';

  const generatePassword = () => {
    let chars = '';

    if (useLowerCase) chars += lowerCaseLetters;
    if (useUpperCase) chars += upperCaseLetters;
    if (useNumbers) chars += numbers;
    if (useSpecialChars) chars += specialChars;

    if (chars.length === 0) {
      setPassword('Please select at least one option!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopyMessage('Copy in clipboard');
        setTimeout(() => setCopyMessage(''), 1000); // Réinitialise le message après 2 secondes
      })
      .catch(() => setCopyMessage('Erreur de copie'));
  };

return (
    <div className="mt-4 text-center">
        <div className="mb-4 p-2 border rounded bg-gray-50 text-gray-700 relative">
        {copyMessage ? <p>{copyMessage}</p> : (password || 'Click Generate to create a password')}
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer'>
                <FaRegCopy onClick={copyToClipboard}/>
            </div>
        </div>
        <button onClick={generatePassword} className="btn btn-primary w-full">
            Generate Password
        </button>
    </div>
);
}

export default Generator;
