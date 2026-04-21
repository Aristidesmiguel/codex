import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [token, setToken] = useState('');
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('simai_token', token);
    router.push('/');
  };

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 420, margin: '0 auto' }}>
        <h1>SIMAI Admin</h1>
        <form onSubmit={onSubmit}>
          <input
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
            placeholder="Firebase ID Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}
