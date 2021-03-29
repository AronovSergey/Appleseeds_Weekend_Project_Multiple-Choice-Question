const data = [
    {
        question: 'If an array has the length of 10, what would be the first and last indexes?',
        answers: 
        [
            '0, 10',
            '1, 10',
            '1, 9',
            '0, 9',
        ],
        answer: 4,
    },
    {
        question: 'If I want to check if a number is positive or negative which conditional statement will be most suited for this?',
        answers: 
        [
            'ternary operator',
            'if else statement',
            'switch-case statement',
            'if statement',
        ],
        answer: 2,
    },
    {
        question: 'What does preventDefault() do?',
        answers: 
        [
            'to enforce the submission of a form',
            'to prevent the execution of default actions in response to an event trigge',
            'prevents the setting of default values in the database',
            'to stop execution of all code',
        ],
        answer: 2
    },
    {
        question: 'What is the best type of loop to use if we know the number of iterations?',
        answers: 
        [
            'A for loop',
            'A do while loop',
            'some other loop',
            'A while loop',
        ],
        answer: 1
    },
    {
        question: 'What is the correct comparison to return us true when 7 is smaller than 10?',
        answers: 
        [
            '10 > 7',
            '10 !< 7',
            '10 < 7',
            '10 != 7',
        ],
        answer: 1
    },
    {
        question: 'What is the correct syntax for a function declaration?',
        answers: 
        [
            'function doSomething { }',
            'doSomething function() { }',
            'doSomething() { }',
            'function doSomething() { }',
        ],
        answer: 4
    },
    // {
    //     question: 'What is the correct syntax for JavaScript Ternary Operator?',
    //     answers: 
    //     [
    //         'condition ? expIfFalse : expIfTrue',
    //         'expIfFalse? expIfTrue : condition',
    //         'condition ? expIfTrue : expIfFalse',
    //         'expIfTrue? condition : expIfFalse',
    //     ],
    //     answer: 3
    // },
    // {
    //     question: 'What is the correct way to select the parent of an element?',
    //     answers: 
    //     [
    //         'element.elementParent',
    //         'element.parentElement',
    //         'element.getParent',
    //         'element.parent',
    //     ],
    //     answer: 2
    // },
    // {
    //     question: 'What is the difference between arguments and parameters?',
    //     answers: 
    //     [
    //         'In JavaScript, there are no parameters, only arguments',
    //         'In JavaScript, There is no difference between them',
    //         'Arguments - placeholders, Parameters - the actual values',
    //         'Arguments - the actual values, Parameters - placeholders',
    //     ],
    //     answer: 4
    // },
    // {
    //     question: 'What method do we use to create an event listener in JavaScript?',
    //     answers: 
    //     [
    //         'makeEventListener()',
    //         'listen()',
    //         'addEventListener()',
    //         'on()',
    //     ],
    //     answer: 3
    // },
];

const dataLength = data.length;

export { data, dataLength };