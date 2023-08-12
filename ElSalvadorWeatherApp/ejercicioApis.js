const ElSalvador = (function(){
    'use strict';
    

    const _climaSanMiguel = function(){
        return "Uno";
    }
    const _climaUsulutan = function(){
        return "Dos";
    }
    const _climaLaUnion = function(){
        return "Tres";
    }
    const _climaSantaAna = function(){
        return "Cuatro";
    }
    const _climaSanSalvador = function(){
        return "Cinco";
    }

    const mostrarClima = function(departamento){
        switch (departamento) {
            case "San Miguel":
                return _climaSanMiguel();
                break;
            case "Usulutan":
                return _climaUsulutan();
                break;
            case "La Union":
                return _climaLaUnion();
                break;
            case "Santa Ana":
                return _climaSantaAna();
                break;
                case "San Salvador":
                    return _climaSanSalvador();
                    break;
            default:
                return "No se encontro";
                break;
        }
    }

    return{
        mostrarClima
    }


})();

console.log(ElSalvador.SanMiguel.clima());