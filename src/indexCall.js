import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ProductList from './components/product_list';
import ProductDetail from './components/product_detail';
import ProductDetailDesc from './components/product_detail_desc';
import ProductDetailImage from './components/product_detail_image';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [
        {
          "id": "46c634d04cc2fb4a4ee0f1596c5330328130ff80",
          "image": "http://ecx.images-amazon.com/images/I/81Pc-CCHsCL._SL1500_.jpg",
          "title": "Play Dough",
          "description": "Fundoh fun pack - 12 pieces, ideal dough to create ample fun stories. Roll, mold and extrude lots of fun shapes and exciting creations with Fun Doh clay toys from Funskool. Unleash your creative juices to make vacations and leisure more magical while building confidence and pushing the imagination limit to the fullest. Create just about anything you can imagine with Fun Doh do-it-yourself clay toys. It includes 12 - 1 Oz Tubs.Not recommended for children below 3 years."
        },
        {
          "id": "d823cb4204c9715f5c811feaabeea45ce06736a0",
          "image": "http://ecx.images-amazon.com/images/I/51IrORZqnDL._SX385_BO1,204,203,200_.jpg",
          "title": "Data Structures and Algorithm",
          "description": "Java programming is not an easy subject or skill to understand, but this book deploys an interactive approach to help clear many concepts with easy-to-grasp explanations. Data structure is a method of organizing computer data so that it can further be used effectively. These organized data structures are the key to effective algorithm-designing for different databases and internet indexing services. This book simplifies ideas and data-structure in a lucid way, so that even a novice computer engineering student"
        },
        {
          "id": "437b3687100bcb77959a5fb6d0351b41972b1173",
          "image": "https://images-eu.ssl-images-amazon.com/images/I/41t-hzV8qbL.jpg",
          "title": "Lambda - Java 8",
          "description": "Java programming is not an easy subject or skill to understand, but this book deploys an interactive approach to help clear many concepts with easy-to-grasp explanations. Data structure is a method of organizing computer data so that it can further be used effectively. These organized data structures are the key to effective algorithm-designing for different databases and internet indexing services. This book simplifies ideas and data-structure in a lucid way, so that even a novice computer engineering student"
        },
        {
          "id": "437b3687100bcb77959a5fb6d0351s41972b1173",
          "image": "http://ecx.images-amazon.com/images/I/61PS5JMZlnL._SX522_.jpg",
          "title": "Piston FIT",
          "description": "Java programming is not an easy subject or skill to understand, but this book deploys an interactive approach to help clear many concepts with easy-to-grasp explanations. Data structure is a method of organizing computer data so that it can further be used effectively. These organized data structures are the key to effective algorithm-designing for different databases and internet indexing services. This book simplifies ideas and data-structure in a lucid way, so that even a novice computer engineering student"
        },
        {
          "id": "437b3687100bcb77d59a5fb6d0351b41972b1173",
          "image": "http://ecx.images-amazon.com/images/I/71-wE3r4tlL._UX522_.jpg",
          "title": "Sunglass",
          "description": "Java programming is not an easy subject or skill to understand, but this book deploys an interactive approach to help clear many concepts with easy-to-grasp explanations. Data structure is a method of organizing computer data so that it can further be used effectively. These organized data structures are the key to effective algorithm-designing for different databases and internet indexing services. This book simplifies ideas and data-structure in a lucid way, so that even a novice computer engineering student"
        },
        {
          "id": "437b3687100bcb779r9a5fb6d0351b41972b1173",
          "image": "http://ecx.images-amazon.com/images/I/51odjdfuPTL.jpg",
          "title": "iPhone 7",
          "description": "Java programming is not an easy subject or skill to understand, but this book deploys an interactive approach to help clear many concepts with easy-to-grasp explanations. Data structure is a method of organizing computer data so that it can further be used effectively. These organized data structures are the key to effective algorithm-designing for different databases and internet indexing services. This book simplifies ideas and data-structure in a lucid way, so that even a novice computer engineering student"
        }

      ],
      selectedProduct: null
    };
    //this.videoSearch('rajni');
  }
  render(){
    return (
      <div>
        <ProductList
        onProductSelect={selectedProduct => this.setState({selectedProduct})}
        products={this.state.products} />
        <ProductDetail product={this.state.selectedProduct} />
        <ProductDetailDesc product={this.state.selectedProduct} />
        <ProductDetailImage product={this.state.selectedProduct} onProductSelect={selectedProduct => this.setState({selectedProduct})} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
