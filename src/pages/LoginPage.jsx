import { supabase } from '../supabaseClient';

export default function LoginPage() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Erro ao fazer login:', error.message);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Bem-vindo à GTBetting</h1>
      <p>Faça login para continuar</p>
      <button onClick={handleLogin}>Entrar com Google</button>
    </div>
  );
}
