const DynamicRoute = ({ params, searchParams }) => {
  return (
    <div>
      <h1>this is dynamic page: {params.id} </h1>
      <h2>Search by: {searchParams.category} </h2>
    </div>
  );
};

export default DynamicRoute;
