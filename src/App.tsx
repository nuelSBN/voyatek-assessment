import Layout from "./layout";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="h-dvh w-full flex flex-col justify-center items-center">
        <img
          src="https://media.giphy.com/media/3o7TKt17557q777212/giphy.gif"
          alt="Mobile view is not available"
        />
        <h1 className="text-center font-semibold text-sm px-5">
          Mobile view is not available, switch to desctop for better experience
        </h1>
      </div>
    );
  }

  return <Layout />;
}

export default App;
