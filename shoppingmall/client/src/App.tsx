import { useState } from "react";

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

function App{
  const [products, setProducts] = useState<ProductType[]> ([
    {
      id: 0,
      name: "Iphone 13 Max",
      explanation: '몰라 그딴거',
      price: 500,
    },
  ]);

  const [name, setName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [price, setPrice] = useState('');

  return (
    <>
      <form onSubmit={(event) =>{
        event.preventDefault();
        console.log("제출");
      }}>
        <input
        onChange={(event) =>
          console.log("상품 이름 변경.", event.target.value)}
          type="text"
          placeholder="상품 이름"
        />
        <input
        onChange={(event) =>
          console.log("상품 설명 변경.", event.target.value)}
          type="text"
          placeholder="상품 설명"
        />
        <input
        onChange={(event) =>
          console.log("상품 가격 변경.", event.target.value)}
          type="number"
          placeholder="상품 가격"
        />
        <input type="submit" value="상품 만들기" />
      </form>
    </>
  )
}

export default App;