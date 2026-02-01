"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import style from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl(""); //初期化
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div className={style.page}>
            <button onClick={refreshImage} className={style.button}>
                One more cat!
            </button>
            <div className={style.frame}>
                {imageUrl && <img src={imageUrl} className={style.img} />}
            </div>
        </div>
    );
}