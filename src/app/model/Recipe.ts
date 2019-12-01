export interface Instructions {
    instrunction: string;
    photo: string;
}

export interface Ingredients {
    ingredient: string;
    measure: string;
}

export class Recipe {
    title: string;
    description: string;
    ingredients: Ingredients[];
    instrunctions: Instructions[];
    cover_photo: string;

    constructor(t: string, d: string, ing: Ingredients[], ins: Instructions[], cp: string) {
        this.title = t;
        this.description = d;
        this.ingredients = ing;
        this.instrunctions = ins;
        this.cover_photo = cp;
    }
};
