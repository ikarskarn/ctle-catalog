import React from 'react';
import ReactDOM from 'react-dom'

const STORE = {
    categories: [
        {
            key: 'categoryOne',
            id: 'cat1',
            name: 'Faculty Engagement',
            link: '#cat1',
            courseIds: [1, 2, 3, 4], 
        },
        {
            key: 'categoryTwo',
            id: 'cat2',
            name: 'Pedagogical Content Knowledge',
            link: '#cat2',
            courseIds: [5, 6, 7],
        },
        {
            key: 'categoryThree',
            id: 'cat3',
            name: 'Feedback and Assessment',
            link: '#cat3',
            courseIds: [8, 9 ,10, 11, 12, 13],
        },
        {
            key: 'categoryFour',
            id: 'cat4',
            name: 'Inclusive Pedagogy',
            link: '#cat4',
            courseIds: [14, 15, 16, 17, 18],
        },
        {
            key: 'categoryFive',
            id: 'cat5',
            name: 'Curriculum Alignment',
            link: '#cat5',
            courseIds: [19, 20],
        },
        {
            key: 'categorySix',
            id: 'cat6',
            name: 'Classroom Climate',
            link: '#cat6',
            courseIds: [21, 22, 23, 24, 25, 26, 27, 28],
        },
        {
            key: 'categorySeven',
            id: 'cat7',
            name: 'Instructional Strategies',
            link: '#cat7',
            courseIds: [29, 30, 31, 32],
        },
        {
            key: 'categoryRandom',
            id: 'random',
            name: 'Choose For Me',
            link: '#',
            courseIds: ['r']
        },
    ],
    courses: {
        1: {
            id: 1,
            category: 1,
            name: 'Course One',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        2: {
            id: 2,
            category: 1,
            name: 'Course Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        3: {
            id: 3,
            category: 1,
            name: 'Course Three',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        4: {
            id: 4,
            category: 1,
            name: 'Course Four',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        5: {
            id: 5,
            category: 2,
            name: 'Course Five',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        6: {
            id: 6,
            category: 2,
            name: 'Course Six',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        7: {
            id: 7,
            category: 2,
            name: 'Course Seven',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        8: {
            id: 8,
            category: 3,
            name: 'Course Eight',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        9: {
            id: 9,
            category: 3,
            name: 'Course Nine',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        10: {
            id: 10,
            category: 3,
            name: 'Course Ten',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        11: {
            id: 11,
            category: 3,
            name: 'Course Eleven',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        12: {
            id: 12,
            category: 3,
            name: 'Course Twelve',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        13: {
            id: 13,
            category: 3,
            name: 'Course Thirteen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        14: {
            id: 14,
            category: 4,
            name: 'Course Fourteen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        15: {
            id: 15,
            category: 4,
            name: 'Course Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        16: {
            id: 16,
            category: 4,
            name: 'Course Sixteen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        17: {
            id: 17,
            category: 4,
            name: 'Course Seventeen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        18: {
            id: 18,
            category: 4,
            name: 'Course Eighteen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        19: {
            id: 19,
            category: 5,
            name: 'Course Nineteen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        20: {
            id: 20,
            category: 5,
            name: 'Course Twenty',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        21: {
            id: 21,
            category: 6,
            name: 'Course Twenty One',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        22: {
            id: 22,
            category: 6,
            name: 'Course Twenty Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        23: {
            id: 23,
            category: 6,
            name: 'Course Twenty Three',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        24: {
            id: 24,
            category: 6,
            name: 'Course Twenty Four',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        25: {
            id: 25,
            category: 6,
            name: 'Course Twenty Five',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        26: {
            id: 26,
            category: 6,
            name: 'Course Twenty Six',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        27: {
            id: 27,
            category: 6,
            name: 'Course Twenty Seven',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        28: {
            id: 28,
            category: 6,
            name: 'Course Twenty Eight',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        29: {
            id: 29,
            category: 7,
            name: 'Course Twenty Nine',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        30: {
            id: 30,
            category: 7,
            name: 'Course Thirty',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        31: {
            id: 31,
            category: 7,
            name: 'Course Thirty One',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        32: {
            id: 32,
            category: 7,
            name: 'Course Thirty Two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio pellentesque diam volutpat. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eget sit amet tellus cras adipiscing enim eu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Phasellus egestas tellus rutrum tellus pellentesque. Dui ut ornare lectus sit amet est placerat. Ac auctor augue mauris augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Massa tempor nec feugiat nisl pretium fusce id velit. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.'
        },
        'r': {
            id: 'r',
            category: 8,
            name: 'Random Course',
            description: 'Get Rid Of This.'
        },
    },
}

export default STORE;