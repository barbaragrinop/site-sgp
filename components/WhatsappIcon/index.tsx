import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Whatsapp.module.scss"

export default function WhatsappIcon() {
  return (
    <div className={styles.iconWhatsapp}>
      <Link href={"https://api.whatsapp.com/send?phone=5511958621913&text=Olá, vim do site. Gostaria de obter mais informações! 🎆"}>
        <Image width={7} height={7} src={"/whatsapp.svg"} alt={"Ícone do whatsapp para entrar em contato com o Buffet Cicareli"} />
      </Link>
    </div>
  );
}
