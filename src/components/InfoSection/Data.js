import img1 from '../../images/image3.svg'

// false = black, true = white

export const homeObjOne = {
    id: 'packages',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Packages',
    headline: 'Take a look at the packages available',
    description:
        'Get access to our exclusive website that allows you to choose the package most suited for your' +
        ' family',
    buttonLabel: 'View Package',
    imgStart: false,
    img: img1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    button: '/packages',
}

export const homeObjTwo = {
    id: 'parlours',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Parlours',
    headline: 'Take a look at the parlours that partnered with us',
    description:
        'Get access to our exclusive website that allows you to choose the services most suited for your' +
        ' family',
    buttonLabel: 'View Parlours',
    imgStart: true,
    img: img1,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    button: '/parlour',
}