import { GET_VOLUNTEERS } from '../actions/types';

const initialState = {
    volunteers : [
        {
            id:1,name:'Rajesh',
            occupation:'Engineer',
            about:'A passionate person who is into technology and likes to help other people suffering from depression'
        },

        {
            id:2,
            name:'Ajay',
            occupation:'Student',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:3,
            name:'Yash',
            occupation:'teacher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },
        
        {
            id:4,
            name:'Aditya',
            occupation:'Researcher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:5,
            name:'Aditya',
            occupation:'Researcher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:6,
            name:'Aditya',
            occupation:'Researcher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:7,
            name:'Aditya',
            occupation:'Researcher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:8,
            name:'Aditya',
            occupation:'Researcher',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },
        
        {
            id:9,
            name:'Mahesh',
            occupation:'Scientist',
            about:'Lorem ipsum color sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '}
    ]

};

export default function(state=initialState,action) {
    switch(action.type){
        case GET_VOLUNTEERS:
            return {
                ...state
            };

        default: 
            return state; 
    }
} 