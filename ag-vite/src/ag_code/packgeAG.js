export default class PackgeAG {
    static initPop(pop_params) {
        let population = []
        let pop_size = pop_params.pop_size,
            gen = pop_params.gen

        for (let i = 0; i < pop_size; i++) {

            let individual = new Individual(i, gen)

            for (let j = 0; j < 5; j++) {
                (Math.random() > 0.5) ? individual.rep_bin.push(1) :
                    individual.rep_bin.push(0)
            }
            population.push(individual)
        }
        return population
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
