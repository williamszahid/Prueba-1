        const RegEx = /^[a-zA-Z0-9]+$/;
        Inputs = document.querySelectorAll('.CardLogin-Inputs div input');
        DivError = document.querySelector('.Card-Error-Hidden');
        Button = document.querySelectorAll('.CardLogin-Button div input');
        console.log(Button);

        Inputs.forEach(element => {
            element.addEventListener('input', RevisarEntradas)
        });

        function RevisarEntradas(e){
            let texto = e.target.value;
            let Test;
            Test = RegEx.test(texto);
            if(Test || texto == ''){
                DivError.classList.remove('Card-Error-Show');
                DivError.classList.add('Card-Error-Hidden');
            }
            else{
                
                DivError.classList.remove('Card-Error-Hidden');
                DivError.classList.add('Card-Error-Show');
            }
            
        }
