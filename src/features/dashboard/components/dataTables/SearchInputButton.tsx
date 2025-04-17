import React from 'react';

interface SearchInputButtonProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  buttonText: string;
}

const SearchInputButton: React.FC<SearchInputButtonProps> = ({ value, onChange, onClick, buttonText }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={onChange}
        className="search-input"
      />
      <button
        onClick={onClick}
        className="bg-button text-white px-4 focus:outline-none focus:shadow-outline _button uppercase"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchInputButton;
