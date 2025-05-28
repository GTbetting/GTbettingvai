import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Bem-vindo à GTBetting</h1>
      <p>Faça login para continuar</p>
      <button onClick={signInWithGoogle}>Entrar com Google</button>
    </div>
  );
}
