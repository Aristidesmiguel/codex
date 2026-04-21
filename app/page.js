import FeatureCard from '@/components/FeatureCard';
import SectionTitle from '@/components/SectionTitle';

const coletaDados = [
  {
    title: 'Sensores de nível de água',
    description:
      'Leitura contínua de rios, valas e pontos urbanos críticos para detectar variações perigosas.',
    icon: '🌊',
  },
  {
    title: 'Sensores de chuva',
    description:
      'Medição pluviométrica em tempo real para antecipar cenários de inundação.',
    icon: '🌧️',
  },
  {
    title: 'APIs meteorológicas',
    description:
      'Integração com previsões oficiais para complementar a inteligência de risco.',
    icon: '☁️',
  },
  {
    title: 'Relatos da população',
    description:
      'Contribuição cidadã via app com fotos e geolocalização para acelerar respostas.',
    icon: '📱',
  },
];

const alertas = [
  'Notificações instantâneas no aplicativo',
  'SMS para áreas com internet limitada',
  'Chamadas automáticas para situações críticas',
  'Painel operacional para autoridades e proteção civil',
];

const monetizacao = [
  'Licenciamento para governo e municípios',
  'API de dados e relatórios para empresas',
  'Serviços premium de análise preditiva',
  'Publicidade social e comercial no app',
  'Venda de dados agregados para planejamento',
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-900 via-slate-900 to-brand-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            Plataforma para Angola
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            SIMAI — Sistema Inteligente de Monitoramento e Alerta de Inundações
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Previsão, monitoramento e resposta em tempo real para reduzir perdas humanas e materiais causadas por enchentes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#arquitetura"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Ver Arquitetura
            </a>
            <a
              href="#contato"
              className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white"
            >
              Solicitar Demonstração
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="1. Visão Geral"
          title="Como o SIMAI funciona na prática"
          subtitle="Uma solução completa que combina IoT, IA e comunicação móvel para prevenção e resposta rápida."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coletaDados.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-8">
            <SectionTitle
              eyebrow="2. Processamento Inteligente"
              title="IA para antecipar riscos"
              subtitle="Modelos de análise integram dados históricos e em tempo real para prever enchentes com maior precisão."
            />
            <ul className="space-y-3 text-slate-700">
              <li>• Identificação automática de zonas de risco</li>
              <li>• Geração de nível de severidade por bairro</li>
              <li>• Previsões acionáveis para equipes de campo</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <SectionTitle
              eyebrow="3. Sistema de Alertas"
              title="Alerta multicanal para máxima cobertura"
              subtitle="Comunicação em diferentes canais garante que a informação chegue mesmo em áreas com conectividade limitada."
            />
            <ul className="space-y-3 text-slate-200">
              {alertas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="4. Produtos"
          title="Aplicativo móvel + painel web"
          subtitle="Experiência simples para cidadãos e poderosa para autoridades."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-bold">App Mobile (React Native)</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Mapa de risco em tempo real</li>
              <li>• Alertas personalizados por localização</li>
              <li>• Botão de emergência</li>
              <li>• Reportes com fotos mesmo offline</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Painel Web (Next.js)</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Dashboard operacional em tempo real</li>
              <li>• Gestão de incidentes e despacho</li>
              <li>• Comunicação com equipes e autoridades</li>
              <li>• Histórico e indicadores estratégicos</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="arquitetura" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="5. Arquitetura"
            title="Stack moderna e escalável"
            subtitle="React Native + Next.js no front, Node.js + Firebase no backend e Python para inteligência artificial."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {['React Native + Next.js', 'Node.js + Firebase', 'Python (IA e previsão)'].map((item) => (
              <div key={item} className="rounded-xl border border-white/20 bg-white/5 p-6 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="6. Diferenciais"
              title="Projetado para a realidade de Angola"
              subtitle="Foco local, inclusão digital e operação resiliente para contextos de infraestrutura diversa."
            />
            <ul className="space-y-2 text-slate-700">
              <li>• Cobertura para zonas urbanas e periurbanas</li>
              <li>• Funcionalidades offline essenciais</li>
              <li>• Integração com operadoras e canais populares</li>
            </ul>
          </div>

          <div>
            <SectionTitle
              eyebrow="7. Impacto"
              title="Resultados esperados"
              subtitle="Mais segurança para a população e decisões públicas mais inteligentes."
            />
            <ul className="space-y-2 text-slate-700">
              <li>• Redução de mortes e danos materiais</li>
              <li>• Resposta mais rápida em emergências</li>
              <li>• Melhor planejamento urbano e ambiental</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Modelo de Negócio"
              title="Como o SIMAI gera receita"
              subtitle="Estrutura sustentável para expansão nacional e inovação contínua."
            />
            <ul className="space-y-2 text-slate-700">
              {monetizacao.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-900">Integração com a Unitel</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Disparo de SMS de alerta em massa</li>
              <li>• Fluxos USSD para consulta rápida de risco</li>
              <li>• Zero rating para acesso sem custo ao app</li>
              <li>• Localização aproximada para alertas geográficos</li>
              <li>• Chamadas automáticas para cenários extremos</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-slate-950 py-12 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">SIMAI</p>
            <p className="text-sm">Sistema Inteligente de Monitoramento e Alerta de Inundações</p>
          </div>
          <a
            href="mailto:contato@simai.ao"
            className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            contato@simai.ao
          </a>
        </div>
      </footer>
    </main>
  );
}
