interface CatItem {
  id: string
  name: string
  url: string
  width: number
  height: number
}

declare namespace Cat {
  type Item = CatItem
}
