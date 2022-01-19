# Sobre
Com o objetivo de simplificar lógicas que envolvem o comportamento case sensitive do JavaScript, desenvolvi uma função a qual tem por propósito a transformação dos caracteres alfabéticos maiúsculos em minúsculos, uniformizando-os. Dessa forma, facilitando lógicas de comparação, por exemplo.  
> Há um arquivo ***index.html*** para observação da funcionalidade do código JavaScript.

## Observações ❗
- A etapa de verificação, utilizando loop *for*, é feita em uma **string** ou **array**, visto que a transformação cabe APENAS à caracteres alfabéticos presentes no mesmo.  
    > Se houver, por exemplo, caracteres númericos, a verificação skipa eles e continua transformando normalmente (os caracteres alfabéticos).  

## Versões 🔃
- Na **v1** há todos os caracteres do alfabeto latino.  
- Na **v2** foi adicionado também caracteres singulares da língua portuguesa e outros idiomas (acentuação etc).  

## Outras aplicações ⚡
Embora o código seja feito utilizando DOM para captura do elemento a ser transformado, ainda é bem versátil no que tange a utilização da lógica em outros contextos.  

# Como funciona ⚙
1. O paramêtro da função *NoCaseSensitive* é estabelecido como um **array** ou **string**.  
2. O resultado da transformação é guardada na variável local (escopo de função) `resultado`, como **string**.  
3. Como etapa de verificação, foi utilizado o loop *for* para cada índice do **array** ou **string**.  
    - A condição de parada do loop é definida pelo `length`, que neste caso, é todo o `value` do elemento HTML.  
4. A expressão do *switch*, neste caso, é o `value` de um elemento HTML mais a variável de repetição (nesse caso `[i]`).
    - Note que o `default` contém uma lógica muito importante: quando encontrado um caracter diferente de um caracter alfabético, ele prossegue adicionando à variável `resultado`, prevenindo falhas no processo.
        - Se for necessário utilizar a lógica em outro elemento, basta adicionar o mesmo texto utilizado na expressão do *switch* após o `resultado +=` dentro do case `default`.
5. A utilização do elemento transformado (na variavél `resultado`) depende do seu objetivo, porém deve ser codada ***após*** o loop *for*.
    > Esta área está sinalizada através de um comentário.

E **voilá!**
