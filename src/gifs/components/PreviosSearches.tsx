interface Props {
  searches: string[];

  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search, index) => (
          <li key={index} onClick={() => onLabelClicked(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
