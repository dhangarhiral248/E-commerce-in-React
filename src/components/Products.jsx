import React, { useEffect, useState } from 'react'
import Card from './Card'

const Products = ({ products, categories }) => {

  const [searchTitle, setSearchTitle] = useState("")
  const [filterProducts, setFilterProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  console.log(categories)

  function handleSearch() {

    const fitProd = products.filter((p) =>
      p.title.toLowerCase().includes(searchTitle.toLowerCase())
    )

    setFilterProducts(fitProd)
  }

  function handleCategory(e) {

    const category = e.target.value

    setSelectedCategory(category)

    const fitProd = products.filter((p) => {

      const matchTitle = p.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase())

      const matchCategory =
        category === "" || p.category === category

      return matchTitle && matchCategory
    })

    setFilterProducts(fitProd)
  }

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  return (
    <>
      <div className="container my-4">

        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <button
          className="btn btn-primary ms-2"
          onClick={handleSearch}
        >
          Search
        </button>

        <select
          className="ms-2"
          value={selectedCategory}
          onChange={handleCategory}
        >
          <option value="">Select Category</option>

          {categories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

      </div>

      <div className="container">
        <div className="row">

          {filterProducts.map((product, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 mb-4"
            >
              <Card prod={product} />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Products

