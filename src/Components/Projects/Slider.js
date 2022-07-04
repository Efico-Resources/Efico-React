import React, {useState, useEffect} from 'react'

import './slider.css'

const Slider = () => {
    const [people] = useState(team);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, people]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 60000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);


  return (
    <div>
        <section className='section'>
            <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, img, name, title, quote, summary } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={img} alt={name} className="person-img" />
              <div className='articles-texts'>
                <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <p className="texxt">{summary}</p>
              </div>
              
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
        </section>
    </div>
  )
}

const team = [
    {
        id: 1,
        img: '/teamImages/karim.jpg',
        name: 'Karim Ibrik',
        title: 'Project Advisor',
        quote: 'MBA Graduate, Stamford',
        summary: 'Karim is the Chief Technical Officer of H cycle, a company in California, US that specialize in the production of low-carbon hydrogen using innovation waste processing system, redirecting mucipal waste before they hit landfills.'
    },
    {
        id: 2,
        img: '/teamImages/david.jpg',
        name: 'David Adefunmilayo',
        title: 'Project Director',
        quote: 'Founder, Efico Resources',
        summary: 'David Adefunmilayo is the pioneer and visioneer of this project. His work lies at the nexus of property consulting, poetry and climate activism in Africa.'
    },
    {
      id: 3,
      img: '/teamImages/Vincent.jpg',
      name: 'Vincent Eke',
      title: 'Project Advisor',
      quote: 'Associate, Renewable Energy Policy Network (REN 21)',
      summary: 'Vincent is a sustainability professional whose interest cut across climate change awareness and evidenc-based research for better climate policies in emerging markets like Africa. He currently manages projects with REN 21 where he drives the effective transition to renewable energy in Africa.'
  },
    {
        id: 4,
        img: '/teamImages/eniola.jpg',
        name: 'Eniola Adenuga',
        title: 'Project Accountant',
        quote: 'Msc. Accounting, UK',
        summary: 'Eniola is a MSc. Candidate at the university of Leicester, UK. She had her Undergraduate background in Law and has a keen interest in finance and sustainability.'

    },
    {
        id: 5,
        img: '/teamImages/fasola.jpg',
        name: 'Oluwapelumi Fasola',
        title: 'Research Lead',
        quote: 'Babcock University',
        summary: 'Oluwapelumi is a registered nurse from Babcock University, Nigeria. She has a keen interest in the impact of climate change and it’s implication on human health. '

    },
    {
        id: 6,
        img: '/teamImages/enoch.jpg',
        name: 'Ephraim Enouch',
        title: 'Volunteers Manager',
        quote: 'Alsa Industries, Nigeria',
        summary: 'Ephraim Enoch is a chemical Engineering Graduate from the federal university of petroleum resources who has keen interest in managing sustainability projects for Africa’s liberation.'

    },
    {
        id: 7,
        img: '/teamImages/daniel.jpg',
        name: 'Daniel Nwanze',
        title: 'Project Tech Lead',
        quote: 'Goldman Sachs, Us',
        summary: 'Daniel is a machine learning and data scientists who have vast experience in making use of data and patterns to develop instant analysis for intelligent decision making.'

    },
    {
        id: 8,
        img: '/teamImages/chi.jpg',
        name: 'Okereafor Chidinma',
        title: 'Research Assistant',
        quote: 'Babcock University',
        summary: 'Chidinma is a medical researcher from Babcock university where she studies Anatomy. This has availed her deep understanding of medical science for climate research solutions.'

    },
]

export default Slider