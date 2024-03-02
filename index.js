const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const promptUser = () => {
    const questions = [
        {
            type: 'input',
            name: 'companyName',
            message: 'Please enter 3 characters you would like to use for your company name:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like to use?'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color or hex code you would like to use for your shape: '
        },
    ];
    return inquirer.prompt(questions).then(generateSVG);
};

const generateSVG = (answers) => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svgLogo = `
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg>
        ${shape.render()}
        <text x="100" y="50" font-family="monospace" font-size="30" fill="${answers.textColor}" text-anchor="middle">${answers.companyName}</text>
    </svg >`;

    fs.writeFileSync('logo.svg', svgLogo, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

promptUser();

