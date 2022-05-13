export default function ProductCard({
  img,
  title,
  children,
  price,
}: {
  img: string
  title: string
  price: number
  children: React.ReactNode
}) {
  return (
    <div className="card max-h-fit card-compact bg-base-100 shadow-xl">
      {/* <figure className="h-72 overflow-hidden">
        <img src={img} />
      </figure> */}
      <div
        className="w-full h-96 bg-blue-400 bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="my-4 card-actions justify-between">
          <h4 className="text-4xl font-bold">{price}$</h4>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
