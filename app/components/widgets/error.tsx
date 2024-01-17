// Import necessary modules from Remix


// OverCall component
function ErrorView() {
  return (
    <div className="flex items-center justify-center h-screen bg-themeWhite">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-themeBlack mb-4">Oops, Something Went Wrong</h1>
        <p className="text-base text-nimbusGray mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default ErrorView;
