const initialState = {
    courses: [
    ],
}


const courseListReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FIND_ALL_COURSES':
            return {
                courses: action.courses
            }
    }
}

export default courseListReducer;