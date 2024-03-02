class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx= "25" cy= "75" r= "20" height= "100%" fill= "${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x= "10" y= "60" width= "30" height= "30" fill= "${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="20,50 40,50 30,30" fill="${this.color}" />`
    }
}

module.exports = { Circle, Square, Triangle };
