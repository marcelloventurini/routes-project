import React from 'react'
import styles from './Products.module.css'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((response) => setProducts(response))
  }, [])

  if (products === null) return null

  return (
    <section className={styles.products + ' animationLeft'}>
      {products.map((product) => (
        <Link to={`produto/${product.id}`} key={product.id}>
          <h1>{product.nome}</h1>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  )
}

export default Products
