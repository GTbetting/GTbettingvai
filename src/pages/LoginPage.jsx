import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à GTBetting</h1>
      <p className="mb-4">Faça login para continuar</p>
      <button
        onClick={signInWithGoogle}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Entrar com Google
      </button>
    </div>
  );
}

export default LoginPage;
