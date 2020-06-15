import React from 'react';
import CourseDescriptions from './CourseDescriptions.js';

function CatalogSection(props) {
    return (
        <section className='CatalogSection'>
            <header  id={props.id} className='CatalogHeader'>
                <h2>{props.name}</h2>
            </header>
            <div className='list-courses'>
                {props.courses.map((course) => 
                    <CourseDescriptions
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        description={course.description}
                    />
                )}
            </div>
        </section>
    );    
}

CatalogSection.defaultProps = {
    items: [],
}

export default CatalogSection;

/*
constructor(props) {
        super(props);
    }
    render() {
        //const combinedClassName = `category-section ${this.props.className}`;
        const groupOneSections = STORE.categoryLinks.groupOne.map((item) => 
            <section key={item.key} id={item.key}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </section>   
        )
        const groupTwoSections = STORE.categoryLinks.groupTwo.map((item) => 
            <section key={item.key} id={item.key}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </section>
        )

        //test
        const groupThreeSections = STORE.categoryLinks.groupTwo.map((item) => 
            <section key={item.key} id={item.key}>
                <h3>{item.name}</h3>
                <CourseDescriptions/>
            </section>
        )
        
        return (
            <section className='sections-group'>
                {groupOneSections}
                {groupTwoSections}
                {groupThreeSections}
            </section>
        )
    }
    */





/*
   const store = STORE;
   class CatalogSection extends React.Component {
       render () {
           const sections = store.categories.map((item, i) => {
               return (
                   <div key={'course'+i}>
                       <h2 id={item.id} key={item.key}>
                           {item.name}
                       </h2>
                       <div>
                             
                       </div>
                   </div>
               );
           });
           return (
               <div className='catalogSection'>
                   {sections}
               </div>
           );
       }    
   }
   
   export default CatalogSection;
   */