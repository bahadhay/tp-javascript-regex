function test1() {
    var ch=document.getElementById("input1").value;
    if (/le/.test(ch)) {
    document.getElementById("result1").innerHTML=" existe";
    document.getElementById("result1").style.color = 'green';
        
    }else{
        document.getElementById("result1").innerHTML="n'existe pas"; 
        document.getElementById("result1").style.color = 'red';

    }
    document.getElementById("input1").onfocus = function(){
        document.getElementById("result1").innerHTML=""};
    document.getElementById("input1").onblur = function(){
        document.getElementById("result1").innerHTML=""}
     };

    function test2() {
        var  ch=document.getElementById("input2").value;
        if (/[AEIOUY]/i.test(ch)) {
            document.getElementById("result2").innerHTML=" Contient voyelle";
            document.getElementById("result2").style.color = 'green';
                
            }else{
                document.getElementById("result2").innerHTML="ne contient  pas de voyelle"; 
                document.getElementById("result2").style.color = 'red';
                }
                document.getElementById("input2").onfocus = function(){
                    document.getElementById("result2").innerHTML=""};
                document.getElementById("input2").onblur = function(){
                    document.getElementById("result2").innerHTML=""}
    }


    function test3() {
        var  ch=document.getElementById("input3").value;
        if (/^[AB]/i.test(ch)) {
            document.getElementById("result3").innerHTML=" Votre chaine commence par A ou B.";
            document.getElementById("result3").style.color = 'green';
                
            }else{
                document.getElementById("result3").innerHTML="Votre chaine ne commence pas par A ou B"; 
                document.getElementById("result3").style.color = 'red';
                }

                document.getElementById("input3").onfocus = function(){
                    document.getElementById("result3").innerHTML=""};
                document.getElementById("input3").onblur = function(){
                    document.getElementById("result3").innerHTML=""}
    }


    function test4() {
        var  ch=document.getElementById("input4").value;
        if (/[XY]$/i.test(ch)) {
            document.getElementById("result4").innerHTML=" Votre chaine termine par X ou Y";
            document.getElementById("result4").style.color = 'green';
                
            }else{
                document.getElementById("result4").innerHTML="Votre chaine ne termine pas par X ou Y"; 
                document.getElementById("result4").style.color = 'red';
                }

                document.getElementById("input4").onfocus = function(){
                    document.getElementById("result4").innerHTML=""};
                document.getElementById("input4").onblur = function(){
                    document.getElementById("result4").innerHTML=""}
    }



    function test5() {
        var  ch=document.getElementById("input5").value;
        if (/[XY]$/i.test(ch) && /^[AB]/) {
            document.getElementById("result5").innerHTML=" Votre chaine commence  par A ou B et termine par X ou Y";
            document.getElementById("result5").style.color = 'green';
                
            }else{
                document.getElementById("result5").innerHTML="Votre chaine ne commence  pas par A, B et ne termine pas par X ou Y"; 
                document.getElementById("result5").style.color = 'red';
                }

                document.getElementById("input5").onfocus = function(){
                    document.getElementById("result5").innerHTML=""};
                document.getElementById("input5").onblur = function(){
                    document.getElementById("result5").innerHTML=""}
    }

    function test6() {
        var  ch=document.getElementById("input6").value;
        if (/^.a/.test(ch)) {
            document.getElementById("result6").innerHTML=" le 2ème caractère d'une chaîne de caractères est la lettre 'a'";
            document.getElementById("result6").style.color = 'green';
                
            }else{
                document.getElementById("result6").innerHTML="le 2ème caractère d'une chaîne de caractères n'est pas la lettre 'a'"; 
                document.getElementById("result6").style.color = 'red';
                }

                document.getElementById("input6").onfocus = function(){
                    document.getElementById("result6").innerHTML=""};
                document.getElementById("input6").onblur = function(){
                    document.getElementById("result6").innerHTML=""}
    }


    function test7() {
        var  ch=document.getElementById("input7").value;
        if (/^[A-Z]/i.test(ch) ) {
            document.getElementById("result7").innerHTML=" votre chaine  de caractère commence par alphabets";
            document.getElementById("result7").style.color = 'green';
                
            }else{
                document.getElementById("result7").innerHTML=" votre chaine  de caractère ne commence pas par alphabets"; 
                document.getElementById("result7").style.color = 'red';
                }

                document.getElementById("input7").onfocus = function(){
                    document.getElementById("result7").innerHTML=""};
                document.getElementById("input7").onblur = function(){
                    document.getElementById("result7").innerHTML=""}
    }

   
    function test8() {
        var  ch=document.getElementById("input8").value;
        var nb_alpha=0;
        for (var i=0; i<ch.length ; i++) {if(/[a-zA-Z]/.test(ch[i])) {nb_alpha++}}
            
        if ((nb_alpha>=2) && (nb_alpha<=5)){
            document.getElementById("result8").style.color = 'green';
            document.getElementById("result8").innerHTML="Valeur acceptable"
                
            } else {
                document.getElementById("result8").style.color = 'red';
                document.getElementById("result8").innerHTML="Le nombre d'alphabets doit être  compris entre 2 et 5."
       
                }

                document.getElementById("input8").onfocus = function(){
                    document.getElementById("result8").innerHTML=""};
                document.getElementById("input8").onblur = function(){
                    document.getElementById("result8").innerHTML=""}
    }


    //Tester si votre adresse email est valide ou non
    function test9() {
        var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var ch=document.getElementById("input9").value;
        if (re.test(ch)) {
            document.getElementById("result9").style.color='green'
            document.getElementById("result9").innerHTML="Adresse e-mail valide."
            } else {
                document.getElementById("result9").style.color='red'
                document.getElementById("result9").innerHTML="Adresse e-mail invalide."
            }
    }

    //Entrer votre adresse email et afficher partie locale domaine extention
    function test10() {
        var mail=document.getElementById('input10').value;
        var res=mail.split("@");

        document.getElementById('partieLocale').innerHTML+= "<font color='red'>"+res[0]+"</font>";
        document.getElementById('domaine').innerHTML+= "<font color='red'>"+  res[1].split('.')[0]+"</font>";
        document.getElementById('extention').innerHTML+= "<font color='red'>"+ res[1].split('.')[1]+"</font>";

        
       
        
    }

    
    function test11() {
        var  ch=document.getElementById("input11").value;
        
        if (/^[A-Z][0-9]{7,}/.test(ch)) {
            document.getElementById("result11").innerHTML=" Test  réussi !";
            document.getElementById("result11").style.color = 'green';
                
            }else{
                document.getElementById("result11").innerHTML=" test non réussi !"; 
                document.getElementById("result11").style.color = 'red';
            
        }
        document.getElementById("input11").onfocus = function(){
            document.getElementById("result11").innerHTML=""};
        document.getElementById("input11").onblur = function(){
            document.getElementById("result11").innerHTML=""}
}


