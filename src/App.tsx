import { Fonts } from "./fonts";
import { Layout } from "./layout/layout";

function App() {
  return (
    <>
      <head>
        <Fonts />
        <title>Home | Solar One</title>
      </head>
      <main>
        <Layout>
          <h2 className="text-[40px]">Welcome to solar Lorem</h2>
        </Layout>
      </main>
    </>
  );
}

export default App;
