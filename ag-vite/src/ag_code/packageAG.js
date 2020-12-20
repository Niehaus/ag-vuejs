export default class PackageAG {
    static initPop(pop_params) {
        let population = []
        let pop_size = pop_params.pop_size, gen = pop_params.gen

        for (let i = 0; i < pop_size; i++) {

            let individual = new Individual(i, gen)

            for (let j = 0; j < 5; j++) {
                (Math.random() > 0.5) ?
                    individual.rep_bin.push(1) : individual.rep_bin.push(0)
            }
            population.push(individual)
        }
        return population
    }

    static f(x) {

    }

    static tournament(population) {
        let selected_parents = []
        let pv = 0.9 // Chance do pior pai vencer
            , i = 0, popLen = population.length
        let p1, p2, winner_index

        if ((popLen/ 2) % 2 !== 0) {
            i = -1
        }
        while (i < popLen) {
            p1 = Math.floor(Math.random() * (popLen))
            p2 = Math.floor(Math.random() * (popLen))
            while (p1 === p2) {
                p2 = Math.floor(Math.random() * (popLen))
            }
            let r = Math.random()

            if (population[p2].fitness > population[1].fitness) { // p2 é o melhor
                winner_index = p2
                if (r > pv){
                    winner_index = p1
                }
            }else { // p1 é o melhor
                winner_index = p1
                if (r > pv) {
                    winner_index = p2
                }
            }
            selected_parents.push(population[winner_index])
            i += 1
        }

        return selected_parents
    }

    static crossover() {

    }

    static mutation() {

    }
}

class Individual {
    constructor(id, gen) {
        this.id = id
        this.gen = gen
        this.rep_bin = []
        this.fitness = 0
    }
}
