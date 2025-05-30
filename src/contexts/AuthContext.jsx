const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Erro ao logar com Google:', error); // ← Mostra o erro exato no console
    alert('Login com Google ainda não configurado');
  }
};
