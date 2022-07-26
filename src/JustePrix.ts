export class JustePrix {

    public lifes: number;
    constructor(lifes: number) {
        this.lifes = lifes;
    }

    compareNumbers(number: number, result: number) {
        if (number < result) {
            this.lifes--
            if (this.lifes === 0) {
                return 'you loose !'
            } else {
                return 'plus'
            }
        } else if (number > result) {
            this.lifes--
            if (this.lifes === 0) {
                return 'you loose !'
            } else {
                return 'moins'
            }
        } else if (number === result) {
            return 'c\'est gagné !'
        }
    }
    
    generateAleaNumber(aleaRange: number) {
        return Math.ceil(Math.random()*aleaRange)
    }
}