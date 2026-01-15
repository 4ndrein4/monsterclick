
# 👾 Jogo de Reflexo (Click & Dodge)

Monster Click é um jogo web interativo desenvolvido com **HTML, CSS e JavaScript**, onde o jogador deve clicar rapidamente nos monstros que aparecem na arena antes que desapareçam.  
O grande diferencial do jogo é a **progressão dinâmica de dificuldade**, que aumenta conforme a pontuação do jogador cresce.

🔗 **Jogue online:** https://4ndrein4.github.io/monsterclick/

## 🎮 Como Jogar
- Acesse o jogo pela tela inicial
- Clique em **Jogar**
- Monstros aparecem aleatoriamente dentro da arena central
- Clique nos monstros antes que eles desapareçam
- Cada erro custa uma vida
- O jogo termina quando as vidas acabam
- Tente bater seu **recorde pessoal**

## 🧠 Regras do Jogo
- O jogador inicia com **3 vidas**
- Cada monstro clicado corretamente soma **+1 ponto**
- Se um monstro desaparecer sem ser clicado, o jogador perde **1 vida**
- O jogo termina quando as vidas chegam a zero
- A maior pontuação já alcançada é salva automaticamente como **recorde**

## 📈 Progressão de Dificuldade
O jogo possui **dificuldade progressiva baseada na pontuação**:

- A cada **5 pontos**, a dificuldade aumenta
- Os monstros passam a:
  - Aparecer **mais rapidamente**
  - Permanecer **menos tempo na tela**
- Existe um limite mínimo para evitar dificuldade impossível

Essa mecânica garante que o jogo fique cada vez mais desafiador conforme o jogador evolui.

## 🧩 Funcionalidades
- ✔ Tela inicial
- ✔ Tela de jogo com arena central
- ✔ Tela de game over
- ✔ Sistema de vidas com corações visuais
- ✔ Três tipos diferentes de monstros
- ✔ Progressão de dificuldade dinâmica
- ✔ Sons de acerto, perda de vida e game over
- ✔ Sistema de recorde utilizando `localStorage`
- ✔ Animações e feedback visual
- ✔ Compatível com GitHub Pages

## 🛠️ Tecnologias Utilizadas
- **HTML** – Estrutura das páginas
- **CSS** – Estilização, layout e animações
- **JavaScript** – Lógica do jogo, eventos e progressão de dificuldade
