/* npm install moment --save
   o --save serve para mapiar o pacote que estamos
   instalando como DEPENDENCIA do nosso projeto */
const today = moment().format("DD/MM/YYYY")
alert(`Data atual: ${today}`)
/* 
   MAS NÃO SE PRECISA USAR O --save
   porque:
   
   From NPM5 moving forward, there’s no
   difference between npm install and npm 
   install --save — so save yourself some 
   unnecessary typing.

   Before NPM5, the difference was that npm 
   install --save would save your installed 
   package to your package.json file as a
   devDependency — now that happens by default 
   when you just use npm install.

*/

/* 
   npm init -y
   o "-y" padroniza o yes, ou o padrao
   para todas aquelas perguntas que o 
   npm faz
   
*/

/* 
   npm install package1 package2 package3 package4
   varios de uma vez 
*/

/* 
   npm install packageX --save-dev
   --save-dev significa que o pacote não será 
   usado após a fase de desenvolvimento.
   O pacote não será subido da produção para a 
   aplicação
*/