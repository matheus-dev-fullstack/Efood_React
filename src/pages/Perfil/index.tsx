import HeaderPerfil from '../../components/HeaderPerfil';
import Hero from '../../components/Hero';
import PratosList from '../../components/PratosList';
import { useParams } from 'react-router-dom';
import {
  useGetHeroRestaurantQuery,
  useGetPratosQuery,
  useGetRestaurantsByIdQuery
} from '../../services/api';
import { CardapioItem } from '../Home';
import Cart from '../../components/Cart';
import Checkout from '../../components/Checkout';

interface PratosListData {
  cardapio: CardapioItem[];
}

const Perfil = () => {
  const { id } = useParams();

  const { data: heroRestaurant } = useGetHeroRestaurantQuery(Number(id));
  const { data: restaurantes } = useGetRestaurantsByIdQuery(Number(id));

  if (heroRestaurant && restaurantes) {
    const pratosListData: PratosListData = {
      cardapio: restaurantes.cardapio
    };

    return (
      <>
        <Cart />
        <HeaderPerfil />
        <Hero restaurant={heroRestaurant} />
        <PratosList cardapio={restaurantes} />
      </>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Perfil;

// if (!pratos) {
//   return <h3>Carregando...</h3>
// }
// if (!heroRestaurant) {
//   return <h3>Carregando...</h3>
// }

// const [pratos, setPratos] = useState<CardapioItem[]>([])
// const [restaurantes, setRestaurantes] = useState<Restaurant>()
// useEffect(() => {
//   axios
//     .get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//     .then((res) => {
//       setRestaurantes(res.data)
//     })
// }, [id])
// useEffect(() => {
//   axios
//     .get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//     .then((res) => setPratos(res.data.cardapio))
// }, [id])
