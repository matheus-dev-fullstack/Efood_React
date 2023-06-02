import Restaurant from '../../models/Restaurante'
import sushi from '../../assets/sushi.jpg'
import massa from '../../assets/massa.jpg'
import RestautantList from '../RestaurantList'
import Header from '../Header'
import { MainContainer } from '../../styles'

const bestRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    stars: 4.9,
    infos: ['Destaque da Semana', 'Sushi'],
    image: sushi
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: 4.6,
    infos: ['Italiana'],
    image: massa
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: 4.6,
    infos: ['Italiana'],
    image: massa
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: 4.6,
    infos: ['Italiana'],
    image: massa
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: 4.6,
    infos: ['Italiana'],
    image: massa
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: 4.6,
    infos: ['Italiana'],
    image: massa
  }
]

const TesteRestaurantes = () => (
  <>
    {/* <Header /> */}
    <RestautantList places={bestRestaurants} />
  </>
)

export default TesteRestaurantes
