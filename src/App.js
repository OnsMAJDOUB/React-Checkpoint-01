
import { Button, Card } from 'react-bootstrap';
import './App.css';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';


function App() {
  const myName="Ons"
  return (
    <div>
      <h1 className={ myName ? `withName`: `wthoutName`} >Hello { myName ? myName : "There!" } </h1>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Text>
            <Price />
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
