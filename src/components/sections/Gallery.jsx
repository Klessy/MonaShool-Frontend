
export default function Gallery(){
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-300 h-32"></div>
        <div className="bg-gray-300 h-32"></div>
        <div className="bg-gray-300 h-32"></div>
        <div className="bg-gray-300 h-32"></div>
      </div>
    </section>
  )
}
