import { useCatPhotos } from '@/services/cat'

const CatList = () => {
  const { data: catItems } = useCatPhotos()

  if (!catItems) {
    return <>loading....</>
  }

  return (
    <main className="'flex flex-col items-center justify-between min-h-screen p-24">
      <h1 className="text-3xl">Cat List</h1>
      <div className="grid grid-cols-3 gap-4">
        {catItems.map((cat) => (
          <div key={cat.id} className="w-full">
            <img
              src={cat.url}
              alt={cat.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default CatList
