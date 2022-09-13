import Header from '../../Components/Header'
import './Gallery.css'





const Gallery = () => {

  const galleryLength = 15;
  const images = []


  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../Images/gallery${i}.jpg`))
  }



  return (
    <>
      <Header title="Our Gallery" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Odit voluptates itaque eum dolorem, ad obcaecati rerum ullam facilis officiis corrupti!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((news, index) => {
              return <article key={index}>
                <img src={news} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>

  )
}

export default Gallery