class Restaurant {
  id: number
  name: string
  description: string
  image: string
  infos: string[]
  // more: string
  stars: number

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    infos: string[],
    // more: string,
    stars: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
    this.infos = infos
    // this.more = more
    this.stars = stars
  }
}

export default Restaurant
