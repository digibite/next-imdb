function Results({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
        </div>
      ))}
    </div>
  );

  //<div>{results[0].title}</div>;
}

export default Results;
