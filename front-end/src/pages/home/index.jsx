import Banner from '../../components/banner'
import Features from '../../components/features';
import chatIcon from '../../assets/icon-chat.webp'
import moneyIcon from '../../assets/icon-money.webp'
import securityIcon from '../../assets/icon-security.webp'
import './style.scss'

function Home() {
  const features = [
    {
      image: chatIcon,
      alt: 'Chat Icon',
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      image: moneyIcon,
      alt: 'Money Icon',
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      image: securityIcon,
      alt: 'Security Icon',
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.',
    }
  ]

  return (
    <main>
      <Banner />
      <section className='features'>
        <h2 className="sr-only">Features</h2>
          {features.map((list, index) => (
          <Features 
            image={list.image}
            alt={list.alt}
            title={list.title}
            description={list.description}
            key={index}
          />
          ))}
        </section>
    </main>
  )
}

export default Home;
