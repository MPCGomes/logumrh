"use client";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

interface ShareModalProps {
  slug: string;
}

export default function ShareModal({ slug }: ShareModalProps) {
  const url = `https://www.logumrh.com.br/vagas/${slug}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Logum RH | Vaga de Emprego",
        text: "Confira esta oportunidade de emprego!",
        url,
      });
    } else {
      alert("Compartilhamento não suportado neste dispositivo.");
    }
  };

  return (
    <IconButton onClick={handleShare}>
      <ShareIcon />
    </IconButton>
  );
}
