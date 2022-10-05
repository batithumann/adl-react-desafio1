import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React" />
      <Card
        url="http://placekitten.com/500/500"
        title="Gato"
        description="Foto de un lindo gatito"
      />
      <Card
        url="http://placedog.net/400/500"
        title="Perro"
        description="Foto de un perrito"
      />
      <Card
        url="http://placekitten.com/455/600"
        title="Otro Gato"
        description="Foto de un gatito durmiendo"
      />
      <Footer />
    </div>
  );
}

export default App;
