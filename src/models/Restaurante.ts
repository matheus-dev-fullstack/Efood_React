class Restaurant {
  id: number
  name: string
  description: string
  image: string
  // infos: string[]
  // category: string
  stars: number

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    // infos: string[],
    // category: string,
    stars: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
    // this.infos = infos
    // this.category = category
    this.stars = stars
  }
}

export default Restaurant
