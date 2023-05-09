const API_URL = `https://fakestoreapi.com`

export async function getAllProducts(path = "products") {
  const res = await fetch(`${API_URL}/${path}`)
  const data = await res.json()
  return data
}

export async function getStaticProps({ params }) {
  const product = await getAllProducts(`products/${params.id}`)
  return { props: { product } }
}
