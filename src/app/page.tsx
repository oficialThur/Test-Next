"use client";
import './page.module.css';
import {useState} from "react";

export default function Home() {
      const [imgUrl, SetImgUrl] = useState("https://picsum.photos/200/300");
      const trocarImagem = () => {
        SetImgUrl(`https://picsum.photos/300/200?random=${Date.now()}`);
      };
  return (
      <>
        <div id="page">
            <h1>
                teste Arthur henrique
            </h1>
            <div id="card_img">
                <img src={imgUrl} alt="random image"  />
            </div>
            <button onClick={trocarImagem}>
              <strong>  Mudar imagem </strong>
            </button>

        </div>
    </>
  );
}
