import Header from "./Header";
import ImageCarousel from "./ImageCarroussel";

export default function HomePage() {
  const images = [
    "https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1-1280x720.jpg",
  ];
  return (
    <div>
      <Header />
      <ImageCarousel images={images} />
    </div>
  );
}
