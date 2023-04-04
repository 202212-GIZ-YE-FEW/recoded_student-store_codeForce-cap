import Hero from "./Hero"

export default {
  title: "Components/Hero",
  component: Hero,
}

export const Default = () => <Hero />

export const WithCustomImages = () => (
  <Hero
    images={[
      "https://images.unsplash.com/photo-1556228724-fa828fd50d8e",
      "https://images.unsplash.com/photo-1556228799-d6a1b6ba53b6",
      "https://images.unsplash.com/photo-1556228739-3431c5a8ec5d",
      "https://images.unsplash.com/photo-1556228712-265a1c0f7bca",
    ]}
  />
)

export const WithInitialSlide = () => <Hero initialSlide={1} />

export const WithCustomWidthAndHeight = () => <Hero width={800} height={600} />
