import HeaderPerfil from '../../components/HeaderPerfil';
import Hero from '../../components/Hero';
import PratosList from '../../components/PratosList';
import { useParams } from 'react-router-dom';
import {
  useGetHeroRestaurantQuery,
  useGetPratosQuery,
  useGetRestaurantsByIdQuery
} from '../../services/api';
import Cart from '../../components/Cart';
import { CardapioItem } from '../../store/reducers/cart';
import FormLocation from '../../components/FormLocation';
import FormPayment from '../../components/FormPayment';
import SuccessMessage from '../../components/SuccessMessage';

const Perfil = () => {
  const { id } = useParams();

  const { data: heroRestaurant } = useGetHeroRestaurantQuery(Number(id));
  const { data: restaurantes } = useGetRestaurantsByIdQuery(Number(id));

  if (heroRestaurant && restaurantes) {
    return (
      <>
        <Cart />
        <FormLocation />
        <FormPayment />
        <SuccessMessage />
        <HeaderPerfil />
        <Hero restaurant={heroRestaurant} />
        <PratosList cardapio={restaurantes} />
      </>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Perfil;
