# Teste Prático para Desenvolvedor Full Stack Kronoos

Você foi designado para desenvolver uma aplicação full stack para lidar com grandes volumes de dados. A aplicação consistirá em um frontend usando Vite ou Next.js, se comunicando com um backend que pode ser construído utilizando HTTP ou WebSocket para troca de dados. O backend será responsável por fornecer uma massa de dados considerável (cerca de 30GB). Além disso, a aplicação deve ser capaz de lidar com dados fornecidos em um formato CSV mal formatado.

*Observação Importante:*
1. Pedimos extremo comprometimento com o teste, e utilizamos IA para validar se os testes foram gerados por alguma IA (ChatGPT, LhamaGPT, Bard, Jasper, entre outras). Sua dedicação será crucial para uma avaliação justa.
2. Pedimos que clonem o repo ou façam um fork para o github pessoal e nos sinalizem quando finalizarem, pois não será possível abrir PR neste repositório do teste.

## Manipulação de Dados de CSV e Conversão para Array

- Os dados são fornecidos em formato CSV.
- Utilizaremos a biblioteca fs (File System) para ler o arquivo CSV e a biblioteca csv-parser para processar os dados e convertê-los em um array de objetos JavaScript.

## Conversão de Dados para Moeda Real Brasileira

- Valores monetários, como vlTotal, vlPresta, vlMora, etc., precisam ser formatados como moeda brasileira (BRL).
- Utilizaremos a biblioteca intl do JavaScript para formatar os valores numéricos como moeda BRL, incluindo o símbolo de real (R$), separador de milhar e precisão de duas casas decimais.

## Validação de CPF ou CNPJ

- Implementaremos uma função para validar o campo nrCpfCnpj e verificar se ele é um CPF ou CNPJ válido, seguindo as regras de validação apropriadas para cada formato.
- Parte de todos os CPF e CNPJ sao invalidos, usamos um script para gerar dados fictícios. 

## Validação de Valor Total e Prestações

- Dividiremos o valor de vlTotal pela quantidade de prestações (qtPrestacoes).
- Verificaremos se o resultado dessa divisão é igual ao valor de vlPresta para cada prestação, garantindo que os cálculos estejam corretos e consistentes.
- Para chegar a um valor aproximado, devera converter o valor total para um numero inteiro, ignorando as dezenas quebradas, e calculando a data de pagamento para verificar se existe juros acumulado, e o valor de mora, caso o valor do movimento(vlMovimento) seja maior que o valor do pagamento (vlPag), devera construir uma trataviva adequada dizendo que o pagamento está inconsistente no frontend.
- Retorne um boolean se o valor calculado é igual ao valor da parcela.

## Conversão de Datas para o Tipo Date

- Os campos dtContrato e dtVctPre estão no formato YYYYMMDD.
- Utilizaremos o JavaScript para converter esses campos em objetos do tipo Date, permitindo manipulações e formatações mais adequadas.

## Frontend

1. *Framework Frontend:*
   - Escolha entre Vite ou Next.js para desenvolver o frontend.

2. *Comunicação com Backend:*
   - Implemente a comunicação entre o frontend e o backend utilizando métodos assíncronos (HTTP ou WebSocket).

3. *Tratativa de Leitura de Dados em Larga Escala:*
   - Implemente tratativas eficientes para a leitura de grandes volumes de dados.
   - Considere estratégias como paginação, carregamento sob demanda ou outras técnicas para otimizar o desempenho.

4. *Gerenciador de Estados:*
   - Utilize um gerenciador de estados (Redux, Zustand, Mobx, etc.) para gerenciar o estado da aplicação.

5. *Manipulação de Dados:*
   - Implemente lógica para manipular os dados recebidos do backend.
   - Considere ordenação, filtragem e outras operações relevantes.

6. *Frontend com Massa de Dados:*
   - Desenvolva a interface do usuário para renderizar grandes volumes de dados de forma eficiente.

7. *Gerenciador de Estado:*
   - Utilize um gerenciador de estados para compartilhar dados e querys.

8. *Opcional - GraphQL:*
   - Implemente uma camada opcional de GraphQL como BFF (Backend For Frontend).

## Backend

1. *Escolha de Framework:*
   - Escolha um framework (Express, NestJS ou HTTP nativo) para desenvolver o backend.

2. *Comunicação com Frontend:*
   - Implemente endpoints HTTP ou WebSocket para fornecer dados ao frontend.

3. *Tratativa de Leitura de Dados em Larga Escala:*
   - Implemente tratativas eficientes para a leitura e fornecimento de grandes volumes de dados.

4. *Arquitetura - Opcional:*
   - Implemente a arquitetura hexagonal ou DDD.

5. *Banco de Dados:*
   - Utilize MongoDB ou PostgreSQL como banco de dados.
   - Utilize Prisma ou Mongoose como ORM.

6. *Tratamento de CSV:*
   - Implemente uma lógica para ler, tratar e manipular dados provenientes de um CSV mal formatado.

---

A conclusão bem-sucedida deste teste será avaliada com base na implementação eficiente de conceitos como tratamento de dados em larga escala, comunicação assíncrona, gerenciamento de estado, manipulação de CSV, escolha adequada de tecnologias e boas práticas de desenvolvimento. O cumprimento dos opcionais será considerado como um diferencial.

Boa sorte!
