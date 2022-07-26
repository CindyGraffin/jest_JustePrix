import {JustePrix} from './JustePrix';

let testJustePrix = new JustePrix(10);

describe('Classe JustePrix', () => {
    describe('Instanciation de la classe', () => {
        test('Renvoie true si la classe est bien instanciée', () => {
            expect(new JustePrix(10)).toBeTruthy();
            expect(testJustePrix).toBeTruthy();
        })
    })
    describe('Générer un nombre aléatoire entre 0 et un entier positif', () => {
        test('Renvoie un nombre aléatoire > 0 et < au nombre défini', () => {
            const value = testJustePrix.generateAleaNumber(15);
            expect(value).toBeGreaterThan(0);
            expect(value).toBeLessThanOrEqual(15);
            const value2 = testJustePrix.generateAleaNumber(100);
            expect(value2).toBeGreaterThan(0);
            expect(value2).toBeLessThanOrEqual(100);
            const value3 = testJustePrix.generateAleaNumber(2);
            expect(value3).toBeGreaterThan(0);
            expect(value3).toBeLessThanOrEqual(2);
        })
    })
    describe('Comparer un nombre par rapport à un résultat attendu', () => {
        test('Renvoie plus si le nombre est inférieur au résultat attendu', () => {
            expect(testJustePrix.compareNumbers(2, 5)).toBe('plus');
            expect(testJustePrix.compareNumbers(4, 10)).toBe('plus');
            expect(testJustePrix.compareNumbers(3, 8)).toBe('plus');
        })
        test('Renvoie moins si le nombre est supérieur au résultat attendu', () => {
            expect(testJustePrix.compareNumbers(8, 5)).toBe('moins');
            expect(testJustePrix.compareNumbers(10, 5)).toBe('moins');
            expect(testJustePrix.compareNumbers(9, 1)).toBe('moins');
        })
        test('Renvoie c\'est gagné ! si le nombre est égal au résultat attendu', () => {
            expect(testJustePrix.compareNumbers(8, 8)).toBe('c\'est gagné !');
            expect(testJustePrix.compareNumbers(10, 10)).toBe('c\'est gagné !');
            expect(testJustePrix.compareNumbers(9, 9)).toBe('c\'est gagné !');
        })
    })
    describe('lifes in class', () => {
        describe('Retirer une vie lorsque la réponse est fausse', () => {
            test('Retire une vie si le nombre est inférieur au résultat', () => {
                const lifes = testJustePrix.lifes
                testJustePrix.compareNumbers(3, 5);
                const lifesAfterMethod = testJustePrix.lifes
                expect(lifesAfterMethod).toBe(lifes-1);
            })
            test('Retire une vie si le nombre est supérieur au résultat', () => {
                const lifes = testJustePrix.lifes
                testJustePrix.compareNumbers(7, 5);
                const lifesAfterMethod = testJustePrix.lifes
                expect(lifesAfterMethod).toBe(lifes-1);
            })
            test('Ne retire pas de vie si le nombre est égal au résultat', () => {
                const lifes = testJustePrix.lifes
                testJustePrix.compareNumbers(5, 5);
                const lifesAfterMethod = testJustePrix.lifes
                expect(lifesAfterMethod).toBe(lifes);
            })
        })
        describe('Vérifier si le joueur a perdu ou non', () => {
            test('renvoie loose si le joeueur n\'a plus de vie', () => {
                const testClass = new JustePrix(1);
                expect(testClass.compareNumbers(4, 5)).toBe('you loose !');
            })
            test('ne renvoie pas loose si le joeueur a encore une ou des vies', () => {
                const testClass = new JustePrix(5);
                expect(testClass.compareNumbers(4, 5)).not.toBe('you loose !');
            })
        })
    }) 
    
})