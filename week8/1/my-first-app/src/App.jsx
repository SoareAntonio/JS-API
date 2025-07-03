
import Exercitiul1 from './exercitii/Exercitiul1';
import Exercitiul2 from './exercitii/Exercitiul2';
import Exercitiul3 from './exercitii/Exercitiul3';
import {UserProfile,UserCard2,UserCard,Button} from './exercitii/Exemplu1';
import { ProductImage,ProductCard,AddToCartButton,Price,Rating,ProductTitle } from './exercitii/Exemplul2';
import { ContactList ,StatusBadge} from './exercitii/3exercitii';
import { LikeButton,TextInput ,Counter,UserProfile3 } from './exercitii/State';
import { ContactForm } from './exercitii/Formular';
import { Counter2 } from './exercitii/Counter';

/*function App() {
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.name)
  }

  const product = {
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4,
    image: '/headphones.jpg',
  }

  return (
    <div>
      <ProductCard product={product} onAddToCart={handleAddToCart} />
    </div>
  )
}*/

/*function App() {
  const contacte = [
    {
      name: 'Maria Popescu',
      email: 'maria@example.com',
      phone: '0723123456',
      avatar: '/maria.jpg',
    },
    {
      name: 'Ion Ionescu',
      email: 'ion@example.com',
      phone: '0744123456',
      avatar: '/ion.jpg',
    },
  ];

  return (
    <>
    <div>
      <ContactList contacts={contacte} />
    </div>
    <div>
      <h2>Statusuri utilizatori:</h2>
      <StatusBadge status="active" />
      <br />
      <StatusBadge status="pending" />
      <br />
      <StatusBadge status="inactive" />
    </div>
    </>
  );
}*/

/*function App() {
  return (
    <>
      <LikeButton />
      <Counter />
      <TextInput />
      <UserProfile3 />
    </>
  )
}*/

function App(){
  return (
    <>
      <Counter2></Counter2>
    </>
  )
}



export default App;
