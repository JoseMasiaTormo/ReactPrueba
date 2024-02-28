export const LoadingRow = () => (
  <div className="loading-item">
    <div className="spinner"></div>
  </div>
);

export const LoadingList = () => (
  <div className="loading-container">
    {[...Array(14)].map((_, index) => (
      <div key={`loading-${index}`} className="list-item">
        {<LoadingRow />}
      </div>
    ))}
  </div>
);
