# Angular App (Port from React)

Este projeto é uma reescrita do sistema frontend originalmente construído em React (`front/react-app`). O projeto foi portado para Angular com o objetivo de demonstrar as melhores práticas de organização de pastas, código limpo e módulos (arquitetura baseada em features/core/shared).

O projeto utiliza o framework clássico do **Bootstrap 5** para a interface do usuário e **FontAwesome 6** para ícones.

## Pré-requisitos
- **Node.js** (v18.19.1 ou superior recomendado, que vem com NPM)
- **Angular CLI** instalado globalmente: `npm install -g @angular/cli` (Opcional, mas recomendado para executar comandos `ng`).

## Estrutura do Projeto
A estrutura adere a um padrão altamente recomendável na comunidade Angular:

- **`core/`**: Onde residem serviços globais, interceptadores HTTP, guards de rota e modelos base. (Ex: `models`).
- **`shared/`**: Componentes, pipes e diretivas que são usados em vários lugares do sistema, porém que não dependem de lógica de negócios específica. (Ex: `Header`, `Sidebar`, `TitlePage`, `ActionCard`).
- **`features/`**: Agrupamento por domínio de negócio, onde cada feature tem seu próprio módulo, roteamento e componentes. (Ex: `dashboard`, `items`, `companies`).

## Passos para Executar o Projeto Localmente

1. **Abra o terminal** e navegue até a pasta do projeto Angular:
   ```bash
   cd front/angular-app
   ```

2. **Instale as dependências** do projeto:
   ```bash
   npm install
   ```
   *Nota: O Bootstrap e o FontAwesome já estão instalados e declarados no arquivo `angular.json`.*

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```
   Isso compilará a aplicação e a disponibilizará em `http://localhost:4200/`.

4. (Opcional) **Rodando o backend**:
   O módulo de items está configurado para buscar dados via requisições HTTP locais (`http://localhost:5181/api/item`). Lembre-se de iniciar sua API .NET para carregar as vagas (items) corretamente.

## Funcionalidades Migradas
- **Dashboard**: O painel inicial exibindo cartões informativos.
- **Vagas / Items**: Tabela de vagas, listagem interativa com cards (agora com modal de adicionar/editar e excluir com confirmação via Bootstrap Modals nativos com `ngClass`).
- **Empresas**: Tabela funcional de listagem de empresas, pesquisa interativa e telas vazias conectadas para "detalhes".
- **Design Totalmente Responsivo**: Usando Bootstrap e as variáveis nativas implementadas em CSS globalmente. O Menu lateral (Sidebar) responde a eventos mobile.
