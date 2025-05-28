import React from "react";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bem-vindo à GTBetting</h1>
      <p>Faça login para continuar</p>
      <button onClick={() => alert("Login com Google ainda não configurado")}>
        Entrar com Google
      </button>
    </div>
  );
}
