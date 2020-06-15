import React from 'react';
//import STORE from './STORE.js';

function CourseDescriptions(props) {
    return(
        <div className='Course'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

CourseDescriptions.defaultProps = {
    item: [],
}

export default CourseDescriptions;
/*
constructor(props) {
        super(props);
    }
    render() {
        const categoryOneDescriptions = STORE_Courses.courses.categoryOne.map((item) => 
            <section key={item.key}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </section>   
        )
        
        return (
            <section className='course'>
                {categoryOneDescriptions}
            </section>
        )
    }
    */






    /*
    const store = STORE;
class CourseDescriptions extends React.Component {
    render() {
        this.checkWhich = () => {
            console.log('check which ran');
        }
        const courses = store.courses.map((item, i) => {
            return (
                <div 
                    className='courseDescription'
                    key={item.key}
                    category={item.category}
                >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            );
        });

        return (
            <>
                {courses}
            </>
        );
    }
}

export default CourseDescriptions;
*/