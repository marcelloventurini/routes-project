import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import React from 'react'
import Head from './Head'

function Product() {
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()
  
  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduct(json)
      } catch (err) {
        setError('Um erro ocorreu.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div>Carregando</div>
  if (error) return <p>{error}</p>
  if (product === null) return null

  return (
    <section className={styles.product + ' animationLeft'}>
      <Head title={product.nome} description={product.descricao} />
      {product.fotos.map((photo) => (
        <img key={photo.src} src={photo.src} alt={photo.titulo} />
      ))}
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  )
}

export default Product