function test12() {
    var ch=document.getElementById("input12").value;
    if (/^[0-9]{2,4}[ ][$£]$/.test(ch)) {
        document.getElementById("result12").innerHTML="Test réussi !" ;
        document.getElementById("result12").style.color = "green";
      } else {
        document.getElementById("result12").innerHTML="Test non réussi !";
        document.getElementById("result12").style.color = "red";
      }

        document.getElementById("input12").onfocus = function(){
        document.getElementById("result12").innerHTML=""};
        document.getElementById("input12").onblur = function(){
        document.getElementById("result12").innerHTML=""}
        
}
    

function test13() {
    var ch=document.getElementById("input13").value;
    if (/^[A-Z]{4,}[ ][a-z]{1}[a-zA-Z]/.test(ch)) {
        document.getElementById("result13").innerHTML="Votre chaine :"+ch;
        document.getElementById("result13").style.color="green";
        
    }else{
        document.getElementById("result13").innerHTML="Voir les conditions ! "
        document.getElementById("result13").style.color="red";


    }

        document.getElementById("input13").onfocus = function(){
        document.getElementById("result13").innerHTML=""};
        document.getElementById("input13").onblur = function(){
        document.getElementById("result13").innerHTML=""}
        
    
}



function test14() {
    var ch = document.getElementById("input14").value;
    if (/^(1ere|2eme|3eme|4eme|5eme|6eme|7eme|8eme|9eme) [A-Z]{2,} [a-z]{3,} [A-Z] SG-[1-3]$/.test(ch)) {
        document.getElementById("result14").innerHTML = ch;
        document.getElementById("result14").style.color = "green";
    } else {
        document.getElementById("result14").innerHTML = "Veuillez respecter les conditions spécifiées !";
        document.getElementById("result14").style.color = "red";
    }

        document.getElementById("input14").onfocus = function(){
        document.getElementById("result14").innerHTML=""};
        document.getElementById("input14").onblur = function(){
        document.getElementById("result14").innerHTML=""}
        
}


        
    







      
    

jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','20px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
});








    
    


      
    




 

