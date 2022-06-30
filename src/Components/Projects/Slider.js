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
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        img: '/teamImages/david.jpg',
        name: 'David Adefunmilayo',
        title: 'Project Director',
        quote: 'Founder, Efico Resources',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        img: '/teamImages/eniola.jpg',
        name: 'Eniola Adenuga',
        title: 'Project Accountant',
        quote: 'Msc. Accounting, UK',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    },
    {
        id: 4,
        img: '/teamImages/fasola.jpg',
        name: 'Oluwapelumi Fasola',
        title: 'Research Lead',
        quote: 'Babcock University',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    },
    {
        id: 5,
        img: '/teamImages/enoch.jpg',
        name: 'Ephraim Enouch',
        title: 'Volunteers Manager',
        quote: 'Alsa Industries, Nigeria',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    },
    {
        id: 6,
        img: '/teamImages/daniel.jpg',
        name: 'Daniel Nwanze',
        title: 'Project Tech Lead',
        quote: 'Goldman Sachs, Us',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    },
    {
        id: 7,
        img: '/teamImages/chi.jpg',
        name: 'Okereafor Chidinma',
        title: 'Research Assistant',
        quote: 'Babcock University',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    },
]

export default Slider