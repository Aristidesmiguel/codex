# SIMAI — Sistema Inteligente de Monitoramento e Alerta de Inundações (Angola)

Plataforma completa (MVP) para monitorar risco de inundações em tempo real, permitir crowdsourcing de ocorrências e emitir alertas para comunidades em Angola.

## Arquitetura

```text
mobile (React Native/Expo) ---> backend (Node/Express) <--- web admin (Next.js)
                                      |
                                      +--> Firebase Firestore/Auth/FCM
                                      +--> Open-Meteo (chuva)
                                      +--> Telecom mock (SMS/USSD)
```

## Estrutura

- `backend/`: API principal com regras de negócio.
- `mobile/`: app Expo para cidadãos e agentes de campo.
- `web/`: dashboard administrativo para monitoramento e moderação.

## Funcionalidades implementadas

### Mobile
- Mapa com localização do utilizador.
- Legenda de zonas de risco (verde, amarelo, vermelho).
- Reporte de inundação com descrição + GPS + foto (URL placeholder no MVP).
- Botão de emergência (simulação de envio de localização).
- Histórico de alertas.

### Web Admin
- Login simples por token Firebase (MVP).
- Painel em tempo real com:
  - total de relatórios
  - alertas ativos
  - pendências
- Tabela de reports.
- Gráfico de reportes por dia.
- Ações rápidas para moderação/envio manual (stubs para evolução).

### Backend/API
Endpoints principais:
- `POST /reports`
- `GET /reports`
- `GET /alerts`
- `POST /alerts`
- `GET /weather`
- `POST /telecom/sms` (mock SMS)
- `GET|POST /telecom/ussd` (simulação de menu USSD)

Implementações:
- Validação de payload para reports/alerts.
- Autenticação com Firebase ID token.
- Integração com Open-Meteo.
- Motor de risco (MVP):
  - chuva > 20mm => risco médio
  - chuva > 50mm + >=3 reports recentes => risco alto
- Geração automática de alertas a partir do risco calculado.

## Como executar

### 1) Backend
```bash
cd backend
npm install
cp .env.example .env # opcional
npm run dev
```

Variáveis úteis:
- `PORT=4000`
- `GOOGLE_APPLICATION_CREDENTIALS=/caminho/serviceAccount.json`

### 2) Web (Admin)
```bash
cd web
npm install
npm run dev
```

Variável opcional:
- `NEXT_PUBLIC_SIMAI_API=http://localhost:4000`

### 3) Mobile (Expo)
```bash
cd mobile
npm install
npm run start
```

Variável opcional:
- `EXPO_PUBLIC_SIMAI_API=http://localhost:4000`

## Próximos passos recomendados

- Upload real de imagens para Firebase Storage.
- Moderação real de reports com estados (`pending`, `approved`, `rejected`).
- Geofencing e alertas push segmentados por província/município.
- Integração com operadoras locais para SMS/USSD em produção.
- Treinamento de modelo preditivo com histórico hidrológico e relevo.
