$('#btnVerif').hide();
$("#carreGood").hide();
$("#carreFalse").hide();
$("#nbrPaire").hide();
$('#n').val('');
let tab = new Array(n);

//Vérification si le champ est correctement rempli
$(document).ready(function(){
    $('#btnCarre').attr('disabled',true);

    $('#n').keyup(function(){
        if($(this).val().length !=0){
            $('#btnCarre').attr('disabled', false);
        }
        else
        {
            $('#btnCarre').attr('disabled', true);
        }
    })
});

function generation(n)
{
    if (n % 2 == 0)
    {
        $("#nbrPaire").slideDown( "slow", function() {
            $("#nbrPaire").show();
        });
        return false;
    } else
    {
        $("#nbrPaire").slideUp( "slow", function() {
            $("#nbrPaire").hide();
        });
        //Si tout est bon, on lance l'algo de génération du tableau + le remplissage
        for (let i = 0; i < n; i++) {
            tab[i] = new Array(n);
            for (let j = 0; j < n; j++) {
                tab[i][j] = 0;
            }
        }
        //Initialisation point de départ algo
        tab[n - 1][Math.floor(n / 2)] = 1;
        yInit = n - 1;
        xInit = Math.floor(n / 2);

        //construction carré
        $('#carreMagique').empty();
        //$('#iSum').empty();
        //$('#jSum').empty();
        let html;

        for (let val = 2; val < n * n + 1; val++) {

            //Coordonnées d'écriture de la valeur
            x = 1 + xInit;
            y = 1 + yInit;

            //Coordonnées initiales temporaires au cas ou la case est déjà remplie
            tempX = xInit;
            tempY = yInit;

            //Si on dépasse à droite
            if (y == n) {
                y = 0;
                yInit = 0;
            }

            //Si on dépasse par le bas
            if (x == n) {
                x = 0;
                xInit = 0;
            }

            //Si la case est libre
            if (tab[y][x] == 0)
            {
                tab[y][x] = val;
                //console.log(tab);
                xInit = x;
                yInit = y;
                continue;
            }
            else //Si la case est déjà remplie
            {
                yInit = tempY - 1;

                //On ne soustrait pas 1, car on se décale vers la gauche pour ajouter la nouvelle valeur
                xInit = tempX;
                tab[yInit][xInit] = val;
                continue;
            }
        }

        for (let i = 0; i < tab.length; i++)
        {
            html += "<tr>";

            for (let j = 0; j < tab.length; j++)
            {
                let tempJ = 0;
                html += "<td class='case'><span>" + tab[i][j] + "</span></td>";
            }
            html += "</tr>";
        }
        $('#carreMagique').append(html);
        return true;

    }
}

function verification(resultatAttendu)
{
        for (let z = 0; z < tab.length; z++)
        {
            var sumX = 0;
            for (let k = 0; k < tab.length; k++)
            {
                sumX += tab[z][k];
            }
            console.log("Somme Absisses : " +  sumX);
        }

        for (let e = 0; e < tab.length; e++)
        {
            var sumY = 0;
            for (let a = 0; a < tab.length; a++)
            {
                sumY += tab[a][e];
            }
            console.log("Somme Ordonnés : " +  sumY);
        }

        for (let v = 0; v < tab.length; v++)
        {
            var sumDiag = 0;
            for (let c = 0; c < tab.length; c++)
            {
                sumDiag += tab[c][c];
            }
            console.log("Somme diagonale 1 : " + sumDiag);
        }

        if (sumX == resultatAttendu && sumY == resultatAttendu && sumDiag == resultatAttendu)
        {
            $( ".case" ).addClass( "bg-success" );
            $("#carreGood").slideDown( "slow", function() {
                $('#carreGood').show();
            });
        } else
        {
            $( ".case" ).addClass( "bg-danger" );
            $("#carreFalse").slideUp( "slow", function() {
                $('#carreFalse').show();
            });
        }
    }


    //Bouton de remplissage du carré
    $("#btnCarre").click(function ()
    {
        var n = $('#n').val();
        $("#carreGood").slideUp( "slow", function()
        {
            $('#carreGood').hide();
        });
        if (generation(n))
        {
            $('#btnVerif').show();
        }
    });

    //Bouton de vérification
    $("#btnVerif").click(function ()
    {
        var n = $('#n').val();
        const resultatAttendu = ((n * n + 1) * n) / 2;
        verification(resultatAttendu);
    });